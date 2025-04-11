
"use client";

import React from "react";
import Navbar from "@/components/NextNavbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/NextFooter";
import FeesInsurance from "@/components/FeesInsurance";
import EvidenceBased from "@/components/EvidenceBased";
import FAQ from "@/components/FAQ";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-6 sm:space-y-10 md:space-y-16">
          <Services />
          <About />
          <EvidenceBased />
          <FeesInsurance />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
