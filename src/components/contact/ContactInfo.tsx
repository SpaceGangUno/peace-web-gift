
"use client";

import { CalendarClock, Mail, Phone } from "lucide-react";
import LinkCompat from "@/components/LinkCompat";

interface ContactInfoProps {
  variant?: "mobile" | "desktop";
}

const ContactInfo: React.FC<ContactInfoProps> = ({ variant = "desktop" }) => {
  const containerClasses = variant === "mobile" 
    ? "block lg:hidden mt-8" 
    : "w-full max-w-2xl mx-auto lg:max-w-none";

  const cardClasses = variant === "mobile"
    ? "bg-wasabi/20 rounded-lg p-4 sm:p-6 h-full"
    : "bg-wasabi/20 rounded-lg p-6 lg:p-8 h-full lg:flex lg:items-center lg:justify-between";

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        <div className="lg:flex-1">
          <h3 className="font-bookmania text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 gold-text">
            Contact Information
          </h3>
          
          <div className="space-y-4 sm:space-y-6 lg:flex lg:gap-12 lg:space-y-0">
            <div className="flex items-start lg:flex-col lg:items-start lg:flex-1">
              <Mail className="text-gold mr-3 lg:mr-0 lg:mb-2 flex-shrink-0 h-5 w-5" />
              <div>
                <p className="text-xs sm:text-sm lg:text-base text-white/70 mb-1">Email</p>
                <a href="mailto:admin@thegiftofpeace.org" className="text-white hover:text-gold text-sm sm:text-base lg:text-lg break-all">
                  admin@thegiftofpeace.org
                </a>
              </div>
            </div>
            
            <div className="flex items-start lg:flex-col lg:items-start lg:flex-1">
              <Phone className="text-gold mr-3 lg:mr-0 lg:mb-2 flex-shrink-0 h-5 w-5" />
              <div>
                <p className="text-xs sm:text-sm lg:text-base text-white/70 mb-1">Phone</p>
                <a href="tel:+19802166978" className="text-white hover:text-gold text-sm sm:text-base lg:text-lg">
                  (980) 216-6978
                </a>
              </div>
            </div>
            
            <div className="flex items-start lg:flex-col lg:items-start lg:flex-1">
              <CalendarClock className="text-gold mr-3 lg:mr-0 lg:mb-2 flex-shrink-0 h-5 w-5" />
              <div>
                <p className="text-xs sm:text-sm lg:text-base text-white/70 mb-1">Office Hours</p>
                <p className="text-white text-sm sm:text-base lg:text-lg">
                  Monday - Friday: 10am - 6pm
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 lg:mt-0 pt-4 sm:pt-6 lg:pt-0 border-t border-white/20 lg:border-t-0 lg:border-l lg:pl-8 lg:flex lg:flex-col lg:justify-center lg:w-80">
          <p className="text-white/70 mb-3 text-xs sm:text-sm lg:text-base">
            For faster service:
          </p>
          <LinkCompat href="/schedule" className="btn-primary w-full justify-center flex items-center text-sm sm:text-base lg:text-lg py-3 lg:py-4">
            Book Online
          </LinkCompat>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
