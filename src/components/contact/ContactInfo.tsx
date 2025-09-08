
"use client";

import { CalendarClock, Mail, Phone } from "lucide-react";
import LinkCompat from "@/components/LinkCompat";

interface ContactInfoProps {
  variant?: "mobile" | "desktop";
}

const ContactInfo: React.FC<ContactInfoProps> = ({ variant = "desktop" }) => {
  // Present a clean single-card layout. On mobile it spans full width.
  // On desktop it centers with a comfortable max width.
  const containerClasses = variant === "mobile"
    ? "block lg:hidden mt-6"
    : "hidden lg:block mx-auto max-w-xl";

  return (
    <div className={containerClasses}>
      <div className="bg-wasabi/20 rounded-lg p-4 sm:p-6 h-full">
        <h3 className="font-bookmania text-lg sm:text-xl mb-4 sm:mb-6 gold-text">
          Contact Information
        </h3>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-start">
            <Mail className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
            <div>
              <p className="text-xs sm:text-sm text-white/70 mb-1">Email</p>
              <a href="mailto:admin@thegiftofpeace.org" className="text-white hover:text-gold text-sm sm:text-base break-all">
                admin@thegiftofpeace.org
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
            <div>
              <p className="text-xs sm:text-sm text-white/70 mb-1">Phone</p>
              <a href="tel:+19802166978" className="text-white hover:text-gold text-sm sm:text-base">
                (980) 216-6978
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <CalendarClock className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
            <div>
              <p className="text-xs sm:text-sm text-white/70 mb-1">Office Hours</p>
              <p className="text-white text-sm sm:text-base">
                Monday - Friday: 10am - 6pm
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
          <p className="text-white/70 mb-3 text-xs sm:text-sm">
            For faster service:
          </p>
          <LinkCompat href="/schedule" className="btn-primary w-full justify-center flex items-center text-sm sm:text-base py-2 sm:py-3">
            Book Online
          </LinkCompat>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
