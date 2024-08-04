import React from "react";
import FocusCard from "./FocusCard";

function WeFocusOn() {
  const cardConfig = [
    { icon: "", title: "Deliver more at low cost" },
    { icon: "", title: "Innovation & Commitment" },
    { icon: "", title: "Continuos Learning" },
    { icon: "", title: "Less manual effort" },
    { icon: "", title: "Innovation & Commitment1" },
  ];
  return (
    <div className="bg-wefocuson-bg bg-no-repeat bg-cover h-[30rem] w-full rounded-3xl py-16 pl-24 flex flex-col gap-y-12 my-12">
      <div className="font-normal text-[4rem] font-Poppins">We Focus On</div>
      <div className="flex gap-x-16 overflow-auto p-6">
        {cardConfig.map((card) => (
          <FocusCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}

export default WeFocusOn;
