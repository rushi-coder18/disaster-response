import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Disasters from "./pages/Disasters";
import EmergencyGuide from "./pages/EmergencyGuide";
import RescueTeams from "./pages/RescueTeams";
import SafeZones from "./pages/SafeZones";
import SOS from "./pages/SOS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/disasters" element={<Disasters />} />
          <Route path="/emergency-guide" element={<EmergencyGuide />} />
          <Route path="/rescue-teams" element={<RescueTeams />} />
          <Route path="/safe-zones" element={<SafeZones />} />
          <Route path="/sos" element={<SOS />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
