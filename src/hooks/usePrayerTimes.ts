import { useState, useEffect } from "react";
import { toast } from "sonner";

interface PrayerTime {
  name: string;
  arabicName: string;
  time: string;
}

export const usePrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [nextPrayer, setNextPrayer] = useState<PrayerTime | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location:", error);
            toast.error("تعذر الحصول على موقعك. سيتم استخدام موقع افتراضي.");
            // Default to Mecca if location fails
            setLocation({ lat: 21.4225, lng: 39.8262 });
          }
        );
      } else {
        toast.error("المتصفح لا يدعم تحديد الموقع");
        setLocation({ lat: 21.4225, lng: 39.8262 });
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (!location) return;

    const fetchPrayerTimes = async () => {
      try {
        const date = new Date();
        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}?latitude=${location.lat}&longitude=${location.lng}&method=4`
        );
        const data = await response.json();

        if (data.code === 200) {
          const timings = data.data.timings;
          const prayers: PrayerTime[] = [
            { name: "Fajr", arabicName: "الفجر", time: timings.Fajr },
            { name: "Sunrise", arabicName: "الشروق", time: timings.Sunrise },
            { name: "Dhuhr", arabicName: "الظهر", time: timings.Dhuhr },
            { name: "Asr", arabicName: "العصر", time: timings.Asr },
            { name: "Maghrib", arabicName: "المغرب", time: timings.Maghrib },
            { name: "Isha", arabicName: "العشاء", time: timings.Isha },
          ];

          setPrayerTimes(prayers);
          
          // Find next prayer
          const now = new Date();
          const currentMinutes = now.getHours() * 60 + now.getMinutes();
          
          const next = prayers.find((prayer) => {
            const [hours, minutes] = prayer.time.split(":").map(Number);
            const prayerMinutes = hours * 60 + minutes;
            return prayerMinutes > currentMinutes;
          });

          setNextPrayer(next || prayers[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        toast.error("حدث خطأ في جلب مواقيت الصلاة");
        setLoading(false);
      }
    };

    fetchPrayerTimes();
    // Refresh prayer times every hour
    const interval = setInterval(fetchPrayerTimes, 3600000);

    return () => clearInterval(interval);
  }, [location]);

  return { prayerTimes, nextPrayer, loading, location };
};
