/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      mob: { max: "450px" },
      desk: { min: "451px" },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      accent: "#972609",
    },
    extend: {
      boxShadow: {
        "block-shadow": "inset 0px -8px 25px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
