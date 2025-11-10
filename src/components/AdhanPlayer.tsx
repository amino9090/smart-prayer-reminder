import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { useNotifications } from "@/hooks/useNotifications";

interface AdhanPlayerProps {
  adhanType: "makkah" | "madinah" | "egyptian";
  label: string;
}

export const AdhanPlayer = ({ adhanType, label }: AdhanPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { playAdhan } = useNotifications();

  const handlePlay = async () => {
    if (isPlaying && audio) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const newAudio = await playAdhan(adhanType);
      if (newAudio) {
        setAudio(newAudio);
        setIsPlaying(true);

        newAudio.onended = () => {
          setIsPlaying(false);
          setAudio(null);
        };
      }
    }
  };

  return (
    <Card className="p-4 bg-white/5 border-islamic-gold/20 hover:border-islamic-gold/40 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Volume2 className="w-5 h-5 text-islamic-gold" />
          <span className="text-white font-cairo font-medium">{label}</span>
        </div>
        <Button
          variant={isPlaying ? "default" : "outline"}
          size="sm"
          onClick={handlePlay}
          className="min-w-[80px]"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 ml-2" />
              <span className="font-cairo">إيقاف</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 ml-2" />
              <span className="font-cairo">تشغيل</span>
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};
