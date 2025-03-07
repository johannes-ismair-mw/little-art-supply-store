import type { Config } from 'tailwindcss';

export default {
  content: ['./**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#010717',
      primary: '#4169E1',
      gray: {
        lighter: '#FAF7F3',
        light: '#323232',
        dark: '#010717',
        txt: '#4c4d56',
        line: '#E5E5E5',
      },
      green: {
        light: '#A8E6CF',
        default: '#4CAF50',
        dark: '#2E7D32',
      },
      red: {
        light: '#FF8A80',
        default: '#F44336',
        dark: '#C62828',
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
