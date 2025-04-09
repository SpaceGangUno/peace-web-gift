
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Individual Counseling",
    description: "Our individual counseling services are tailored to help you achieve your personal goals, improve mental wellbeing, and become a healthier version of yourself. By identifying the sources of your stressors, we work together to develop new patterns and more effective ways of managing life's challenges. Embrace change and unlock your full potential with our dedicated support.",
    icon: "🌱",
    showConsultButton: true
  },
  {
    title: "Family Counseling",
    description: "Family dynamics significantly impact individual wellbeing and functioning. Our family counseling services help identify challenges within relationships that cause conflict, miscommunication, or dysfunction. Together, we work towards developing healthier ways of coexisting. Family therapy can accommodate as few as two or as many as four family members, ensuring personalized attention and support.",
    icon: "👨‍👩‍👧",
    showConsultButton: true
  },
  {
    title: "Couples Counseling",
    description: "Strengthen your relationship with our couples counseling services. We help you develop improved communication skills, resolve conflicts effectively, and foster a deeper emotional connection with your partner. Our supportive approach creates a safe environment to address relationship challenges.",
    icon: "❤️",
    showConsultButton: true
  },
  {
    title: "Clinical Supervision",
    description: "Coming soon: Professional clinical supervision for LCSW-A's seeking guidance and mentorship to develop their clinical skills and advance their careers. Stay tuned for more information.",
    icon: "📋",
    showConsultButton: false,
    comingSoon: true
  }
];

const Services = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="section section-alt">
      <div className="container-custom">
        <div className="section-title max-w-3xl mx-auto">
          <span className="section-title-pre">What We Offer</span>
          <h2>
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-title-divider"></div>
          <p className="text-wasabi text-lg">
            We offer a range of healing therapy and counseling services 
            to support your journey toward wellness and growth.
          </p>
        </div>
        
        {isMobile ? (
          // Mobile view with carousel
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-1 md:pl-4">
                  <ServiceCard service={service} animationDelay={0} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static translate-y-0 h-9 w-9 border-gold bg-gold/10 hover:bg-gold/20 text-emerald-green" />
              <CarouselNext className="relative static translate-y-0 h-9 w-9 border-gold bg-gold/10 hover:bg-gold/20 text-emerald-green" />
            </div>
          </Carousel>
        ) : (
          // Desktop view with grid
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
        
        <div className="mt-16 text-center">
          <Link to="/schedule" className="btn-primary inline-block">
            Book Your Session
          </Link>
        </div>
      </div>
    </section>
  );
};

// Extracted ServiceCard component for reusability
const ServiceCard = ({ 
  service, 
  animationDelay 
}: { 
  service: {
    title: string;
    description: string;
    icon: string;
    showConsultButton: boolean;
    comingSoon?: boolean;
  };
  animationDelay: number;
}) => (
  <div 
    className="group animate-fade-in-up"
    style={{ 
      animationDelay: `${animationDelay}s`
    }}
  >
    <Card className="hover-card h-full p-6 border-wasabi/20 hover:border-gold transition-all duration-300 hover:shadow-md bg-white/80 backdrop-blur-sm rounded-xl flex flex-col">
      <div className="text-4xl mb-4 bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center">
        {service.icon}
      </div>
      <h3 className="text-xl font-bookmania mb-3 text-emerald-green group-hover:text-gold-dark transition-colors flex items-center gap-2">
        {service.title}
        {service.comingSoon && (
          <span className="text-xs font-sans bg-gold-light/30 text-gold-dark px-2 py-0.5 rounded-full">
            Coming Soon
          </span>
        )}
      </h3>
      <p className="text-wasabi mb-4 flex-grow">
        {service.description}
      </p>
      {service.showConsultButton && (
        <div className="mt-4">
          <Link to="/schedule">
            <Button variant="outline" size="sm" className="border-gold hover:bg-gold/10 text-emerald-green">
              <CalendarClock className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
          </Link>
        </div>
      )}
    </Card>
  </div>
);

export default Services;
