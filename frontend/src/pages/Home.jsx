import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImgHome from "../assets/images/bgimg.png";
import aiHands from "../assets/images/aihands2.png";
import Carousel from "../components/Courosel/Carousel";
function Home() {
  return (
    <div className="mb-12">
      <div className="flex flex-col min-h-dvh  relative ">
        <div className="absolute -z-10 w-full h-full">
          <img src={bgImgHome} className="w-full h-full" />
        </div>
        <Navbar />
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
