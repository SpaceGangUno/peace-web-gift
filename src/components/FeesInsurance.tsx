import { Check } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const FeesInsurance = () => {
  const [activeRegion, setActiveRegion] = useState<string>("North Carolina");
  const isMobile = useIsMobile();
  const carouselApiRef = useRef<any>(null);
  
  useEffect(() => {
    if (isMobile) {
      const autoRotationInterval = setInterval(() => {
        if (carouselApiRef.current) {
          carouselApiRef.current.scrollNext();
        }
      }, 4000);
      
      return () => {
        clearInterval(autoRotationInterval);
      };
    }
  }, [isMobile]);
  
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
  
  const getActivePlans = () => {
    const activeRegionData = insuranceByRegion.find(item => item.region === activeRegion);
    return activeRegionData?.plans || [];
  };

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
                
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="py-2 text-sm md:text-base font-medium">Individual (60 min)</TableCell>
                      <TableCell className="py-2 text-right font-bookmania text-emerald-green">$150</TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/30">
                      <TableCell className="py-2 text-sm md:text-base font-medium">Individual Intake</TableCell>
                      <TableCell className="py-2 text-right font-bookmania text-emerald-green">$175</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="py-2 text-sm md:text-base font-medium">Couples (60 min)</TableCell>
                      <TableCell className="py-2 text-right font-bookmania text-emerald-green">$200</TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/30">
                      <TableCell className="py-2 text-sm md:text-base font-medium">Couples Intake</TableCell>
                      <TableCell className="py-2 text-right font-bookmania text-emerald-green">$225</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="py-2 text-sm md:text-base font-medium">Family (60 min)</TableCell>
                      <TableCell className="py-2 text-right font-bookmania text-emerald-green">$200</TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/30">
                      <TableCell className="py-2 text-sm md:text-base font-medium">Family Intake</TableCell>
                      <TableCell className="py-2 text-right font-bookmania text-emerald-green">$225</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Payment is due at time of service. All major credit cards accepted.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border">
              <div className="p-6">
                <h3 className="font-bookmania text-2xl mb-4">Insurance Accepted</h3>
                
                {isMobile ? (
                  <div className="mb-6">
                    <Carousel 
                      className="w-full insurance-carousel" 
                      opts={{ 
                        loop: true,
                        dragFree: true,
                      }}
                      setApi={(api) => (carouselApiRef.current = api)}
                    >
                      <CarouselContent>
                        {insuranceByRegion.map((region, idx) => (
                          <CarouselItem key={idx}>
                            <div>
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
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-center gap-4 mt-6">
                        <CarouselPrevious className="relative static translate-y-0 translate-x-0 left-0 top-0 bg-wasabi/10 hover:bg-wasabi/20 text-wasabi border-none" />
                        <CarouselNext className="relative static translate-y-0 translate-x-0 right-0 top-0 bg-wasabi/10 hover:bg-wasabi/20 text-wasabi border-none" />
                      </div>
                    </Carousel>
                  </div>
                ) : (
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
                    
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {getActivePlans().map((plan, planIndex) => (
                          <span key={planIndex} className="inline-flex items-center bg-wasabi/10 px-3 py-1 rounded-full text-sm">
                            <Check className="text-gold mr-1 h-4 w-4 flex-shrink-0" />
                            {plan}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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
