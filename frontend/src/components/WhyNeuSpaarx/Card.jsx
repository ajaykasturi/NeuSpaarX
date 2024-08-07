import React from "react";

function Card() {
  return (
    <div className="w-[24rem] h-[20rem] rounded-3xl gradient-border pt-8 px-7 pb-4 flex flex-col gap-y-10 justify-center items-center transition ease-in-out hover:scale-105 duration-500">
      <div className="rounded-full size-20 bg-white"></div>
      <div className="flex flex-col items-center gap-y-4 text-center">
        <div className="font-Poppins text-2xl font-semibold">Agile Process</div>
        <div className="font-Poppins text-xl font-normal">
          We follow end - end agile process and ensure everything is
          transparent.
        </div>
      </div>
    </div>
  );
}

export default Card;
