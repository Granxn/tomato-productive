import { useState, useEffect } from "react";
import { WelcomeModal } from "@/components/WelcomeModal";
import { TodoList } from "@/components/TodoList";
import { TimeDisplay } from "@/components/TimeDisplay";
import { DecorativeElements } from "@/components/DecorativeElements";
import { Spotlight } from "@/components/Spotlight";
import tomatoGif from "@/assets/tomato.gif";

const Index = () => {
  const [userName, setUserName] = useState<string>("");
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const savedName = localStorage.getItem("tometo-user-name");
    if (savedName) {
      setUserName(savedName);
      setShowWelcome(false);
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    localStorage.setItem("tometo-user-name", name);
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden p-8">
      <Spotlight />
      <DecorativeElements />
      
      {showWelcome && <WelcomeModal onNameSubmit={handleNameSubmit} />}

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        <header className="text-center space-y-4 pt-8">
          <div className="flex items-center justify-center gap-4">
            <img
              src={tomatoGif}
              alt="Tometo mascot"
              className="w-16 h-16"
              style={{ imageRendering: 'pixelated' }}
            />
            <h1 className="text-4xl font-bold text-primary">
              Tometo
            </h1>
          </div>
          {userName && (
            <p className="text-xl text-muted-foreground">
              Hello, {userName}! 🌟
            </p>
          )}
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Your friendly AI companion for planning, time management, and staying organized!
          </p>
        </header>

        <TimeDisplay />

        <div className="grid gap-8">
          <TodoList />
        </div>

        <footer className="text-center text-xs text-muted-foreground py-8">
          <p>Made with ❤️ by Tometo • Your productivity friend</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
