/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        mono: [
          '"SF Mono"',
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      colors: {
        glass: {
          border: 'rgba(255, 255, 255, 0.16)',
          highlight: 'rgba(255, 255, 255, 0.3)',
          surface: 'rgba(255, 255, 255, 0.06)',
          active: 'rgba(255, 255, 255, 0.18)',
        }
      },
      backdropBlur: {
        '2xl': '32px',
        '3xl': '48px',
      },
      animation: {
        'ambient-float-1': 'floatOrb1 20s ease-in-out infinite alternate',
        'ambient-float-2': 'floatOrb2 25s ease-in-out infinite alternate',
        'ambient-float-3': 'floatOrb3 22s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
      },
      keyframes: {
        floatOrb1: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(80px, -60px) scale(1.15)' },
          '100%': { transform: 'translate(-40px, 40px) scale(0.95)' },
        },
        floatOrb2: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-90px, 70px) scale(1.2)' },
          '100%': { transform: 'translate(50px, -30px) scale(0.9)' },
        },
        floatOrb3: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(50px, 80px) scale(1.1)' },
          '100%': { transform: 'translate(-70px, -50px) scale(1.05)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
