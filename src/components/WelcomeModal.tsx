import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import tomatoGif from "@/assets/tomato.gif";

interface WelcomeModalProps {
  onNameSubmit: (name: string) => void;
}

export const WelcomeModal = ({ onNameSubmit }: WelcomeModalProps) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="pixel-card max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4 text-primary">Welcome to Tometo! 🍅</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6">
          <img 
            src={tomatoGif} 
            alt="Tomato friend" 
            className="w-24 h-24 hover-float"
            style={{ imageRendering: 'pixelated' }}
          />
          <p className="text-sm leading-relaxed">
            Hi there! I'm Tometo, your friendly productivity companion.
            <br />
            What should I call you?
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pixel-border text-center text-lg"
              maxLength={20}
            />
            <Button 
              type="submit" 
              className="pixel-button w-full"
              disabled={!name.trim()}
            >
              Let's Go!
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
