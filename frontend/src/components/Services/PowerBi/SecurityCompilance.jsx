import React from "react";
import security from "../../../assets/images/security.png";
import LazyImage from "../../CommonComps/LazyImage";
function SecurityCompilance() {
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-10 rounded-2xl">
      <div className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl  text-center text-colorblue">
        Security and Compliance
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 place-items-center min-[900px]:grid-cols-[25rem_25rem] lg:grid-cols-[28rem_28rem] xl:grid-cols-[30rem_30rem] 2xl:grid-cols-[32rem_32rem] justify-center">
        <div className="w-[50%] min-[550px]:w-[40%] sm:w-full">
          <LazyImage src={security} className="w-full" />
        </div>
        <div className="p-4 text-colorblue md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]">
          Power BI prioritizes data protection with advanced security measures
          like Role-Level Security (RLS), ensuring only authorized users access
          specific data. Robust encryption and compliance with industry
          standards further safeguard your sensitive information, providing
          peace of mind for your business.
        </div>
      </div>
    </div>
  );
}

export default SecurityCompilance;
