import React from "react";
import StageCard from "./DataEngineering/Stages/StageCard";
function ServicesWeFollow({ title, config }) {
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        {title}
      </h1>
      <div className="flex flex-col justify-center items-center gap-y-8">
        {config.map((card) => (
          <StageCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default ServicesWeFollow;
