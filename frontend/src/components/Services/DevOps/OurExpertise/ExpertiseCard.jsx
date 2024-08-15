import React from "react";

function ExpertiseCard({ card = { id: "", title: "", content: "" } }) {
  return (
    <div className="transition ease-in-out hover:scale-105 duration-500 flex items-center gap-x-10 rounded-[1.875rem]  bg-focuscard-bg px-9 py-8 w-[32rem] h-[12rem] backdrop-blur shadow-lg shrink-0 gradient-border whitespace-nowrap">
      <div className="rounded-full border-none size-28 bg-white shrink-0 border-2 drop-shadow-lg"></div>
      <div className="flex flex-col gap-y-4 overflow-hidden">
        <div className="font-Poppins text-2xl font-semibold whitespace-normal">
          {card.title}
        </div>
        <div className="font-Poppins text-xl font-light whitespace-normal">
          {card.content}
        </div>
      </div>
    </div>
  );
}

export default ExpertiseCard;
