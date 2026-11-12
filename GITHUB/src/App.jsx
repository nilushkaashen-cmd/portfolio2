import React, { useState, useCallback } from 'react';
import LiquidNav from './components/LiquidNav';
import DynamicBackground from './components/DynamicBackground';
import NoiseOverlay from './components/NoiseOverlay';
import GalleryFeed from './components/GalleryFeed';
import { CATEGORIES, PORTFOLIO_DATA } from './data/portfolioData';

/**
 * Root Portfolio Application.
 * Minimalist, continuous vertical visual gallery inspired by skylrk.com and TikTok.
 */
export default function App() {
  const [activeCategory, setActiveCategory] = useState('arts');
  const [currentPalette, setCurrentPalette] = useState(() => {
    return PORTFOLIO_DATA.arts[0]?.palette || {
      primary: '#09090b',
      secondary: '#222327',
      ambient: '#454850',
      glow: 'rgba(210, 215, 225, 0.16)'
    };
  });

  const handleActiveItemChange = useCallback((item) => {
    if (item && item.palette) {
      setCurrentPalette(item.palette);
    }
  }, []);

  const handleSelectCategory = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    const firstItem = PORTFOLIO_DATA[categoryId]?.[0];
    if (firstItem?.palette) {
      setCurrentPalette(firstItem.palette);
    }
  }, []);

  const currentItems = PORTFOLIO_DATA[activeCategory] || [];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#040406] text-white">
      {/* 1. Dynamic Atmospheric Background with Light Orbs */}
      <DynamicBackground palette={currentPalette} />

      {/* 2. Analog Film Grain Texture Overlay */}
      <NoiseOverlay />

      {/* 3. Floating Apple Liquid Glass Category Navigation (Top Center) */}
      <LiquidNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Minimalist Artist Logo Under the Tabs (Top Center with breathing room) */}
      <div
        aria-hidden="true"
        className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none opacity-40 hover:opacity-80 transition-all duration-300"
      >
        <img
          src="/Logo/Artboard 5.png"
          alt="Artist Emblem"
          className="h-4 sm:h-5 w-auto object-contain filter invert contrast-125"
        />
      </div>

      {/* 5. Continuous TikTok-style Vertical Scroll Feed */}
      <GalleryFeed
        key={activeCategory}
        category={activeCategory}
        items={currentItems}
        onActiveItemChange={handleActiveItemChange}
      />
    </div>
  );
}
