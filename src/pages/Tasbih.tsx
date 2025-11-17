import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RotateCcw, TrendingUp, Trophy, Calendar } from "lucide-react";
import { tasbihData, TasbihItem } from "@/data/tasbihData";
import { toast } from "sonner";

interface TasbihStats {
  [key: string]: {
    total: number;
    today: number;
    lastDate: string;
  };
}

const Tasbih = () => {
  const [selectedTasbih, setSelectedTasbih] = useState<TasbihItem>(tasbihData[0]);
  const [count, setCount] = useState(0);
  const [stats, setStats] = useState<TasbihStats>({});

  useEffect(() => {
    const savedStats = localStorage.getItem("tasbihStats");
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (error) {
        console.error("Error loading tasbih stats:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(stats).length > 0) {
      localStorage.setItem("tasbihStats", JSON.stringify(stats));
    }
  }, [stats]);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === selectedTasbih.count) {
      toast.success("مبروك! أكملت التسبيح", {
        description: `${selectedTasbih.arabic} - ${selectedTasbih.count} مرة`,
      });

      const today = new Date().toDateString();
      setStats((prev) => {
        const current = prev[selectedTasbih.id] || { total: 0, today: 0, lastDate: "" };
        const isToday = current.lastDate === today;

        return {
          ...prev,
          [selectedTasbih.id]: {
            total: current.total + selectedTasbih.count,
            today: isToday ? current.today + selectedTasbih.count : selectedTasbih.count,
            lastDate: today,
          },
        };
      });
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleTasbihChange = (value: string) => {
    const tasbih = tasbihData.find((t) => t.id === value);
    if (tasbih) {
      setSelectedTasbih(tasbih);
      setCount(0);
    }
  };

  const getTodayTotal = () => {
    const today = new Date().toDateString();
    return Object.values(stats).reduce((sum, stat) => {
      return sum + (stat.lastDate === today ? stat.today : 0);
    }, 0);
  };

  const getAllTimeTotal = () => {
    return Object.values(stats).reduce((sum, stat) => sum + stat.total, 0);
  };

  const progress = (count / selectedTasbih.count) * 100;
  const remaining = Math.max(0, selectedTasbih.count - count);

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-background via-background to-primary/5">
      <div className="text-center py-8 border-b border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
        <h1 className="text-4xl font-bold font-amiri text-primary">السبحة الإلكترونية</h1>
        <p className="text-muted-foreground mt-2">سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى</p>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        <Tabs defaultValue="counter" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="counter">العداد</TabsTrigger>
            <TabsTrigger value="stats">الإحصائيات</TabsTrigger>
          </TabsList>

          <TabsContent value="counter" className="space-y-6">
            {/* Tasbih Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">اختر التسبيح</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedTasbih.id} onValueChange={handleTasbihChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tasbihData.map((tasbih) => (
                      <SelectItem key={tasbih.id} value={tasbih.id}>
                        <div className="flex items-center gap-2">
                          <span className="font-arabic text-lg">{tasbih.arabic}</span>
                          <Badge variant="secondary">{tasbih.count}×</Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Counter Card */}
            <Card className="border-2">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-arabic text-4xl mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {selectedTasbih.arabic}
                </CardTitle>
                <CardDescription className="text-base">
                  {selectedTasbih.transliteration}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedTasbih.translation}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">التقدم</span>
                    <span className="font-medium">
                      {count} / {selectedTasbih.count}
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  {remaining > 0 && (
                    <p className="text-xs text-muted-foreground text-center">
                      باقي {remaining} {remaining === 1 ? "مرة" : "مرات"}
                    </p>
                  )}
                </div>

                {/* Counter Display */}
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20">
                    <span className="text-6xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                      {count}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleIncrement}
                    size="lg"
                    className="flex-1 h-16 text-lg"
                    disabled={count >= selectedTasbih.count}
                  >
                    تسبيح
                  </Button>
                  <Button
                    onClick={handleReset}
                    size="lg"
                    variant="outline"
                    className="h-16 w-16"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">اليوم</p>
                      <p className="text-2xl font-bold">{getTodayTotal()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">الإجمالي</p>
                      <p className="text-2xl font-bold">{getAllTimeTotal()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  تفاصيل التسبيحات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasbihData.map((tasbih) => {
                  const stat = stats[tasbih.id];
                  const today = new Date().toDateString();
                  const todayCount = stat?.lastDate === today ? stat.today : 0;

                  return (
                    <div
                      key={tasbih.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-arabic font-medium">{tasbih.arabic}</p>
                        <p className="text-xs text-muted-foreground">
                          {tasbih.transliteration}
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium">{stat?.total || 0}</p>
                        <p className="text-xs text-muted-foreground">
                          اليوم: {todayCount}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {Object.keys(stats).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>لا توجد إحصائيات بعد</p>
                    <p className="text-sm mt-1">ابدأ التسبيح لرؤية الإحصائيات</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Tasbih;
