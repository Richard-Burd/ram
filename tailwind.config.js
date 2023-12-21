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
        "lower-right-offset": "2px 2px 10px rgba(0, 0, 0, 0.80)",
      },
      colors: {
        homeBg: "#ff1122",
        aboutBg: "#ff6c07",
        studiesBg: "#f8ff0d",
        outreachBg: "#0dff26",
        successesBg: "#00bdff",
        organizingBg: "#c780ff",
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
