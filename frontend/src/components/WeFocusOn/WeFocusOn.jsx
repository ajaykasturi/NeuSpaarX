import React from "react";
import FocusCard from "./FocusCard";
import SliderBackground from "../CommonComps/SliderBackground";

function WeFocusOn() {
  const cardConfig = [
    { icon: "", title: "Deliver more at low cost" },
    { icon: "", title: "Innovation & Commitment" },
    { icon: "", title: "Continuos Learning" },
    { icon: "", title: "Less manual effort" },
  ];
  const concatConfig = [...cardConfig, ...cardConfig,];
  return (
    <SliderBackground>
      <div className="text-[2.5rem]  md:text-[3rem] lg:text-[4rem] font-Poppins text-center text-[#1B2C59] font-medium md:font-normal">
        We Focus On
      </div>
      <div className="py-4 overflow-hidden whitespace-nowrap w-full relative overlay after-overlay before-overlay  border-0 hover:[animation-play-state:paused]">
        <div className="flex gap-x-16 animate-autoScrollInfinite hover:[animation-play-state:paused] w-max">
          {concatConfig.map((card, index) => (
            <FocusCard key={`${card.title}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </SliderBackground>
  );
}

export default WeFocusOn;
