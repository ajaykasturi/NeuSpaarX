import React from "react";
import Navbar from "../Navbar/Navbar";
import bgImgHome from "../../assets/images/bgimg.png";
import LazyImage from "../CommonComps/LazyImage";
import NavigateBtn from "../Button/NavigateBtn";
function CareerLanding({ title, content, btnText, sideImg, imgClass }) {
  return (
    <div className="flex flex-col  min-h-svh sm:min-h-fit lg:min-h-dvh relative items-center">
      <div className="absolute -z-10 w-full h-full">
        <LazyImage src={bgImgHome} className="w-full h-full" />
      </div>
      <Navbar />
      <div className="grid grid-cols-1  sm:grid sm:grid-cols-[2fr_1fr] items-center justify-items-center grow  gap-8 sm:pb-10 mx-[4vw] ">
        <div className="flex flex-col gap-y-8 items-center sm:items-start">
          <div className="text-[#1B2C59] flex flex-col gap-y-2 items-center text-center sm:items-start sm:text-left">
            <div className="text-[3rem] leading-tight sm:text-[2rem] md:text-[2.5rem] xl:text-[4.5rem] 2xl:text-[6rem] font-medium">
              {title}
            </div>
            <div className="sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
              {content}
            </div>
          </div>
          {btnText && (
            <NavigateBtn
              name={btnText}
              path={"/contact-us"}
              styles="px-4 py-2 lg:px-6 lg:py-3 text-[1rem] lg:text-[1.2rem]"
            />
            // <Link to={"/contact-us"}>
            //   <Button
            //     name={btnText}
            //     styles="px-4 py-2 lg:px-6 lg:py-3 text-[1rem] lg:text-[1.2rem]"
            //   />
            // </Link>
          )}
        </div>
        {sideImg && (
          <div className="w-full self-start sm:self-auto">
            <img
              src={sideImg}
              className={`w-full h-full object-contain ${
                imgClass ? imgClass : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CareerLanding;
