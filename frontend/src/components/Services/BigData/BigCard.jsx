import React from "react";

function BigCard({ img }) {
  return (
    <div className="card-border border p-4 w-[20rem] h-[8rem] rounded-3xl overflow-hidden flex justify-center items-center">
      <img src={img} className="w-full h-full" />
    </div>
  );
}

export default BigCard;
