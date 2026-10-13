import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  onOpenReservation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenReservation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating actions once user has scrolled past the hero section
      setIsVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3">
      {/* WhatsApp Quick Link */}
      <a
        href="https://wa.me/918584857079?text=Hi%20Cafe%20Lavassa%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20or%20menu%20order."
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform focus:outline-none"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
      </a>

      {/* Direct Phone Call Button */}
      <a
        href="tel:+918584857079"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-lavassa-cream text-lavassa-forest border border-lavassa-cream-dark flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform focus:outline-none"
        title="Call Cafe Lavassa"
        aria-label="Call Cafe Lavassa"
      >
        <Phone className="w-5 h-5 text-lavassa-forest" />
      </a>

      {/* Reserve Pill (Icon on small mobile, pill on sm+) */}
      <button
        onClick={onOpenReservation}
        className="hidden sm:flex items-center gap-2 bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-warm border border-lavassa-amber/40 hover:scale-105 active:scale-95 transition-all min-h-[44px]"
      >
        <Calendar className="w-4 h-4 text-lavassa-amber" />
        <span>Book Table</span>
      </button>

      {/* Mobile-only reserve round button */}
      <button
        onClick={onOpenReservation}
        className="flex sm:hidden w-11 h-11 rounded-full bg-lavassa-forest text-lavassa-amber border border-lavassa-amber/50 items-center justify-center shadow-lg active:scale-95 transition-transform"
        aria-label="Book Table"
      >
        <Calendar className="w-5 h-5" />
      </button>
    </div>
  );
};
