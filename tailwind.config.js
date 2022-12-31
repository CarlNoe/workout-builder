/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#00B2FF",
      },
      fontFamily: {
        main: ["Bebas Neue", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
      },
    },
    plugins: [],
  }
};