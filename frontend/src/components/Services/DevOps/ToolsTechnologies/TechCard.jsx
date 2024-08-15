import React from "react";

function TechCard({ item }) {
  return (
    <div className="transition ease-in-out hover:scale-110 duration-500 flex items-center rounded-[0.9rem]  bg-focuscard-bg backdrop-blur shadow-lg shrink-0 gradient-border whitespace-nowrap h-[8rem] w-[16rem] px-4 py-6 justify-center max-[500px]:w-[10rem] max-[500px]:h-[4rem] max-[500px]:px-2 max-[500px]:py-2">
      <img src={item.img} className="w-full h-full object-contain" />
    </div>
  );
}

export default TechCard;
