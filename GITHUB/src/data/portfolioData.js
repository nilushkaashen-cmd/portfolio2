/**
 * =======================================================================
 * PORTFOLIO CONTENT CONFIGURATION SYSTEM
 * =======================================================================
 * Separates all image and video portfolio content from UI code.
 */

export const CATEGORIES = [
  { id: 'arts', label: 'Arts' },
  { id: 'designs', label: 'Designs' },
  { id: 'character-designs', label: 'Character Designs' },
  { id: 'storyboards', label: 'Storyboards' },
  { id: 'animations', label: 'Animations' },
];

export const PORTFOLIO_DATA = {
  // ---------------------------------------------------------------------
  // 1. ARTS (arts no.02 black and white is at the top)
  // ---------------------------------------------------------------------
  arts: [
    {
      id: 'art-02',
      title: 'Composition II (Monochrome Charcoal)',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.49 (2).jpeg',
      aspectRatio: '1/1',
      palette: {
        primary: '#09090b',
        secondary: '#222327',
        ambient: '#454850',
        glow: 'rgba(210, 215, 225, 0.16)',
        theme: 'charcoal-noir'
      }
    },
    {
      id: 'art-01',
      title: 'Composition I',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.49 (1).jpeg',
      aspectRatio: '1/1',
      palette: {
        primary: '#170807',
        secondary: '#5c1711',
        ambient: '#8f2c22',
        glow: 'rgba(180, 50, 36, 0.28)',
        theme: 'burnt-crimson'
      }
    },
    {
      id: 'art-03',
      title: 'Composition III',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.49.jpeg',
      aspectRatio: '1366/1600',
      palette: {
        primary: '#18130c',
        secondary: '#5e4626',
        ambient: '#9c7340',
        glow: 'rgba(215, 160, 85, 0.26)',
        theme: 'warm-ochre'
      }
    },
    {
      id: 'art-04',
      title: 'Composition IV',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.50 (1).jpeg',
      aspectRatio: '1/1',
      palette: {
        primary: '#150a08',
        secondary: '#4d261e',
        ambient: '#783c30',
        glow: 'rgba(165, 82, 65, 0.24)',
        theme: 'sienna-umber'
      }
    },
    {
      id: 'art-05',
      title: 'Composition V',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.50 (2).jpeg',
      aspectRatio: '1/1',
      palette: {
        primary: '#0d071d',
        secondary: '#361b61',
        ambient: '#6229ab',
        glow: 'rgba(135, 60, 230, 0.32)',
        theme: 'indigo-violet'
      }
    },
    {
      id: 'art-06',
      title: 'Composition VI',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.50.jpeg',
      aspectRatio: '1600/1330',
      palette: {
        primary: '#0f0e1a',
        secondary: '#2e254a',
        ambient: '#5b4c82',
        glow: 'rgba(145, 120, 205, 0.28)',
        theme: 'twilight-lavender'
      }
    },
    {
      id: 'art-07',
      title: 'Composition VII',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.51 (1).jpeg',
      aspectRatio: '1462/1600',
      palette: {
        primary: '#180c09',
        secondary: '#663222',
        ambient: '#ab5b42',
        glow: 'rgba(230, 130, 100, 0.28)',
        theme: 'terracotta-blush'
      }
    },
    {
      id: 'art-08',
      title: 'Composition VIII',
      src: '/assets/Arts/WhatsApp Image 2026-11-03 at 13.01.51.jpeg',
      aspectRatio: '1/1',
      palette: {
        primary: '#110f13',
        secondary: '#3e2a22',
        ambient: '#6e4c39',
        glow: 'rgba(182, 130, 95, 0.22)',
        theme: 'slate-amber'
      }
    }
  ],

  // ---------------------------------------------------------------------
  // 2. DESIGNS (no.3 removed as requested)
  // ---------------------------------------------------------------------
  designs: [
    {
      id: 'design-c01',
      title: 'Design Specimen 01',
      src: '/assets/Designs/design 1.jpg',
      aspectRatio: '1/1',
      palette: {
        primary: '#0d0706',
        secondary: '#2e1511',
        ambient: '#54231b',
        glow: 'rgba(150, 40, 30, 0.28)',
        theme: 'crimson-noir'
      }
    },
    {
      id: 'design-c02',
      title: 'Design Specimen 02',
      src: '/assets/Designs/design 2.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#1c0c04',
        secondary: '#5e2a07',
        ambient: '#b8540b',
        glow: 'rgba(235, 110, 20, 0.32)',
        theme: 'burnt-amber'
      }
    },
    {
      id: 'design-c04',
      title: 'Design Specimen 04',
      src: '/assets/Designs/design 4.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#100403',
        secondary: '#3b0b06',
        ambient: '#6b160e',
        glow: 'rgba(175, 30, 20, 0.28)',
        theme: 'dark-garnet'
      }
    },
    {
      id: 'design-c05',
      title: 'Design Specimen 05',
      src: '/assets/Designs/design 5.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#0a0a0c',
        secondary: '#24252a',
        ambient: '#52545d',
        glow: 'rgba(240, 240, 248, 0.22)',
        theme: 'silver-monochrome'
      }
    },
    {
      id: 'design-01',
      title: 'Editorial Visual Design',
      src: '/assets/Designs/670265830_18416445841134406_9128616961040377427_n.jpg',
      aspectRatio: '1440/1920',
      palette: {
        primary: '#13090b',
        secondary: '#481d26',
        ambient: '#1b454d',
        glow: 'rgba(40, 145, 158, 0.26)',
        theme: 'dusty-petrol'
      }
    },
    {
      id: 'design-02',
      title: 'Monochrome Layout Specimen',
      src: '/assets/Designs/771968547_2471162820061460_473096241088241700_n.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#0a0a0d',
        secondary: '#202126',
        ambient: '#4a4b53',
        glow: 'rgba(245, 245, 250, 0.2)',
        theme: 'silver-specimen'
      }
    },
    {
      id: 'design-03',
      title: 'Crimson Campaign Identity',
      src: '/assets/Designs/772114609_2472017219976020_1833212339259977594_n.jpg',
      aspectRatio: '1/1',
      palette: {
        primary: '#1d0405',
        secondary: '#660a10',
        ambient: '#ad1a21',
        glow: 'rgba(225, 35, 38, 0.35)',
        theme: 'crimson-scarlet'
      }
    },
    {
      id: 'design-04',
      title: 'Solar Graphic Exploration',
      src: '/assets/Designs/793869064_2493116044532804_5344052775632096445_n.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#151308',
        secondary: '#493f1b',
        ambient: '#7d6c2d',
        glow: 'rgba(195, 170, 75, 0.28)',
        theme: 'golden-olive'
      }
    },
    {
      id: 'design-05',
      title: 'Midnight Obsidian Series',
      src: '/assets/Designs/793903242_2493115804532828_7157751089117417218_n.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#04060c',
        secondary: '#121e33',
        ambient: '#1f3458',
        glow: 'rgba(60, 135, 250, 0.25)',
        theme: 'obsidian-navy'
      }
    },
    {
      id: 'design-06',
      title: 'Violet Prism Study',
      src: '/assets/Designs/798247864_2494562371054838_7065484814940659472_n.jpg',
      aspectRatio: '1600/2002',
      palette: {
        primary: '#0d0618',
        secondary: '#331357',
        ambient: '#1e3c8f',
        glow: 'rgba(150, 52, 238, 0.3)',
        theme: 'amethyst-sapphire'
      }
    },
    {
      id: 'design-07',
      title: 'Verdant Forest Identity',
      src: '/assets/Designs/799170990_2495835677594174_5055074354430627569_n.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#05130b',
        secondary: '#143823',
        ambient: '#245d3a',
        glow: 'rgba(35, 200, 95, 0.26)',
        theme: 'emerald-pine'
      }
    },
    {
      id: 'design-08',
      title: 'Deep Oceanic Gradient',
      src: '/assets/Designs/801668033_2497693457408396_1830896136274091820_n.jpg',
      aspectRatio: '1600/2000',
      palette: {
        primary: '#040a15',
        secondary: '#0c223f',
        ambient: '#164475',
        glow: 'rgba(15, 170, 240, 0.28)',
        theme: 'oceanic-abyss'
      }
    },
    {
      id: 'design-09',
      title: 'Cinematic Noir Poster',
      src: '/assets/Designs/843368227_2531146654063076_887464350614184128_n.jpg',
      aspectRatio: '1920/1080',
      palette: {
        primary: '#0f0605',
        secondary: '#3d1512',
        ambient: '#66261f',
        glow: 'rgba(190, 30, 30, 0.26)',
        theme: 'noir-rust'
      }
    }
  ],

  // ---------------------------------------------------------------------
  // 3. CHARACTER DESIGNS (Fixed & Optimized sRGB)
  // ---------------------------------------------------------------------
  'character-designs': [
    {
      id: 'char-c01',
      title: 'Character Concept Art',
      src: '/assets/Character Designs/character art.jpg',
      aspectRatio: '2048/1776',
      isTransparent: false,
      palette: {
        primary: '#120b08',
        secondary: '#3d251a',
        ambient: '#663e2a',
        glow: 'rgba(180, 100, 70, 0.28)',
        theme: 'character-umber'
      }
    },
    {
      id: 'char-01',
      title: 'Forest Entity',
      src: '/assets/Character Designs/IMG_3121.PNG',
      aspectRatio: '2568/2171',
      isTransparent: false,
      palette: {
        primary: '#081109',
        secondary: '#1b2d1d',
        ambient: '#37523a',
        glow: 'rgba(75, 225, 130, 0.24)',
        theme: 'ethereal-sage'
      }
    },
    {
      id: 'char-02',
      title: 'Solar Titan',
      src: '/assets/Character Designs/IMG_3122.PNG',
      aspectRatio: '1/1',
      isTransparent: false,
      palette: {
        primary: '#180e04',
        secondary: '#55320a',
        ambient: '#915410',
        glow: 'rgba(250, 160, 15, 0.32)',
        theme: 'solar-amber'
      }
    },
    {
      id: 'char-03',
      title: 'Mecha Cyberform',
      src: '/assets/Character Designs/IMG_3123.PNG',
      aspectRatio: '1/1',
      isTransparent: true,
      palette: {
        primary: '#110c09',
        secondary: '#35241d',
        ambient: '#614436',
        glow: 'rgba(185, 135, 110, 0.25)',
        theme: 'mecha-umber'
      }
    },
    {
      id: 'char-04',
      title: 'Desert Nomad Sentinel',
      src: '/assets/Character Designs/IMG_3124.PNG',
      aspectRatio: '1/1',
      isTransparent: true,
      palette: {
        primary: '#181009',
        secondary: '#573419',
        ambient: '#945b2d',
        glow: 'rgba(225, 125, 10, 0.3)',
        theme: 'desert-terracotta'
      }
    }
  ],

  // ---------------------------------------------------------------------
  // 4. STORYBOARDS (Authentic Works from custom 01)
  // ---------------------------------------------------------------------
  storyboards: [
    {
      id: 'sb-01',
      title: 'Storyboard Sequence 01',
      src: '/assets/Storyboards/storyboard 01.jpeg',
      aspectRatio: '1280/543',
      palette: {
        primary: '#08080a',
        secondary: '#1e1e24',
        ambient: '#3d3d47',
        glow: 'rgba(200, 200, 210, 0.18)',
        theme: 'monochrome-widescreen'
      }
    },
    {
      id: 'sb-02',
      title: 'Storyboard Sequence 02',
      src: '/assets/Storyboards/storyboard 02.jpeg',
      aspectRatio: '866/966',
      palette: {
        primary: '#0a0a0c',
        secondary: '#222328',
        ambient: '#464852',
        glow: 'rgba(235, 235, 245, 0.2)',
        theme: 'sketch-monochrome'
      }
    },
    {
      id: 'sb-03',
      title: 'Storyboard Sequence 03',
      src: '/assets/Storyboards/storyboard 03.jpeg',
      aspectRatio: '904/1280',
      palette: {
        primary: '#060a12',
        secondary: '#152438',
        ambient: '#2b476b',
        glow: 'rgba(70, 130, 210, 0.26)',
        theme: 'slate-indigo'
      }
    },
    {
      id: 'sb-04',
      title: 'Storyboard Sequence 04',
      src: '/assets/Storyboards/storyboard 04.jpeg',
      aspectRatio: '904/1280',
      palette: {
        primary: '#0c0709',
        secondary: '#2e1921',
        ambient: '#54303d',
        glow: 'rgba(160, 80, 110, 0.22)',
        theme: 'quartz-noir'
      }
    },
    {
      id: 'sb-05',
      title: 'Storyboard Sequence 05',
      src: '/assets/Storyboards/storyboard 05.jpeg',
      aspectRatio: '1280/1140',
      palette: {
        primary: '#120807',
        secondary: '#401915',
        ambient: '#7a2d25',
        glow: 'rgba(200, 50, 40, 0.28)',
        theme: 'crimson-sketch'
      }
    }
  ],

  // ---------------------------------------------------------------------
  // 5. ANIMATIONS (TikToks, YouTubes & Instagram Works)
  // ---------------------------------------------------------------------
  animations: [
    {
      id: 'anim-tt-01',
      title: 'Motion Project — TikTok I',
      type: 'tiktok',
      videoId: '7590092427160079624',
      url: 'https://www.tiktok.com/@ashennilushka/video/7590092427160079624',
      aspectRatio: '9/16',
      palette: {
        primary: '#050a14',
        secondary: '#0e1f3d',
        ambient: '#1d4880',
        glow: 'rgba(0, 242, 234, 0.3)',
        theme: 'tiktok-cyan'
      }
    },
    {
      id: 'anim-tt-02',
      title: 'Motion Project — TikTok II',
      type: 'tiktok',
      videoId: '7576275112450641160',
      url: 'https://www.tiktok.com/@ashennilushka/video/7576275112450641160',
      aspectRatio: '9/16',
      palette: {
        primary: '#140510',
        secondary: '#3d0d31',
        ambient: '#781961',
        glow: 'rgba(255, 0, 79, 0.3)',
        theme: 'tiktok-magenta'
      }
    },
    {
      id: 'anim-yt-01',
      title: 'Visual Concept Showcase I',
      type: 'youtube',
      videoId: 'txbMU8C-y3Q',
      url: 'https://youtu.be/txbMU8C-y3Q',
      aspectRatio: '16/9',
      palette: {
        primary: '#060c18',
        secondary: '#132850',
        ambient: '#2756a0',
        glow: 'rgba(60, 130, 246, 0.3)',
        theme: 'cinematic-blue'
      }
    },
    {
      id: 'anim-yt-02',
      title: 'Visual Direction II',
      type: 'youtube',
      videoId: 'l355TIYPmoo',
      url: 'https://youtu.be/l355TIYPmoo',
      aspectRatio: '16/9',
      palette: {
        primary: '#180713',
        secondary: '#470d34',
        ambient: '#80185d',
        glow: 'rgba(236, 72, 153, 0.28)',
        theme: 'visual-magenta'
      }
    },
    {
      id: 'anim-ig-01',
      title: 'Motion Concept Reel',
      type: 'instagram',
      shortcode: 'DWUAvZ9Ee9g',
      url: 'https://www.instagram.com/reels/DWUAvZ9Ee9g/',
      isReel: true,
      aspectRatio: '9/16',
      palette: {
        primary: '#13091e',
        secondary: '#361656',
        ambient: '#602699',
        glow: 'rgba(168, 85, 247, 0.3)',
        theme: 'motion-violet'
      }
    },
    {
      id: 'anim-ig-02',
      title: 'Kinetic 3D Post',
      type: 'instagram',
      shortcode: 'DXefPmhEavi',
      url: 'https://www.instagram.com/p/DXefPmhEavi/',
      isReel: false,
      aspectRatio: '1/1',
      palette: {
        primary: '#150905',
        secondary: '#451e10',
        ambient: '#76341c',
        glow: 'rgba(249, 115, 22, 0.28)',
        theme: 'kinetic-amber'
      }
    }
  ]
};

export const ANIMATIONS_INTRO =
  "From visual development to the final execution, I contributed to these projects through visual and concept art, along with basic 3D work. My role focused on developing the visual direction, exploring concepts, and helping bring creative ideas to life.";
