import { Card } from "@/components/ui/card";
import { Sunrise, Sunset, Moon, Heart } from "lucide-react";
import { AzkarCategory } from "@/data/azkarData";

interface AzkarCategoryCardProps {
  category: AzkarCategory;
  onClick: () => void;
}

const iconMap = {
  sunrise: Sunrise,
  sunset: Sunset,
  moon: Moon,
  heart: Heart,
};

export const AzkarCategoryCard = ({ category, onClick }: AzkarCategoryCardProps) => {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Heart;

  return (
    <Card
      className="p-8 bg-card hover:bg-gradient-gold hover:card-glow transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 transition-colors">
          <IconComponent className="text-primary group-hover:text-primary-foreground" size={48} />
        </div>
        <div>
          <h3 className="text-2xl font-bold font-amiri text-foreground group-hover:text-primary-foreground mb-1">
            {category.titleArabic}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 font-cairo">
            {category.title}
          </p>
          <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 mt-2 font-cairo">
            {category.azkar.length} أذكار
          </p>
        </div>
      </div>
    </Card>
  );
};
