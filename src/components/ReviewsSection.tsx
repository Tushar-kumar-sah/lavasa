import React, { useState } from 'react';
import { REVIEWS_DATA, REVIEWS_SUMMARY } from '../data/reviewsData';
import { Star, MessageSquareQuote, CheckCircle, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-lavassa-ivory bg-subtle-noise relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavassa-cream border border-lavassa-cream-dark text-lavassa-forest text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Star className="w-3.5 h-3.5 fill-lavassa-amber text-lavassa-amber" />
            <span>Community Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-5">
            Little Moments, Happy Memories.
          </h2>
          <p className="text-base sm:text-lg text-lavassa-coffee/80 font-sans max-w-xl mx-auto leading-relaxed">
            Real experiences shared by guests who make Cafe Lavassa their daily sanctuary in Behala.
          </p>
        </div>

        {/* Google Reviews Aggregated Rating Banner */}
        <div className="max-w-4xl mx-auto bg-lavassa-forest-dark text-lavassa-ivory rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl border border-lavassa-forest flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-6 text-left">
            <div className="w-20 h-20 rounded-2xl bg-lavassa-forest flex flex-col items-center justify-center border border-lavassa-amber/40 shadow-glow">
              <span className="text-3xl font-serif font-bold text-lavassa-amber leading-none">
                {REVIEWS_SUMMARY.averageRating}
              </span>
              <span className="text-[10px] text-lavassa-cream/80 font-sans uppercase tracking-widest mt-1">
                out of 5
              </span>
            </div>

            <div>
              <div className="flex text-lavassa-amber mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-lavassa-amber text-lavassa-amber" />
                ))}
              </div>
              <h3 className="text-lg font-serif font-bold text-lavassa-ivory">
                Google Verified Reviews
              </h3>
              <p className="text-xs text-lavassa-cream/80 font-sans">
                Based on {REVIEWS_SUMMARY.totalReviews}+ diner ratings across Kolkata
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="text-xs text-lavassa-cream/70 font-sans text-center md:text-right">
              <span className="block font-semibold text-lavassa-amber">“Cortado, Irish Coffee & Cheesecakes”</span>
              <span className="block text-[11px]">Most highlighted favorites</span>
            </div>

            <a
              href="https://www.google.com/search?q=cafe+lavassa+kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lavassa-amber hover:bg-lavassa-amber-light text-lavassa-forest-dark px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-transform hover:scale-105 shadow-sm whitespace-nowrap"
            >
              <span>View On Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-lavassa-ivory rounded-2xl p-6 sm:p-8 shadow-soft border border-lavassa-cream-dark/60 flex flex-col justify-between hover:shadow-warm transition-all duration-300"
            >
              <div>
                {/* Header: Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-lavassa-amber">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-lavassa-amber text-lavassa-amber" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-lavassa-cream-dark" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-lavassa-coffee/85 font-sans leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-lavassa-cream-dark/40 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-serif font-bold text-lavassa-forest-dark">
                    {review.author}
                  </span>
                  <span className="text-[10px] text-lavassa-sage font-sans">
                    {review.relativeTime}
                  </span>
                </div>

                {review.highlightDish && (
                  <span className="text-[11px] text-lavassa-caramel font-medium">
                    Loved: {review.highlightDish}
                  </span>
                )}

                <span className="text-[10px] text-lavassa-sage/80 flex items-center gap-1 font-sans">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  Verified Diner • {review.verifiedSource}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Reviews in Carousel / Toggle */}
        <div className="bg-lavassa-cream/50 rounded-2xl p-6 border border-lavassa-cream-dark/60 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center text-lavassa-amber mb-2">
            {[...Array(REVIEWS_DATA[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-lavassa-amber text-lavassa-amber" />
            ))}
          </div>
          <p className="text-sm sm:text-base text-lavassa-coffee font-sans italic mb-4 max-w-lg mx-auto">
            "{REVIEWS_DATA[currentIndex].content}"
          </p>
          <div className="text-xs font-serif font-bold text-lavassa-forest-dark">
            {REVIEWS_DATA[currentIndex].author} — <span className="text-lavassa-caramel">{REVIEWS_DATA[currentIndex].highlightDish}</span>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={prevReview}
              className="p-1.5 rounded-full bg-lavassa-ivory hover:bg-lavassa-cream border border-lavassa-cream-dark text-lavassa-forest"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-lavassa-sage">
              {currentIndex + 1} / {REVIEWS_DATA.length}
            </span>
            <button
              onClick={nextReview}
              className="p-1.5 rounded-full bg-lavassa-ivory hover:bg-lavassa-cream border border-lavassa-cream-dark text-lavassa-forest"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
