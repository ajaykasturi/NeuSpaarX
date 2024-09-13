import React from "react";

function FocusCard({ card }) {
  return (
    <div className="transition ease-in-out hover:scale-110 duration-500 flex items-center  rounded-[0.9375rem]  bg-focuscard-bg backdrop-blur shadow-lg shrink-0 gradient-border whitespace-nowrap h-[7rem] w-[18rem] px-6 py-2 justify-center max-[500px]:w-[10rem] max-[500px]:h-[4rem] max-[500px]:px-3 max-[500px]:py-2">
      <div className="grow flex items-center justify-start gap-x-2 min-[501px]:gap-x-6">
        <div className="rounded-full bg-white size-8 min-[501px]:size-[4rem] drop-shadow-sm shrink-0 overflow-hidden p-2 flex justify-center items-center">
          <img src={card.icon} className="w-full" />
        </div>
        <div className="text-xs min-[501px]:text-xl whitespace-normal">
          {card.title}
        </div>
      </div>
    </div>
  );
}

export default FocusCard;
