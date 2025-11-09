import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavigationBar } from "@/components/NavigationBar";
import { Moon, Sun, Globe, Calculator, Bell, Volume2 } from "lucide-react";
import { toast } from "sonner";
import islamicPattern from "@/assets/islamic-pattern.jpg";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [calculationMethod, setCalculationMethod] = useState("4");
  const [notifications, setNotifications] = useState({
    fajr: true,
    dhuhr: true,
    asr: true,
    maghrib: true,
    isha: true,
  });
  const [soundEnabled, setSoundEnabled] = useState(true);

  const calculationMethods = [
    { value: "1", label: "جامعة أم القرى، مكة المكرمة", labelEn: "University of Islamic Sciences, Karachi" },
    { value: "2", label: "الرابطة الإسلامية العالمية", labelEn: "Islamic Society of North America" },
    { value: "3", label: "الهيئة المصرية العامة للمساحة", labelEn: "Egyptian General Authority of Survey" },
    { value: "4", label: "جامعة العلوم الإسلامية، كراتشي", labelEn: "Umm Al-Qura University, Makkah" },
    { value: "5", label: "جامعة طهران للعلوم الإسلامية", labelEn: "University of Tehran" },
  ];

  const prayerNames = [
    { key: "fajr", arabic: "الفجر", english: "Fajr" },
    { key: "dhuhr", arabic: "الظهر", english: "Dhuhr" },
    { key: "asr", arabic: "العصر", english: "Asr" },
    { key: "maghrib", arabic: "المغرب", english: "Maghrib" },
    { key: "isha", arabic: "العشاء", english: "Isha" },
  ];

  const handleNotificationToggle = (prayer: string) => {
    setNotifications((prev) => ({
      ...prev,
      [prayer]: !prev[prayer as keyof typeof notifications],
    }));
    toast.success(`تم ${notifications[prayer as keyof typeof notifications] ? "تعطيل" : "تفعيل"} تنبيه ${prayerNames.find(p => p.key === prayer)?.arabic}`);
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

          {/* Language Settings */}
          <Card className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold font-amiri text-foreground">اللغة</h2>
                <p className="text-sm text-muted-foreground font-cairo">اختر لغة التطبيق</p>
              </div>
            </div>

            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full font-cairo">
                <SelectValue placeholder="اختر اللغة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar" className="font-cairo">العربية</SelectItem>
                <SelectItem value="en" className="font-cairo">English</SelectItem>
              </SelectContent>
            </Select>
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
                    checked={notifications[prayer.key as keyof typeof notifications]}
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
                  checked={soundEnabled}
                  onCheckedChange={(checked) => {
                    setSoundEnabled(checked);
                    toast.success(checked ? "تم تفعيل الصوت" : "تم كتم الصوت");
                  }}
                />
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
