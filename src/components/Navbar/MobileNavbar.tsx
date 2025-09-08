
import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import LinkCompat from "../LinkCompat";

interface MobileNavbarProps {
  closeMobileMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ closeMobileMenu }) => {
  return (
    <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-[150] h-screen overflow-y-auto">
      <button
        className="absolute top-4 right-4 p-2 z-[200]"
        onClick={closeMobileMenu}
        aria-label="Close menu"
      >
        <X className="h-8 w-8 text-emerald-green" />
      </button>
      <div className="flex flex-col items-center justify-center space-y-6 p-6 h-full">
        <button
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/';
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
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

        <Link
          to="/books"
          className="font-bookmania text-xl text-emerald-green py-2"
          onClick={closeMobileMenu}
        >
          Books
        </Link>

        <Link
          to="/about-me"
          className="font-bookmania text-xl text-emerald-green py-2"
          onClick={closeMobileMenu}
        >
          About
        </Link>

        {/* Contact link removed from mobile menu */}

        <Link
          to="/schedule"
          className="btn-primary w-full max-w-xs text-center rounded-full py-3 mt-4"
          onClick={closeMobileMenu}
        >
          Book Consult
        </Link>

        <a
          href="https://thegiftofpeacecw.clientsecure.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full max-w-xs text-center rounded-full border-creased-khaki text-creased-khaki py-3"
          onClick={closeMobileMenu}
        >
          Client Portal
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;
