import React from "react";

function ToolCard({ card, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-y-4 md:gap-y-6 lg:gap-y-8 rounded-2xl border-2 card-border p-8 ${className}`}
    >
      <div className="text-center text-2xl  font-Poppins font-semibold">
        {card.title}
      </div>
      <div className="text-center text-xl font-Poppins tracking-wide text-ellipsis overflow-hidden">
        {card.content}
      </div>
    </div>
  );
}

export default ToolCard;
