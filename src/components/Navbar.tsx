
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-3 sm:py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img
            src="/lovable-uploads/d88841e0-4a57-4364-87af-91cbdd1142cf.png"
            alt="The Gift of Peace"
            className="h-10 sm:h-12 md:h-14"
          />
          <div className="ml-2 sm:ml-3 flex flex-col">
            <span
              className={`font-bookmania text-base sm:text-lg md:text-xl font-medium ${
                isScrolled ? "text-emerald-green" : "text-creased-khaki"
              } leading-tight`}
            >
              The Gift
            </span>
            <span
              className={`font-bookmania text-base sm:text-lg md:text-xl font-medium ${
                isScrolled ? "text-emerald-green" : "text-creased-khaki"
              } leading-tight`}
            >
              of Peace
            </span>
          </div>
        </Link>

        <DesktopNavbar isScrolled={isScrolled} />

        {/* Mobile menu button */}
        {!isMobileMenuOpen && (
          <button
            className={`md:hidden p-2 z-[200]`}
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <Menu
              className={`h-6 w-6 ${
                isScrolled ? "text-emerald-green" : "text-creased-khaki"
              }`}
            />
          </button>
        )}
      </div>

      {isMobileMenuOpen && <MobileNavbar closeMobileMenu={closeMobileMenu} />}
    </header>
  );
};

export default Navbar;

