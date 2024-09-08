import React from "react";
import dataaction from "../../../assets/dataeng/dataaction.svg";
import ImgCom from "../ImgCom";
import LazyImage from "../../CommonComps/LazyImage";
function DataAction() {
  const title = "Data in Action";
  return (
    <div className="bg-mainBgImg bg-no-repeat bg-cover h-fit rounded-xl">
      <div className="mx-[5vw] py-24 flex flex-col gap-y-3 sm:gap-y-12 items-center">
        <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl lg:text-5xl text-colorblue text-center ">
          {title}
        </h1>
        <LazyImage
          src={dataaction}
          className="sm:w-[90%] min-[900px]:w-[80%] lg:w-[45rem] rounded-xl"
        />
      </div>
    </div>
  );
}

export default DataAction;
