import React, { useState, useRef, useEffect } from 'react';
import { extractPaletteFromImage } from '../utils/colorExtractor';

/**
 * Single Artwork Slide Component.
 * Implements generous negative space, floating artwork aesthetic,
 * preserved aspect ratio (contain), and subtle scroll-driven motion.
 */
export default function ArtworkItem({
  item,
  index,
  isActive,
  onPaletteExtracted
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // If item doesn't have a static palette, extract dynamically from image
  useEffect(() => {
    if (!item.palette && imgRef.current && isLoaded) {
      extractPaletteFromImage(imgRef.current).then((extracted) => {
        if (extracted && onPaletteExtracted) {
          onPaletteExtracted(item.id, extracted);
        }
      });
    }
  }, [isLoaded, item, onPaletteExtracted]);

  return (
    <div
      data-item-id={item.id}
      data-index={index}
      className="portfolio-slide relative w-full h-screen flex items-center justify-center snap-center snap-always px-4 sm:px-8 md:px-12 py-16 sm:py-20 select-none"
    >
      {/* Floating Canvas Container */}
      <div
        className={`relative flex items-center justify-center max-w-[88vw] sm:max-w-[82vw] md:max-w-[78vw] max-h-[78vh] sm:max-h-[82vh] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[transform,opacity] ${
          isActive
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-40 scale-[0.94] translate-y-3'
        }`}
      >
        {/* Soft Ambient Artwork Halo */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 sm:-inset-8 rounded-3xl blur-2xl opacity-40 transition-opacity duration-700 pointer-events-none"
          style={{
            backgroundColor: item.palette?.ambient || 'transparent',
            mixBlendMode: 'screen'
          }}
        />

        {/* High-Resolution Artwork Image */}
        <img
          ref={imgRef}
          src={item.src}
          alt={item.title || 'Artwork'}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`relative max-w-full max-h-[76vh] sm:max-h-[80vh] w-auto h-auto object-contain transition-all duration-700 ease-out ${
            item.isTransparent
              ? 'rounded-none'
              : 'rounded-lg sm:rounded-xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.65),_0_0_1px_1px_rgba(255,255,255,0.08)]'
          } ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
          style={{
            aspectRatio: item.aspectRatio || 'auto'
          }}
        />

        {/* Minimal loading shimmer placeholder to prevent layout shifts */}
        {!isLoaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/[0.03] backdrop-blur-sm animate-pulse"
            style={{ aspectRatio: item.aspectRatio || '1/1' }}
          >
            <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
