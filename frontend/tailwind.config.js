/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appcolor: "#0C1F50",
      },
      backgroundImage: {
        "footer-bg": "url('./src/assets/images/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
