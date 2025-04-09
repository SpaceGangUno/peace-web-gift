
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";

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
    description: "Strengthen your relationship with improved communication, conflict resolution skills, and deeper emotional connection.",
    icon: "❤️",
    showConsultButton: false
  },
  {
    title: "Anxiety Management",
    description: "Learn effective techniques to manage anxiety, reduce stress, and regain control of your thoughts and emotions.",
    icon: "🧘",
    showConsultButton: false
  },
  {
    title: "Trauma Recovery",
    description: "Gentle, evidence-based approaches to process trauma and reclaim your sense of safety and well-being.",
    icon: "🌈",
    showConsultButton: false
  },
  {
    title: "Mindfulness Training",
    description: "Develop present-moment awareness to reduce stress, improve focus, and enhance your overall quality of life.",
    icon: "✨",
    showConsultButton: false
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-[#f2fce2]/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bookmania mb-4 text-emerald-green">
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="text-wasabi text-lg">
            We offer a range of healing therapy and counseling services 
            to support your journey toward wellness and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.15}s`
              }}
            >
              <Card className="h-full p-6 border-wasabi/20 hover:border-gold transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm rounded-xl flex flex-col">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bookmania mb-3 text-emerald-green group-hover:text-gold-dark transition-colors">
                  {service.title}
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
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/schedule" className="btn-primary rounded-full">
            Book Your Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
