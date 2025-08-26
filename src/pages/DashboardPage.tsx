import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Trophy, Target, TrendingUp, LogOut, Play, Award, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  totalPoints: number;
  streak: number;
  level: number;
  subjectProgress: { [key: string]: { correct: number; total: number } };
}

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<UserStats>({
    totalQuestions: 0,
    correctAnswers: 0,
    totalPoints: 0,
    streak: 0,
    level: 1,
    subjectProgress: {}
  });
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
      await loadUserStats(user.id);
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const loadUserStats = async (userId: string) => {
    try {
      const { data: userAnswers, error } = await supabase
        .from('user_answers')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      // Calculate statistics
      const totalQuestions = userAnswers?.length || 0;
      const correctAnswers = userAnswers?.filter(answer => answer.is_correct).length || 0;
      const totalPoints = userAnswers?.reduce((sum, answer) => sum + (answer.points_earned || 0), 0) || 0;
      
      // Calculate level (100 points per level)
      const level = Math.floor(totalPoints / 100) + 1;
      
      // Calculate subject progress
      const subjectProgress: { [key: string]: { correct: number; total: number } } = {};
      userAnswers?.forEach(answer => {
        if (!subjectProgress[answer.subject]) {
          subjectProgress[answer.subject] = { correct: 0, total: 0 };
        }
        subjectProgress[answer.subject].total++;
        if (answer.is_correct) {
          subjectProgress[answer.subject].correct++;
        }
      });

      setStats({
        totalQuestions,
        correctAnswers,
        totalPoints,
        streak: 0, // TODO: Calculate streak
        level,
        subjectProgress
      });
    } catch (error: any) {
      console.error('Error loading user stats:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out successfully",
      description: "See you next time!",
    });
    navigate('/');
  };

  const getAccuracyPercentage = () => {
    if (stats.totalQuestions === 0) return 0;
    return Math.round((stats.correctAnswers / stats.totalQuestions) * 100);
  };

  const getLevelProgress = () => {
    const pointsInCurrentLevel = stats.totalPoints % 100;
    return pointsInCurrentLevel;
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-accent';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-destructive';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {user?.user_metadata?.full_name || 'Student'}!</h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalPoints}</div>
              <p className="text-xs text-muted-foreground">
                Level {stats.level}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Questions Solved</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalQuestions}</div>
              <p className="text-xs text-muted-foreground">
                {stats.correctAnswers} correct answers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getPerformanceColor(getAccuracyPercentage())}`}>
                {getAccuracyPercentage()}%
              </div>
              <p className="text-xs text-muted-foreground">
                Overall performance
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Level</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.level}</div>
              <div className="mt-2">
                <Progress value={getLevelProgress()} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {getLevelProgress()}/100 to next level
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Quick Practice
              </CardTitle>
              <CardDescription>
                Jump into a quiz and start earning points
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start" 
                onClick={() => navigate('/quiz')}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Start Random Quiz
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate('/questions')}
              >
                <Target className="mr-2 h-4 w-4" />
                Browse All Questions
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Info
              </CardTitle>
              <CardDescription>
                Your account details and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Email:</span>
                <span className="text-sm font-medium">{user?.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Member since:</span>
                <span className="text-sm font-medium">
                  {new Date(user?.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge variant="secondary">Active Learner</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>
              Your progress across different subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            {Object.keys(stats.subjectProgress).length === 0 ? (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">No Progress Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start solving questions to see your subject progress here
                </p>
                <Button onClick={() => navigate('/quiz')}>
                  Take Your First Quiz
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(stats.subjectProgress).map(([subject, progress]) => {
                  const percentage = Math.round((progress.correct / progress.total) * 100);
                  return (
                    <div key={subject} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{subject}</h4>
                        <Badge variant="outline">
                          {progress.correct}/{progress.total}
                        </Badge>
                      </div>
                      <Progress value={percentage} className="mb-2" />
                      <p className={`text-sm ${getPerformanceColor(percentage)}`}>
                        {percentage}% accuracy
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;