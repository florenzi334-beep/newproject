/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090c',
          900: '#0b0f14',
          800: '#11161d',
          700: '#1a212b',
          600: '#27313e',
          500: '#3a4656',
        },
        neon: {
          DEFAULT: '#39ff14',
          400: '#6bff5a',
          500: '#39ff14',
          600: '#1fcc0a',
          glow: 'rgba(57,255,20,0.45)',
        },
        danger: {
          400: '#ff6b6b',
          500: '#ff4d4d',
          600: '#e63333',
        },
        warn: '#ffb020',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(57,255,20,0.35), 0 0 24px rgba(57,255,20,0.35)',
        'neon-sm': '0 0 12px rgba(57,255,20,0.35)',
        phone: '0 40px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 1px rgba(57,255,20,0.35), 0 0 18px rgba(57,255,20,0.30)' },
          '50%': { boxShadow: '0 0 0 1px rgba(57,255,20,0.55), 0 0 34px rgba(57,255,20,0.55)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sweep: {
          '0%': { strokeDashoffset: '360' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        shimmer: 'shimmer 1.6s linear infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        sweep: 'sweep 1.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
