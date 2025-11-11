import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export interface NotificationSettings {
  enabled: boolean;
  adhanSound: "makkah" | "madinah" | "egyptian";
  prayers: {
    fajr: boolean;
    dhuhr: boolean;
    asr: boolean;
    maghrib: boolean;
    isha: boolean;
  };
}

const DEFAULT_SETTINGS: NotificationSettings = {
  enabled: true,
  adhanSound: "makkah",
  prayers: {
    fajr: true,
    dhuhr: true,
    asr: true,
    maghrib: true,
    isha: true,
  },
};

const ADHAN_SOUNDS = {
  makkah: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3",
  madinah: "https://cdn.islamic.network/quran/audio/128/ar.minshawi/1.mp3",
  egyptian: "https://cdn.islamic.network/quran/audio/128/ar.abdulbasit/1.mp3",
};

export const useNotifications = () => {
  const [settings, setSettings] = useState<NotificationSettings>(DEFAULT_SETTINGS);
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const { toast } = useToast();

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("notificationSettings");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading notification settings:", error);
      }
    }

    // Check notification permission
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  // Save settings to localStorage
  const updateSettings = (newSettings: Partial<NotificationSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem("notificationSettings", JSON.stringify(updated));
  };

  // Request notification permission
  const requestPermission = async () => {
    if (!("Notification" in window)) {
      toast({
        title: "التنبيهات غير مدعومة",
        description: "متصفحك لا يدعم التنبيهات",
        variant: "destructive",
      });
      return false;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);

      if (result === "granted") {
        toast({
          title: "تم تفعيل التنبيهات",
          description: "سيتم إعلامك عند حلول وقت الصلاة",
        });
        return true;
      } else {
        toast({
          title: "تم رفض التنبيهات",
          description: "لن تتلقى إشعارات الأذان",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error("Error requesting permission:", error);
      return false;
    }
  };

  // Play adhan sound
  const playAdhan = async (sound: keyof typeof ADHAN_SOUNDS) => {
    try {
      const audio = new Audio(ADHAN_SOUNDS[sound]);
      audio.volume = 0.7;
      await audio.play();
      return audio;
    } catch (error) {
      console.error("Error playing adhan:", error);
      toast({
        title: "خطأ في تشغيل الأذان",
        description: "تعذر تشغيل صوت الأذان",
        variant: "destructive",
      });
      return null;
    }
  };

  // Show notification
  const showNotification = (
    prayerName: string,
    prayerNameArabic: string,
    time: string
  ) => {
    if (permission !== "granted") return;

    const notification = new Notification(`حان وقت ${prayerNameArabic}`, {
      body: `الوقت: ${time}`,
      icon: "/favicon.ico",
      badge: "/favicon.ico",
      tag: prayerName,
      requireInteraction: true,
    });

    notification.onclick = () => {
      window.focus();
      notification.close();
    };

    // Play adhan sound
    if (settings.enabled) {
      playAdhan(settings.adhanSound);
    }
  };

  // Schedule notification for prayer time
  const scheduleNotification = (
    prayerName: string,
    prayerNameArabic: string,
    time: string
  ) => {
    if (!settings.enabled) return;
    
    const prayerKey = prayerName as keyof NotificationSettings["prayers"];
    
    // Check if notification is enabled for this prayer
    if (!settings.prayers[prayerKey]) return;

    const now = new Date();
    const [hours, minutes] = time.split(":").map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hours, minutes, 0, 0);

    // If prayer time has passed today, schedule for tomorrow
    if (prayerTime <= now) {
      prayerTime.setDate(prayerTime.getDate() + 1);
    }

    const timeUntilPrayer = prayerTime.getTime() - now.getTime();

    if (timeUntilPrayer > 0 && timeUntilPrayer < 24 * 60 * 60 * 1000) {
      setTimeout(() => {
        if (permission === "granted") {
          showNotification(prayerName, prayerNameArabic, time);
        }
      }, timeUntilPrayer);
    }
  };

  return {
    settings,
    updateSettings,
    permission,
    requestPermission,
    playAdhan,
    scheduleNotification,
  };
};
