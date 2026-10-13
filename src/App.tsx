import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { SignatureFeature } from './components/SignatureFeature';
import { MenuSection } from './components/MenuSection';
import { OurStory } from './components/OurStory';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  const handleOpenReservation = () => {
    const reservationSection = document.querySelector('#reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-lavassa-ivory text-lavassa-coffee selection:bg-lavassa-amber selection:text-lavassa-forest-dark overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Website Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 2. The Lavassa Experience ("More Than Just a Café") */}
        <Experience />

        {/* 3. Signature Features ("Made for Your Little Moments") */}
        <SignatureFeature onOpenReservation={handleOpenReservation} />

        {/* 4. Menu Section ("Something Wonderful for Every Craving") */}
        <MenuSection onOpenReservation={handleOpenReservation} />

        {/* 5. Our Story ("A Place to Pause. A Place to Connect.") */}
        <OurStory />

        {/* 6. Photo Gallery (Showcase the real ambiance & lightbox) */}
        <GallerySection />

        {/* 7. Customer Reviews ("Little Moments, Happy Memories") */}
        <ReviewsSection />

        {/* 8. Reservations & Customer Actions ("Your Table Is Waiting") */}
        <ReservationSection />

        {/* 9. Find Us / Cafe Location (Map, Hours, Directions) */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile & Desktop Quick Actions Pill */}
      <FloatingActions onOpenReservation={handleOpenReservation} />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
