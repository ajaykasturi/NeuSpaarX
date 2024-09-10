import React from "react";
import arrow from "../../../assets/aws/arrowRight.svg";
function AWSCard({ card }) {
  return (
    <div className="bg-[#FFFFFF82] flex flex-col shrink-0 gap-y-8 items-center p-9 max-w-[18rem] w-full h-[20rem] border-2 border-slate-50 shadow-sm rounded-3xl relative">
      <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#F1F1F1] shrink-0 border-2 drop-shadow-lg flex justify-center items-center p-2 overflow-hidden">
        <img src={card.img} className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-xl font-semibold font-Poppins text-center">
          {card.title}
        </h1>
        <div className="text-base leading-relaxed font-Poppins text-center">
          {card.content}
        </div>
      </div>
      <span className="absolute -right-[4.7rem] top-[46%]">
        <img src={arrow} className="w-20" />
      </span>
    </div>
  );
}

export default AWSCard;
