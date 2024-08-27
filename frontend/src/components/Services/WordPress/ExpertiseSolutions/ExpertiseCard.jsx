import React from "react";

function ExpertiseCard({
  card,
  className = "max-w-[21rem] h-[27rem] sm:h-full min-[900px]:max-w-[24.5rem]",
}) {
  return (
    <div
      className={`flex flex-col p-8 gap-y-[2.4rem] 2xl:gap-y-16 card-border rounded-[2rem] overflow-hidden  ${className}`}
    >
      <div className="flex justify-center items-center">
        <div className="w-[4.5rem] h-[4.5rem] min-[900px]:w-[5.25rem] min-[900px]:h-[5.25rem]  rounded-full drop-shadow-md bg-[#F1F1F1;]"></div>
      </div>
      <div className="overflow-hidden flex flex-col gap-y-[1.2rem]  text-colorblue">
        <div className="text-center font-Poppins text-[1.2rem]  lg:text-[1.6rem]  xl:text-[2rem] font-medium">
          {card.title}
        </div>
        <div className="text-center font-Poppins text-[0.9rem] min-[900px]:text-[1rem] lg:text-[1.2rem]  xl:text-[1.3rem] leading-normal overflow-hidden">
          {card.content}
        </div>
      </div>
    </div>
  );
}

export default ExpertiseCard;
