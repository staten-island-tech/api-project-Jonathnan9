/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["retro", "coffee"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
