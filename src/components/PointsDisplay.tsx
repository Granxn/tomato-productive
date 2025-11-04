interface PointsDisplayProps {
  points: number;
  completedSessions: number;
}

export const PointsDisplay = ({ points, completedSessions }: PointsDisplayProps) => {
  return (
    <div className="pixel-card bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="flex justify-around items-center">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary animate-fade-in">{points}</div>
          <div className="text-xs sm:text-sm text-muted-foreground mt-1">Points <span className="text-base sm:text-lg md:text-xl">⭐</span></div>
        </div>
        <div className="h-12 sm:h-16 md:h-20 w-px bg-border" />
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary animate-fade-in">{completedSessions}</div>
          <div className="text-xs sm:text-sm text-muted-foreground mt-1">Sessions <span className="text-base sm:text-lg md:text-xl">🍅</span></div>
        </div>
      </div>
    </div>
  );
};
