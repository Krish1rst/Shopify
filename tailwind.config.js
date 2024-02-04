/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '2px 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
  
}
