import React from "react";
import arrowD from "../../../assets/gcp/arrowDown.png";
function GCPCard({ card, lastCard }) {
  return (
    <div className="bg-[#FFFFFF82] flex flex-col shrink-0 gap-y-10 items-center p-9 max-w-[40rem] w-full h-auto sm:h-[20rem] border-2 border-slate-50 shadow-lg rounded-3xl relative">
      <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#F1F1F1] shrink-0 border-2 drop-shadow-lg flex justify-center items-center p-2 overflow-hidden">
        <img src={card.img} className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-xl font-semibold font-Poppins text-center">
          {card.title}
        </h1>
        <div className="text-base leading-relaxed font-Poppins text-center">
          {card.content}
        </div>
      </div>
      {!lastCard && (
        <span className="absolute -bottom-[5rem]">
          <img src={arrowD} className="w-3" />
        </span>
      )}
    </div>
  );
}

export default GCPCard;
