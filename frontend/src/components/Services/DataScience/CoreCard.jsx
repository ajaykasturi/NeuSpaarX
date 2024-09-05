import React from "react";
import Button from "../../Button/Button";

function CoreCard({
  card,
  h = "h-[25rem]",
  w = "min-[376px]:max-w-[22rem]",
  className = "",
}) {
  return (
    <div
      className={`transition-all ease-in-out hover:scale-[1.04] duration-500 hover:cursor-pointer p-9 pt-10 card-border border-2 shadow-sm border-transparent rounded-2xl ${h} ${w} flex justify-center items-start overflow-hidden`}
    >
      <div className="flex flex-col gap-y-10 items-center justify-center text-colorblue overflow-hidden">
        <div className="flex flex-col gap-y-4 items-center">
          <div className="font-Poppins font-medium text-xl text-center">
            {card.title}
          </div>
          <div className="font-Poppins text-center">{card.content}</div>
          <Button name={"Learn More"} />
        </div>
      </div>
    </div>
  );
}

export default CoreCard;
