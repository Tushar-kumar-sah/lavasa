import React from 'react';
import { ArrowDown, Star, Clock, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const scrollToMenu = () => {
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const expEl = document.querySelector('#experience');
    if (expEl) {
      expEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-lavassa-forest-dark">
      {/* Background Hero Image with Warm Amber & Botanical Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-botanical-cafe.jpg"
          alt="Cafe Lavassa warm botanical interior with glowing rattan lights"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Cinematic Multi-layer Overlay for Contrast & Luxury Warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-lavassa-forest-dark via-lavassa-forest-dark/70 to-lavassa-forest-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-lavassa-forest-dark/85 via-lavassa-forest-dark/50 to-transparent" />
        {/* Subtle Warm Amber Glow Gradient */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lavassa-amber/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Message & Editorial Heading */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Top Botanical Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavassa-ivory/15 backdrop-blur-md border border-lavassa-amber/40 text-lavassa-cream text-xs uppercase tracking-[0.2em] font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-lavassa-amber animate-spin duration-[6000ms]" />
              <span>Botanical Sanctuary • Behala, Kolkata</span>
            </div>

            {/* Main Brand Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-lavassa-ivory tracking-[0.08em] uppercase leading-[1.05] mb-6 drop-shadow-md">
              CAFE <span className="text-lavassa-amber italic font-normal font-cormorant">LAVASSA</span>
            </h1>

            {/* Signature Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-lavassa-cream-dark mb-4 tracking-wide font-light">
              “Your Little Escape, One Cup at a Time.”
            </p>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-lavassa-ivory/85 max-w-2xl font-sans font-light leading-relaxed mb-10">
              Good coffee, comforting food, and moments worth slowing down for. Step into our warm botanical garden café filled with glowing rattan lights, fresh European patisserie, and genuine Kolkata warmth.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={scrollToMenu}
                className="bg-lavassa-amber hover:bg-lavassa-amber-light text-lavassa-forest-dark font-sans text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <UtensilsCrossed className="w-4 h-4 text-lavassa-forest-dark group-hover:rotate-12 transition-transform" />
                <span>Explore Our Menu</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="bg-lavassa-ivory/10 hover:bg-lavassa-ivory/20 text-lavassa-ivory border border-lavassa-ivory/30 hover:border-lavassa-amber font-sans text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Quick Live Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-lavassa-ivory/15 text-xs text-lavassa-cream/90 font-sans">
              <div className="flex items-center gap-2">
                <div className="flex text-lavassa-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-lavassa-amber text-lavassa-amber" />
                  ))}
                </div>
                <span className="font-semibold text-lavassa-ivory">4.4 ★</span>
                <span className="text-lavassa-cream/70">(268+ Google Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-lavassa-amber" />
                <span>Open Daily: 10 AM – 10:30 PM</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-lavassa-amber" />
                <span>Bhupen Roy Rd, Behala</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Card Highlighting Real Storefront & Basque Cheesecake */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-5 items-end">
            
            {/* Real Storefront Floating Editorial Badge */}
            <div className="relative group w-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-lavassa-amber/40 bg-lavassa-forest-dark transform hover:-translate-y-1 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/lavassa-storefront-real.png"
                  alt="Cafe Lavassa Behala storefront with glowing sign"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-lavassa-forest-dark via-lavassa-forest-dark/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase tracking-widest text-lavassa-amber font-semibold">
                  Authentic Destination
                </span>
                <h3 className="text-sm font-serif font-bold text-lavassa-ivory">
                  Lavassa Café & Bakery
                </h3>
                <p className="text-[11px] text-lavassa-cream/80 font-sans mt-0.5">
                  68A Bhupen Roy Road, Opposite IDFC Bank
                </p>
              </div>
            </div>

            {/* Secondary Floating Feature: Basque Cheesecake Drip Preview */}
            <div className="w-64 bg-lavassa-ivory/95 backdrop-blur-md rounded-xl p-3 shadow-warm border border-lavassa-cream-dark/60 flex items-center gap-3">
              <img
                src="/images/san-sebastian.jpg"
                alt="San Sebastian Cheesecake"
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-lavassa-caramel font-bold">
                  City Favourite • ₹250
                </span>
                <span className="text-xs font-serif font-bold text-lavassa-coffee line-clamp-1">
                  San Sebastián Cheesecake
                </span>
                <span className="text-[10px] text-lavassa-sage font-sans">
                  Warm Belgian chocolate pour
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Delicate Bottom Scroll Indicator */}
      <button
        onClick={scrollToExperience}
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-lavassa-cream/70 hover:text-lavassa-amber transition-colors group cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-lavassa-amber" />
      </button>
    </section>
  );
};
