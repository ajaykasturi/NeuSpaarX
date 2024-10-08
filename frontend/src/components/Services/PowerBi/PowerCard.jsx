import React from "react";
import LazyImage from "../../CommonComps/LazyImage";

function PowerCard({
  card,
  h = "h-[25rem]",
  w = "min-[376px]:w-[22rem]",
  className = "",
}) {
  return (
    <div
      className={`transition-all ease-in-out hover:scale-[1.04] duration-500 hover:cursor-pointer p-8 card-border border-2 shadow-sm border-transparent rounded-2xl ${h} ${w} flex justify-center items-start overflow-hidden ${className}`}
    >
      <div className="flex flex-col gap-y-10 items-center justify-center text-colorblue">
        <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#F1F1F1] shrink-0 border-2 drop-shadow-lg flex justify-center items-center p-4 overflow-hidden">
          <LazyImage src={card.img} className="w-full h-full" />
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

export default PowerCard;
