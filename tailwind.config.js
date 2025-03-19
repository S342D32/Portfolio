/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3436',
        secondary: '#0984E3',
        accent: '#00B894',
        background: '#FFFFFF',
        text: '#2D3436',
        error: '#D63031',
        success: '#00B894',
        warning: '#FDCB6E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 