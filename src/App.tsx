
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Books from "./pages/Books";
import Schedule from "./pages/Schedule";
import AboutMe from "./pages/AboutMe";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReferralForm from "./pages/ReferralForm";
import ClientPortalRedirect from "./pages/ClientPortalRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/books" element={<Books />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/referral-form" element={<ReferralForm />} />
          <Route path="/portal" element={<ClientPortalRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

