import React from "react";
import approach from "../../../assets/images/visualization.png";
function ApproachWeFollow() {
  return (
    <div className="flex flex-col mx-[5vw] my-24 justify-center items-center gap-y-4 sm:gap-y-12">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        The Approach We Follow
      </h1>
      <div className="sm:w-[80%]">
        <img src={approach} className="w-full object-contain"/>
      </div>
    </div>
  );
}

export default ApproachWeFollow;
