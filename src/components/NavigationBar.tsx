import { Compass, BookOpen, Settings, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NavigationBar = () => {
  const navItems = [
    { icon: Clock, label: "الصلوات", active: true },
    { icon: Compass, label: "القبلة", active: false },
    { icon: BookOpen, label: "الأذكار", active: false },
    { icon: Settings, label: "الإعدادات", active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
      <div className="max-w-lg mx-auto flex justify-around">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            size="lg"
            className="flex flex-col gap-1 h-auto py-3 px-6"
          >
            <item.icon size={24} />
            <span className="text-xs font-cairo">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
