import React from "react";

function ImgCom({ img, title }) {
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-3 sm:gap-y-12 items-center">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl lg:text-5xl text-colorblue text-center ">
        {title}
      </h1>
      <img src={img} className="md:w-[75%] lg:w-[70%] 2xl:w-[70%] rounded-xl" />
    </div>
  );
}

export default ImgCom;
