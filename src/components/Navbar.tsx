
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/d88841e0-4a57-4364-87af-91cbdd1142cf.png" 
            alt="The Gift of Peace" 
            className="h-12 md:h-14" 
          />
          <div className="ml-3 flex flex-col">
            <span className="font-bookmania text-lg md:text-xl font-medium text-emerald-green leading-tight">
              The Gift
            </span>
            <span className="font-bookmania text-lg md:text-xl font-medium text-emerald-green leading-tight">
              of Peace
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="font-bookmania text-emerald-green hover:text-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/schedule"
            className="btn-primary rounded-full"
          >
            Book Session
          </Link>
          <Link
            to="/portal"
            className="btn-secondary rounded-full border-creased-khaki text-creased-khaki hover:bg-creased-khaki/10"
          >
            Client Portal
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-emerald-green" />
          ) : (
            <Menu className="h-6 w-6 text-emerald-green" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-bookmania text-emerald-green py-2"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/schedule"
              className="btn-primary inline-block text-center rounded-full"
              onClick={toggleMobileMenu}
            >
              Book Session
            </Link>
            <Link
              to="/portal"
              className="btn-secondary inline-block text-center rounded-full border-creased-khaki text-creased-khaki hover:bg-creased-khaki/10"
              onClick={toggleMobileMenu}
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
