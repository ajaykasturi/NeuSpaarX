import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Card from "./Card";
import moto from "../../assets/images/whyneuspaaxmoto.png";
function WhyNeuSpaarx() {
  return (
    <div className="flex flex-col rounded-3xl mb-8 items-center relative">
      <div className="flex flex-col gap-y-16 bg-whyBg bg-no-repeat bg-cover px-16 py-20 rounded-3xl">
        {/* <div className="flex flex-col w-full">
          <div className="text-[#1B2C59] text-5xl font-normal font-Poppins">
            Why NeuSpaarX?
          </div>
          <div className="text-2xl font-Poppins w-[60%] tracking-wide">
            Delivering real value for your business is our goal. Our experienced
            team develops reliable, scalable solutions using the latest
            technologies.
          </div>
          <div className="w-[35rem] rounded-3xl">
            <img src={moto} className="w-full h-full rounded-3xl" />
          </div>
        </div> */}
        <div className="flex gap-x-6">
          <div className="flex flex-col gap-y-10 text-2xl font-Poppins">
            <div className="text-[#1B2C59] text-5xl font-normal font-Poppins">
              Why NeuSpaarX?
            </div>
            <div className="text-2xl font-Poppins  tracking-wide">
              Delivering real value for your business is our goal. Our
              experienced team develops reliable, scalable solutions using the
              latest technologies.
            </div>
            <div className="flex gap-x-10">
              <CheckCircleIcon />
              <div>
                Utilize cloud technologies to reduce costs and increase
                flexibility.
              </div>
            </div>
            <div className="flex gap-x-8">
              <CheckCircleIcon />
              <div>
                Clearly understand and analyze requirements to build effective
                solutions.
              </div>
            </div>
            <div className="flex gap-x-8">
              <CheckCircleIcon />{" "}
              <div>
                Integrate multiple data sources for comprehensive insights.
              </div>
            </div>
          </div>
          <div className="w-[60rem] rounded-3xl">
            <img src={moto} className="w-full h-full rounded-3xl" />
          </div>
        </div>
        <div className="flex justify-evenly gap-x-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default WhyNeuSpaarx;
