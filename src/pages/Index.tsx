
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FeesInsurance from "@/components/FeesInsurance";
import EvidenceBased from "@/components/EvidenceBased";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
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

export default Index;
