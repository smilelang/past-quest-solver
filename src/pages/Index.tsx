import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QuestionCard } from "@/components/QuestionCard";
import { SearchBar } from "@/components/SearchBar";
import { sampleQuestions } from "@/data/questions";
import { GraduationCap, BookOpen, Search, Zap } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredQuestions = useMemo(() => {
    return sampleQuestions.filter((question) => {
      const matchesSearch = 
        question.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.answerText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSubject = selectedSubject === "All" || question.subject === selectedSubject;
      const matchesYear = selectedYear === "All" || question.year.toString() === selectedYear;
      const matchesDifficulty = selectedDifficulty === "All" || question.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesSubject && matchesYear && matchesDifficulty;
    });
  }, [searchTerm, selectedSubject, selectedYear, selectedDifficulty]);

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
              Smile Learning
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Your journey to academic excellence starts here with comprehensive past questions and expert answers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold transition-smooth"
              >
                <Search className="w-5 h-5 mr-2" />
                Start Studying
              </Button>
              
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">{sampleQuestions.length} Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">6 Subjects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-8">
        {/* Search and Filters */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {filteredQuestions.length === 0 ? "No questions found" : 
             filteredQuestions.length === 1 ? "1 Question Found" :
             `${filteredQuestions.length} Questions Found`}
          </h2>
          
          {(searchTerm || selectedSubject !== "All" || selectedYear !== "All" || selectedDifficulty !== "All") && (
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedSubject("All");
                setSelectedYear("All");
                setSelectedDifficulty("All");
              }}
              className="text-primary border-primary hover:bg-primary hover:text-white transition-smooth"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Questions Grid */}
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16">
            <div className="p-4 bg-muted/50 rounded-2xl inline-block mb-4">
              <Search className="w-16 h-16 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No questions found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl text-foreground">Smile Learning</span>
          </div>
          <p className="text-muted-foreground">
            Transforming education through comprehensive study resources and academic excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;