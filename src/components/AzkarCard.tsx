import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, RotateCcw } from "lucide-react";
import { Azkar } from "@/data/azkarData";

interface AzkarCardProps {
  azkar: Azkar;
}

export const AzkarCard = ({ azkar }: AzkarCardProps) => {
  const [count, setCount] = useState(0);
  const isComplete = count >= azkar.repeat;

  const handleClick = () => {
    if (count < azkar.repeat) {
      setCount(count + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Card
      className={`p-6 transition-all duration-300 ${
        isComplete
          ? "bg-gradient-gold card-glow"
          : "bg-card hover:bg-secondary cursor-pointer"
      }`}
      onClick={!isComplete ? handleClick : undefined}
    >
      <div className="space-y-4">
        {/* Arabic Text */}
        <div className="text-center">
          <p
            className={`text-2xl font-bold font-amiri leading-relaxed ${
              isComplete ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {azkar.arabic}
          </p>
        </div>

        {/* Transliteration */}
        <div className="text-center">
          <p
            className={`text-sm italic font-cairo ${
              isComplete ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
          >
            {azkar.transliteration}
          </p>
        </div>

        {/* Translation */}
        <div className="text-center pt-2 border-t border-border">
          <p
            className={`text-base font-cairo ${
              isComplete ? "text-primary-foreground/90" : "text-foreground"
            }`}
          >
            {azkar.translation}
          </p>
        </div>

        {/* Counter & Reference */}
        <div className="flex items-center justify-between pt-4">
          <div
            className={`text-sm font-cairo ${
              isComplete ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
          >
            {azkar.reference}
          </div>

          <div className="flex items-center gap-3">
            {azkar.repeat > 1 && (
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  isComplete ? "bg-primary-foreground/20" : "bg-secondary"
                }`}
              >
                {isComplete ? (
                  <Check
                    className="text-primary-foreground"
                    size={20}
                  />
                ) : (
                  <span
                    className={`text-lg font-bold font-cairo ${
                      isComplete ? "text-primary-foreground" : "text-primary"
                    }`}
                  >
                    {count} / {azkar.repeat}
                  </span>
                )}
              </div>
            )}

            {isComplete && (
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
                className="hover:bg-primary-foreground/20"
              >
                <RotateCcw size={16} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
