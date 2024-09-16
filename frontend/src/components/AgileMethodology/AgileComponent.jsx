import React from "react";
import AgileCard from "./AgileCard";
import agileimg from "../../assets/images/agilemethodimg.png";
import LazyImage from "../CommonComps/LazyImage";
function AgileComponent() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-[18rem_18rem] min-[700px]:grid-cols-[20rem_20rem] min-[900px]:grid-cols-[22rem_22rem] lg:grid-cols-[24rem_24rem] xl:grid-cols-[28rem_28rem] 2xl:grid-cols-[30rem_30rem] sm:gap-x-4 md:gap-x-16 place-items-center justify-center mx-[5vw] my-24">
      <div className="">
        <AgileCard />
      </div>
      <div className="flex justify-center items-center min-[400px]:w-2/3 sm:w-full">
        <LazyImage src={agileimg} className="w-full" />
      </div>
    </div>
  );
}

export default AgileComponent;
