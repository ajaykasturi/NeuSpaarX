import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImgHome from "../assets/images/bgimg.png";
import aiHands from "../assets/images/aihands2.png";
import Carousel from "../components/Courosel/Carousel";
import AboutUs from "../components/AboutUs/AboutUs";
import WeFocusOn from "../components/WeFocusOn/WeFocusOn";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";
import ContactUs from "../components/ContactUs/ContactUs";
import AgileComponent from "../components/AgileMethodology/AgileComponent";
function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:h-screen  relative">
        <div className="absolute -z-10 w-full h-full">
          <img src={bgImgHome} className="w-full h-full" />
        </div>
        <Navbar />
        <Carousel />
      </div>
      <AboutUs />
      <WeFocusOn />
      <AgileComponent />
      <Services />
      <Industries />
      <ContactUs />
    </div>
  );
}

export default Home;
