import { Navigation } from "lucide-react";

interface QiblaCompassProps {
  heading: number;
  qiblaDirection: number;
  isSupported: boolean;
}

export const QiblaCompass = ({ heading, qiblaDirection, isSupported }: QiblaCompassProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto animate-fade-in">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-islamic-gold/20 blur-3xl rounded-full animate-pulse"></div>
      
      {/* Main compass container */}
      <div className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-full border-4 border-islamic-gold/30 shadow-2xl p-8">
        {/* Compass rose background */}
        <div 
          className="absolute inset-8 rounded-full border-2 border-islamic-gold/20 transition-transform duration-1000 ease-out"
          style={{ transform: `rotate(${-heading}deg)` }}
        >
          {/* Cardinal directions */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-islamic-gold font-bold text-xl font-cairo">ش</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <span className="text-white/60 font-bold text-xl font-cairo">ج</span>
          </div>
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-white/60 font-bold text-xl font-cairo">غ</span>
          </div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
            <span className="text-white/60 font-bold text-xl font-cairo">ش</span>
          </div>
          
          {/* Degree marks */}
          {[...Array(36)].map((_, i) => {
            const angle = i * 10;
            const isMainDirection = angle % 90 === 0;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 origin-left"
                style={{
                  transform: `rotate(${angle}deg)`,
                  width: isMainDirection ? "45%" : "40%",
                }}
              >
                <div
                  className={`${
                    isMainDirection ? "h-1 bg-islamic-gold/50" : "h-0.5 bg-white/20"
                  } ml-auto`}
                  style={{ width: isMainDirection ? "12px" : "8px" }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Qibla direction indicator (Kaaba symbol) */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{ transform: `rotate(${qiblaDirection}deg)` }}
        >
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-islamic-gold rounded-lg flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">🕋</span>
            </div>
            <span className="text-islamic-gold font-bold text-sm font-cairo bg-black/50 px-2 py-1 rounded">
              القبلة
            </span>
          </div>
        </div>

        {/* Center phone direction indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center">
              {/* Inner circle */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-islamic-gold to-yellow-600 flex items-center justify-center shadow-lg">
                <Navigation className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Heading display */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-islamic-gold font-bold text-lg font-cairo">
            {Math.round(heading)}°
          </span>
        </div>
      </div>

      {/* Distance from Qibla indicator */}
      <div className="mt-6 text-center">
        <div className="inline-block bg-white/5 backdrop-blur-sm border border-islamic-gold/20 rounded-full px-6 py-3">
          <span className="text-white/80 font-cairo">
            الفرق: {Math.abs(Math.round(qiblaDirection))}°
          </span>
        </div>
      </div>
    </div>
  );
};