
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Books from "./pages/Books";
import Schedule from "./pages/Schedule";
import AboutMe from "./pages/AboutMe";

const queryClient = new QueryClient();
const CLIENT_PORTAL_URL = "https://thegiftofpeacecw.clientsecure.me/";

// This component will redirect to the external SimplePractice client portal
const ClientPortalRedirect = () => {
  useEffect(() => {
    window.location.href = CLIENT_PORTAL_URL;
  }, []);
  
  return <div className="min-h-screen flex items-center justify-center">
    <p>Redirecting to client portal...</p>
  </div>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/books" element={<Books />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portal" element={<ClientPortalRedirect />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
