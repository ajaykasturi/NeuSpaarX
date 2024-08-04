/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        appcolor: "#0C1F50",
        "focuscard-bg": "rgba(255, 255, 255, 0.51)",
        companycolor: "#274797",
      },
      backgroundImage: {
        "footer-bg": "url('./src/assets/images/footer-bg.png')",
        "wefocuson-bg": "url('./src/assets/images/bg-wefocuson.png')",
        borderImg:
          "linear-gradient(white, rgb(255, 255, 255)) padding-box, linear-gradient(to right,rgba(255, 255, 255, 1),rgba(39, 71, 151, 1))border-box",
      },
    },
  },
  plugins: [],
};
