/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        econest: {
          lightest: '#F3FAF2',
          soft: '#E4F3E1',
          natural: '#B9DDB3',
          fresh: '#78B978',
          primary: '#3D8B57',
          forest: '#1F5C3A',
          deep: '#103D29',
          white: '#FFFFFF',
          darkSurface: '#0B2418',
        },
        // Reconciled design tokens for Impact & nested ecological modules
        forest: {
          50: '#F3FAF2',
          100: '#E4F3E1',
          200: '#B9DDB3',
          300: '#78B978',
          400: '#4FA86D',
          500: '#3D8B57',
          600: '#2E7A4A',
          700: '#1F5C3A',
          800: '#16482D',
          900: '#103D29',
          950: '#071D12',
        },
        cream: {
          50: '#FAFDF9',
          100: '#F3FAF2',
          200: '#E9F5E7',
          300: '#DCEFD9',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        'brand': '0.22em',
        'subhead': '0.12em',
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(16, 61, 41, 0.05)',
        'organic': '0 10px 30px -10px rgba(16, 61, 41, 0.08)',
        'organic-lg': '0 20px 40px -15px rgba(16, 61, 41, 0.12)',
        'organic-glow': '0 0 35px rgba(120, 185, 120, 0.25)',
      },
      zIndex: {
        '45': '45',
      },
      spacing: {
        '18': '4.5rem',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}

