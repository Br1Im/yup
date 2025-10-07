/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: '#424123',
        olive: '#80744C', 
        oat: '#E6DED3',
        blush: '#E8D1C1',
      }
    },
  },
  plugins: [],
}