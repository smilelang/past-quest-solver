import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, XCircle, Trophy, ArrowRight, RotateCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { sampleQuestions, Question } from '@/data/questions';
import { supabase } from '@/integrations/supabase/client';

interface QuizAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
}

const QuizPage = () => {
  const [user, setUser] = useState<any>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/auth');
        return;
      }

      setUser(user);
      initializeQuiz();
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const initializeQuiz = () => {
    // Randomly select 10 questions for the quiz
    const shuffled = [...sampleQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 10);
    setQuestions(selectedQuestions);
  };

  const generateMultipleChoiceOptions = (question: Question) => {
    // For demonstration, we'll create simple options
    // In a real app, you'd have predefined options
    const correctAnswer = question.answerText.split('\n')[0];
    const options = [
      correctAnswer,
      'Option B (incorrect)',
      'Option C (incorrect)',
      'Option D (incorrect)'
    ].sort(() => 0.5 - Math.random());
    
    return options;
  };

  const getCurrentQuestion = () => questions[currentQuestionIndex];
  const getCurrentOptions = () => {
    if (!getCurrentQuestion()) return [];
    return generateMultipleChoiceOptions(getCurrentQuestion());
  };

  const handleAnswerSubmit = async () => {
    if (!selectedAnswer || !user) return;

    const currentQuestion = getCurrentQuestion();
    const correctAnswer = currentQuestion.answerText.split('\n')[0];
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Points based on difficulty
    const pointsMap = { easy: 10, medium: 15, hard: 20 };
    const pointsEarned = isCorrect ? pointsMap[currentQuestion.difficulty] : 0;

    const answer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      pointsEarned
    };

    setQuizAnswers([...quizAnswers, answer]);
    setShowResult(true);

    // Save to database
    try {
      await supabase.from('user_answers').insert({
        user_id: user.id,
        question_id: currentQuestion.id,
        subject: currentQuestion.subject,
        selected_answer: selectedAnswer,
        correct_answer: correctAnswer,
        is_correct: isCorrect,
        points_earned: pointsEarned,
        difficulty: currentQuestion.difficulty
      });
    } catch (error) {
      console.error('Error saving answer:', error);
    }

    // Show feedback
    if (isCorrect) {
      toast({
        title: "Correct! 🎉",
        description: `You earned ${pointsEarned} points!`,
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Don't worry, keep practicing!",
        variant: "destructive",
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const getQuizSummary = () => {
    const totalPoints = quizAnswers.reduce((sum, answer) => sum + answer.pointsEarned, 0);
    const correctAnswers = quizAnswers.filter(answer => answer.isCorrect).length;
    const accuracy = Math.round((correctAnswers / quizAnswers.length) * 100);
    
    return { totalPoints, correctAnswers, accuracy };
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setQuizAnswers([]);
    setShowResult(false);
    setQuizComplete(false);
    initializeQuiz();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>No Questions Available</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizComplete) {
    const summary = getQuizSummary();
    
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
              <CardDescription>
                Great job! Here's how you performed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{summary.totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Points Earned</div>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{summary.correctAnswers}/{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl font-bold">{summary.accuracy}%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Question Breakdown:</h4>
                {quizAnswers.map((answer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {answer.isCorrect ? (
                        <CheckCircle className="h-4 w-4 text-accent" />
                      ) : (
                        <XCircle className="h-4 w-4 text-destructive" />
                      )}
                      <span className="text-sm">Question {index + 1}</span>
                    </div>
                    <Badge variant={answer.isCorrect ? "default" : "secondary"}>
                      +{answer.pointsEarned} points
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={restartQuiz} className="flex-1">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="outline" onClick={() => navigate('/dashboard')} className="flex-1">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = getCurrentQuestion();
  const options = getCurrentOptions();
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Quiz Mode</h1>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{currentQuestion.subject}</Badge>
                <Badge variant={
                  currentQuestion.difficulty === 'easy' ? 'default' : 
                  currentQuestion.difficulty === 'medium' ? 'secondary' : 'destructive'
                }>
                  {currentQuestion.difficulty}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {currentQuestion.year}
              </div>
            </div>
            <CardTitle className="text-lg leading-relaxed">
              {currentQuestion.questionText}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!showResult ? (
              <>
                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                  <div className="space-y-3">
                    {options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <Button 
                  onClick={handleAnswerSubmit} 
                  disabled={!selectedAnswer}
                  className="w-full"
                >
                  Submit Answer
                </Button>
              </>
            ) : (
              <>
                <div className={`p-4 rounded-lg border ${
                  quizAnswers[quizAnswers.length - 1]?.isCorrect 
                    ? 'bg-accent/10 border-accent' 
                    : 'bg-destructive/10 border-destructive'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {quizAnswers[quizAnswers.length - 1]?.isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-accent" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <span className="font-medium">
                      {quizAnswers[quizAnswers.length - 1]?.isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    <strong>Explanation:</strong>
                  </div>
                  <div className="text-sm bg-background p-3 rounded border">
                    {currentQuestion.answerText}
                  </div>
                </div>

                <Button onClick={handleNextQuestion} className="w-full">
                  {currentQuestionIndex < questions.length - 1 ? (
                    <>
                      Next Question
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    'Finish Quiz'
                  )}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;