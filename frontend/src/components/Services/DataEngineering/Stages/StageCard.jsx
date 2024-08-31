import React from "react";

function StageCard({ card }) {
  return (
    <div className="transition-all ease-in-out hover:scale-[1.02] duration-500 bg-[#FFFFFF82] w-full border-[1px] border-transparent card-border  shadow-sm rounded-2xl p-8 flex flex-col gap-y-4 md:flex-row justify-center md:justify-start items-center gap-x-12 max-w-[75rem]">
      <div className="font-Poppins bg-[#EDEDED] shrink-0 flex justify-center items-center p-4 rounded-xl size-[8rem]">
        <img src={card.img} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-colorblue font-Poppins font-semibold text-xl">
          {card.title}
        </h1>
        <div className="text-colorblue flex flex-col justify-center">
          {card.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StageCard;
