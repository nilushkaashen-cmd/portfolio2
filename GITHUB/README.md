# IMMERSIVE CREATIVE PORTFOLIO

A modern, experimental, minimalist portfolio website for visual artists and designers.
Inspired by **skylrk.com** for its visual art direction and **TikTok** for its continuous vertical browsing experience.

---

## ✦ Key Features

- **No Landing Pages or Hero Clutter**: Immediately opens into a continuous visual exhibition.
- **Apple Liquid Glass Navigation**: Floating translucent frosted pill navigation with sliding liquid active indicators and background blur.
- **Dynamic Background System (Skylrk Atmosphere)**: Intelligently adapts to each piece of artwork in view with GPU-accelerated atmospheric radial gradients, soft blurred light sources, and analog film grain noise texture.
- **TikTok-Style Continuous Feed**: Fluid vertical scroll snapping, scale & opacity depth transitions, generous negative space, and preservation of original aspect ratios.
- **Animations Video Feed**: Vertically scrollable video projects with muted inline autoplay on active view, pause on exit, minimal liquid playback controls, understated intro statement, and support for YouTube, Instagram, and native 3D video.
- **Configurable Content Architecture**: All image and video portfolio content is completely decoupled from UI code in `src/data/portfolioData.js`.

---

## ✦ Directory Structure

```
web/
├── assets/
│   ├── Arts/                 # High-resolution art pieces
│   ├── Character Designs/    # Character concepts & transparent PNGs
│   ├── Designs/              # Graphic & campaign designs
│   ├── Storyboards/          # Cinematic widescreen storyboard sequences
│   └── Animations/           # Native 3D animations and motion files
├── Logo/                     # Brand emblem (Artboard 5.png)
├── public/                   # Static symlinks & public assets
├── src/
│   ├── components/
│   │   ├── LiquidNav.jsx           # Apple Liquid Glass floating top bar
│   │   ├── DynamicBackground.jsx   # Skylrk-style adaptive dual-layer gradients
│   │   ├── NoiseOverlay.jsx        # Analog film grain & fractal noise texture
│   │   ├── GalleryFeed.jsx         # TikTok-inspired continuous scroll feed
│   │   ├── ArtworkItem.jsx         # Floating artwork presentation
│   │   ├── AnimationItem.jsx       # Video feed item (YouTube, IG, Native)
│   │   └── ScrollIndicator.jsx     # Discreet minimal counter & quick step
│   ├── data/
│   │   └── portfolioData.js        # Content configuration file
│   ├── utils/
│   │   └── colorExtractor.js       # Runtime HTML5 Canvas palette extractor
│   ├── App.jsx                     # Root application coordinator
│   ├── index.css                   # Tailwind styles, glassmorphism & resets
│   └── main.jsx                    # React entrypoint
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ✦ How to Manage and Update Artwork

To add, remove, or rearrange artwork:

1. **Place your artwork files** in the corresponding folder under `assets/<Category>/`.
2. **Open [`src/data/portfolioData.js`](file:///Volumes/Raffy/Fucking%20Raffy/web/src/data/portfolioData.js)**.
3. **Add or modify items** in the relevant category array:

```javascript
{
  id: 'unique-id',
  title: 'Project Title',
  src: '/assets/Arts/your-image-filename.jpeg',
  aspectRatio: '1/1', // or '16/9', '4/5', '1440/1920', etc.
  palette: {
    primary: '#170807',       // Deep background tone
    secondary: '#5c1711',     // Mid ambient tone
    ambient: '#8f2c22',       // Contrasting blurred light source
    glow: 'rgba(180, 50, 36, 0.28)' // Core halo glow
  }
}
```

> **Note**: If you omit `palette`, the website automatically analyzes the image with HTML5 Canvas at runtime and calculates complementary and contrasting atmospheric tones on the fly!

---

## ✦ Controls & Shortcuts

- **Touch & Mouse**: Natural vertical swipe / mouse wheel scroll.
- **Keyboard Navigation**:
  - `↓` or `j` or `PageDown`: Move to next artwork
  - `↑` or `k` or `PageUp`: Move to previous artwork
  - `Home`: Jump to first piece
  - `End`: Jump to last piece
- **Animations Video**:
  - Tap on native video to Play / Pause
  - Tap sound icon in bottom corner to Mute / Unmute
  - Click YouTube / Instagram badges to view original high-resolution sources

---

## ✦ Development Commands

```bash
# Start local dev server (default port 3000)
npm run dev

# Build optimized production bundle to dist/
npm run build

# Preview production build
npm run preview
```
