/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // right bottom blur  spread color
        "lower-right-offset": "2px 4px 7px rgba(0, 0, 0, 0.95)",
      },
      colors: {
        homeBg: "#d63e49",
        aboutBg: "#d67736",
        studiesBg: "#d4d938",
        outreachBg: "#35db46",
        successesBg: "#26b1e0",
        organizingBg: "#a75ee0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-24": "linear-gradient(24deg, var(--tw-gradient-stops))",
      },
      listStyleType: {
        square: "square",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  plugins: [],
};
