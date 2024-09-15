import React from "react";
import LazyImage from "../../CommonComps/LazyImage";

function BigCard({ img }) {
  return (
    <div className="transition-all hover:scale-[1.02] duration-500 card-border border p-4 w-[20rem] h-[8rem] rounded-3xl overflow-hidden flex justify-center items-center">
      <LazyImage src={img} className="w-full h-full" />
    </div>
  );
}

export default BigCard;
