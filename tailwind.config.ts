import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        // Yin & Yang theme colors
        yin: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#000000',
        },
        yang: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fafafa',
          300: '#f5f5f5',
          400: '#f0f0f0',
          500: '#e5e5e5',
          600: '#d4d4d4',
          700: '#b3b3b3',
          800: '#8a8a8a',
          900: '#6f6f6f',
          950: '#525252',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'yin-yang': 'yin-yang 20s linear infinite',
        'dragon-fly': 'dragon-fly 15s ease-in-out infinite',
        'glassmorphism': 'glassmorphism 2s ease-in-out',
        'bento-slide': 'bento-slide 0.6s ease-out',
        'liquid-distort': 'liquid-distort 1s ease-in-out',
      },
      keyframes: {
        'yin-yang': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'dragon-fly': {
          '0%': { transform: 'translateX(-100vw) translateY(50vh)' },
          '50%': { transform: 'translateX(50vw) translateY(20vh)' },
          '100%': { transform: 'translateX(100vw) translateY(50vh)' },
        },
        'glassmorphism': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bento-slide': {
          '0%': { transform: 'translateX(-20px) translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
        'liquid-distort': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'yin-yang': '0 0 50px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem', 
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
    },
  },
  plugins: [],
};
export default config;
