import React from "react";
import D6Img from "../../assets/images/d6process.png";
function D6Card() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gradient-border rounded-2xl break-words [aspect-ratio: 75 / 32]">
      <div className="bg-D6Img rounded-l-2xl">
        <img src={D6Img} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-y-6 items-start justify-center p-12">
        <div className="text-[#1B2C59] font-Poppins text-7xl font-normal">
          Discover
        </div>
        <div className="text-[#1B2C59] font-Poppins  text-2xl font-normal">
          We meet clients and discover what they are doing currently and what
          they want us to do.
        </div>
      </div>
    </div>
  );
}

export default D6Card;
