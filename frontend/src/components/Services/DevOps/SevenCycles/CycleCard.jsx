import React from "react";

function CycleCard({
  card = {
    title: "Title Of Card",
    content: "Content of the Card",
  },
  className = "",
}) {
  return (
    <div
      className={`flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6 rounded-2xl border-2 gradient-border p-8 ${className} justify-center min-[375px]:w-[19.6rem] min-[375px]:h-[14.7rem] min-[500px]:w-[22.4rem] min-[500px]:h-[16.8rem] min-[560px]:w-[25.2rem] min-[560px]:h-[18.9rem]  sm:w-[18rem] sm:h-[14rem] md:w-[19.6rem] md:h-[14.7rem] min-[800px]:w-[22.4rem] min-[800px]:[16.8rem] min-[900px]:w-[25.2rem] min-[900px]:h-[18.9rem] xl:h-[21rem] xl:w-[28rem] 2xl:h-[25.2rem] 2xl:w-[33.6rem]`}
    >
      <div className="text-[1.2rem] min-[500px]:text-xl min-[560px]:text-2xl  sm:text-[1.1rem] md:text-[1.2rem] min-[900px]:text-2xl xl:text-3xl 2xl:text-4xl font-Poppins font-medium">
        {card.title}
      </div>
      <div className="text-sm min-[500px]:text-base min-[560px]:text-lg sm:text-sm md:text-[1rem] min-[900px]:text-lg xl:text-2xl 2xl:text-[1.6rem] font-Poppins tracking-wider text-ellipsis overflow-hidden">
        {card.content}
      </div>
    </div>
  );
}

export default CycleCard;
