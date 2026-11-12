import React, { useEffect, useState, useRef } from 'react';

/**
 * Dynamic Atmospheric Background System.
 * Inspired by skylrk.com: Deep ambient gradients, blurred light sources,
 * soft radial lighting, and fluid crossfades that complement the active artwork.
 */
export default function DynamicBackground({ palette }) {
  // Dual-buffer crossfader to smoothly transition background palettes
  const [layers, setLayers] = useState({
    active: 0,
    paletteA: palette || {
      primary: '#09080e',
      secondary: '#251b38',
      ambient: '#4f336e',
      glow: 'rgba(140, 80, 220, 0.25)'
    },
    paletteB: palette || {
      primary: '#09080e',
      secondary: '#251b38',
      ambient: '#4f336e',
      glow: 'rgba(140, 80, 220, 0.25)'
    }
  });

  const prevPaletteRef = useRef(palette);

  useEffect(() => {
    if (!palette) return;
    const prev = prevPaletteRef.current;
    if (
      prev &&
      prev.primary === palette.primary &&
      prev.secondary === palette.secondary &&
      prev.ambient === palette.ambient
    ) {
      return;
    }

    prevPaletteRef.current = palette;

    setLayers((curr) => {
      if (curr.active === 0) {
        // Fade to layer B
        return {
          active: 1,
          paletteA: curr.paletteA,
          paletteB: palette
        };
      } else {
        // Fade to layer A
        return {
          active: 0,
          paletteA: palette,
          paletteB: curr.paletteB
        };
      }
    });
  }, [palette]);

  const renderBackgroundLayer = (p, opacity) => {
    if (!p) return null;
    return (
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[opacity]"
        style={{ opacity }}
        aria-hidden="true"
      >
        {/* Deep base radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 48%, ${p.secondary} 0%, ${p.primary} 65%, #040406 100%)`
          }}
        />

        {/* Ambient Blurred Light Orb 1 - Top Left */}
        <div
          className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-full blur-[130px] opacity-70 animate-ambient-float-1 will-change-transform"
          style={{
            backgroundColor: p.ambient,
            mixBlendMode: 'screen'
          }}
        />

        {/* Ambient Blurred Light Orb 2 - Bottom Right */}
        <div
          className="absolute -bottom-[25%] -right-[15%] w-[70vw] h-[70vw] max-w-[950px] max-h-[950px] rounded-full blur-[140px] opacity-60 animate-ambient-float-2 will-change-transform"
          style={{
            backgroundColor: p.secondary,
            mixBlendMode: 'screen'
          }}
        />

        {/* Soft Radial Center Core Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[110px] opacity-50 animate-pulse-subtle will-change-transform"
          style={{
            backgroundColor: p.glow || p.ambient,
            mixBlendMode: 'screen'
          }}
        />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer A */}
      {renderBackgroundLayer(layers.paletteA, layers.active === 0 ? 1 : 0)}

      {/* Layer B */}
      {renderBackgroundLayer(layers.paletteB, layers.active === 1 ? 1 : 0)}

      {/* Cinematic Depth Vignette Mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0, 0, 0, 0.45) 85%, rgba(0, 0, 0, 0.75) 100%)'
        }}
        aria-hidden="true"
      />
    </div>
  );
}
