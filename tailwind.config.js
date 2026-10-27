/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0D0C',
          secondary: '#111412',
          tertiary: '#161918',
        },
        text: {
          primary: '#F3F3EE',
          secondary: '#929792',
          muted: '#5A5F5B',
        },
        accent: {
          DEFAULT: '#C7F36B',
          dim: '#A8D452',
          dark: '#8FB83A',
        },
        border: {
          DEFAULT: '#1E2420',
          light: '#2A302B',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 1.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.5vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 3vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-3xl': 'clamp(2.5rem, 6vw, 4.5rem)',
        'fluid-4xl': 'clamp(3rem, 8vw, 6.5rem)',
        'fluid-hero': 'clamp(3.5rem, 10vw, 8rem)',
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 8rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(199, 243, 107, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(199, 243, 107, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
