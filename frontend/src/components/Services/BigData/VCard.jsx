import React from "react";
import LazyImage from "../../CommonComps/LazyImage";

function VCard({ card, h = "h-[25rem]", w = "min-[376px]:w-[22rem]" }) {
  return (
    <div
      className={`bg-slate-50 hover:cursor-pointer p-8 shadow-md border-2 border-transparent rounded-2xl ${h} ${w} flex justify-center items-start overflow-hidden`}
    >
      <div className="flex flex-col gap-y-10 items-center justify-center text-colorblue">
        <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#F1F1F1] shrink-0 border-2 drop-shadow-lg flex justify-center items-center p-2 overflow-hidden">
          <LazyImage src={card.icon} className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <div className="font-Poppins font-medium text-xl text-center">
            {card.title}
          </div>
          <div className="font-Poppins text-center">{card.content}</div>
        </div>
      </div>
    </div>
  );
}

export default VCard;
