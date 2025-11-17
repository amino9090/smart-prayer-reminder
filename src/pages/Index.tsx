import { IslamicHeader } from "@/components/IslamicHeader";
import { PrayerTimeCard } from "@/components/PrayerTimeCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { NavigationBar } from "@/components/NavigationBar";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";
import { useNotifications } from "@/hooks/useNotifications";
import { useEffect } from "react";
import { Loader2, Sparkles, Circle } from "lucide-react";
import mosqueBg from "@/assets/mosque-bg.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const { prayerTimes, nextPrayer, loading } = usePrayerTimes();
  const { scheduleNotification, settings, permission, requestPermission } = useNotifications();

  // Request notification permission on mount if not already granted
  useEffect(() => {
    if (permission === "default" && settings.enabled) {
      console.log("طلب إذن الإشعارات...");
      requestPermission();
    }
  }, []);

  // Schedule notifications for all prayers when prayer times are loaded
  useEffect(() => {
    if (prayerTimes.length > 0 && settings.enabled && permission === "granted") {
      console.log("جدولة إشعارات الصلوات...", {
        count: prayerTimes.length,
        permission,
        enabled: settings.enabled
      });
      prayerTimes.forEach((prayer) => {
        scheduleNotification(prayer.name, prayer.arabicName, prayer.time);
      });
    } else if (prayerTimes.length > 0 && permission !== "granted") {
      console.log("⚠️ لم يتم جدولة الإشعارات - الإذن غير ممنوح", { permission });
    }
  }, [prayerTimes, settings.enabled, permission]);

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
              {/* Quick Access Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card 
                  className="card-glow border-primary/30 cursor-pointer hover:border-primary/60 transition-all hover:scale-[1.02]"
                  onClick={() => navigate("/allah-names")}
                >
                  <CardContent className="py-4 px-6">
                    <div className="flex items-center justify-between">
                      <Sparkles className="w-6 h-6 text-primary" />
                      <div className="text-center flex-1">
                        <h3 className="text-xl font-amiri text-primary font-bold">
                          أسماء الله الحسنى
                        </h3>
                        <p className="text-xs text-muted-foreground font-cairo mt-1">
                          التعرف على الأسماء التسعة والتسعين
                        </p>
                      </div>
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="card-glow border-primary/30 cursor-pointer hover:border-primary/60 transition-all hover:scale-[1.02]"
                  onClick={() => navigate("/tasbih")}
                >
                  <CardContent className="py-4 px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <Circle className="w-2 h-2 text-primary fill-primary" />
                        <Circle className="w-2 h-2 text-primary fill-primary" />
                        <Circle className="w-2 h-2 text-primary fill-primary" />
                      </div>
                      <div className="text-center flex-1">
                        <h3 className="text-xl font-amiri text-primary font-bold">
                          السبحة الإلكترونية
                        </h3>
                        <p className="text-xs text-muted-foreground font-cairo mt-1">
                          عداد التسبيح مع الإحصائيات
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Circle className="w-2 h-2 text-primary fill-primary" />
                        <Circle className="w-2 h-2 text-primary fill-primary" />
                        <Circle className="w-2 h-2 text-primary fill-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

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
