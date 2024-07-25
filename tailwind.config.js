/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll_left: "scroll_left 30s linear infinite",
        scroll_right: "scroll_right 30s linear infinite",
        pause: "paused",
      },
      keyframes: {
        scroll_left: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scroll_right: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
    colors: {
      ...colors,
      primary: colors.green,
      secondary: colors.yellow,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
