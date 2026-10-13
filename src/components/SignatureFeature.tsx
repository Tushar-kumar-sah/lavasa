import React from 'react';
import { Sparkles, Utensils, Coffee, CheckCircle2 } from 'lucide-react';

interface SignatureFeatureProps {
  onOpenReservation: () => void;
}

export const SignatureFeature: React.FC<SignatureFeatureProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-24 sm:py-32 bg-lavassa-forest-dark text-lavassa-ivory relative overflow-hidden">
      {/* Decorative Warm Lighting Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-lavassa-amber/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-lavassa-sage/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavassa-forest border border-lavassa-amber/30 text-lavassa-amber text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lavassa-amber" />
            <span>Signature Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-lavassa-ivory">
            Made for Your Little Moments.
          </h2>
          <p className="text-lg sm:text-xl text-lavassa-cream/85 font-cormorant italic max-w-2xl mx-auto leading-relaxed">
            “From your first sip of coffee to that final bite of something sweet, discover the simple pleasures that make every visit special.”
          </p>
        </div>

        {/* Feature 1: The Iconic San Sebastián Basque Cheesecake with Warm Belgian Chocolate Pour */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 bg-lavassa-forest/40 p-8 sm:p-12 rounded-3xl border border-lavassa-forest/80 backdrop-blur-sm">
          
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-lavassa-amber text-xs uppercase tracking-[0.25em] font-bold mb-3">
              <span>Behala’s Viral Sensation • ₹250</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-lavassa-ivory mb-4 leading-tight">
              The San Sebastián Burnt Basque Cheesecake
            </h3>
            <p className="text-sm sm:text-base text-lavassa-cream/80 font-sans leading-relaxed mb-6">
              Baked at high heat to achieve that signature caramelized, burnt exterior while retaining a decadent, custard-like molten center. Served with a dramatic, table-side pour of warm Belgian milk or dark chocolate that coats each velvety bite.
            </p>

            <ul className="space-y-3 mb-8 text-xs sm:text-sm text-lavassa-cream/90 font-sans">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lavassa-amber flex-shrink-0" />
                <span>Baked fresh daily in-house using premium cream cheese</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lavassa-amber flex-shrink-0" />
                <span>Rich melted Belgian chocolate cascade poured warm</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lavassa-amber flex-shrink-0" />
                <span>Perfect pair with our Spanish Cortado or iced cold brew</span>
              </li>
            </ul>

            <button
              onClick={onOpenReservation}
              className="bg-lavassa-amber hover:bg-lavassa-amber-light text-lavassa-forest-dark px-7 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-glow transition-all duration-300 hover:scale-105"
            >
              Order At Your Table
            </button>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-lavassa-amber/30 aspect-[4/3] group">
              <img
                src="/images/chocolate-drip.jpg"
                alt="San Sebastian Cheesecake with warm chocolate pour at Cafe Lavassa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-lavassa-forest-dark/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-lavassa-amber/40 text-xs font-serif font-bold text-lavassa-amber">
                Signature Bake
              </div>
            </div>
          </div>

        </div>

        {/* Feature 2: Specialty Cortado & Irish Hot Coffee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-lavassa-forest/40 p-8 sm:p-12 rounded-3xl border border-lavassa-forest/80 backdrop-blur-sm">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-lavassa-amber/30 aspect-[4/3] group">
              <img
                src="/images/cortado.jpg"
                alt="Specialty Cortado in Spanish glassware at Cafe Lavassa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-lavassa-forest-dark/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-lavassa-amber/40 text-xs font-serif font-bold text-lavassa-amber">
                Barista Craft
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-lavassa-amber text-xs uppercase tracking-[0.25em] font-bold mb-3">
              <Coffee className="w-3.5 h-3.5" />
              <span>Specialty Espresso Bar</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-lavassa-ivory mb-4 leading-tight">
              The Artisan Cortado & Irish Warmth
            </h3>
            <p className="text-sm sm:text-base text-lavassa-cream/80 font-sans leading-relaxed mb-6">
              Our coffee begins with ethically sourced Indian Arabica beans, ground to order and pulled under precise pressure. Whether you crave the bold, equal-ratio harmony of a Spanish Cortado or the cozy, fragrant comfort of our velvety Irish Hot Coffee, each cup is an invitation to pause.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-lavassa-forest/70 p-4 rounded-xl border border-lavassa-forest-dark">
                <span className="text-xs text-lavassa-amber font-mono font-bold block">₹160</span>
                <span className="text-sm font-serif font-bold text-lavassa-ivory block mt-0.5">Artisan Cortado</span>
                <span className="text-[11px] text-lavassa-cream/70 font-sans block mt-1">1:1 espresso to steamed milk</span>
              </div>

              <div className="bg-lavassa-forest/70 p-4 rounded-xl border border-lavassa-forest-dark">
                <span className="text-xs text-lavassa-amber font-mono font-bold block">₹190</span>
                <span className="text-sm font-serif font-bold text-lavassa-ivory block mt-0.5">Irish Hot Coffee</span>
                <span className="text-[11px] text-lavassa-cream/70 font-sans block mt-1">Warm spices & floating cream</span>
              </div>
            </div>

            <button
              onClick={() => {
                const menuEl = document.querySelector('#menu');
                if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent hover:bg-lavassa-ivory/10 text-lavassa-ivory border border-lavassa-amber/60 hover:border-lavassa-amber px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              Browse All Beverages
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
