import { ArrowRight, BookOpen, Brain, Target, Trophy, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Welcome to Smile Learning
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Your comprehensive platform for mastering past questions across multiple subjects. 
            Powered by AI-driven insights and expert explanations.
          </p>
        </div>

        {/* Introduction Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/90 backdrop-blur-sm border border-primary/20 shadow-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="p-2 rounded-lg bg-primary/10 w-fit">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-card-foreground">AI-Powered Learning</CardTitle>
              <CardDescription>
                Get intelligent explanations and step-by-step solutions for complex problems
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border border-primary/20 shadow-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="p-2 rounded-lg bg-accent/10 w-fit">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-card-foreground">Comprehensive Coverage</CardTitle>
              <CardDescription>
                Access questions from Mathematics, Physics, Chemistry, Biology, and more
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border border-primary/20 shadow-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="p-2 rounded-lg bg-secondary/50 w-fit">
                <Trophy className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Track Progress</CardTitle>
              <CardDescription>
                Monitor your learning journey with detailed analytics and performance insights
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* What You'll Learn Section */}
        <Card className="bg-card/95 backdrop-blur-sm border border-primary/20 shadow-card mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-card-foreground flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              What You'll Master
            </CardTitle>
            <CardDescription className="text-lg">
              Our comprehensive question bank covers multiple subjects and difficulty levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Core Subjects
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mathematics - Algebra, Calculus, Geometry</li>
                  <li>• Physics - Mechanics, Electricity, Waves</li>
                  <li>• Chemistry - Organic, Inorganic, Physical</li>
                  <li>• Biology - Cell Biology, Genetics, Ecology</li>
                  <li>• Computer Science - Algorithms, Programming</li>
                  <li>• Economics - Micro & Macroeconomics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Learning Features
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Detailed step-by-step solutions</li>
                  <li>• Multiple difficulty levels</li>
                  <li>• Smart filtering and search</li>
                  <li>• Year-wise question organization</li>
                  <li>• Subject-specific categorization</li>
                  <li>• Expert-verified answers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Explore thousands of past questions with detailed explanations and boost your academic performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/questions')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Questions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/')}
              className="border-primary/30 text-primary-foreground hover:bg-primary/10 font-semibold px-8 py-3"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;