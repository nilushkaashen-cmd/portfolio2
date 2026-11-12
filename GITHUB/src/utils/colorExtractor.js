/**
 * Color extraction utility using browser HTML5 Canvas.
 * Automatically samples vibrant, dominant, and complementary atmospheric tones.
 */

// In-memory cache for extracted palettes to avoid redundant work
const paletteCache = new Map();

/**
 * Extracts a Skylrk-style 4-tone atmospheric palette from an Image element.
 * @param {HTMLImageElement} img
 * @returns {Promise<{ primary: string, secondary: string, ambient: string, glow: string }>}
 */
export async function extractPaletteFromImage(img) {
  if (!img || !img.src) return null;

  if (paletteCache.has(img.src)) {
    return paletteCache.get(img.src);
  }

  return new Promise((resolve) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return resolve(null);

      // Downsample to a small 64x64 grid for high performance
      canvas.width = 64;
      canvas.height = 64;

      ctx.drawImage(img, 0, 0, 64, 64);
      const imageData = ctx.getImageData(0, 0, 64, 64);
      const data = imageData.data;

      let rSum = 0, gSum = 0, bSum = 0, count = 0;
      let maxSat = -1;
      let vibrant = [50, 50, 60];

      for (let i = 0; i < data.length; i += 4) {
        const a = data[i + 3];
        if (a < 50) continue; // skip transparent

        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        rSum += r;
        gSum += g;
        bSum += b;
        count++;

        // Calculate HSL saturation
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const bri = max / 255;
        const sat = max === 0 ? 0 : (max - min) / max;

        // Favor colors with good saturation and medium brightness
        if (sat > maxSat && bri > 0.18 && bri < 0.92) {
          maxSat = sat;
          vibrant = [r, g, b];
        }
      }

      if (count === 0) return resolve(null);

      const avgR = Math.round(rSum / count);
      const avgG = Math.round(gSum / count);
      const avgB = Math.round(bSum / count);

      // Deep atmospheric primary (darkened average tone for deep background)
      const primaryR = Math.max(4, Math.min(24, Math.round(avgR * 0.12)));
      const primaryG = Math.max(4, Math.min(24, Math.round(avgG * 0.12)));
      const primaryB = Math.max(6, Math.min(28, Math.round(avgB * 0.14)));

      // Secondary tone (richer midtone based on vibrant)
      const secR = Math.round(vibrant[0] * 0.38);
      const secG = Math.round(vibrant[1] * 0.38);
      const secB = Math.round(vibrant[2] * 0.38);

      // Ambient highlight tone
      const ambR = Math.round(vibrant[0] * 0.65);
      const ambG = Math.round(vibrant[1] * 0.65);
      const ambB = Math.round(vibrant[2] * 0.65);

      const palette = {
        primary: `rgb(${primaryR}, ${primaryG}, ${primaryB})`,
        secondary: `rgb(${secR}, ${secG}, ${secB})`,
        ambient: `rgb(${ambR}, ${ambG}, ${ambB})`,
        glow: `rgba(${vibrant[0]}, ${vibrant[1]}, ${vibrant[2]}, 0.28)`,
        theme: 'auto-extracted'
      };

      paletteCache.set(img.src, palette);
      resolve(palette);
    } catch (e) {
      // In case of CORS or canvas security error, resolve null safely
      console.warn('Palette extraction fallback:', e);
      resolve(null);
    }
  });
}
