import React from "react";
import Navbar from "../Navbar/Navbar";
import bgImgHome from "../../assets/images/bgimg.png";
import whoweareimg from "../../assets/images/whoweare.png";
import MissionVisionCard from "./MissionVisionCard";
function WhoWeAre() {
  return (
    <>
      <div className="flex flex-col min-h-dvh relative items-center">
        <div className="absolute -z-10 w-full h-full">
          <img src={bgImgHome} className="w-full h-full" />
        </div>
        <Navbar />
        <div className="flex flex-col gap-y-6 sm:gap-y-8 mx-[5vw] mb-10 items-center justify-center grow">
          <div className="flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6  items-center justify-start break-words text-center">
            <div className="text-[#1B2C59] font-Poppins text-headingClamp font-normal">
              Who We Are
            </div>
            <div className="font-Poppins text-[#1B2C59] font-normal text-contentClamp">
              We are a team of trusted tech enthusiastic people inspired to do
              more, learn more, and help business ideas translate into reality
              and hold a rich experience in collaborating, designing,
              implementing, and building a quality solution for a wide range of
              business.
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center place-items-center">
            <div className="sm:w-[30rem] md:w-[35rem]">
              <img src={whoweareimg} className="w-full h-full" />
            </div>
            <MissionVisionCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
