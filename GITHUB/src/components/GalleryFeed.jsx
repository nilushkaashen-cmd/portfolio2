import React, { useRef, useEffect, useState, useCallback } from 'react';
import ArtworkItem from './ArtworkItem';
import AnimationItem from './AnimationItem';
import ScrollIndicator from './ScrollIndicator';

/**
 * Continuous Vertical Scrolling Feed.
 * Inspired by TikTok browsing + contemporary digital art gallery.
 * Implements smooth snap-scroll, IntersectionObserver tracking, and keyboard nav.
 */
export default function GalleryFeed({
  items = [],
  category,
  onActiveItemChange
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  // Reset scroll position and active index when category switches
  useEffect(() => {
    setActiveIndex(0);
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (items.length > 0 && onActiveItemChange) {
      onActiveItemChange(items[0], 0);
    }
  }, [category, items, onActiveItemChange]);

  // Set up IntersectionObserver to detect the predominantly visible item
  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestCandidate = null;
        let highestRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio;
            bestCandidate = entry.target;
          }
        });

        if (bestCandidate) {
          const idx = parseInt(bestCandidate.getAttribute('data-index'), 10);
          if (!isNaN(idx) && idx !== activeIndex) {
            setActiveIndex(idx);
            if (onActiveItemChange && items[idx]) {
              onActiveItemChange(items[idx], idx);
            }
          }
        }
      },
      {
        root: container,
        threshold: [0.4, 0.6, 0.8]
      }
    );

    const slides = container.querySelectorAll('.portfolio-slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      observer.disconnect();
    };
  }, [items, activeIndex, onActiveItemChange]);

  // Keyboard navigation (ArrowUp, ArrowDown, PageUp, PageDown)
  const scrollToSlide = useCallback((index) => {
    const targetIdx = Math.max(0, Math.min(items.length - 1, index));
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll('.portfolio-slide');
    const targetSlide = slides[targetIdx];
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'j', 'J'].includes(e.key)) {
        e.preventDefault();
        scrollToSlide(activeIndex + 1);
      } else if (['ArrowUp', 'PageUp', 'k', 'K'].includes(e.key)) {
        e.preventDefault();
        scrollToSlide(activeIndex - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSlide(items.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, scrollToSlide, items.length]);

  const handlePaletteExtracted = (itemId, extractedPalette) => {
    if (items[activeIndex]?.id === itemId && onActiveItemChange) {
      onActiveItemChange({ ...items[activeIndex], palette: extractedPalette }, activeIndex);
    }
  };

  const isAnimations = category === 'animations';

  return (
    <main className="relative w-full h-full overflow-hidden">
      {/* Vertically scrollable snap container */}
      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        tabIndex={0}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          if (isAnimations) {
            return (
              <AnimationItem
                key={item.id}
                item={item}
                index={index}
                isActive={isActive}
              />
            );
          }

          return (
            <ArtworkItem
              key={item.id}
              item={item}
              index={index}
              isActive={isActive}
              onPaletteExtracted={handlePaletteExtracted}
            />
          );
        })}
      </div>

      {/* Discreet Scroll Indicator */}
      <ScrollIndicator
        currentIndex={activeIndex}
        totalItems={items.length}
        onPrev={() => scrollToSlide(activeIndex - 1)}
        onNext={() => scrollToSlide(activeIndex + 1)}
      />
    </main>
  );
}
