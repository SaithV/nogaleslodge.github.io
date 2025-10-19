import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: '0.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        // Palette mapping
        navy: '#0e2235', // deep navy
        gold: '#c49a3a', // accent
        offwhite: '#f7f4ef', // surface

        background: 'hsl(45 29% 97%)', // ivory background
        foreground: 'hsl(222.2 47.4% 11.2%)',
        primary: {
          DEFAULT: '#0e2235', // deep navy
          foreground: '#f7f4ef', // offwhite text on primary
        },
        secondary: {
          DEFAULT: '#c49a3a', // gold accent
          foreground: '#0e2235',
        },
        muted: {
          DEFAULT: '#E6E1D3',
          foreground: '#6b7280',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: 'inherit',
        },
        surface: {
          50: 'rgba(247, 244, 239, 0.5)',
          70: 'rgba(247, 244, 239, 0.7)',
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
