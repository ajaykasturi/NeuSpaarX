import React from "react";
import SimpleCard from "../../../CommonComps/SimpleCard";
import introimgicon from "../../../../assets/images/whatpowerautomateimg.png";

function WhatPowerAutomate() {
  return (
    <div className="flex flex-col mx-[5vw] my-24 gap-y-8 sm:gap-y-12">
      <div className="text-center md:text-left font-Poppins text-colorblue text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
        What is Power Automate?
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-10">
        <div className="w-[12rem] md:min-w-[20rem] md:max-w-[20rem]">
          <img src={introimgicon} className="w-full h-full" />
        </div>
        <SimpleCard
          text={
            "Power Automate is a Microsoft tool used to automate your work flow. By using Power Automate we can ensure no manual efforts, reduce the cost and save time. From sending mails to scheduling calls, tracking sales to creating documents, Power automate is widely used."
          }
        />
      </div>
    </div>
  );
}

export default WhatPowerAutomate;
