import React from "react";
import SliderBackground from "../../CommonComps/SliderBackground";
import FocusCard from "./FocusCard";

function Slider({ config, title }) {
  const configMain = [...config, ...config];
  return (
    <SliderBackground>
      <div className="text-[1.5rem] min-[450px]:text-[1.8rem] min-[500px]:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-Poppins text-center text-[#1B2C59] font-medium md:font-normal">
        {title}
      </div>
      <div className="py-4 overflow-hidden whitespace-nowrap w-full relative overlay after-overlay before-overlay  border-0 hover:[animation-play-state:paused]">
        <div className="flex gap-x-16 max-[500px]:gap-x-4 hover:[animation-play-state:paused] w-max max-[500px]:animate-autoScrollInfiniteMobile10 min-[501px]:animate-autoScrollInfinite20">
          {configMain.map((item, index) => (
            <FocusCard key={index} card={item} />
          ))}
        </div>
      </div>
    </SliderBackground>
  );
}

export default Slider;
