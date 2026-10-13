import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { Search, Sparkles, Filter, FileText, Check, X } from 'lucide-react';

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
    <section id="menu" className="py-24 sm:py-32 bg-lavassa-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-forest text-xs uppercase tracking-[0.2em] font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-lavassa-amber" />
            <span>Artisan Kitchen & Patisserie</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-5">
            Something Wonderful for Every Craving.
          </h2>
          <p className="text-base sm:text-lg text-lavassa-coffee/80 font-sans max-w-xl mx-auto leading-relaxed">
            Crafted with honest ingredients, daily European baking traditions, and freshly ground specialty coffee beans.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 sm:gap-3">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-lavassa-forest text-lavassa-ivory shadow-warm scale-105'
                    : 'bg-lavassa-ivory text-lavassa-coffee hover:bg-lavassa-cream border border-lavassa-cream-dark/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar & Dietary Filter Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-lavassa-ivory p-3 sm:p-4 rounded-2xl shadow-soft border border-lavassa-cream-dark/80">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-lavassa-sage absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search coffee, cheesecake, pizza..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-lavassa-cream/50 border border-lavassa-cream-dark rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-lavassa-coffee placeholder-lavassa-sage/70 focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-lavassa-sage hover:text-lavassa-coffee"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Toggle buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-lavassa-sage uppercase tracking-wider font-semibold hidden md:inline">
                Dietary:
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-lavassa-cream-dark text-lavassa-forest font-bold'
                    : 'text-lavassa-coffee/70 hover:bg-lavassa-cream'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'veg'
                    ? 'bg-green-100 text-green-800 font-bold border border-green-300'
                    : 'text-lavassa-coffee/70 hover:bg-lavassa-cream'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
                Vegetarian
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-red-100 text-red-800 font-bold border border-red-300'
                    : 'text-lavassa-coffee/70 hover:bg-lavassa-cream'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                Non-Veg
              </button>
            </div>

          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-lavassa-ivory rounded-2xl border border-lavassa-cream-dark">
            <p className="text-lavassa-coffee text-lg font-serif">No items match your search.</p>
            <p className="text-xs text-lavassa-sage mt-1">Try resetting the filters or searching for another dish.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-lavassa-caramel underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
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
                  <div className="absolute bottom-3 right-3 bg-lavassa-forest-dark/90 backdrop-blur-md text-lavassa-ivory px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md border border-lavassa-amber/40">
                    ₹{item.price}
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-lavassa-forest-dark leading-snug group-hover:text-lavassa-caramel transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    {item.portionOrNote && (
                      <span className="text-[11px] text-lavassa-sage font-medium tracking-wide block mb-2">
                        {item.portionOrNote}
                      </span>
                    )}
                    <p className="text-xs text-lavassa-coffee/80 leading-relaxed font-sans line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-lavassa-cream-dark/40 flex items-center justify-between">
                    <span className="text-[11px] text-lavassa-caramel font-semibold uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <button
                      onClick={onOpenReservation}
                      className="text-xs font-bold text-lavassa-forest hover:text-lavassa-caramel flex items-center gap-1 transition-colors"
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
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsFullMenuModalOpen(true)}
            className="w-full sm:w-auto bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold shadow-warm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-lavassa-amber/30"
          >
            <FileText className="w-4 h-4 text-lavassa-amber" />
            <span>View Full Menu Overview</span>
          </button>
          
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto bg-lavassa-cream hover:bg-lavassa-cream-dark text-lavassa-coffee px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 border border-lavassa-cream-dark"
          >
            <span>Dine With Us Today</span>
          </button>
        </div>

      </div>

      {/* Full Menu Modal */}
      {isFullMenuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lavassa-forest-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-lavassa-ivory rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-lavassa-cream-dark">
            
            {/* Modal Header */}
            <div className="p-6 bg-lavassa-forest text-lavassa-ivory flex items-center justify-between border-b border-lavassa-amber/30">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-lavassa-amber font-bold">
                  Cafe Lavassa • Behala, Kolkata
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold">
                  Complete Café & Bakery Menu
                </h3>
              </div>
              <button
                onClick={() => setIsFullMenuModalOpen(false)}
                className="p-2 rounded-full bg-lavassa-forest-dark/50 text-lavassa-cream hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Categorized Menu List */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {['coffee', 'beverages', 'savoury', 'pizza-pasta', 'bakery-desserts'].map((catKey) => {
                const catLabel = MENU_CATEGORIES.find(c => c.id === catKey)?.label || catKey;
                const itemsInCat = MENU_ITEMS.filter(i => i.category === catKey);

                return (
                  <div key={catKey} className="border-b border-lavassa-cream-dark/60 pb-6 last:border-none">
                    <h4 className="text-lg font-serif font-bold text-lavassa-forest-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-lavassa-amber" />
                      {catLabel}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {itemsInCat.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-4 p-2.5 rounded-lg hover:bg-lavassa-cream/40 transition-colors">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${item.isVegetarian ? 'bg-green-600' : 'bg-red-600'}`} />
                              <span className="text-sm font-semibold text-lavassa-coffee font-sans">
                                {item.name}
                              </span>
                            </div>
                            <p className="text-xs text-lavassa-sage font-sans line-clamp-1 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-sm font-mono font-bold text-lavassa-forest-dark whitespace-nowrap">
                            ₹{item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="bg-lavassa-cream/60 p-4 rounded-xl text-xs text-lavassa-coffee font-sans flex flex-col gap-1">
                <span className="font-bold text-lavassa-caramel">Notice & Dietary Information:</span>
                <p>Prices are in Indian Rupees (₹). Taxes as applicable. For customized cakes, party orders, or allergen queries, please speak to our head barista or contact +91 85848 57079.</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-lavassa-cream border-t border-lavassa-cream-dark flex items-center justify-between">
              <span className="text-xs text-lavassa-coffee font-sans">
                Average cost: ₹200–400 per person
              </span>
              <button
                onClick={() => {
                  setIsFullMenuModalOpen(false);
                  onOpenReservation();
                }}
                className="bg-lavassa-forest text-lavassa-ivory px-6 py-2 rounded-full text-xs uppercase tracking-wider font-bold shadow-sm"
              >
                Reserve Your Table
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
