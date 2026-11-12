import React, { useRef, useEffect, useState } from 'react';

/**
 * Apple Liquid Glass Floating Navigation Bar.
 * Inspired by Apple's visionOS / iOS Liquid Glass design & TikTok category tabs.
 */
export default function LiquidNav({ categories, activeCategory, onSelectCategory }) {
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const itemRefs = useRef({});

  // Update sliding liquid pill position when activeCategory changes
  useEffect(() => {
    const activeEl = itemRefs.current[activeCategory];
    const container = containerRef.current;

    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();

      // Ensure the active button is visible in horizontal scroll on mobile
      const scrollOffset = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: 'smooth'
      });

      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1
      });
    }
  }, [activeCategory]);

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 max-w-[96vw] sm:max-w-max pointer-events-auto">
      {/* Liquid Glass Outer Shell */}
      <nav
        aria-label="Portfolio Category Navigation"
        className="relative flex items-center p-1 sm:p-1.5 rounded-full
                   bg-white/[0.07] dark:bg-[#121216]/40
                   backdrop-blur-2xl backdrop-saturate-[190%]
                   border border-white/[0.18]
                   shadow-[0_12px_36px_-6px_rgba(0,0,0,0.5),_inset_0_1px_1px_0_rgba(255,255,255,0.22)]
                   transition-all duration-300"
      >
        {/* Subtle Liquid Edge Specular Highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
        />

        {/* Scrollable Container for Category Pills */}
        <div
          ref={containerRef}
          className="relative flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Liquid Sliding Pill Indicator */}
          <div
            aria-hidden="true"
            className="absolute top-1 bottom-1 rounded-full
                       bg-white/[0.18] dark:bg-white/[0.2]
                       border border-white/[0.3]
                       shadow-[0_2px_12px_rgba(255,255,255,0.15),_inset_0_1px_2px_rgba(255,255,255,0.4)]
                       backdrop-blur-md
                       pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity
            }}
          />

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (itemRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative z-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide
                           whitespace-nowrap select-none transition-colors duration-200
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                           ${
                             isActive
                               ? 'text-white font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]'
                               : 'text-white/60 hover:text-white/95 hover:bg-white/[0.04]'
                           }`}
                role="tab"
                aria-selected={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
