import { useState, useEffect } from "react";

export const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="pixel-card text-center space-y-2">
      <div className="text-3xl font-bold text-primary tabular-nums">
        {formatTime(time)}
      </div>
      <div className="text-sm text-muted-foreground">
        {formatDate(time)}
      </div>
    </div>
  );
};
