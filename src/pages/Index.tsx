
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
        <Services />
        <FeesInsurance />
        <EvidenceBased />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
