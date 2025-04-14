"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, ChevronLeft, ChevronRight, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Alert, AlertDescription } from "@/components/ui/alert";

const services = [
  {
    title: "Individual Counseling",
    description: "Our individual counseling services are tailored to help you achieve your personal goals, improve mental wellbeing, and become a healthier version of yourself. By identifying the sources of your stressors, we work together to develop new patterns and more effective ways of managing life's challenges. Embrace change and unlock your full potential with our dedicated support.",
    showConsultButton: true,
    backgroundImage: "/lovable-uploads/e76f10eb-f404-4731-9ecb-b3ce56599f71.png"
  },
  {
    title: "Family Counseling",
    description: "Family dynamics significantly impact individual wellbeing and functioning. Our family counseling services help identify challenges within relationships that cause conflict, miscommunication, or dysfunction. Together, we work towards developing healthier ways of coexisting. Family therapy can accommodate as few as two or as many as four family members, ensuring personalized attention and support.",
    showConsultButton: true,
    backgroundImage: "/lovable-uploads/77526680-57b4-4b21-a564-c8138ae65805.png"
  },
  {
    title: "Couples Counseling",
    description: "Strengthen your relationship with our couples counseling services. We help you develop improved communication skills, resolve conflicts effectively, and foster a deeper emotional connection with your partner. Our supportive approach creates a safe environment to address relationship challenges.",
    backgroundImage: "/lovable-uploads/aeb9c661-1bdf-460c-b5ff-9e50d0f183b5.png",
    showConsultButton: true
  },
  {
    title: "Clinical Supervision",
    description: "Coming soon: Professional clinical supervision for LCSW-A's seeking guidance and mentorship to develop their clinical skills and advance their careers. Stay tuned for more information.",
    showConsultButton: false,
    comingSoon: true,
    backgroundImage: "/lovable-uploads/2c3d36b2-a50e-4e69-b11d-c9a1477fa904.png"
  }
];

const Services = () => {
  const isMobile = useIsMobile();
  const carouselApiRef = useRef<any>(null);
  
  useEffect(() => {
    const autoRotationInterval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 5000); // Rotate every 5 seconds
    
    return () => {
      clearInterval(autoRotationInterval);
    };
  }, []);
  
  return (
    <section id="services" className="section section-alt py-16 md:py-24 lg:py-32">
      <div className="container-custom max-w-7xl">
        <div className="section-title max-w-3xl mx-auto">
          <h2 className="mb-4">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-title-divider"></div>
        </div>
        
        {isMobile ? (
          <Carousel 
            className="w-full max-w-sm mx-auto services-carousel mt-10" 
            opts={{ 
              loop: true,
              dragFree: true,
            }}
            setApi={(api) => (carouselApiRef.current = api)}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-1 md:pl-4">
                  <div className="h-full">
                    <ServiceCard service={service} animationDelay={0} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static translate-y-0 translate-x-0 left-0 top-0 border-gold text-gold hover:bg-gold/20 hover:text-gold-dark" />
              <CarouselNext className="relative static translate-y-0 translate-x-0 right-0 top-0 border-gold text-gold hover:bg-gold/20 hover:text-gold-dark" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                animationDelay={index * 0.15} 
              />
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/schedule" className="btn-primary inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Book Your Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about-me" className="btn-secondary inline-flex items-center justify-center gap-2 shadow hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              Meet Our Therapist
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <Alert variant="default" className="max-w-md mx-auto bg-emerald-green/10 border-gold/30 mt-4">
            <AlertCircle className="h-4 w-4 text-gold" />
            <AlertDescription className="text-xs sm:text-sm text-emerald-green ml-2">
              Our services are exclusively for adults aged 21 and older.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  service, 
  animationDelay 
}: { 
  service: {
    title: string;
    description: string;
    showConsultButton: boolean;
    comingSoon?: boolean;
    backgroundImage?: string;
  };
  animationDelay: number;
}) => (
  <div 
    className="group animate-fade-in-up h-full"
    style={{ 
      animationDelay: `${animationDelay}s`
    }}
  >
    <Card 
      className={`hover-card h-full p-6 border-2 border-wasabi/20 hover:border-gold transition-all duration-300 hover:shadow-lg rounded-xl flex flex-col relative overflow-hidden ${service.backgroundImage ? 'text-white' : 'bg-white/80 backdrop-blur-sm'}`}
    >
      {service.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={service.backgroundImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-green/75 backdrop-blur-[1px]"></div>
        </div>
      )}
      
      <div className={`${service.backgroundImage ? 'relative z-10 h-full flex flex-col' : 'h-full flex flex-col'}`}>
        <div className="mb-4 flex items-center justify-between">
          {service.comingSoon && (
            <span className="text-xs font-sans bg-magenta-500 text-white px-3 py-1.5 rounded-full font-medium shadow-md border border-white/30 animate-pulse">
              Coming Soon
            </span>
          )}
        </div>
        {/* Added text-shadow-sm and opacity-100 for better contrast during transitions */}
        <h3 className={`text-2xl font-bookmania mb-3 ${service.backgroundImage ? 'text-gold-light text-shadow-sm opacity-100' : 'text-emerald-green group-hover:text-gold-dark'} transition-colors`}>
          {service.title}
        </h3>
        {/* Added text-shadow-sm and opacity-100 for better contrast during transitions */}
        <p className={`mb-6 flex-grow ${service.backgroundImage ? 'text-white/90 text-shadow-sm opacity-100' : 'text-wasabi'}`}>
          {service.description}
        </p>
        {service.showConsultButton && (
          <div className="mt-auto pt-4">
            <Link href="/schedule">
              <Button 
                variant="outline" 
                size="sm" 
                className={`w-full ${service.backgroundImage 
                  ? 'border-gold bg-gold/30 hover:bg-gold/50 text-white' 
                  : 'border-gold hover:bg-gold/20 text-emerald-green'} 
                  font-medium py-5 transition-all duration-300 transform hover:translate-y-[-2px]`}
              >
                <CalendarClock className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Card>
  </div>
);

export default Services;
