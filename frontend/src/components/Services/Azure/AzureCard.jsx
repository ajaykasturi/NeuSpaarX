import React from "react";
import LazyImage from "../../CommonComps/LazyImage";

function AzureCard({ card, className = "" }) {
  return (
    <div className="bg-[#FFFFFF82] flex flex-col justify-start shrink-0 gap-y-4 items-center p-9  max-w-[18rem] w-full h-[20rem] border-2 card-border shadow-sm rounded-3xl overflow-hidden transition-all hover:scale-[1.01] duration-500">
      <div className="h-[5.5rem] w-auto">
        <LazyImage src={card.img} className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="font-semibold text-xl text-center">{card.title}</h1>
        <div className="text-center">{card.content}</div>
      </div>
    </div>
  );
}

export default AzureCard;
