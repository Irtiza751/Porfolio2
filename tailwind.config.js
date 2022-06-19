/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter'],
      }
    },
    container: {
      center: true,
      padding: "2rem"
    }
  },
  plugins: [],
}
