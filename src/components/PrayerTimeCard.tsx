import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PrayerTimeCardProps {
  name: string;
  time: string;
  isNext: boolean;
  arabicName: string;
}

export const PrayerTimeCard = ({ name, time, isNext, arabicName }: PrayerTimeCardProps) => {
  return (
    <Card
      className={`p-4 transition-all duration-300 ${
        isNext
          ? "bg-gradient-gold card-glow scale-105"
          : "bg-card hover:bg-secondary"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Clock className={isNext ? "text-primary-foreground" : "text-primary"} size={24} />
          <div>
            <h3
              className={`text-lg font-bold font-amiri ${
                isNext ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {arabicName}
            </h3>
            <p
              className={`text-sm ${
                isNext ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}
            >
              {name}
            </p>
          </div>
        </div>
        <div
          className={`text-2xl font-bold font-cairo ${
            isNext ? "text-primary-foreground text-glow" : "text-primary"
          }`}
        >
          {time}
        </div>
      </div>
    </Card>
  );
};
