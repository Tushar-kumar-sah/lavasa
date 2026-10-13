import React from 'react';
import { Coffee, MapPin, Phone, Clock, Compass, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-lavassa-forest-dark text-lavassa-ivory relative pt-20 pb-12 overflow-hidden border-t-2 border-lavassa-amber/40">
      {/* Decorative Botanical Ambient Shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lavassa-amber/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-lavassa-sage/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-lavassa-ivory/15">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-lavassa-amber text-lavassa-forest-dark flex items-center justify-center shadow-glow">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-[0.15em] uppercase text-lavassa-ivory">
                CAFE LAVASSA
              </span>
            </div>

            <p className="text-sm font-serif italic text-lavassa-cream-dark mb-4">
              “Your Little Escape, One Cup at a Time.”
            </p>

            <p className="text-xs text-lavassa-cream/80 font-sans leading-relaxed mb-6 max-w-sm">
              Modern botanical café and artisan bakery nestled in Behala, Kolkata. Warm glowing rattan lighting, specialty espresso, viral San Sebastián cheesecakes, and European patisserie.
            </p>

            {/* Social Link */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/cafelavassa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-lavassa-forest hover:bg-lavassa-forest-dark border border-lavassa-amber/30 text-xs font-sans text-lavassa-cream hover:text-lavassa-amber transition-all group"
              >
                <svg className="w-4 h-4 text-lavassa-amber group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@cafelavassa</span>
              </a>

              <a
                href="https://www.google.com/search?q=cafe+lavassa+kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-lavassa-forest hover:bg-lavassa-forest-dark border border-lavassa-amber/30 text-xs font-sans text-lavassa-cream hover:text-lavassa-amber transition-all"
              >
                <span>Google 4.4 ★</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-7) */}
          <div className="lg:col-span-3 flex flex-col items-start font-sans">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-lavassa-amber mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-lavassa-cream/80">
              <li>
                <a href="#home" className="hover:text-lavassa-amber transition-colors">Home & Atmosphere</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-lavassa-amber transition-colors">The Lavassa Experience</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-lavassa-amber transition-colors">Signature Food & Coffee Menu</a>
              </li>
              <li>
                <a href="#story" className="hover:text-lavassa-amber transition-colors">Our Story & Philosophy</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-lavassa-amber transition-colors">Photo Gallery & Interiors</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-lavassa-amber transition-colors">Guest Reviews & Ratings</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-lavassa-amber transition-colors">Table Reservations</a>
              </li>
              <li>
                <a href="#location" className="hover:text-lavassa-amber transition-colors">Location & Directions</a>
              </li>
            </ul>
          </div>

          {/* Location & Hours (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col items-start font-sans">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-lavassa-amber mb-5">
              Find & Contact Us
            </h4>

            <div className="space-y-4 text-xs text-lavassa-cream/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lavassa-amber flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-lavassa-ivory block">Cafe Lavassa</span>
                  <span>68A, Bhupen Roy Road, Opposite IDFC FIRST BANK, James Long Road, Jadu Colony, Behala, Kolkata, West Bengal 700034</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lavassa-amber flex-shrink-0" />
                <div>
                  <a href="tel:+918584857079" className="hover:text-lavassa-amber font-mono text-sm transition-colors font-bold text-lavassa-ivory">
                    +91 85848 57079
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-lavassa-amber flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-lavassa-ivory block">Dine-in & Takeaway:</span>
                  <span>Monday – Sunday: 10:00 AM – 10:30 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-lavassa-ivory/10 w-full flex items-center justify-between">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=68A+Bhupen+Roy+Road+Behala+Kolkata+West+Bengal+700034"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-lavassa-amber hover:underline flex items-center gap-1 font-semibold"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Get Google Maps Route →</span>
              </a>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-lavassa-forest hover:bg-lavassa-forest-dark border border-lavassa-amber/40 text-lavassa-amber transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-lavassa-cream/60 font-sans">
          <p>© {new Date().getFullYear()} Cafe Lavassa (Lavassa Café & Bakery). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for coffee lovers in Behala, Kolkata.
          </p>
        </div>

      </div>
    </footer>
  );
};
