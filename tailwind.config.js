/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand tokens — change these four values to re-theme the whole site
        accent: "#E96E00", // primary highlight / calls to action
        ink: "#181818", // page background
        charcoal: "#3D3D3D", // card & border surfaces
        paper: "#FFFFFF", // text on dark surfaces
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
