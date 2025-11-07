/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f3',
          100: '#faeee1',
          200: '#f4dbc2',
          300: '#ebc098',
          400: '#e0a06c',
          500: '#c6824b', // Main brand color
          600: '#b06d3a',
          700: '#925631',
          800: '#77462c',
          900: '#623b26',
        },
        secondary: {
          50: '#ffffff', // Main secondary color
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#ebebeb',
          500: '#e6e6e6',
          600: '#d1d1d1',
          700: '#b8b8b8',
          800: '#9e9e9e',
          900: '#858585',
        },
        cream: '#faf8f5',
        charcoal: '#3a3a3a',
        gold: '#d4a574',
        'dark-brown': '#2c1810',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}