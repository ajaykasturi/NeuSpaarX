import React from "react";

function IndustryPageCard({ card }) {
  return (
    <div className="flex gap-x-12 h-[20rem] justify-center w-3/4">
      <div className="size-[20rem] bg-[#EFEFEF] rounded-3xl shrink-0"></div>
      <div className="p-8  card-border rounded-3xl text-[#1B2C59] font-Poppins flex flex-col gap-y-8 justify-center">
        <div className="text-3xl font-semibold">{card.title}</div>
        <div className="text-xl">{card.content}</div>
      </div>
    </div>
  );
}

export default IndustryPageCard;
