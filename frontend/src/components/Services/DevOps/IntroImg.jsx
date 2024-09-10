import React from "react";
import devops from "../../../assets/devopsimgs/devops.png";
function IntroImg() {
  return (
    <div className="flex justify-center items-center px-[5vw] my-20">
      <img
        src={devops}
        alt="devops-image"
        className="max-w-[46rem] min-w-0 min-h-0 max-h-[25rem] object-contain"
      />
    </div>
  );
}

export default IntroImg;
