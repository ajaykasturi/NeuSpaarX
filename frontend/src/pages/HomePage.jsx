import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImgHome from "../assets/images/bgimg.png";
import Carousel from "../components/Courosel/Carousel";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";
import ContactUs from "../components/ContactUs/ContactUs";
import AgileComponent from "../components/AgileMethodology/AgileComponent";
import HomeFocus from "../components/WeFocusOn/HomeFocus";
function Home() {
  return (
    <div className="flex flex-col">
      <div></div>
      <div className="flex flex-col lg:h-screen  relative">
        <div className="absolute -z-10 w-full h-full">
          <img src={bgImgHome} className="w-full h-full" />
        </div>
        <Navbar />
        <Carousel />
      </div>
      <AboutUs />
      <HomeFocus />
      <AgileComponent />
      <Services />
      <Industries />
      <ContactUs />
    </div>
  );
}

export default Home;
