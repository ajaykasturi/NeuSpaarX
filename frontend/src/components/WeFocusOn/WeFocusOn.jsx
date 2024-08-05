import React from "react";
import FocusCard from "./FocusCard";

function WeFocusOn() {
  const cardConfig = [
    { icon: "", title: "Deliver more at low cost" },
    { icon: "", title: "Innovation & Commitment" },
    { icon: "", title: "Continuos Learning" },
    { icon: "", title: "Less manual effort" },
    { icon: "", title: "NueSpaarX" },
  ];
  const concatConfig = [...cardConfig, ...cardConfig];
  return (
    <div className="bg-wefocuson-bg bg-no-repeat bg-cover w-full rounded-3xl py-16 px-6 flex flex-col gap-y-12 my-6">
      <div className="font-normal text-[4rem] font-Poppins text-center">
        We Focus On
      </div>
      <div className="py-4 overflow-hidden whitespace-nowrap w-full relative overlay after-overlay before-overlay  border-0 hover:[animation-play-state:paused]">
        <div className="flex gap-x-16 animate-autoScrollInfinite hover:[animation-play-state:paused] w-max">
          {concatConfig.map((card, index) => (
            <FocusCard key={`${card.title}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeFocusOn;
