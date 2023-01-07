/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#00B2FF",
        tertiary: "#1E1E1E",
      },
      fontFamily: {
        main: ["Bebas Neue", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
      },
    },
    plugins: [],
  }
};