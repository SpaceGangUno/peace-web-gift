
import React from "react";
import { Link } from "react-router-dom";
import LinkCompat from "../LinkCompat";

interface DesktopNavbarProps {
  isScrolled: boolean;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isScrolled }) => {
  const linkClass = isScrolled
    ? "text-emerald-green hover:text-gold"
    : "text-creased-khaki hover:text-white";

  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
      <button
        onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/';
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className={`font-bookmania text-sm lg:text-base ${linkClass} transition-colors`}
      >
        Home
      </button>

      <LinkCompat
        href="/#services"
        className={`font-bookmania text-sm lg:text-base ${linkClass} transition-colors`}
      >
        Services
      </LinkCompat>

      <Link
        to="/books"
        className={`font-bookmania text-sm lg:text-base ${linkClass} transition-colors`}
      >
        Books
      </Link>

      <Link
        to="/about-me"
        className={`font-bookmania text-sm lg:text-base ${linkClass} transition-colors`}
      >
        About
      </Link>

      {/* Contact link removed as requested */}

      <Link
        to="/schedule"
        className="btn-primary rounded-full text-sm lg:text-base py-2 px-4"
      >
        Book Consult
      </Link>

      <a
        href="https://thegiftofpeacecw.clientsecure.me/"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-secondary rounded-full ${linkClass} text-sm lg:text-base py-2 px-4`}
      >
        Client Portal
      </a>
    </nav>
  );
};

export default DesktopNavbar;
