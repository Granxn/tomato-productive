import { useState, useEffect } from "react";
import { WelcomeModal } from "@/components/WelcomeModal";
import { TodoList } from "@/components/TodoList";
import { PomodoroTimer } from "@/components/PomodoroTimer";
import { PointsDisplay } from "@/components/PointsDisplay";
import { InfoSection } from "@/components/InfoSection";
import { DecorativeElements } from "@/components/DecorativeElements";
import { Spotlight } from "@/components/Spotlight";
import { LoadingScreen } from "@/components/LoadingScreen";
import { toast } from "@/hooks/use-toast";
import tomatoGif from "@/assets/tomato.gif";

const Index = () => {
  const [userName, setUserName] = useState<string>("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [points, setPoints] = useState(0);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const savedName = localStorage.getItem("tometo-user-name");
    const savedPoints = localStorage.getItem("tometo-points");
    const savedSessions = localStorage.getItem("tometo-sessions");
    
    if (savedName) {
      setUserName(savedName);
      setShowWelcome(false);
    }
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedSessions) setCompletedSessions(parseInt(savedSessions));

    return () => clearTimeout(loadingTimer);
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    localStorage.setItem("tometo-user-name", name);
    setShowWelcome(false);
  };

  const handleTimerComplete = () => {
    const newPoints = points + 10;
    const newSessions = completedSessions + 1;
    
    setPoints(newPoints);
    setCompletedSessions(newSessions);
    
    localStorage.setItem("tometo-points", newPoints.toString());
    localStorage.setItem("tometo-sessions", newSessions.toString());
    
    toast({
      title: "🎉 Session Complete!",
      description: `Great work! You earned 10 points. Total: ${newPoints} points`,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden p-4 sm:p-6 md:p-8">
      {isLoading && <LoadingScreen />}
      
      <Spotlight />
      <DecorativeElements />
      
      {showWelcome && <WelcomeModal onNameSubmit={handleNameSubmit} />}

      <div className="max-w-4xl mx-auto relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
        <header className="text-center space-y-2 sm:space-y-4 pt-4 sm:pt-6 md:pt-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <img
              src={tomatoGif}
              alt="Tometo mascot"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover-float"
              style={{ imageRendering: 'pixelated' }}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Tometo
            </h1>
          </div>
          {userName && (
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in">
              Hello, {userName}! 🌟
            </p>
          )}
        </header>

        <PointsDisplay points={points} completedSessions={completedSessions} />

        <PomodoroTimer onComplete={handleTimerComplete} />

        <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
          <TodoList />
          <InfoSection />
        </div>

        <footer className="text-center text-xs sm:text-sm text-muted-foreground py-4 sm:py-6 md:py-8">
          <p>Made with ❤️ by Tometo • Your productivity friend</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;