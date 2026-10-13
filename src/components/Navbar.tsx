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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-lavassa-ivory/95 backdrop-blur-md shadow-soft py-2.5 sm:py-3 border-b border-lavassa-cream-dark/60 text-lavassa-coffee'
            : 'bg-gradient-to-b from-lavassa-forest-dark/90 via-lavassa-forest-dark/40 to-transparent py-3 sm:py-5 text-lavassa-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark & Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-h-[44px]"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                isScrolled 
                  ? 'bg-lavassa-forest text-lavassa-amber' 
                  : 'bg-lavassa-amber text-lavassa-forest-dark shadow-glow'
              }`}>
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className={`text-base xs:text-lg sm:text-2xl font-serif font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-tight ${
                  isScrolled ? 'text-lavassa-forest-dark' : 'text-lavassa-ivory drop-shadow-sm'
                }`}>
                  CAFE LAVASSA
                </span>
                <span className={`text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.25em] uppercase font-sans font-medium line-clamp-1 ${
                  isScrolled ? 'text-lavassa-caramel' : 'text-lavassa-amber'
                }`}>
                  Café & Bakery • Behala
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

            {/* Header Action Buttons (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-4">
              <a
                href="tel:+918584857079"
                className={`p-2.5 rounded-full transition-colors flex items-center justify-center min-w-[40px] min-h-[40px] ${
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
                className="bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory font-sans text-xs uppercase tracking-widest font-semibold px-4 lg:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 border border-lavassa-amber/40 min-h-[40px]"
              >
                <Calendar className="w-3.5 h-3.5 text-lavassa-amber" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Mobile Controls (Phones) */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenReservation}
                className="bg-lavassa-amber text-lavassa-forest-dark px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm active:scale-95 transition-transform min-h-[36px]"
              >
                Reserve
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors focus:outline-none min-w-[42px] min-h-[42px] flex items-center justify-center ${
                  isScrolled ? 'text-lavassa-forest bg-lavassa-cream/60' : 'text-lavassa-ivory bg-black/20'
                }`}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed inset-x-0 top-0 pt-20 pb-8 px-6 bg-lavassa-ivory border-b border-lavassa-cream-dark shadow-2xl flex flex-col gap-6 text-lavassa-forest max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav list */}
            <nav className="flex flex-col divide-y divide-lavassa-cream-dark/60">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-serif font-bold tracking-wide text-lavassa-forest-dark hover:text-lavassa-caramel py-3.5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-lavassa-amber">→</span>
                </a>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full bg-lavassa-forest text-lavassa-ivory py-3.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-warm active:scale-95 transition-transform"
              >
                <Calendar className="w-4 h-4 text-lavassa-amber" />
                Reserve a Table
              </button>

              <a
                href="tel:+918584857079"
                className="w-full bg-lavassa-cream text-lavassa-coffee py-3.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border border-lavassa-cream-dark active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4 text-lavassa-caramel" />
                Call +91 85848 57079
              </a>
            </div>

            {/* Quick Cafe Info in Drawer */}
            <div className="text-[11px] text-lavassa-sage flex flex-col gap-1.5 pt-2 border-t border-lavassa-cream-dark/60 font-sans">
              <span className="flex items-start gap-1.5 leading-snug">
                <MapPin className="w-3.5 h-3.5 text-lavassa-amber flex-shrink-0 mt-0.5" />
                68A Bhupen Roy Road, Opposite IDFC Bank, Behala
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-lavassa-amber flex-shrink-0" />
                Open Daily: 10:00 AM – 10:30 PM
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
