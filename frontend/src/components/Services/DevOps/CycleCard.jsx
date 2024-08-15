import React from "react";

function CycleCard({
  card = {
    title: "Continuos Development",
    content:
      "We focus on updating requirements, resolving issues, optimizing code, integrating features, and delivering quality software to clients.",
  },
  className = "",
}) {
  return (
    <div
      className={`flex flex-col gap-y-6 rounded-2xl border-2 gradient-border p-8 ${className} w-[28rem] h-[21rem] justify-center`}
    >
      <div className="text-3xl font-Poppins font-medium">{card.title}</div>
      <div className="text-2xl font-Poppins tracking-wider text-ellipsis overflow-hidden">
        {card.content}
      </div>
    </div>
  );
}

export default CycleCard;
