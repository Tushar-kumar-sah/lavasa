import React from 'react';
import { Sparkles, Coffee, Heart, Leaf, SunMedium } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-lavassa-ivory bg-botanical-pattern relative overflow-hidden">
      {/* Decorative Botanical Ambient Shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-lavassa-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-lavassa-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lavassa-cream border border-lavassa-cream-dark text-lavassa-forest text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Leaf className="w-3.5 h-3.5 text-lavassa-sage" />
            <span>The Lavassa Atmosphere</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-6">
            More Than Just a Café.
          </h2>
          <p className="text-lg sm:text-xl text-lavassa-coffee/85 font-cormorant italic max-w-2xl mx-auto leading-relaxed">
            “A welcoming corner to savour your favourite coffee, share a delicious meal, catch up with friends, or simply take a moment for yourself.”
          </p>
        </div>

        {/* Editorial Composition: Magazine-Style Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Main Hero Photograph (Large) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-warm border border-lavassa-cream-dark/60 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/botanical-interior.jpg"
                alt="Cafe Lavassa botanical dining area with rattan lights and greenery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavassa-forest-dark/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-lavassa-amber text-xs uppercase tracking-[0.2em] font-bold mb-1">
                  Ambiance & Interiors
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-lavassa-ivory font-bold">
                  Warm Rattan Glow & Verdant Foliage
                </h3>
                <p className="text-xs sm:text-sm text-lavassa-cream/80 font-sans mt-1 max-w-md">
                  Woven amber pendant lights, delicate hanging ferns, and natural earthy textures designed to create an immediate feeling of calm.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Photo: Real Storefront Facade Detail */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-lavassa-ivory bg-lavassa-forest-dark transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/lavassa-storefront-real.png"
                  alt="Cafe Lavassa storefront illuminated"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-2.5 bg-lavassa-forest text-center">
                <p className="text-[10px] text-lavassa-amber uppercase tracking-wider font-bold">
                  Behala Landmark
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Two Supporting Images & Editorial Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            
            {/* Supporting Image 1: White Wicker Chairs & Sunlit Corner */}
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-lavassa-cream-dark/60 aspect-[16/9] group">
              <img
                src="/images/wicker-patio.jpg"
                alt="White wicker seating and cozy cafe textures"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavassa-coffee/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="text-xs font-serif font-bold text-lavassa-ivory">
                    Natural Textures & White Wicker Seating
                  </span>
                  <p className="text-[11px] text-lavassa-cream/80 font-sans">
                    Comfortable, sun-dappled seating made for lingering conversations.
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting Image 2: Table Setting with Fresh Pastries & Coffee */}
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-lavassa-cream-dark/60 aspect-[16/9] group">
              <img
                src="/images/cozy-table.jpg"
                alt="Cafe Lavassa cozy dining table with coffee and food"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavassa-coffee/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="text-xs font-serif font-bold text-lavassa-ivory">
                    Artisan Coffee & Morning Bakes
                  </span>
                  <p className="text-[11px] text-lavassa-cream/80 font-sans">
                    From freshly extracted cortados to warm brioche bombolinis.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Architectural & Brand Experience Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-lavassa-cream/60 hover:bg-lavassa-cream rounded-2xl p-6 border border-lavassa-cream-dark/60 transition-all duration-300 hover:shadow-soft group">
            <div className="w-12 h-12 rounded-xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <SunMedium className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-lavassa-forest-dark mb-2">
              Glowing Rattan Lights
            </h3>
            <p className="text-xs sm:text-sm text-lavassa-coffee/80 leading-relaxed font-sans">
              Handcrafted woven pendant lamps cast an inviting amber aura across warm beige walls, inviting you to unwind.
            </p>
          </div>

          <div className="bg-lavassa-cream/60 hover:bg-lavassa-cream rounded-2xl p-6 border border-lavassa-cream-dark/60 transition-all duration-300 hover:shadow-soft group">
            <div className="w-12 h-12 rounded-xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-lavassa-forest-dark mb-2">
              Botanical Greenery
            </h3>
            <p className="text-xs sm:text-sm text-lavassa-coffee/80 leading-relaxed font-sans">
              Cascading trailing foliage and potted greenery create an enchanting indoor garden oasis right here in Behala.
            </p>
          </div>

          <div className="bg-lavassa-cream/60 hover:bg-lavassa-cream rounded-2xl p-6 border border-lavassa-cream-dark/60 transition-all duration-300 hover:shadow-soft group">
            <div className="w-12 h-12 rounded-xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-lavassa-forest-dark mb-2">
              European Patisserie
            </h3>
            <p className="text-xs sm:text-sm text-lavassa-coffee/80 leading-relaxed font-sans">
              San Sebastián Basque cheesecakes, crispy French choux à la crème, and fresh buttery laminated croissants.
            </p>
          </div>

          <div className="bg-lavassa-cream/60 hover:bg-lavassa-cream rounded-2xl p-6 border border-lavassa-cream-dark/60 transition-all duration-300 hover:shadow-soft group">
            <div className="w-12 h-12 rounded-xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-lavassa-forest-dark mb-2">
              Kolkata Soul & Hospitality
            </h3>
            <p className="text-xs sm:text-sm text-lavassa-coffee/80 leading-relaxed font-sans">
              Affordable luxury dining (₹200–400 per person) paired with heartfelt neighborhood service that remembers your name.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
