import React from "react";

function FocusCard({ card }) {
  return (
    <div className="transition ease-in-out hover:scale-110 duration-500 flex items-center gap-x-6 rounded-[1.875rem]  bg-focuscard-bg py-[1.94rem] w-[18rem] pl-[1.88rem] pr-[1.25rem] backdrop-blur shadow-lg shrink-0 gradient-border whitespace-nowrap">
      <div className="rounded-full border-none size-16 bg-white shrink-0 border-2 drop-shadow-lg"></div>
      <div className="font-Poppins text-xl font-normal whitespace-normal">
        {card.title}
      </div>
    </div>
  );
}

export default React.memo(FocusCard);
