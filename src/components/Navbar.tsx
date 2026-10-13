import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-lavassa-ivory/95 backdrop-blur-md shadow-soft py-3 border-b border-lavassa-cream-dark/60 text-lavassa-coffee'
          : 'bg-gradient-to-b from-lavassa-forest-dark/80 via-lavassa-forest-dark/40 to-transparent py-5 text-lavassa-ivory'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-lavassa-forest text-lavassa-amber' 
                : 'bg-lavassa-amber text-lavassa-forest-dark shadow-glow'
            }`}>
              <Coffee className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl sm:text-2xl font-serif font-bold tracking-[0.2em] uppercase leading-tight ${
                isScrolled ? 'text-lavassa-forest-dark' : 'text-lavassa-ivory drop-shadow-sm'
              }`}>
                CAFE LAVASSA
              </span>
              <span className={`text-[10px] tracking-[0.25em] uppercase font-sans font-medium ${
                isScrolled ? 'text-lavassa-caramel' : 'text-lavassa-amber'
              }`}>
                Café & Artisan Bakery • Behala
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wider uppercase transition-colors relative py-1 hover:text-lavassa-amber ${
                  isScrolled ? 'text-lavassa-coffee hover:text-lavassa-caramel' : 'text-lavassa-ivory/90 hover:text-lavassa-amber'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+918584857079"
              className={`p-2.5 rounded-full transition-colors flex items-center justify-center ${
                isScrolled
                  ? 'bg-lavassa-cream text-lavassa-forest hover:bg-lavassa-cream-dark'
                  : 'bg-lavassa-forest/60 text-lavassa-ivory hover:bg-lavassa-forest'
              }`}
              title="Call Cafe Lavassa: +91 85848 57079"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenReservation}
              className="bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory font-sans text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 border border-lavassa-amber/40"
            >
              <Calendar className="w-3.5 h-3.5 text-lavassa-amber" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenReservation}
              className="bg-lavassa-amber text-lavassa-forest-dark px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm"
            >
              Reserve
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? 'text-lavassa-forest' : 'text-lavassa-ivory'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-full bg-lavassa-ivory/98 backdrop-blur-lg border-b border-lavassa-cream-dark shadow-warm px-6 py-8 flex flex-col gap-6 text-lavassa-forest">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-serif font-semibold tracking-wide text-lavassa-coffee hover:text-lavassa-caramel py-1 border-b border-lavassa-cream-dark/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full bg-lavassa-forest text-lavassa-ivory py-3 rounded-full text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-warm"
            >
              <Calendar className="w-4 h-4 text-lavassa-amber" />
              Reserve a Table
            </button>

            <a
              href="tel:+918584857079"
              className="w-full bg-lavassa-cream text-lavassa-coffee py-3 rounded-full text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 border border-lavassa-cream-dark"
            >
              <Phone className="w-4 h-4 text-lavassa-caramel" />
              Call +91 85848 57079
            </a>
          </div>

          <div className="text-xs text-lavassa-sage flex flex-col gap-1 pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-lavassa-amber" />
              68A Bhupen Roy Road, Opposite IDFC First Bank, Behala
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-lavassa-amber" />
              Open Daily: 10:00 AM – 10:30 PM
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
