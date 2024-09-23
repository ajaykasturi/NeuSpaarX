import React from "react";
import LazyImage from "../CommonComps/LazyImage";

function InfoCard({ card, reverse = true }) {
  return (
    <div
      className={`transition-all ease-in-out hover:scale-[1.02] duration-500 bg-[#FFFFFF82] w-full border-[1px] border-transparent card-border  shadow-sm rounded-2xl p-10 py-16 flex flex-col gap-y-4 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-x-16 max-w-[45rem] justify-evenly`}
    >
      <div className="font-Poppins  shrink-0 flex justify-center items-center p-10 border-none rounded-xl size-[15rem] ">
        <LazyImage src={card.img} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-colorblue font-Poppins font-semibold text-xl">
          {card.title}
        </h1>
        <div className="text-colorblue flex flex-col justify-center gap-y-2">
          {card.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
