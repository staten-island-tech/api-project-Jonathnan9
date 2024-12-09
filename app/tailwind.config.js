/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["retro", "coffee"],
  },
  theme: {
    extend: {
      fontSize: {
        xxxxs: "0.3rem",
      },
      width: {
        31: "31%",
        46: "46%",
        78: "78%",
      },
    },
  },
  plugins: [require("daisyui")],
};
