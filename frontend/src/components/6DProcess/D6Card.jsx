import React from "react";

function D6Card({ card }) {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gradient-border rounded-2xl break-words [aspect-ratio: 75 / 32] h-[32rem]">
      <div className="bg-D6Img rounded-l-2xl">
        <img src={card.img} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-y-6 items-start justify-center p-12">
        <div className="text-[#1B2C59] font-Poppins text-7xl font-normal">
          {card.title}
        </div>
        <div className="text-[#1B2C59] font-Poppins  text-2xl font-normal">
          {card.content}
        </div>
      </div>
    </div>
  );
}

export default D6Card;
