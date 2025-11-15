import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Azkar from "./pages/Azkar";
import Settings from "./pages/Settings";
import Qibla from "./pages/Qibla";
import Onboarding from "./pages/Onboarding";
import IslamicCalendar from "./pages/IslamicCalendar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
    const onboarded = localStorage.getItem("onboardingCompleted");
    setIsOnboarded(onboarded === "true");
  }, []);

  if (isOnboarded === null) {
    return null; // Loading state
  }

  return isOnboarded ? <>{children}</> : <Navigate to="/onboarding" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/azkar" element={<ProtectedRoute><Azkar /></ProtectedRoute>} />
          <Route path="/qibla" element={<ProtectedRoute><Qibla /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><IslamicCalendar /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
