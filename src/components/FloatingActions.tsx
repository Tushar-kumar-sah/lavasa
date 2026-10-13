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
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* WhatsApp Quick Link */}
      <a
        href="https://wa.me/918584857079?text=Hi%20Cafe%20Lavassa%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20or%20menu%20order."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
      </a>

      {/* Direct Phone Call Button */}
      <a
        href="tel:+918584857079"
        className="w-12 h-12 rounded-full bg-lavassa-cream text-lavassa-forest border border-lavassa-cream-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none"
        title="Call Cafe Lavassa"
        aria-label="Call Cafe Lavassa"
      >
        <Phone className="w-5 h-5 text-lavassa-forest" />
      </a>

      {/* Reserve Pill */}
      <button
        onClick={onOpenReservation}
        className="hidden sm:flex items-center gap-2 bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-warm border border-lavassa-amber/40 hover:scale-105 transition-all"
      >
        <Calendar className="w-4 h-4 text-lavassa-amber" />
        <span>Book Table</span>
      </button>
    </div>
  );
};
