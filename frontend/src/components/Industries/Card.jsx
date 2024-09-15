import React from "react";

function Card({ card, className }) {
  return (
    <div
      className={`flex flex-col gap-y-6 rounded-2xl border-2 gradient-border py-8 px-8 ${className}`}
    >
      <div className="text-xl font-Poppins font-semibold">{card.title}</div>
      <div className="font-Poppins tracking-wide text-ellipsis overflow-hidden">
        {card.content}
      </div>
    </div>
  );
}

export default Card;
