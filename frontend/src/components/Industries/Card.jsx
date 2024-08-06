import React from "react";

function Card({ card }) {
  return (
    <div className="flex flex-col gap-y-6 rounded-2xl border-2 gradient-border pt-20 pb-12 px-10 h-[24rem] w-[40rem]">
      <div className="text-2xl font-Poppins font-semibold">{card.title}</div>
      <div className="text-xl font-Poppins text-justify text-ellipsis overflow-hidden">
        {card.content}
      </div>
    </div>
  );
}

export default Card;
