/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pixel: ['Pixel', 'monospace'],
        PixelEn: ['"Pixelify Sans"', 'monospace'],
      },
      colors: {
        moss: '#424123',
        olive: '#80744C', 
        oat: '#E6DED3',
        blush: '#E8D1C1',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}