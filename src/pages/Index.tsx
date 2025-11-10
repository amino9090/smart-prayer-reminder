import { IslamicHeader } from "@/components/IslamicHeader";
import { PrayerTimeCard } from "@/components/PrayerTimeCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { NavigationBar } from "@/components/NavigationBar";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";
import { useNotifications } from "@/hooks/useNotifications";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import mosqueBg from "@/assets/mosque-bg.jpg";

const Index = () => {
  const { prayerTimes, nextPrayer, loading } = usePrayerTimes();
  const { scheduleNotification, settings } = useNotifications();

  // Schedule notifications for all prayers when prayer times are loaded
  useEffect(() => {
    if (prayerTimes.length > 0 && settings.enabled) {
      prayerTimes.forEach((prayer) => {
        scheduleNotification(prayer.name, prayer.arabicName, prayer.time);
      });
    }
  }, [prayerTimes, settings.enabled, scheduleNotification]);

  return (
    <div className="min-h-screen bg-gradient-islamic relative overflow-hidden pb-24">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${mosqueBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <IslamicHeader />

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-primary" size={48} />
          </div>
        ) : (
          <>
            {nextPrayer && (
              <div className="mb-8">
                <CountdownTimer
                  nextPrayerTime={nextPrayer.time}
                  nextPrayerName={nextPrayer.arabicName}
                />
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center mb-6 font-amiri text-primary">
                مواقيت الصلاة
              </h2>
              {prayerTimes.map((prayer) => (
                <PrayerTimeCard
                  key={prayer.name}
                  name={prayer.name}
                  arabicName={prayer.arabicName}
                  time={prayer.time}
                  isNext={nextPrayer?.name === prayer.name}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <NavigationBar currentPage="prayer" />
    </div>
  );
};

export default Index;
