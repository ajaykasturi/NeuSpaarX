import React from "react";
import LazyImage from "../../CommonComps/LazyImage";

import NavigateBtn from "../../Button/NavigateBtn";
function UseCaseCard({ card, imgBg = "bg-white" }) {
  return (
    <div className="transition-all ease-in-out hover:scale-[1.02] duration-500 bg-[#FFFFFF82] w-full border-2 border-white drop-shadow-sm shadow-md rounded-2xl p-8 flex flex-col gap-y-4 md:flex-row justify-start items-center gap-x-8">
      <div
        className={`font-Poppins size-[15rem] md:size-[18rem] ${imgBg} rounded-xl max-w-[20rem] md:max-w-[18rem] lg:max-w-[20rem] 2xl:max-w-[24rem] shrink-0 flex justify-center items-center`}
      >
        <LazyImage src={card.img} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-left sm:text-xl">{card.title}</h1>
        <h2 className="font-medium text-xl sm:text-2xl">Use Case:</h2>
        <div className="">{card.content}</div>

        <NavigateBtn name={"Learn More"} path={card.path} />
      </div>
    </div>
  );
}

export default UseCaseCard;
