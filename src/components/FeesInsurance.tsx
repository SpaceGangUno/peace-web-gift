
import { Check } from "lucide-react";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeesInsurance = () => {
  const [activeRegion, setActiveRegion] = useState<string>("North Carolina");
  
  const insuranceByRegion = [
    {
      region: "North Carolina",
      plans: ["Optum/UHC", "Cigna", "Aetna", "BCBS"]
    },
    {
      region: "South Carolina",
      plans: ["Quest Behavioral Health", "Carelon Behavioral Health", "Aetna", "Cigna", "Anthem", "Optum/UHC"]
    },
    {
      region: "Washington DC",
      plans: ["Quest Behavioral Health", "Carelon Behavioral Health", "Kaiser Permanente", "Aetna", "Cigna", "Anthem", "Optum/UHC"]
    },
    {
      region: "Virginia",
      plans: ["Quest Behavioral Health", "Carelon Behavioral Health", "Kaiser Permanente", "Aetna", "Cigna", "Anthem", "Optum/UHC"]
    }
  ];

  return (
    <section id="fees" className="section bg-muted/30">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bookmania mb-4">
              Fees & <span className="gold-text">Insurance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We accept clients in Washington DC, Virginia, North Carolina, and South Carolina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border">
              <div className="p-6">
                <h3 className="font-bookmania text-2xl mb-4">Private Pay Rates</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium">Individual Counseling (60 min)</span>
                    <span className="font-bookmania text-emerald-green">$150</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium">Individual Counseling Intake</span>
                    <span className="font-bookmania text-emerald-green">$175</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium">Couples Counseling (60 min)</span>
                    <span className="font-bookmania text-emerald-green">$200</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium">Couples Counseling Intake</span>
                    <span className="font-bookmania text-emerald-green">$225</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium">Family Counseling (60 min)</span>
                    <span className="font-bookmania text-emerald-green">$200</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium">Family Counseling Intake</span>
                    <span className="font-bookmania text-emerald-green">$225</span>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-muted-foreground">
                  Payment is due at the time of service. We accept all major credit cards.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border">
              <div className="p-6">
                <h3 className="font-bookmania text-2xl mb-4">Insurance Accepted</h3>
                
                <div className="mb-6">
                  <div className="flex overflow-x-auto space-x-2 pb-2">
                    {insuranceByRegion.map((region, idx) => (
                      <button 
                        key={idx} 
                        className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors 
                          ${activeRegion === region.region 
                            ? "bg-gold-gradient text-noir-vigne" 
                            : "bg-wasabi/10 text-wasabi hover:bg-wasabi/20"
                          }`}
                        onClick={() => setActiveRegion(region.region)}
                      >
                        {region.region}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 min-h-[200px]">
                  {insuranceByRegion
                    .filter(region => region.region === activeRegion)
                    .map((region, index) => (
                      <div key={index}>
                        <h4 className="font-bookmania text-lg mb-2">{region.region}</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.plans.map((plan, planIndex) => (
                            <span key={planIndex} className="inline-flex items-center bg-wasabi/10 px-3 py-1 rounded-full text-sm">
                              <Check className="text-gold mr-1 h-4 w-4 flex-shrink-0" />
                              {plan}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-6">
              Questions about fees or insurance? Contact us for more information.
            </p>
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesInsurance;
