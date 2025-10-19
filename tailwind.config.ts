import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        background: 'hsl(45 29% 97%)', // ivory
        foreground: 'hsl(222.2 47.4% 11.2%)',
        primary: {
          DEFAULT: '#0F2A44', // deep navy
          foreground: '#F7F4EA', // ivory text on primary
        },
        secondary: {
          DEFAULT: '#C6A043', // gold accent
          foreground: '#0F2A44',
        },
        muted: {
          DEFAULT: '#E6E1D3',
          foreground: '#6b7280',
        },
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'inherit',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(15, 42, 68, 0.2)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 600ms ease-out both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config
