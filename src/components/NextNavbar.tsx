"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LinkCompat from "@/components/LinkCompat";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case the page is already scrolled
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling on the body when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = '';
    }
    
    // Cleanup function to always re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    // Close the mobile menu if it's open
    closeMobileMenu();
    
    // If we're not on the homepage, navigate to homepage first
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we're already on the homepage, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clientPortalUrl = "https://thegiftofpeacecw.clientsecure.me/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-3 sm:py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <LinkCompat href="/" className="flex items-center" onClick={closeMobileMenu}>
          <img 
            src="/lovable-uploads/d88841e0-4a57-4364-87af-91cbdd1142cf.png" 
            alt="The Gift of Peace" 
            className="h-10 sm:h-12 md:h-14" 
          />
          <div className="ml-2 sm:ml-3 flex flex-col">
            <span className={`font-bookmania text-base sm:text-lg md:text-xl font-medium ${isScrolled ? 'text-emerald-green' : 'text-creased-khaki'} leading-tight`}>
              The Gift
            </span>
            <span className={`font-bookmania text-base sm:text-lg md:text-xl font-medium ${isScrolled ? 'text-emerald-green' : 'text-creased-khaki'} leading-tight`}>
              of Peace
            </span>
          </div>
        </LinkCompat>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <button
            onClick={() => {
              if (pathname !== '/') {
                window.location.href = '/';
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`font-bookmania text-sm lg:text-base ${isScrolled ? 'text-emerald-green hover:text-gold' : 'text-creased-khaki hover:text-white'} transition-colors`}
          >
            Home
          </button>
          
          <LinkCompat
            href="/#services"
            className={`font-bookmania text-sm lg:text-base ${isScrolled ? 'text-emerald-green hover:text-gold' : 'text-creased-khaki hover:text-white'} transition-colors`}
          >
            Services
          </LinkCompat>
          
          <LinkCompat
            href="/books"
            className={`font-bookmania text-sm lg:text-base ${isScrolled ? 'text-emerald-green hover:text-gold' : 'text-creased-khaki hover:text-white'} transition-colors`}
          >
            Books
          </LinkCompat>
          
          <LinkCompat
            href="/about-me"
            className={`font-bookmania text-sm lg:text-base ${isScrolled ? 'text-emerald-green hover:text-gold' : 'text-creased-khaki hover:text-white'} transition-colors`}
          >
            About
          </LinkCompat>
          
          <LinkCompat
            href="/#contact"
            className={`font-bookmania text-sm lg:text-base ${isScrolled ? 'text-emerald-green hover:text-gold' : 'text-creased-khaki hover:text-white'} transition-colors`}
          >
            Contact
          </LinkCompat>
          
          <LinkCompat
            href="/schedule"
            className="btn-primary rounded-full text-sm lg:text-base py-2 px-4"
          >
            Book Consult
          </LinkCompat>
          
          <a
            href={clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-secondary rounded-full ${isScrolled ? 'border-creased-khaki text-creased-khaki hover:bg-creased-khaki/10' : 'border-creased-khaki text-creased-khaki hover:bg-creased-khaki/10'} text-sm lg:text-base py-2 px-4`}
          >
            Client Portal
          </a>
        </nav>

        <button 
          className={`md:hidden p-2 z-[200] ${isMobileMenuOpen ? 'invisible' : ''}`} 
          onClick={toggleMobileMenu} 
          aria-label="Open menu"
        >
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-emerald-green' : 'text-creased-khaki'}`} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-[150] h-screen overflow-y-auto">
          <button 
            className="absolute top-4 right-4 p-2 z-[200]" 
            onClick={toggleMobileMenu} 
            aria-label="Close menu"
          >
            <X className={`h-8 w-8 text-emerald-green`} />
          </button>
          <div className="flex flex-col items-center justify-center space-y-6 p-6 h-full">
            <button
              onClick={() => {
                if (pathname !== '/') {
                  window.location.href = '/';
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  closeMobileMenu();
                }
              }}
              className="font-bookmania text-xl text-emerald-green py-2"
            >
              Home
            </button>
            
            <LinkCompat
              href="/#services"
              className="font-bookmania text-xl text-emerald-green py-2"
              onClick={closeMobileMenu}
            >
              Services
            </LinkCompat>
            
            <LinkCompat
              href="/books"
              className="font-bookmania text-xl text-emerald-green py-2"
              onClick={closeMobileMenu}
            >
              Books
            </LinkCompat>
            
            <LinkCompat
              href="/about-me"
              className="font-bookmania text-xl text-emerald-green py-2"
              onClick={closeMobileMenu}
            >
              About
            </LinkCompat>
            
            <LinkCompat
              href="/#contact"
              className="font-bookmania text-xl text-emerald-green py-2"
              onClick={closeMobileMenu}
            >
              Contact
            </LinkCompat>
            
            <LinkCompat
              href="/schedule"
              className="btn-primary w-full max-w-xs text-center rounded-full py-3 mt-4"
              onClick={closeMobileMenu}
            >
              Book Consult
            </LinkCompat>
            <a
              href={clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full max-w-xs text-center rounded-full border-creased-khaki text-creased-khaki py-3"
              onClick={closeMobileMenu}
            >
              Client Portal
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
