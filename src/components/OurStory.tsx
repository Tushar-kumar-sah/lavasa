import React from 'react';
import { Heart, Sparkles, Coffee, Clock, MapPin } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-lavassa-cream/50 relative overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-lavassa-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-lavassa-amber/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography of Storefront */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-lavassa-cream-dark/80 bg-lavassa-forest-dark group">
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src="/images/lavassa-storefront-real.png"
                  alt="Cafe Lavassa warm entrance and illuminated sign in Behala"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-lavassa-forest-dark via-lavassa-forest-dark/90 to-transparent p-6 sm:p-8 text-lavassa-ivory">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavassa-amber/20 border border-lavassa-amber/40 text-[10px] uppercase tracking-widest text-lavassa-amber font-bold mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>Bhupen Roy Road • Behala, Kolkata</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-lavassa-ivory">
                  Welcome to Cafe Lavassa
                </h3>
                <p className="text-xs text-lavassa-cream/80 font-sans mt-1">
                  Step in through our glass doors, smell freshly ground espresso, and leave the bustle behind.
                </p>
              </div>
            </div>

            {/* Overlapping Decorative Badge */}
            <div className="hidden sm:flex absolute -top-6 -right-6 bg-lavassa-ivory p-5 rounded-2xl shadow-warm border border-lavassa-cream-dark flex-col items-center justify-center text-center w-36">
              <div className="w-10 h-10 rounded-full bg-lavassa-forest text-lavassa-amber flex items-center justify-center mb-1.5">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif font-bold text-lavassa-forest-dark">Fresh Bakes</span>
              <span className="text-[10px] text-lavassa-sage font-sans uppercase tracking-wider">Every Morning</span>
            </div>
          </div>

          {/* Right Column: Brand Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-forest text-xs uppercase tracking-[0.2em] font-medium mb-5 shadow-sm">
              <Heart className="w-3.5 h-3.5 text-lavassa-caramel" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-lavassa-forest-dark tracking-tight leading-[1.15] mb-6">
              A Place to Pause. <br />
              <span className="italic font-normal font-cormorant text-lavassa-caramel">
                A Place to Connect.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-lavassa-coffee/85 font-sans leading-relaxed mb-8">
              <p>
                In the energetic rhythm of South Kolkata, we envisioned a warm, soothing sanctuary where time gently slows down. Located right along Bhupen Roy Road in Behala, <strong>Cafe Lavassa</strong> was built to be your everyday little escape.
              </p>
              <p>
                Step inside and you are immediately welcomed by glowing woven rattan lamps, leafy green plants, comfortable wicker seating, and the rich, comforting fragrance of freshly ground espresso. Whether you are savoring our signature <em>San Sebastián Basque cheesecake</em> with hot melted Belgian chocolate, lingering over an artisan <em>Cortado</em>, or sharing artisanal pizza with close friends, our doors are open to make every visit special.
              </p>
              <p className="font-cormorant text-lg sm:text-xl italic text-lavassa-forest font-semibold">
                “No rush, no pretension — just good coffee, honest bakes, and genuine neighborhood warmth.”
              </p>
            </div>

            {/* Quick Fact Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-lavassa-cream-dark/60">
              <div className="bg-lavassa-ivory p-4 rounded-xl border border-lavassa-cream-dark/60">
                <span className="text-2xl font-serif font-bold text-lavassa-forest-dark block">4.4 ★</span>
                <span className="text-xs text-lavassa-sage font-sans block mt-0.5">Google Rating</span>
              </div>
              <div className="bg-lavassa-ivory p-4 rounded-xl border border-lavassa-cream-dark/60">
                <span className="text-2xl font-serif font-bold text-lavassa-forest-dark block">10:00 AM</span>
                <span className="text-xs text-lavassa-sage font-sans block mt-0.5">To 10:30 PM Daily</span>
              </div>
              <div className="bg-lavassa-ivory p-4 rounded-xl border border-lavassa-cream-dark/60 col-span-2 sm:col-span-1">
                <span className="text-2xl font-serif font-bold text-lavassa-forest-dark block">₹200–400</span>
                <span className="text-xs text-lavassa-sage font-sans block mt-0.5">Avg. per person</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
