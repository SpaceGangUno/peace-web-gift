
"use client";

import React from "react";
import Navbar from "@/components/NextNavbar";
import Footer from "@/components/NextFooter";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
