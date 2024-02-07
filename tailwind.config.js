/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '3px 3px 40px -12px rgba(0, 0, 0, 0.3)',
        '9xl': '3px 3px 40px -12px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
  
}
