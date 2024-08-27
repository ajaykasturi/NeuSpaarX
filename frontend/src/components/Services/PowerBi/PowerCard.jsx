import React from "react";

function PowerCard({ card }) {
  return (
    <div className="p-8 card-border rounded-2xl h-[25rem] min-[376px]:w-[22rem] flex justify-center items-center">
      <div className="flex flex-col gap-y-10 items-center justify-center text-colorblue">
        <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#F1F1F1] shrink-0 border-2 drop-shadow-lg"></div>
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
