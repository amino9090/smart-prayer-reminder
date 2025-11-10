import { useState, useEffect } from "react";
import { NavigationBar } from "@/components/NavigationBar";
import { IslamicHeader } from "@/components/IslamicHeader";
import { QiblaCompass } from "@/components/QiblaCompass";
import { useToast } from "@/hooks/use-toast";
import { Compass, MapPin } from "lucide-react";

const Qibla = () => {
  const [heading, setHeading] = useState<number>(0);
  const [qiblaDirection, setQiblaDirection] = useState<number>(0);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const { toast } = useToast();

  // Calculate Qibla direction based on user location
  const calculateQiblaDirection = (userLat: number, userLng: number) => {
    const kaabaLat = 21.4225; // Kaaba latitude
    const kaabaLng = 39.8262; // Kaaba longitude

    const dLng = ((kaabaLng - userLng) * Math.PI) / 180;
    const lat1 = (userLat * Math.PI) / 180;
    const lat2 = (kaabaLat * Math.PI) / 180;

    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);

    let bearing = Math.atan2(y, x);
    bearing = (bearing * 180) / Math.PI;
    bearing = (bearing + 360) % 360;

    return bearing;
  };

  // Get user location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          const direction = calculateQiblaDirection(latitude, longitude);
          setQiblaDirection(direction);
          
          toast({
            title: "تم تحديد موقعك",
            description: "جاري حساب اتجاه القبلة...",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to Makkah if location fails
          setLocation({ lat: 21.4225, lng: 39.8262 });
          toast({
            title: "تعذر تحديد الموقع",
            description: "سيتم استخدام الموقع الافتراضي",
            variant: "destructive",
          });
        }
      );
    }
  }, [toast]);

  // Get device orientation (compass)
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setHeading(360 - event.alpha);
      }
    };

    const requestPermission = async () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission();
          if (permission === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          } else {
            setIsSupported(false);
          }
        } catch (error) {
          console.error("Error requesting orientation permission:", error);
          setIsSupported(false);
        }
      } else {
        // Non-iOS devices
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    requestPermission();

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  const relativeDirection = qiblaDirection - heading;

  return (
    <div className="min-h-screen bg-gradient-to-b from-islamic-dark via-islamic-blue to-islamic-dark pb-24 overflow-hidden relative">
      {/* Animated stars background */}
      <div className="stars absolute inset-0 pointer-events-none"></div>
      
      <IslamicHeader />

      <main className="container mx-auto px-4 pt-32 pb-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Compass className="w-8 h-8 text-islamic-gold" />
              <h1 className="text-3xl font-bold text-islamic-gold font-amiri">
                بوصلة القبلة
              </h1>
            </div>
            <p className="text-white/80 font-cairo text-lg">
              اتجه نحو الكعبة المشرفة
            </p>
          </div>

          {/* Location Info */}
          {location && (
            <div className="bg-white/5 backdrop-blur-sm border border-islamic-gold/20 rounded-2xl p-4 mb-6 animate-fade-in">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5 text-islamic-gold" />
                <span className="font-cairo">
                  موقعك: {location.lat.toFixed(4)}°, {location.lng.toFixed(4)}°
                </span>
              </div>
              <div className="text-islamic-gold font-bold mt-2 font-cairo">
                اتجاه القبلة: {qiblaDirection.toFixed(1)}°
              </div>
            </div>
          )}

          {/* Compass Component */}
          <QiblaCompass 
            heading={heading} 
            qiblaDirection={relativeDirection}
            isSupported={isSupported}
          />

          {/* Instructions */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-islamic-gold/20 rounded-2xl p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-islamic-gold mb-4 font-amiri text-center">
              كيفية الاستخدام
            </h3>
            <ul className="space-y-3 text-white/80 font-cairo">
              <li className="flex items-start gap-3">
                <span className="text-islamic-gold">١.</span>
                <span>ضع هاتفك بشكل مسطح أمامك</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-islamic-gold">٢.</span>
                <span>دُر في المكان حتى تشير البوصلة إلى اتجاه القبلة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-islamic-gold">٣.</span>
                <span>عندما يتطابق السهم مع اتجاه الكعبة، ستكون قد وجدت القبلة</span>
              </li>
            </ul>
          </div>

          {!isSupported && (
            <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-2xl p-4 text-center">
              <p className="text-destructive font-cairo">
                البوصلة غير متاحة على هذا الجهاز. يرجى استخدام جهاز آخر أو تفعيل صلاحيات الموقع والبوصلة.
              </p>
            </div>
          )}
        </div>
      </main>

      <NavigationBar currentPage="qibla" />
    </div>
  );
};

export default Qibla;