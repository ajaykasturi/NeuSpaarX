import React from "react";

function FocusCard({ card }) {
  console.log(card.title);
  return (
    <div className="transition ease-in-out hover:scale-110 duration-500 flex items-center gap-x-6 rounded-[0.9375rem]  bg-focuscard-bg py-[1.94rem] w-[18rem] pl-[1.88rem] pr-[1.25rem] backdrop-blur shadow-lg shrink-0 gradient-border whitespace-nowrap">
      <div className="rounded-full size-16 bg-white shrink-0 border-2"></div>
      <div className="font-Poppins text-xl font-normal whitespace-normal">
        {card.title}
      </div>
    </div>
  );
}

export default React.memo(FocusCard);
