/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        min500: "500px",
      },
      fontSize: {
        headingClamp: "clamp(2rem, 2vw + 2rem, 6rem);",
        contentClamp: "clamp(0.9rem, 1vw + 0.6rem, 1.5rem);",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        appcolor: "#0C1F50",
        "focuscard-bg": "#F6F6F6",
        companycolor: "#274797",
        colorblue: "#1B2C59",
      },
      backgroundImage: {
        footerBg: "url('/src/assets/images/footer-bg.png')",
        wefocusonBg: "url('/src/assets/images/bg-wefocuson.png')",
        borderImg:
          "linear-gradient(white, rgb(255, 255, 255)) padding-box, linear-gradient(to right,rgba(255, 255, 255, 1),rgba(39, 71, 151, 1))border-box",
        servicesBg: "url('/src/assets/images/servicesbg.png')",
        mainBgImg: "url('/src/assets/images/bgimg.png')",
        formBg: "linear-gradient(156deg, #D0D0D015.14%, #EAEAEA91.23%)",
        D6Img: "linear-gradient(133deg, #F4F4F4 30.87%, #E1E1E1 70.65%)",
        whyBg: "url('/src/assets/images/whyneusparxbg.png')",
      },
      keyframes: {
        slide: {
          "100%": {
            transform: "translateX(calc(-50% - 2rem))",
          },
        },
        mobileSlide: {
          "100%": {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        autoScrollInfinite: "slide 20s infinite linear",
        autoScrollInfinite10: "slide 10s infinite linear",
        autoScrollInfinite15: "slide 15s infinite linear",
        autoScrollInfinite20: "slide 20s infinite linear",
        autoScrollInfiniteMobile10: "mobileSlide 10s infinite linear",
        autoScrollInfiniteMobile15: "mobileSlide 15s infinite linear",
        autoScrollInfiniteMobile20: "mobileSlide 20s infinite linear",
      },
    },
  },
  plugins: [],
};
