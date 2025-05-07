/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",       // app directory (pages & layouts)
    "./components/**/*.{ts,tsx}", // components
    "./pages/**/*.{ts,tsx}",     // (optional, for legacy pages)
    "./src/**/*.{ts,tsx}",       // (optional, if you have src dir)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}