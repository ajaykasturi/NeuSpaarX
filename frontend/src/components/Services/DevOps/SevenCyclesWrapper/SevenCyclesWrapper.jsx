import React from "react";
import CycleCard from "../SevenCycles/CycleCard";
import AdvancedCarousel from "../../../AdvCarousel/AdvancedCarousel";
function SevenCyclesWrapper({ content, title, img }) {
  const config = [content[content.length - 1], ...content, content[0]];
  return (
    <div className="mx-[5vw] my-10 flex flex-col gap-y-8 sm:gap-y-10 items-center justify-center">
      <div className="text-headingClamp text-colorblue text-center">
        {title}
      </div>
      <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 gap-y-4 items-center justify-items-center">
        <div className="min-[375px]:h-[16rem]  min-[500px]:h-[20rem] sm:h-auto md:h-[20rem] lg:h-[25rem] xl:h-[33rem]">
          <img src={img} className="w-full h-full object-contain" />
        </div>
        <div className="w-full h-full items-center flex justify-center">
          <AdvancedCarousel autoSlide={false} autoSlideInterval={2000}>
            {config.map((item, index) => (
              <div
                className="min-w-full flex justify-center"
                key={`${item.id}|${index}`}
              >
                <CycleCard card={item} />
              </div>
            ))}
          </AdvancedCarousel>
        </div>
      </div>
    </div>
  );
}

export default SevenCyclesWrapper;
