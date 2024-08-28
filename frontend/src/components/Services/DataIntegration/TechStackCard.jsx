import React from "react";
function TechStackCard({ card }) {
  return (
    <div className="transition-all ease-in-out hover:scale-[1.05] duration-500 bg-[#FFFFFF82] w-full border-2 border-white drop-shadow-sm shadow-md rounded-2xl p-8 flex flex-col gap-y-4 md:flex-row justify-center items-center gap-x-8">
      <div className="font-Poppins max-w-[20rem] md:max-w-[18rem] lg:max-w-[20rem] 2xl:max-w-[24rem] shrink-0 flex justify-center items-center">
        <img src={card.img} className="w-full h-full object-contain" />
      </div>
      <div className="font-Poppins">{card.content}</div>
    </div>
  );
}

export default TechStackCard;
