
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your unique needs, helping you navigate life's challenges and develop healthy coping strategies.",
    icon: "🌱"
  },
  {
    title: "Couples Counseling",
    description: "Strengthen your relationship with improved communication, conflict resolution skills, and deeper emotional connection.",
    icon: "❤️"
  },
  {
    title: "Family Therapy",
    description: "Heal family relationships, improve communication patterns, and create a more harmonious home environment.",
    icon: "👨‍👩‍👧"
  },
  {
    title: "Anxiety Management",
    description: "Learn effective techniques to manage anxiety, reduce stress, and regain control of your thoughts and emotions.",
    icon: "🧘"
  },
  {
    title: "Trauma Recovery",
    description: "Gentle, evidence-based approaches to process trauma and reclaim your sense of safety and well-being.",
    icon: "🌈"
  },
  {
    title: "Mindfulness Training",
    description: "Develop present-moment awareness to reduce stress, improve focus, and enhance your overall quality of life.",
    icon: "✨"
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-wasabi/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bookmania mb-4 text-emerald-green">
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="text-wasabi text-lg">
            We offer a range of professional therapy and counseling services 
            to support your mental health journey and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
              onLoad={(e) => {
                const target = e.currentTarget;
                target.style.opacity = "0";
                target.style.animation = "fade-in 0.5s ease-out forwards";
              }}
            >
              <Card className="h-full p-6 border-wasabi/20 hover:border-gold transition-all duration-300 hover:shadow-md">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bookmania mb-3 text-emerald-green group-hover:text-gold-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-wasabi">
                  {service.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
