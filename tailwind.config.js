/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B2316", // exact Figma frame background color
        star: "#FFF84E", // exact star-rating fill color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // exact Figma body/heading font
        script: ["Indie Flower", "cursive"], // exact Figma nav-link font
      },
    },
  },
  plugins: [],
};
