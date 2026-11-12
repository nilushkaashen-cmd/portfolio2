import React from 'react';
import { ChevronUp, ChevronDown, Mail } from 'lucide-react';

/**
 * Bottom-Right Controls:
 * - Discreet Slide Counter
 * - Apple Liquid Glass WhatsApp Circle Button (direct to +94779458507)
 * - Apple Liquid Glass Email Circle Button (direct to nilushkaashen@gmail.com)
 */
export default function ScrollIndicator({
  currentIndex,
  totalItems,
  onPrev,
  onNext
}) {
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalItems).padStart(2, '0');

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 select-none pointer-events-auto">
      {/* 1. Discreet Slide Counter */}
      {totalItems > 1 && (
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full
                     bg-black/35 backdrop-blur-xl border border-white/10
                     text-[11px] sm:text-xs font-mono text-white/70 shadow-lg tracking-widest mr-0.5"
        >
          <span className="text-white font-medium">{currentFormatted}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/40">{totalFormatted}</span>

          <div className="flex items-center ml-1 border-l border-white/10 pl-1.5 gap-0.5">
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              aria-label="Previous artwork"
              className="p-1 rounded hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
            >
              <ChevronUp size={13} />
            </button>
            <button
              onClick={onNext}
              disabled={currentIndex === totalItems - 1}
              aria-label="Next artwork"
              className="p-1 rounded hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
            >
              <ChevronDown size={13} />
            </button>
          </div>
        </div>
      )}

      {/* 2. Apple Liquid Glass WhatsApp Circle */}
      <a
        href="https://wa.me/94779458507"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                   bg-white/[0.08] dark:bg-[#121216]/55 hover:bg-white/[0.18]
                   backdrop-blur-2xl backdrop-saturate-[190%]
                   border border-white/[0.22]
                   shadow-[0_8px_32px_0_rgba(0,0,0,0.45),_inset_0_1px_1.5px_0_rgba(255,255,255,0.35)]
                   text-white/85 hover:text-white
                   transition-all duration-300 active:scale-90 hover:scale-110"
      >
        {/* Specular Highlight Arc */}
        <div
          aria-hidden="true"
          className="absolute inset-x-2.5 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
        />
        <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* 3. Apple Liquid Glass Email Circle */}
      <a
        href="mailto:nilushkaashen@gmail.com"
        aria-label="Send Email"
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                   bg-white/[0.08] dark:bg-[#121216]/55 hover:bg-white/[0.18]
                   backdrop-blur-2xl backdrop-saturate-[190%]
                   border border-white/[0.22]
                   shadow-[0_8px_32px_0_rgba(0,0,0,0.45),_inset_0_1px_1.5px_0_rgba(255,255,255,0.35)]
                   text-white/85 hover:text-white
                   transition-all duration-300 active:scale-90 hover:scale-110"
      >
        {/* Specular Highlight Arc */}
        <div
          aria-hidden="true"
          className="absolute inset-x-2.5 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
        />
        <Mail size={19} className="transition-transform duration-300 group-hover:scale-105" />
      </a>
    </div>
  );
}
