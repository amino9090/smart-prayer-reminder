import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  nextPrayerTime: string;
  nextPrayerName: string;
}

export const CountdownTimer = ({ nextPrayerTime, nextPrayerName }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const [hours, minutes] = nextPrayerTime.split(":").map(Number);
      const prayerTime = new Date();
      prayerTime.setHours(hours, minutes, 0, 0);

      if (prayerTime < now) {
        prayerTime.setDate(prayerTime.getDate() + 1);
      }

      const diff = prayerTime.getTime() - now.getTime();
      const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hoursLeft}:${String(minutesLeft).padStart(2, "0")}:${String(secondsLeft).padStart(2, "0")}`);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [nextPrayerTime]);

  return (
    <div className="text-center space-y-4 py-8">
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <Clock className="text-primary" size={20} />
        <p className="text-lg font-cairo">الوقت المتبقي حتى صلاة {nextPrayerName}</p>
      </div>
      <div className="text-6xl font-bold font-cairo text-primary text-glow animate-pulse">
        {timeLeft}
      </div>
    </div>
  );
};
