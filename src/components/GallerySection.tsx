import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../data/galleryData';
import { GalleryImage } from '../types';
import { Camera, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    return selectedCategory === 'all' || img.category === selectedCategory;
  });

  const activeImage: GalleryImage | null =
    activeLightboxIndex !== null ? filteredImages[activeLightboxIndex] : null;

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredImages.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredImages.length]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext(); // Swiped left -> next
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // Swiped right -> prev
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-lavassa-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-lavassa-cream border border-lavassa-cream-dark text-lavassa-forest text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium mb-3 sm:mb-4">
            <Camera className="w-3.5 h-3.5 text-lavassa-amber" />
            <span>Visual Sanctuary</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-3 sm:mb-5">
            Moments Inside Lavassa.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-lavassa-coffee/80 font-sans max-w-xl mx-auto leading-relaxed">
            From the warm amber glow of our woven lights to freshly baked European patisserie, take a peek inside our Behala sanctuary.
          </p>
        </div>

        {/* Gallery Filter Pills (Horizontal Scroll on Mobile) */}
        <div className="flex items-center overflow-x-auto pb-3 scrollbar-none gap-2 sm:gap-3 mb-8 sm:mb-12 px-1 -mx-4 sm:mx-0 sm:justify-center">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 min-h-[38px] ${
                selectedCategory === cat.id
                  ? 'bg-lavassa-forest text-lavassa-ivory shadow-warm scale-102 sm:scale-105'
                  : 'bg-lavassa-cream/60 text-lavassa-coffee hover:bg-lavassa-cream border border-lavassa-cream-dark/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-warm cursor-pointer bg-lavassa-cream transition-all duration-300 hover:-translate-y-1 border border-lavassa-cream-dark/60"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Real store tag badge */}
              {image.isRealStorePhoto && (
                <div className="absolute top-2.5 left-2.5 bg-lavassa-forest-dark/95 backdrop-blur-md text-lavassa-amber px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 shadow-md border border-lavassa-amber/40">
                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-lavassa-amber" />
                  <span>Real Lavassa Photo</span>
                </div>
              )}

              {/* Mobile Subtle Card Bar (Always visible on mobile, hover on desktop) */}
              <div className="sm:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-lavassa-forest-dark/90 via-lavassa-forest-dark/50 to-transparent p-3 text-lavassa-ivory">
                <span className="text-[9px] uppercase tracking-widest text-lavassa-amber font-bold block">
                  {image.categoryLabel}
                </span>
                <h3 className="text-xs font-serif font-bold text-lavassa-ivory leading-tight line-clamp-1">
                  {image.title}
                </h3>
              </div>

              {/* Desktop Hover Overlay with Full Caption */}
              <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-lavassa-forest-dark/95 via-lavassa-forest-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6 text-lavassa-ivory">
                <span className="text-[10px] uppercase tracking-widest text-lavassa-amber font-bold mb-1">
                  {image.categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-lavassa-ivory leading-tight mb-1">
                  {image.title}
                </h3>
                <p className="text-xs text-lavassa-cream/80 font-sans line-clamp-2">
                  {image.caption}
                </p>
                <div className="mt-3 flex items-center text-[11px] font-sans text-lavassa-amber font-semibold">
                  <span>Tap to view photo</span>
                  <span className="ml-1">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Touch Swipe & Responsive Controls */}
      {activeLightboxIndex !== null && activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8 animate-fadeIn"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar with Counter and Close */}
          <div className="w-full flex items-center justify-between text-white z-20 pb-2">
            <span className="text-xs font-mono text-gray-400">
              {activeLightboxIndex + 1} of {filteredImages.length} • <span className="hidden sm:inline">Swipe or use arrows</span>
            </span>
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close photo"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Main Photo Area */}
          <div className="relative w-full flex-1 flex items-center justify-center my-auto">
            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-colors z-20 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Photo */}
            <div className="max-h-[60vh] sm:max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[60vh] sm:max-h-[75vh] w-auto max-w-full object-contain mx-auto select-none"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-colors z-20 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Lightbox Caption */}
          <div className="text-center pt-3 max-w-xl w-full z-20">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-lavassa-amber font-bold">
                {activeImage.categoryLabel}
              </span>
              {activeImage.isRealStorePhoto && (
                <span className="text-[9px] sm:text-[10px] text-green-400 border border-green-500/50 px-2 py-0.5 rounded-full">
                  Verified Cafe Lavassa Photo
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-xl font-serif font-bold text-white mb-1">
              {activeImage.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans line-clamp-2">
              {activeImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
