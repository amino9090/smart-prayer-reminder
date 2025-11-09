import { Compass, BookOpen, Settings, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavigationBarProps {
  currentPage?: "prayer" | "qibla" | "azkar" | "settings";
}

export const NavigationBar = ({ currentPage = "prayer" }: NavigationBarProps) => {
  const navigate = useNavigate();

  const navItems = [
    { icon: Clock, label: "الصلوات", page: "prayer", path: "/" },
    { icon: Compass, label: "القبلة", page: "qibla", path: "/qibla" },
    { icon: BookOpen, label: "الأذكار", page: "azkar", path: "/azkar" },
    { icon: Settings, label: "الإعدادات", page: "settings", path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
      <div className="max-w-lg mx-auto flex justify-around">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={currentPage === item.page ? "default" : "ghost"}
            size="lg"
            className="flex flex-col gap-1 h-auto py-3 px-6"
            onClick={() => navigate(item.path)}
          >
            <item.icon size={24} />
            <span className="text-xs font-cairo">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
