import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AzkarCategoryCard } from "@/components/AzkarCategoryCard";
import { AzkarCard } from "@/components/AzkarCard";
import { NavigationBar } from "@/components/NavigationBar";
import { azkarData, AzkarCategory } from "@/data/azkarData";
import islamicPattern from "@/assets/islamic-pattern.jpg";

const Azkar = () => {
  const [selectedCategory, setSelectedCategory] = useState<AzkarCategory | null>(null);

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
          {selectedCategory ? (
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                variant="ghost"
                onClick={() => setSelectedCategory(null)}
                className="hover:bg-secondary"
              >
                <ArrowRight className="text-primary ml-2" size={20} />
                <span className="font-cairo">رجوع</span>
              </Button>
            </div>
          ) : null}

          <h1 className="text-4xl md:text-5xl font-bold font-amiri text-primary text-glow">
            {selectedCategory ? selectedCategory.titleArabic : "الأذكار الإسلامية"}
          </h1>
          <p className="text-lg text-muted-foreground font-cairo">
            {selectedCategory
              ? `${selectedCategory.azkar.length} ذكر ودعاء`
              : "أذكار الصباح والمساء والنوم والأدعية اليومية"}
          </p>
        </div>

        {/* Categories or Azkar List */}
        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {azkarData.map((category) => (
              <AzkarCategoryCard
                key={category.id}
                category={category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {selectedCategory.azkar.map((azkar) => (
              <AzkarCard key={azkar.id} azkar={azkar} />
            ))}
          </div>
        )}

        {/* Helpful Text */}
        {!selectedCategory && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-cairo text-sm">
              اضغط على أي فئة للبدء في قراءة الأذكار
            </p>
          </div>
        )}
      </div>

      <NavigationBar currentPage="azkar" />
    </div>
  );
};

export default Azkar;
