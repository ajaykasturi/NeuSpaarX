import React from "react";
import Button from "../../Button/Button";

function DMCard({ card }) {
  return (
    <div className="bg-[#FFFFFF82] flex flex-col shrink-0 gap-y-4 items-center p-9 max-w-[18rem] w-full h-[20rem] border-2 border-slate-50 shadow-sm rounded-3xl ">
      <h1 className="text-xl font-semibold font-Poppins text-center">
        {card.title}
      </h1>
      <div className="text-base leading-relaxed font-Poppins text-center">
        {card.content}
      </div>
      <Button name={"Learn More"} />
    </div>
  );
}

export default DMCard;
