import React from "react";
import LazyImage from "../CommonComps/LazyImage";
import NavigateBtn from "../Button/NavigateBtn";
function CaseStudyCard({ card, imgBg = "bg-white" }) {
  return (
    <div className="transition-all ease-in-out hover:scale-[1.02] duration-500 bg-[#FFFFFF82] border-2 border-white drop-shadow-sm shadow-md rounded-2xl p-8 flex flex-col gap-y-4 justify-start items-center gap-x-8 max-w-[25rem] sm:max-w-[30rem] min-[960px]:max-w-[25rem] min-[960px]:min-w-[25rem]">
      <div
        className={`font-Poppins  ${imgBg} shrink-0 flex justify-center items-center  w-full aspect-[16/9] rounded-2xl`}
      >
        <LazyImage src={card.img} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="font-Poppins font-semibold text-sm">{card.title}</h1>
        <h2 className="font-Poppins font-medium text-base">Use Case:</h2>
        <div className="text-sm">{card.content}</div>

        <NavigateBtn name={"Learn More"} path={card.path} className="text-sm mt-2" />
      </div>
    </div>
  );
}

export default CaseStudyCard;
