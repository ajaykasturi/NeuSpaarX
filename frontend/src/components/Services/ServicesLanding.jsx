import React from "react";
import Navbar from "../Navbar/Navbar";
import bgImgHome from "../../assets/images/bgimg.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function ServicesLanding({ title, content, btnText, sideImg }) {
  return (
    <div className="flex flex-col  sm:min-h-fit lg:min-h-dvh relative items-center">
      <div className="absolute -z-10 w-full h-full">
        <img src={bgImgHome} className="w-full h-full" />
      </div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 items-center justify-items-center grow  gap-8 mx-[4vw] sm:pb-10">
        <div className="flex flex-col gap-y-8 items-center sm:items-start">
          <div className="text-[#1B2C59] flex flex-col gap-y-2 items-center text-center sm:items-start sm:text-left">
            <div className="text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-medium">
              {title}
            </div>
            <div className="text- sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
              {content}
            </div>
          </div>
          {btnText && (
            <Link to={"/contact-us"}>
              <Button
                name={btnText}
                styles="px-4 py-2 lg:px-6 lg:py-3 text-[1rem] lg:text-[1.2rem]"
              />
            </Link>
          )}
        </div>
        <div className="w-full h-full">
          <img src={sideImg} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default ServicesLanding;
