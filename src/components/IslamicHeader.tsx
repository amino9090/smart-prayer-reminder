import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const IslamicHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Fetch Hijri date
    const fetchHijriDate = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/gToH/${currentTime.getDate()}-${currentTime.getMonth() + 1}-${currentTime.getFullYear()}`
        );
        const data = await response.json();
        if (data.code === 200) {
          const hijri = data.data.hijri;
          setHijriDate(`${hijri.day} ${hijri.month.ar} ${hijri.year} هـ`);
        }
      } catch (error) {
        console.error("Error fetching Hijri date:", error);
      }
    };

    fetchHijriDate();

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isNightTime = currentTime.getHours() >= 18 || currentTime.getHours() < 6;

  return (
    <div className="text-center space-y-4 py-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        {isNightTime ? (
          <Moon className="text-primary animate-pulse" size={32} />
        ) : (
          <Sun className="text-primary" size={32} />
        )}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold font-amiri text-primary text-glow">
        تذكير الصلاة الذكي
      </h1>
      <div className="text-3xl font-bold font-cairo text-foreground">
        {formatTime(currentTime)}
      </div>
      <div className="space-y-2 text-muted-foreground">
        <p className="text-lg font-cairo">{formatDate(currentTime)}</p>
        {hijriDate && (
          <p className="text-lg font-amiri text-primary">{hijriDate}</p>
        )}
      </div>
    </div>
  );
};
