import { useState, useMemo } from "react";
import { NavigationBar } from "@/components/NavigationBar";
import { IslamicHeader } from "@/components/IslamicHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { allahNames } from "@/data/allahNames";
import { Search, Star, Sparkles } from "lucide-react";
import mosqueBg from "@/assets/mosque-bg.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AllahNames = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNames = useMemo(() => {
    if (!searchQuery.trim()) return allahNames;
    
    const query = searchQuery.toLowerCase();
    return allahNames.filter(
      (name) =>
        name.arabic.includes(searchQuery) ||
        name.transliteration.toLowerCase().includes(query) ||
        name.meaning.toLowerCase().includes(query) ||
        name.explanation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-islamic relative overflow-hidden pb-24">
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
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <IslamicHeader />

        <div className="space-y-6">
          {/* Header Card */}
          <Card className="card-glow border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-amiri text-primary flex items-center justify-center gap-2">
                <Sparkles className="w-8 h-8" />
                أسماء الله الحسنى
              </CardTitle>
              <CardDescription className="text-lg font-amiri text-foreground mt-2">
                التسعة والتسعون اسماً العظيمة
              </CardDescription>
              <p className="text-sm text-muted-foreground mt-3 font-cairo">
                قال رسول الله ﷺ: "إن لله تسعة وتسعين اسماً، مائة إلا واحداً، من أحصاها دخل الجنة"
              </p>
            </CardHeader>
          </Card>

          {/* Search Bar */}
          <Card className="card-glow">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ابحث في أسماء الله الحسنى..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 text-right font-cairo"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                عدد النتائج: {filteredNames.length} من {allahNames.length}
              </p>
            </CardContent>
          </Card>

          {/* Names List */}
          <Card className="card-glow">
            <CardContent className="pt-6">
              {filteredNames.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground font-cairo">
                    لا توجد نتائج تطابق بحثك
                  </p>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-3">
                  {filteredNames.map((name) => (
                    <AccordionItem
                      key={name.id}
                      value={`name-${name.id}`}
                      className="border border-border rounded-lg overflow-hidden bg-card"
                    >
                      <AccordionTrigger className="px-4 py-4 hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-muted/70">
                        <div className="flex items-center justify-between w-full gap-3">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                              {name.id}
                            </Badge>
                            <span className="text-sm text-muted-foreground font-cairo">
                              {name.transliteration}
                            </span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-2xl font-amiri text-primary font-bold">
                              {name.arabic}
                            </span>
                            <span className="text-sm text-muted-foreground font-cairo">
                              {name.meaning}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="space-y-4 pt-2">
                          {/* Explanation */}
                          <div>
                            <h4 className="font-bold text-primary mb-2 font-cairo flex items-center gap-2">
                              <Star className="w-4 h-4" />
                              الشرح
                            </h4>
                            <p className="text-foreground leading-relaxed font-cairo text-sm">
                              {name.explanation}
                            </p>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-bold text-primary mb-2 font-cairo flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              الفوائد والآثار
                            </h4>
                            <ul className="space-y-2">
                              {name.benefits.map((benefit, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2 text-foreground font-cairo text-sm"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span className="flex-1">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <NavigationBar currentPage="prayer" />
    </div>
  );
};

export default AllahNames;
