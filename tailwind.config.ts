import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Accents
        brand: {
          lime: '#D2FF00',
          'lime-muted': '#C4EE12',
          violet: '#6332F6',
          'violet-dark': '#4F24CC',
        },
        // Surfaces
        surface: {
          dark: '#0E0F11',
          'dark-card': '#1A1B1E',
          light: '#F8F9FA',
          white: '#FFFFFF',
        },
        // Borders
        border: {
          dark: '#26282D',
          light: '#E5E7EB',
        },
        // Legacy aliases for backward compatibility
        coral: '#6332F6',
        'coral-dark': '#4F24CC',
        charcoal: '#0E0F11',
        'charcoal-light': '#1A1B1E',
        cream: '#F8F9FA',
        'cream-dark': '#F0F1F3',
        sun: '#D2FF00',
        terracotta: '#4F24CC',
        sky: '#D2FF00',
        'sky-dark': '#C4EE12',
        mint: '#6332F6',
        'mint-dark': '#4F24CC',
        emerald: '#D2FF00',
        'emerald-light': '#C4EE12',
        royal: '#6332F6',
        'royal-light': '#4F24CC',
        brown: '#0E0F11',
        'brown-light': '#1A1B1E',
        sand: '#E8DCC4',
        // Neutrals
        gray: {
          100: '#F8F9FA',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2rem + 5vw, 4.5rem)',
        'fluid-6xl': 'clamp(3.75rem, 2.5rem + 6.25vw, 6rem)',
        'fluid-hero': 'clamp(3.5rem, 2.5rem + 5vw, 4.25rem)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'large': '0 20px 40px -12px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slower': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}

export default config