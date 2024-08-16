import React from "react";

function ExpertiseCard({ card = { id: "", title: "", content: "" } }) {
  return (
    <div className="transition ease-in-out hover:scale-105 duration-500 flex items-center gap-x-6 xl:sgap-x-10 rounded-[1.875rem]  bg-focuscard-bg  backdrop-blur shadow-lg shrink-0 gradient-border whitespace-nowrap w-[20rem] h-[7.8rem] px-6 py-5 lg:w-[25.6rem] lg:h-[9.6rem] lg:px-7 lg:py-6 xl:px-9 xl:py-8 xl:w-[28.8rem] xl:h-[10.8rem]">
      <div className="rounded-full border-none size-[4.5rem] lg:size-[5.6rem] xl:size-28 bg-white shrink-0 border-2 drop-shadow-lg"></div>
      <div className="flex flex-col gap-y-2  xl:gap-y-4 overflow-hidden">
        <div className="font-Poppins text-base lg:text-xl xl:text-[1.35rem] font-semibold whitespace-normal">
          {card.title}
        </div>
        <div className="font-Poppins text-xs lg:text-base xl:text-[1.125rem] font-light whitespace-normal">
          {card.content}
        </div>
      </div>
    </div>
  );
}

export default ExpertiseCard;
