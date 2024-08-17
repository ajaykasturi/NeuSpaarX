import React from "react";

function SliderBackground({ children }) {
  return (
    <div className="bg-wefocusonBg bg-no-repeat bg-cover w-full rounded-3xl py-16 flex flex-col gap-y-6 sm:gap-y-10 my-6">
      {children}
    </div>
  );
}

export default SliderBackground;
