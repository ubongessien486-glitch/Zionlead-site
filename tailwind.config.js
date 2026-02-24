/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        brand: {
          cyan: '#06b6d4',
          green: '#10b981',
          dark: '#0a1628',
          mid: '#0d2137',
          light: '#e0f7fa',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a2f2a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(16,185,129,0.08) 100%)',
        'glow-cyan': 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.15), transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(6,182,212,0.3)',
        'glow-green': '0 0 30px rgba(16,185,129,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
        'card-hover': '0 20px 60px rgba(6,182,212,0.2)',
      },
    },
  },
  plugins: [],
}
