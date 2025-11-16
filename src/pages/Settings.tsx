import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavigationBar } from "@/components/NavigationBar";
import { Moon, Sun, Globe, Calculator, Bell, Volume2, Music, Clock } from "lucide-react";
import { toast } from "sonner";
import islamicPattern from "@/assets/islamic-pattern.jpg";
import { useNotifications } from "@/hooks/useNotifications";
import { AdhanPlayer } from "@/components/AdhanPlayer";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [calculationMethod, setCalculationMethod] = useState("4");
  const { settings, updateSettings, permission, requestPermission } = useNotifications();

  const calculationMethods = [
    { value: "1", label: "جامعة العلوم الإسلامية، كراتشي" },
    { value: "2", label: "الرابطة الإسلامية لأمريكا الشمالية" },
    { value: "3", label: "الهيئة المصرية العامة للمساحة" },
    { value: "4", label: "جامعة أم القرى، مكة المكرمة" },
    { value: "5", label: "جامعة طهران للعلوم" },
  ];

  // Load calculation method from localStorage on mount
  useEffect(() => {
    const savedMethod = localStorage.getItem("calculationMethod");
    if (savedMethod) {
      setCalculationMethod(savedMethod);
    }
  }, []);

  const prayerNames = [
    { key: "fajr", arabic: "الفجر" },
    { key: "dhuhr", arabic: "الظهر" },
    { key: "asr", arabic: "العصر" },
    { key: "maghrib", arabic: "المغرب" },
    { key: "isha", arabic: "العشاء" },
  ];

  // Request notification permission on mount
  useEffect(() => {
    if (permission === "default" && settings.enabled) {
      requestPermission();
    }
  }, []);

  const handleNotificationToggle = (prayer: string) => {
    const newValue = !settings.prayers[prayer as keyof typeof settings.prayers];
    updateSettings({
      prayers: {
        ...settings.prayers,
        [prayer]: newValue,
      },
    });
    toast.success(`تم ${newValue ? "تفعيل" : "تعطيل"} تنبيه ${prayerNames.find(p => p.key === prayer)?.arabic}`);
  };

  const handleAdhanSoundChange = (value: "makkah" | "madinah" | "egyptian") => {
    updateSettings({ adhanSound: value });
    toast.success("تم تغيير صوت الأذان");
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    toast.success(darkMode ? "تم تفعيل الوضع النهاري" : "تم تفعيل الوضع الليلي");
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    toast.success(value === "ar" ? "تم تغيير اللغة إلى العربية" : "Language changed to English");
  };

  const handleCalculationMethodChange = (value: string) => {
    setCalculationMethod(value);
    localStorage.setItem("calculationMethod", value);
    // Trigger storage event for other components
    window.dispatchEvent(new StorageEvent("storage", {
      key: "calculationMethod",
      newValue: value
    }));
    toast.success("تم تحديث طريقة حساب مواقيت الصلاة");
  };

  return (
    <div className="min-h-screen bg-gradient-islamic relative overflow-hidden pb-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${islamicPattern})`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-amiri text-primary text-glow">
            الإعدادات
          </h1>
          <p className="text-lg text-muted-foreground font-cairo">
            خصص التطبيق حسب احتياجاتك
          </p>
        </div>

        <div className="space-y-6">
          {/* Appearance Settings */}
          <Card className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                {darkMode ? (
                  <Moon className="text-primary" size={24} />
                ) : (
                  <Sun className="text-primary" size={24} />
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold font-amiri text-foreground">المظهر</h2>
                <p className="text-sm text-muted-foreground font-cairo">تخصيص واجهة التطبيق</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-3">
                  <Moon className="text-muted-foreground" size={20} />
                  <div>
                    <Label htmlFor="dark-mode" className="text-base font-cairo cursor-pointer">
                      الوضع الليلي
                    </Label>
                    <p className="text-xs text-muted-foreground font-cairo">
                      تفعيل المظهر الداكن للعينين
                    </p>
                  </div>
                </div>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={handleDarkModeToggle}
                />
              </div>
            </div>
          </Card>


          {/* Prayer Calculation Method */}
          <Card className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Calculator className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold font-amiri text-foreground">طريقة الحساب</h2>
                <p className="text-sm text-muted-foreground font-cairo">اختر طريقة حساب مواقيت الصلاة</p>
              </div>
            </div>

            <Select value={calculationMethod} onValueChange={handleCalculationMethodChange}>
              <SelectTrigger className="w-full font-cairo">
                <SelectValue placeholder="اختر طريقة الحساب" />
              </SelectTrigger>
              <SelectContent>
                {calculationMethods.map((method) => (
                  <SelectItem key={method.value} value={method.value} className="font-cairo">
                    {method.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Bell className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold font-amiri text-foreground">التنبيهات</h2>
                <p className="text-sm text-muted-foreground font-cairo">إدارة تنبيهات الصلاة</p>
              </div>
            </div>

            <div className="space-y-4">
              {prayerNames.map((prayer) => (
                <div
                  key={prayer.key}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Bell className="text-muted-foreground" size={20} />
                    <div>
                      <Label
                        htmlFor={`notification-${prayer.key}`}
                        className="text-base font-cairo cursor-pointer"
                      >
                        {prayer.arabic}
                      </Label>
                      <p className="text-xs text-muted-foreground font-cairo">
                        تنبيه صلاة {prayer.arabic}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={`notification-${prayer.key}`}
                    checked={settings.prayers[prayer.key as keyof typeof settings.prayers]}
                    onCheckedChange={() => handleNotificationToggle(prayer.key)}
                  />
                </div>
              ))}

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-3">
                  <Volume2 className="text-muted-foreground" size={20} />
                  <div>
                    <Label htmlFor="sound-enabled" className="text-base font-cairo cursor-pointer">
                      الصوت
                    </Label>
                    <p className="text-xs text-muted-foreground font-cairo">
                      تشغيل صوت الأذان عند التنبيه
                    </p>
                  </div>
                </div>
                <Switch
                  id="sound-enabled"
                  checked={settings.enabled}
                  onCheckedChange={(checked) => {
                    updateSettings({ enabled: checked });
                    toast.success(checked ? "تم تفعيل الصوت" : "تم كتم الصوت");
                  }}
                />
              </div>
            </div>
          </Card>

          {/* Smart Reminders */}
          <Card className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold font-amiri text-foreground">التنبيهات الذكية</h2>
                <p className="text-sm text-muted-foreground font-cairo">تذكير قبل وقت الصلاة</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Enable Reminder */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-3">
                  <Clock className="text-muted-foreground" size={20} />
                  <div>
                    <Label htmlFor="reminder-enabled" className="text-base font-cairo cursor-pointer">
                      تفعيل التذكير
                    </Label>
                    <p className="text-xs text-muted-foreground font-cairo">
                      تنبيه قبل موعد الصلاة
                    </p>
                  </div>
                </div>
                <Switch
                  id="reminder-enabled"
                  checked={settings.reminderEnabled}
                  onCheckedChange={(checked) => {
                    updateSettings({ reminderEnabled: checked });
                    toast.success(checked ? "تم تفعيل التذكير المسبق" : "تم تعطيل التذكير المسبق");
                  }}
                />
              </div>

              {/* Reminder Time */}
              {settings.reminderEnabled && (
                <div className="space-y-3">
                  <Label className="text-sm font-cairo text-foreground">وقت التذكير قبل الصلاة</Label>
                  <Select
                    value={settings.reminderMinutes.toString()}
                    onValueChange={(value) => {
                      updateSettings({ reminderMinutes: parseInt(value) });
                      toast.success(`سيتم التذكير قبل ${value} دقيقة من الصلاة`);
                    }}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 دقائق</SelectItem>
                      <SelectItem value="10">10 دقائق</SelectItem>
                      <SelectItem value="15">15 دقيقة</SelectItem>
                      <SelectItem value="20">20 دقيقة</SelectItem>
                      <SelectItem value="30">30 دقيقة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Reminder Sound */}
              {settings.reminderEnabled && (
                <div className="space-y-3">
                  <Label className="text-sm font-cairo text-foreground">صوت التذكير</Label>
                  <Select
                    value={settings.reminderSound}
                    onValueChange={(value: "makkah" | "madinah" | "egyptian") => {
                      updateSettings({ reminderSound: value });
                      toast.success("تم تغيير صوت التذكير");
                    }}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="makkah">أذان مكة المكرمة</SelectItem>
                      <SelectItem value="madinah">أذان المدينة المنورة</SelectItem>
                      <SelectItem value="egyptian">الأذان المصري</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </Card>

          {/* Adhan Sound Selection */}
          <Card className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Music className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold font-amiri text-foreground">صوت الأذان</h2>
                <p className="text-sm text-muted-foreground font-cairo">اختر صوت المؤذن المفضل</p>
              </div>
            </div>

            <div className="space-y-4">
              {permission !== "granted" && (
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-4">
                  <div className="mb-3">
                    <p className="text-sm font-bold text-amber-600 font-cairo mb-2">
                      ⚠️ الإشعارات غير مفعلة
                    </p>
                    <p className="text-xs text-amber-600/90 font-cairo mb-2">
                      لتلقي إشعارات الأذان، يجب السماح بالإشعارات أولاً
                    </p>
                    {permission === "denied" && (
                      <p className="text-xs text-amber-600/80 font-cairo">
                        💡 إذا رفضت الإشعارات سابقاً، افتح إعدادات المتصفح وقم بتفعيل الإشعارات يدوياً لهذا الموقع
                      </p>
                    )}
                  </div>
                  <Button
                    onClick={async () => {
                      const granted = await requestPermission();
                      if (granted) {
                        window.location.reload();
                      }
                    }}
                    className="w-full font-cairo"
                    variant="default"
                  >
                    <Bell className="w-4 h-4 ml-2" />
                    السماح بالإشعارات الآن
                  </Button>
                </div>
              )}

              <Select value={settings.adhanSound} onValueChange={handleAdhanSoundChange}>
                <SelectTrigger className="w-full font-cairo">
                  <SelectValue placeholder="اختر صوت الأذان" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="makkah" className="font-cairo">أذان مكة المكرمة</SelectItem>
                  <SelectItem value="madinah" className="font-cairo">أذان المدينة المنورة</SelectItem>
                  <SelectItem value="egyptian" className="font-cairo">أذان مصري</SelectItem>
                </SelectContent>
              </Select>

              <div className="pt-4 space-y-3">
                <p className="text-sm text-muted-foreground font-cairo mb-3">
                  استمع إلى الأصوات المتاحة:
                </p>
                <AdhanPlayer adhanType="makkah" label="أذان مكة المكرمة" />
                <AdhanPlayer adhanType="madinah" label="أذان المدينة المنورة" />
                <AdhanPlayer adhanType="egyptian" label="أذان مصري" />
              </div>
            </div>
          </Card>

          {/* App Info */}
          <Card className="p-6 bg-card text-center">
            <h3 className="text-lg font-bold font-amiri text-foreground mb-2">
              تذكير الصلاة الذكي
            </h3>
            <p className="text-sm text-muted-foreground font-cairo mb-1">الإصدار 1.0.0</p>
            <p className="text-xs text-muted-foreground font-cairo">
              صُنع بـ ❤️ لخدمة المسلمين
            </p>
          </Card>
        </div>
      </div>

      <NavigationBar currentPage="settings" />
    </div>
  );
};

export default Settings;
