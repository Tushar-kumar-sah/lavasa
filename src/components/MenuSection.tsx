import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { Search, Sparkles, Filter, FileText, Check, X, Calendar } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFullMenuModalOpen, setIsFullMenuModalOpen] = useState<boolean>(false);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary match
      const matchesDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVegetarian) ||
        (dietaryFilter === 'non-veg' && !item.isVegetarian);

      // Search match
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-32 bg-lavassa-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-forest text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-lavassa-amber" />
            <span>Artisan Kitchen & Patisserie</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-3 sm:mb-5">
            Something Wonderful for Every Craving.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-lavassa-coffee/80 font-sans max-w-xl mx-auto leading-relaxed">
            Crafted with honest ingredients, daily European baking traditions, and freshly ground specialty coffee beans.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-10 sm:mb-12">
          
          {/* Category Tabs (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center overflow-x-auto pb-2 scrollbar-none gap-2 sm:gap-3 px-1 -mx-4 sm:mx-0 sm:justify-center">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 min-h-[40px] ${
                  selectedCategory === cat.id
                    ? 'bg-lavassa-forest text-lavassa-ivory shadow-warm scale-102 sm:scale-105'
                    : 'bg-lavassa-ivory text-lavassa-coffee hover:bg-lavassa-cream border border-lavassa-cream-dark/60 active:scale-95'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar & Dietary Filter Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-lavassa-ivory p-3 sm:p-4 rounded-2xl shadow-soft border border-lavassa-cream-dark/80">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-lavassa-sage absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search coffee, cheesecake, pizza..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-lavassa-cream/50 border border-lavassa-cream-dark rounded-xl pl-10 pr-10 py-2.5 text-base sm:text-sm text-lavassa-coffee placeholder-lavassa-sage/70 focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest transition-colors min-h-[44px]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-lavassa-sage hover:text-lavassa-coffee p-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Toggle buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-medium transition-colors text-center min-h-[40px] ${
                  dietaryFilter === 'all'
                    ? 'bg-lavassa-cream-dark text-lavassa-forest font-bold'
                    : 'text-lavassa-coffee/70 hover:bg-lavassa-cream bg-lavassa-cream/30'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 min-h-[40px] ${
                  dietaryFilter === 'veg'
                    ? 'bg-green-100 text-green-800 font-bold border border-green-300'
                    : 'text-lavassa-coffee/70 hover:bg-lavassa-cream bg-lavassa-cream/30'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-600 inline-block flex-shrink-0" />
                <span>Veg</span>
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 min-h-[40px] ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-red-100 text-red-800 font-bold border border-red-300'
                    : 'text-lavassa-coffee/70 hover:bg-lavassa-cream bg-lavassa-cream/30'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block flex-shrink-0" />
                <span>Non-Veg</span>
              </button>
            </div>

          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-lavassa-ivory rounded-2xl border border-lavassa-cream-dark px-4">
            <p className="text-lavassa-coffee text-base sm:text-lg font-serif">No items match your search.</p>
            <p className="text-xs text-lavassa-sage mt-1">Try resetting the filters or searching for another dish.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-lavassa-caramel underline uppercase tracking-wider py-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-lavassa-ivory rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 border border-lavassa-cream-dark/60 flex flex-col group hover:-translate-y-1"
              >
                {/* Item Image with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-lavassa-cream">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {/* FSSAI style dietary indicator */}
                    <div className="w-5 h-5 bg-white/95 rounded flex items-center justify-center shadow-sm">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.isVegetarian ? 'bg-green-600' : 'bg-red-600'}`} />
                    </div>

                    {item.isBestseller && (
                      <span className="bg-lavassa-amber text-lavassa-forest-dark text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-lavassa-forest-dark/95 backdrop-blur-md text-lavassa-ivory px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md border border-lavassa-amber/40">
                    ₹{item.price}
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-lavassa-forest-dark leading-snug group-hover:text-lavassa-caramel transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    {item.portionOrNote && (
                      <span className="text-[10px] sm:text-[11px] text-lavassa-sage font-medium tracking-wide block mb-2">
                        {item.portionOrNote}
                      </span>
                    )}
                    <p className="text-xs text-lavassa-coffee/80 leading-relaxed font-sans line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-lavassa-cream-dark/40 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] text-lavassa-caramel font-semibold uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <button
                      onClick={onOpenReservation}
                      className="text-xs font-bold text-lavassa-forest hover:text-lavassa-caramel flex items-center gap-1 transition-colors min-h-[36px]"
                    >
                      <span>Reserve Table</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Menu CTA & Download Option */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => setIsFullMenuModalOpen(true)}
            className="w-full sm:w-auto bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory px-6 sm:px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold shadow-warm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-lavassa-amber/30 min-h-[48px]"
          >
            <FileText className="w-4 h-4 text-lavassa-amber" />
            <span>View Full Menu Overview</span>
          </button>
          
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto bg-lavassa-cream hover:bg-lavassa-cream-dark text-lavassa-coffee px-6 sm:px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-all duration-300 border border-lavassa-cream-dark min-h-[48px]"
          >
            <span>Dine With Us Today</span>
          </button>
        </div>

      </div>

      {/* Full Menu Modal (Mobile Optimized) */}
      {isFullMenuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-lavassa-forest-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-lavassa-ivory rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-lavassa-cream-dark">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-lavassa-forest text-lavassa-ivory flex items-center justify-between border-b border-lavassa-amber/30 flex-shrink-0">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-lavassa-amber font-bold block">
                  Cafe Lavassa • Behala, Kolkata
                </span>
                <h3 className="text-lg sm:text-2xl font-serif font-bold">
                  Complete Café & Bakery Menu
                </h3>
              </div>
              <button
                onClick={() => setIsFullMenuModalOpen(false)}
                className="p-2.5 rounded-full bg-lavassa-forest-dark/70 text-lavassa-cream hover:text-white transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Close menu modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Categorized Menu List */}
            <div className="p-4 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
              {['coffee', 'beverages', 'savoury', 'pizza-pasta', 'bakery-desserts'].map((catKey) => {
                const catLabel = MENU_CATEGORIES.find(c => c.id === catKey)?.label || catKey;
                const itemsInCat = MENU_ITEMS.filter(i => i.category === catKey);

                return (
                  <div key={catKey} className="border-b border-lavassa-cream-dark/60 pb-5 last:border-none">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-lavassa-forest-dark uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-lavassa-amber flex-shrink-0" />
                      {catLabel}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {itemsInCat.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-3 p-2 rounded-lg hover:bg-lavassa-cream/40 transition-colors">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${item.isVegetarian ? 'bg-green-600' : 'bg-red-600'} flex-shrink-0`} />
                              <span className="text-xs sm:text-sm font-semibold text-lavassa-coffee font-sans">
                                {item.name}
                              </span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-lavassa-sage font-sans line-clamp-2 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-xs sm:text-sm font-mono font-bold text-lavassa-forest-dark whitespace-nowrap">
                            ₹{item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="bg-lavassa-cream/60 p-3.5 sm:p-4 rounded-xl text-xs text-lavassa-coffee font-sans flex flex-col gap-1">
                <span className="font-bold text-lavassa-caramel">Notice & Dietary Information:</span>
                <p className="text-[11px] leading-relaxed">
                  Prices are in Indian Rupees (₹). Taxes as applicable. For customized cakes, party orders, or allergen queries, please speak to our head barista or contact +91 85848 57079.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 bg-lavassa-cream border-t border-lavassa-cream-dark flex items-center justify-between flex-shrink-0">
              <span className="text-[11px] sm:text-xs text-lavassa-coffee font-sans">
                Avg: ₹200–400 / person
              </span>
              <button
                onClick={() => {
                  setIsFullMenuModalOpen(false);
                  onOpenReservation();
                }}
                className="bg-lavassa-forest text-lavassa-ivory px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold shadow-sm flex items-center gap-1.5 min-h-[40px]"
              >
                <Calendar className="w-3.5 h-3.5 text-lavassa-amber" />
                <span>Reserve Table</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
