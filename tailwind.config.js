/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
