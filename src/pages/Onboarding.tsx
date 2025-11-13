import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Bell, CheckCircle2 } from "lucide-react";
import { useNotifications } from "@/hooks/useNotifications";
import { useToast } from "@/hooks/use-toast";
import mosqueBg from "@/assets/mosque-bg.jpg";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [locationGranted, setLocationGranted] = useState(false);
  const navigate = useNavigate();
  const { requestPermission } = useNotifications();
  const { toast } = useToast();

  const requestLocationPermission = async () => {
    try {
      const result = await navigator.geolocation.getCurrentPosition(
        () => {
          setLocationGranted(true);
          toast({
            title: "تم تفعيل الموقع",
            description: "سيتم استخدام موقعك لحساب أوقات الصلاة",
          });
          setStep(2);
        },
        (error) => {
          console.error("Location error:", error);
          toast({
            title: "تنبيه",
            description: "يمكنك تفعيل الموقع لاحقاً من الإعدادات",
            variant: "destructive",
          });
          setStep(2);
        }
      );
    } catch (error) {
      console.error("Location permission error:", error);
      setStep(2);
    }
  };

  const requestNotificationPermission = async () => {
    const granted = await requestPermission();
    if (granted) {
      completeOnboarding();
    } else {
      toast({
        title: "تنبيه",
        description: "يمكنك تفعيل التنبيهات لاحقاً من الإعدادات",
      });
      completeOnboarding();
    }
  };

  const completeOnboarding = () => {
    localStorage.setItem("onboardingCompleted", "true");
    navigate("/");
  };

  const skipOnboarding = () => {
    localStorage.setItem("onboardingCompleted", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-islamic relative overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2 font-amiri">
            مرحباً بك
          </h1>
          <p className="text-muted-foreground">
            تطبيقك للصلاة والأذكار
          </p>
        </div>

        {step === 1 ? (
          <Card className="w-full backdrop-blur-sm bg-card/95 border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-amiri text-2xl">الموقع الجغرافي</CardTitle>
              <CardDescription className="text-base">
                نحتاج إلى موقعك لحساب أوقات الصلاة بدقة في منطقتك
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={requestLocationPermission}
                className="w-full"
                size="lg"
              >
                تفعيل الموقع
              </Button>
              <Button
                onClick={() => setStep(2)}
                variant="ghost"
                className="w-full"
              >
                تخطي الآن
              </Button>
            </CardContent>
          </Card>
        ) : step === 2 ? (
          <Card className="w-full backdrop-blur-sm bg-card/95 border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-amiri text-2xl">التنبيهات</CardTitle>
              <CardDescription className="text-base">
                سنرسل لك تنبيهات عند حلول وقت كل صلاة مع صوت الأذان
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={requestNotificationPermission}
                className="w-full"
                size="lg"
              >
                تفعيل التنبيهات
              </Button>
              <Button
                onClick={completeOnboarding}
                variant="ghost"
                className="w-full"
              >
                تخطي الآن
              </Button>
            </CardContent>
          </Card>
        ) : null}

        <div className="flex gap-2 mt-6">
          <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-primary' : 'bg-primary/30'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-primary' : 'bg-primary/30'}`} />
        </div>

        <Button
          onClick={skipOnboarding}
          variant="link"
          className="mt-8 text-muted-foreground"
        >
          تخطي الترحيب
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
