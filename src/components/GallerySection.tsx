import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../data/galleryData';
import { GalleryImage } from '../types';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

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

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-lavassa-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavassa-cream border border-lavassa-cream-dark text-lavassa-forest text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Camera className="w-3.5 h-3.5 text-lavassa-amber" />
            <span>Visual Sanctuary</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-5">
            Moments Inside Lavassa.
          </h2>
          <p className="text-base sm:text-lg text-lavassa-coffee/80 font-sans max-w-xl mx-auto leading-relaxed">
            From the warm amber glow of our woven lights to freshly baked European patisserie, take a peek inside our Behala sanctuary.
          </p>
        </div>

        {/* Gallery Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none gap-2 sm:gap-3 mb-12">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-lavassa-forest text-lavassa-ivory shadow-warm scale-105'
                  : 'bg-lavassa-cream/60 text-lavassa-coffee hover:bg-lavassa-cream border border-lavassa-cream-dark/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-warm cursor-pointer bg-lavassa-cream transition-all duration-500 hover:-translate-y-1.5 border border-lavassa-cream-dark/60"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Real store tag badge */}
              {image.isRealStorePhoto && (
                <div className="absolute top-3 left-3 bg-lavassa-forest-dark/90 backdrop-blur-md text-lavassa-amber px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 shadow-md border border-lavassa-amber/40">
                  <CheckCircle2 className="w-3 h-3 text-lavassa-amber" />
                  <span>Real Lavassa Photo</span>
                </div>
              )}

              {/* Hover Overlay with Editorial Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-lavassa-forest-dark/95 via-lavassa-forest-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-lavassa-ivory">
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
                  <span>Click to view full photo</span>
                  <span className="ml-1">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && activeImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          
          {/* Close Lightbox */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 focus:outline-none"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="text-center mt-6 max-w-xl">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[11px] uppercase tracking-widest text-lavassa-amber font-bold">
                  {activeImage.categoryLabel}
                </span>
                {activeImage.isRealStorePhoto && (
                  <span className="text-[10px] text-green-400 border border-green-500/50 px-2 py-0.5 rounded-full">
                    Verified Cafe Lavassa Photo
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                {activeImage.title}
              </h3>
              <p className="text-sm text-gray-300 font-sans">
                {activeImage.caption}
              </p>
              <span className="text-xs text-gray-500 mt-2 block font-mono">
                {activeLightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
