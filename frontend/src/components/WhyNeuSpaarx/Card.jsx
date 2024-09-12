import React from "react";

function Card({ card }) {
  return (
    // <div className="w-[24rem] h-[20rem] rounded-3xl gradient-border pt-8 px-7 pb-4 flex flex-col gap-y-10 justify-center items-center transition ease-in-out hover:scale-105 duration-500">
    //   <div className="rounded-full size-20 bg-white"></div>
    //   <div className="flex flex-col items-center gap-y-4 text-center">
    //     <div className="font-Poppins text-2xl font-semibold">Agile Process</div>
    //     <div className="font-Poppins text-xl font-normal">
    //       We follow end - end agile process and ensure everything is
    //       transparent.
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#FFFFFF82] flex flex-col shrink-0 gap-y-8 items-center p-9 max-w-[18rem] w-full h-[20rem] border-2 gradient-border border-slate-50 shadow-sm rounded-3xl relative">
      <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#F1F1F1] shrink-0 border-2 drop-shadow-lg flex justify-center items-center p-3 overflow-hidden">
        <img src={card.icon} className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-xl font-semibold font-Poppins text-center">
          {card.title}
        </h1>
        <div className="text-base leading-relaxed font-Poppins text-center">
          {card.content}
        </div>
      </div>
    </div>
  );
}

export default Card;
