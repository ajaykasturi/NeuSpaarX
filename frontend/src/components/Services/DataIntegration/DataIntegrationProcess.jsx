import React from "react";
import dataintprocessimg from "../../../assets/images/dataintprocess.png";
function DataIntegrationProcess() {
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-9 sm:gap-y-16 items-center">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        End-to-End Data Integration Process
      </h1>
      <img src={dataintprocessimg} className="lg:w-[75%] 2xl:w-[70%]" />
    </div>
  );
}

export default DataIntegrationProcess;
