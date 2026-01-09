/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'system-ui', 'sans-serif']
      },
      colors: {
        background: {
          DEFAULT: '#0b101b',
          soft: '#050816'
        },
        primary: {
          DEFAULT: '#4f46e5'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.65)'
      }
    }
  },
  plugins: []
};

