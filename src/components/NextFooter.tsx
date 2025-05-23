
"use client";

import LinkCompat from "@/components/LinkCompat";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-noir-vigne text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/d88841e0-4a57-4364-87af-91cbdd1142cf.png" 
              alt="The Gift of Peace" 
              className="h-16" 
            />
            <div className="ml-4">
              <h3 className="font-bookmania text-xl text-creased-khaki">The Gift of Peace</h3>
              <p className="text-sm text-white/60">Your journey to wellness begins here</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <LinkCompat href="/#home" className="text-white/70 hover:text-gold transition-colors">
              Home
            </LinkCompat>
            <LinkCompat href="/#services" className="text-white/70 hover:text-gold transition-colors">
              Services
            </LinkCompat>
            <LinkCompat href="/about-me" className="text-white/70 hover:text-gold transition-colors">
              About
            </LinkCompat>
            <LinkCompat href="/#contact" className="text-white/70 hover:text-gold transition-colors">
              Contact
            </LinkCompat>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} The Gift of Peace. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LinkCompat href="/privacy-policy" className="text-white/60 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </LinkCompat>
            <LinkCompat href="/referral-form" className="text-white/60 text-sm hover:text-gold transition-colors">
              Professional Referral Form
            </LinkCompat>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
