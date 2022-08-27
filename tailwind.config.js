/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100vw': '100vw',
      },
      height: {
        '100vh': '100vh',
        '80vh': '80vh',
        '10vh': '10vh',
      },
    },
  },
  plugins: [],
}
