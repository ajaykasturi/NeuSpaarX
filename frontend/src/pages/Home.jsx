import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImgHome from "../assets/images/bgimg.png";
import aiHands from "../assets/images/aihands2.png";
function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="h-screen absolute -z-10 w-full">
        <img src={bgImgHome} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-end gap-x-8">
        <div className="text-9xl pl-10 font-light">
          Unleash the <br /> Power of <span className="font-black">AI</span>{" "}
        </div>
        <div className="min-h-fit">
          <img src={aiHands} className="h-full w-full object-cover" />
        </div>
      </div> */}
    </>
  );
}

export default Home;
