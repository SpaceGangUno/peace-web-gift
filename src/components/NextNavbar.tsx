
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LinkCompat from "@/components/LinkCompat";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Books", href: "/books" },
    { name: "About", href: "/about-me" },
    { name: "Contact", href: "/#contact" },
  ];
  
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
            <span className="font-bookmania text-base sm:text-lg md:text-xl font-medium text-emerald-green leading-tight">
              The Gift
            </span>
            <span className="font-bookmania text-base sm:text-lg md:text-xl font-medium text-emerald-green leading-tight">
              of Peace
            </span>
          </div>
        </LinkCompat>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <LinkCompat
              key={item.name}
              href={item.href}
              className="font-bookmania text-sm lg:text-base text-emerald-green hover:text-gold transition-colors"
            >
              {item.name}
            </LinkCompat>
          ))}
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
            className="btn-secondary rounded-full border-creased-khaki text-creased-khaki hover:bg-creased-khaki/10 text-sm lg:text-base py-2 px-4"
          >
            Client Portal
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-emerald-green" />
          ) : (
            <Menu className="h-6 w-6 text-emerald-green" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="p-2">
              <X className="h-6 w-6 text-emerald-green" />
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center space-y-6 p-6">
            {navItems.map((item) => (
              <LinkCompat
                key={item.name}
                href={item.href}
                className="font-bookmania text-xl text-emerald-green py-2"
                onClick={closeMobileMenu}
              >
                {item.name}
              </LinkCompat>
            ))}
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
