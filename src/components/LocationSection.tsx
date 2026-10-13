import React, { useMemo } from 'react';
import { MapPin, Navigation, Phone, Clock, Compass, CheckCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const address = "68A, Bhupen Roy Road, opposite IDFC FIRST BANK, James Long Road, Jadu Colony, Behala, Kolkata, West Bengal 700034";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=68A+Bhupen+Roy+Road+Behala+Kolkata+West+Bengal+700034";

  // Check if cafe is currently open based on Indian Standard Time (10:00 AM - 10:30 PM)
  const openStatus = useMemo(() => {
    try {
      const now = new Date();
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const openMinutes = 10 * 60; // 10:00 AM
      const closeMinutes = 22 * 60 + 30; // 10:30 PM

      if (totalMinutes >= openMinutes && totalMinutes < closeMinutes) {
        return {
          isOpen: true,
          label: 'Open Now',
          sub: 'Closes at 10:30 PM IST',
          badgeClass: 'bg-green-100 text-green-800 border-green-300'
        };
      } else {
        return {
          isOpen: false,
          label: 'Closed Now',
          sub: 'Opens at 10:00 AM IST tomorrow',
          badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
        };
      }
    } catch {
      return {
        isOpen: true,
        label: 'Open Daily',
        sub: '10:00 AM – 10:30 PM',
        badgeClass: 'bg-green-100 text-green-800 border-green-300'
      };
    }
  }, []);

  return (
    <section id="location" className="py-20 sm:py-32 bg-lavassa-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-lavassa-cream border border-lavassa-cream-dark text-lavassa-forest text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium mb-3 sm:mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-lavassa-amber" />
            <span>Find Your Sanctuary</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-3 sm:mb-5">
            Visit Cafe Lavassa.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-lavassa-coffee/80 font-sans max-w-xl mx-auto leading-relaxed">
            Conveniently situated along Bhupen Roy Road, opposite IDFC First Bank in Behala, Kolkata.
          </p>
        </div>

        {/* Two-Column Grid: Map & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-stretch">
          
          {/* Left Column: Interactive Map Embed with Custom Card */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm border border-lavassa-cream-dark h-[280px] xs:h-[340px] sm:h-[420px] lg:h-[480px] w-full bg-lavassa-cream">
              {/* Embedded Google Map */}
              <iframe
                title="Cafe Lavassa Behala Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.082710378619!2d88.3182101!3d22.4988921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a0004ff972b%3A0xc3fa5201da42e971!2s68A%2C%20Bhupen%20Roy%20Rd%2C%20Muradpur%2C%20Jadu%20Colony%2C%20Behala%2C%20Kolkata%2C%20West%20Bengal%20700034!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[0.15] contrast-[1.05]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm bg-lavassa-ivory/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-lavassa-cream-dark">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold border uppercase tracking-wider ${openStatus.badgeClass}`}>
                    {openStatus.label}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-lavassa-sage font-sans">{openStatus.sub}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-lavassa-forest-dark">
                  Cafe Lavassa (Behala)
                </h4>
                <p className="text-[10px] sm:text-[11px] text-lavassa-coffee/80 font-sans mt-0.5">
                  Opposite IDFC First Bank, Bhupen Roy Road
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Hours, Contact, & Direction Links */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-lavassa-cream/40 rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 border border-lavassa-cream-dark shadow-soft">
            
            <div className="space-y-4 sm:space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-lavassa-caramel font-sans block mb-0.5">
                    Address
                  </span>
                  <h3 className="text-sm sm:text-lg font-serif font-bold text-lavassa-forest-dark leading-snug">
                    Cafe Lavassa
                  </h3>
                  <p className="text-xs sm:text-sm text-lavassa-coffee/85 font-sans leading-relaxed mt-1">
                    {address}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-lavassa-sage font-sans mt-1">
                    Landmarks: Opposite IDFC FIRST BANK • 2 min from James Long Road • Near Behala Chowrasta
                  </p>
                </div>
              </div>

              {/* Opening Hours Block */}
              <div className="flex items-start gap-3.5 sm:gap-4 pt-3.5 sm:pt-4 border-t border-lavassa-cream-dark/60">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-lavassa-caramel font-sans block mb-0.5">
                    Operating Hours
                  </span>
                  <div className="space-y-1 font-sans text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-lavassa-coffee">Monday – Sunday:</span>
                      <span className="text-lavassa-forest-dark font-mono font-bold">10:00 AM – 10:30 PM</span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-lavassa-sage font-sans mt-1 block">
                    Breakfast, lunch, high tea, evening bakes & late dinner served daily.
                  </span>
                </div>
              </div>

              {/* Contact Telephone Block */}
              <div className="flex items-start gap-3.5 sm:gap-4 pt-3.5 sm:pt-4 border-t border-lavassa-cream-dark/60">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-lavassa-caramel font-sans block mb-0.5">
                    Direct Telephone
                  </span>
                  <a
                    href="tel:+918584857079"
                    className="text-base sm:text-lg font-serif font-bold text-lavassa-forest-dark hover:text-lavassa-caramel transition-colors block"
                  >
                    +91 85848 57079
                  </a>
                  <span className="text-[10px] sm:text-[11px] text-lavassa-sage font-sans">
                    Call for reservations, takeaway bakes, or directional assistance.
                  </span>
                </div>
              </div>

              {/* Cafe Amenities */}
              <div className="pt-3.5 sm:pt-4 border-t border-lavassa-cream-dark/60">
                <span className="text-[10px] uppercase tracking-wider font-bold text-lavassa-sage font-sans block mb-2">
                  Cafe Highlights & Amenities
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-sans">
                  <span className="px-2.5 py-1 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-coffee flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" /> Dine-in
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-coffee flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" /> Takeaway Bakes
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-coffee flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" /> Air Conditioned
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-coffee flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" /> Cozy Ambience
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-coffee flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" /> Swiggy & Zomato
                  </span>
                </div>
              </div>

            </div>

            {/* Navigation & Directions Action Buttons */}
            <div className="pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-lavassa-cream-dark/80 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-bold shadow-warm flex items-center justify-center gap-2 transition-transform hover:scale-105 border border-lavassa-amber/40 min-h-[48px]"
              >
                <Navigation className="w-4 h-4 text-lavassa-amber" />
                <span>Get Directions (Maps)</span>
              </a>

              <a
                href="tel:+918584857079"
                className="bg-lavassa-ivory hover:bg-lavassa-cream text-lavassa-forest py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-bold border border-lavassa-cream-dark flex items-center justify-center gap-2 transition-colors min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-lavassa-caramel" />
                <span>Call Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
