import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { NavigationBar } from "@/components/NavigationBar";
import { IslamicHeader } from "@/components/IslamicHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getEventsForDate, getEventsForMonth, islamicEvents } from "@/data/islamicEvents";
import { Loader2, Star, Calendar as CalendarIcon } from "lucide-react";
import mosqueBg from "@/assets/mosque-bg.jpg";

interface HijriDate {
  date: string;
  day: string;
  month: {
    number: number;
    en: string;
    ar: string;
  };
  year: string;
}

const IslamicCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [hijriDate, setHijriDate] = useState<HijriDate | null>(null);
  const [monthEvents, setMonthEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHijriDate(selectedDate);
  }, [selectedDate]);

  const fetchHijriDate = async (date: Date) => {
    setLoading(true);
    try {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      
      const response = await fetch(
        `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`
      );
      const data = await response.json();
      
      if (data.data && data.data.hijri) {
        setHijriDate(data.data.hijri);
        const events = getEventsForMonth(data.data.hijri.month.number);
        setMonthEvents(events);
      }
    } catch (error) {
      console.error("خطأ في جلب التاريخ الهجري:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTodayEvents = () => {
    if (!hijriDate) return [];
    return getEventsForDate(
      hijriDate.month.number,
      parseInt(hijriDate.day)
    );
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "religious":
        return "bg-primary text-primary-foreground";
      case "celebration":
        return "bg-accent text-accent-foreground";
      case "historical":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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
          <div className="space-y-6">
            {/* Current Hijri Date Card */}
            {hijriDate && (
              <Card className="card-glow border-primary/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-amiri text-primary flex items-center justify-center gap-2">
                    <CalendarIcon className="w-8 h-8" />
                    التاريخ الهجري
                  </CardTitle>
                  <CardDescription className="text-xl font-amiri text-foreground mt-4">
                    {hijriDate.day} {hijriDate.month.ar} {hijriDate.year} هـ
                  </CardDescription>
                </CardHeader>
              </Card>
            )}

            {/* Today's Events */}
            {getTodayEvents().length > 0 && (
              <Card className="card-glow border-accent/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-amiri text-primary flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    مناسبات اليوم
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {getTodayEvents().map((event, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-card border border-border"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg font-amiri text-primary mb-1">
                            {event.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {event.description}
                          </p>
                        </div>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type === "religious" && "مناسبة دينية"}
                          {event.type === "celebration" && "عيد"}
                          {event.type === "historical" && "مناسبة تاريخية"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Gregorian Calendar */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-amiri text-primary text-center">
                  التقويم الميلادي
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border border-border"
                />
              </CardContent>
            </Card>

            {/* Month Events */}
            {monthEvents.length > 0 && (
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-2xl font-amiri text-primary">
                    مناسبات شهر {hijriDate?.month.ar}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {monthEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold text-primary">
                              {event.hijriDay} {hijriDate?.month.ar}
                            </span>
                            <Badge className={getEventTypeColor(event.type)} variant="outline">
                              {event.type === "religious" && "مناسبة دينية"}
                              {event.type === "celebration" && "عيد"}
                              {event.type === "historical" && "مناسبة تاريخية"}
                            </Badge>
                          </div>
                          <h3 className="font-bold text-lg font-amiri mb-1">
                            {event.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>

      <NavigationBar currentPage="calendar" />
    </div>
  );
};

export default IslamicCalendar;
