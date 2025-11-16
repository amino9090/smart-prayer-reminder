import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export interface NotificationSettings {
  enabled: boolean;
  adhanSound: "makkah" | "madinah" | "egyptian";
  reminderEnabled: boolean;
  reminderMinutes: number;
  reminderSound: "makkah" | "madinah" | "egyptian";
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
  reminderEnabled: true,
  reminderMinutes: 10,
  reminderSound: "makkah",
  prayers: {
    fajr: true,
    dhuhr: true,
    asr: true,
    maghrib: true,
    isha: true,
  },
};

const ADHAN_SOUNDS = {
  makkah: "/sounds/adhan-makkah.mp3",
  madinah: "/sounds/adhan-madinah.mp3",
  egyptian: "/sounds/adhan-egyptian.mp3",
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
        const parsedSettings = JSON.parse(saved);
        // Merge with defaults to ensure all properties exist
        setSettings({
          ...DEFAULT_SETTINGS,
          ...parsedSettings,
          prayers: {
            ...DEFAULT_SETTINGS.prayers,
            ...parsedSettings.prayers,
          },
        });
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
        // Don't show error toast - user may have denied by mistake
        // They can enable it later from settings page
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
    console.log(`محاولة جدولة إشعار لـ ${prayerNameArabic}`, {
      enabled: settings.enabled,
      permission,
      time
    });

    if (!settings.enabled) {
      console.log(`الإشعارات معطلة في الإعدادات`);
      return;
    }
    
    const prayerKey = prayerName.toLowerCase() as keyof NotificationSettings["prayers"];
    
    // Check if notification is enabled for this prayer
    if (!settings.prayers[prayerKey]) {
      console.log(`إشعار ${prayerNameArabic} معطل في الإعدادات`);
      return;
    }

    if (permission !== "granted") {
      console.log("إذن الإشعارات غير ممنوح");
      return;
    }

    const now = new Date();
    const [hours, minutes] = time.split(":").map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hours, minutes, 0, 0);

    // If prayer time has passed today, schedule for tomorrow
    if (prayerTime <= now) {
      prayerTime.setDate(prayerTime.getDate() + 1);
    }

    // Schedule reminder notification (before prayer time)
    if (settings.reminderEnabled && settings.reminderMinutes > 0) {
      const reminderTime = new Date(prayerTime.getTime() - settings.reminderMinutes * 60 * 1000);
      const timeUntilReminder = reminderTime.getTime() - now.getTime();

      if (timeUntilReminder > 0 && timeUntilReminder < 24 * 60 * 60 * 1000) {
        const hoursUntil = Math.floor(timeUntilReminder / (1000 * 60 * 60));
        const minutesUntil = Math.floor((timeUntilReminder % (1000 * 60 * 60)) / (1000 * 60));
        console.log(`⏰ تم جدولة تذكير ${prayerNameArabic} قبل ${settings.reminderMinutes} دقيقة - بعد ${hoursUntil} ساعة و ${minutesUntil} دقيقة`);

        setTimeout(() => {
          console.log(`⏰ تذكير: ${prayerNameArabic} بعد ${settings.reminderMinutes} دقيقة`);
          
          if (permission === "granted") {
            const notification = new Notification(`تذكير: ${prayerNameArabic} بعد ${settings.reminderMinutes} دقيقة`, {
              body: `سيحل وقت ${prayerNameArabic} في ${time}`,
              icon: "/favicon.ico",
              badge: "/favicon.ico",
              tag: `${prayerName}-reminder`,
              requireInteraction: false,
            });

            notification.onclick = () => {
              window.focus();
              notification.close();
            };

            // Play reminder sound
            playAdhan(settings.reminderSound);
          }
        }, timeUntilReminder);
      }
    }

    // Schedule main prayer notification
    const timeUntilPrayer = prayerTime.getTime() - now.getTime();
    const hoursUntil = Math.floor(timeUntilPrayer / (1000 * 60 * 60));
    const minutesUntil = Math.floor((timeUntilPrayer % (1000 * 60 * 60)) / (1000 * 60));

    console.log(`✅ تم جدولة إشعار ${prayerNameArabic} بعد ${hoursUntil} ساعة و ${minutesUntil} دقيقة`);

    if (timeUntilPrayer > 0 && timeUntilPrayer < 24 * 60 * 60 * 1000) {
      setTimeout(() => {
        console.log(`🔔 حان وقت ${prayerNameArabic}`);
        showNotification(prayerName, prayerNameArabic, time);
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
