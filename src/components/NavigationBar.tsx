import { Compass, BookOpen, Settings, Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavigationBarProps {
  currentPage?: "prayer" | "qibla" | "azkar" | "calendar" | "settings";
}

export const NavigationBar = ({ currentPage = "prayer" }: NavigationBarProps) => {
  const navigate = useNavigate();

  const navItems = [
    { icon: Clock, label: "الصلوات", page: "prayer", path: "/" },
    { icon: Compass, label: "القبلة", page: "qibla", path: "/qibla" },
    { icon: Calendar, label: "التقويم", page: "calendar", path: "/calendar" },
    { icon: BookOpen, label: "الأذكار", page: "azkar", path: "/azkar" },
    { icon: Settings, label: "الإعدادات", page: "settings", path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-2 z-50">
      <div className="max-w-lg mx-auto flex justify-around">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={currentPage === item.page ? "default" : "ghost"}
            size="sm"
            className="flex flex-col gap-1 h-auto py-2 px-3"
            onClick={() => navigate(item.path)}
          >
            <item.icon size={20} />
            <span className="text-xs font-cairo">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
