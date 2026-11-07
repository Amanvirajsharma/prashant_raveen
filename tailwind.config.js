/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF9F0',
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FFF9F0',
          300: '#FBF2E3',
          400: '#F5E6CC',
          500: '#EBD4AE',
        },
        gold: {
          DEFAULT: '#C5A15B',
          light: '#F5E3BD',
          shimmer: '#E8CA85',
          dark: '#8C6D2D',
          antique: '#C5A15B',
          saffron: '#D9A441',
        },
        maroon: {
          DEFAULT: '#6D1527',
          light: '#8E233B',
          deep: '#6D1527',
          royal: '#4E0C1A',
          wine: '#3A0713',
        },
        saffron: {
          DEFAULT: '#D9A441',
          light: '#F8D588',
          deep: '#B87B1A',
        },
        blush: {
          DEFAULT: '#F2DDD6',
          light: '#FAEDE9',
          dark: '#D9ADA2',
        },
        charcoal: {
          DEFAULT: '#33251F',
          deep: '#211814',
          muted: '#5C4A42',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        devanagari: ['"Rozha One"', '"Yatra One"', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 10px 40px -10px rgba(109, 21, 39, 0.15)',
        'royal-gold': '0 8px 30px -5px rgba(197, 161, 91, 0.3)',
        'card-lux': '0 20px 50px -15px rgba(51, 37, 31, 0.08)',
        'glow-diya': '0 0 25px 5px rgba(217, 164, 65, 0.45)',
      },
      backgroundImage: {
        'paper-grain': 'radial-gradient(#C5A15B 0.75px, transparent 0.75px)',
        'gold-gradient': 'linear-gradient(135deg, #F5E3BD 0%, #C5A15B 50%, #8C6D2D 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #8E233B 0%, #6D1527 50%, #3A0713 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
