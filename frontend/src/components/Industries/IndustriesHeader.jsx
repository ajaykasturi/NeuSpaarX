import React from "react";
import Navbar from "../Navbar/Navbar";
import bgImgHome from "../../assets/images/bgimg.png";
import industriesHeadImg from "../../assets/images/industriesheadimg.png";
function IndustriesHeader() {
  return (
    <div className="flex flex-col min-h-dvh relative items-center gap-y-[5vw]">
      <div className="absolute -z-10 w-full h-full">
        <img src={bgImgHome} className="w-full h-full" />
      </div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-end mx-[5vw] content-end">
        <div className="flex flex-col gap-y-6">
          <div className="text-headingClamp">Industries</div>
          <div className="text-contentClamp">
            Data is rapidly increasing and is playing a key role in decision
            making across all the industries.
          </div>
        </div>
        <div>
          <img src={industriesHeadImg} className="rounded-full w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default IndustriesHeader;
