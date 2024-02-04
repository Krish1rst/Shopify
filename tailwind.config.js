/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '10px 10px 40px -12px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
  
}
