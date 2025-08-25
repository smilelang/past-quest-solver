import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Search, Zap, Target, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Smile Learning
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Your journey to academic excellence starts here with comprehensive past questions, expert answers, and AI-powered learning assistance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold transition-smooth"
              >
                <Link to="/questions">
                  <Search className="w-5 h-5 mr-2" />
                  Start Studying
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold transition-smooth"
              >
                <Link to="/introduction">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Statement Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solving Real Educational Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Students worldwide struggle to access quality past exam questions and detailed explanations. 
              Traditional study methods often leave gaps in understanding and preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Limited access to comprehensive past exam questions and quality explanations 
                  hinders student preparation and academic success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>AI-Powered Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Leveraging AI for intelligent content curation, smart search, 
                  and personalized learning recommendations to enhance study efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Democratizing access to quality educational resources and 
                  improving academic outcomes for students globally.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Smile Learning Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Advanced features powered by AI to transform your learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Comprehensive Question Bank</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access thousands of past exam questions across multiple subjects, 
                  years, and difficulty levels, all organized and searchable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="w-8 h-8 text-primary mb-2" />
                <CardTitle>AI-Powered Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find relevant questions instantly with intelligent search that 
                  understands context and learning objectives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Expert Explanations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get detailed, step-by-step solutions and explanations to help 
                  you understand concepts and improve your problem-solving skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Smart Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Filter questions by subject, year, difficulty, and tags to 
                  create personalized study sessions that match your needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monitor your learning progress and identify areas that need 
                  more attention with AI-driven analytics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Adaptive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive personalized question recommendations based on your 
                  performance and learning patterns.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are already improving their academic performance with Smile Learning
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="px-8 py-3 text-lg font-semibold"
          >
            <Link to="/questions">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Questions Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl text-foreground">Smile Learning</span>
          </div>
          <p className="text-muted-foreground">
            Transforming education through AI-powered learning resources and academic excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;