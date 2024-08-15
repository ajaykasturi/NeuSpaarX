import React from "react";

function SliderInfinite() {
  return (
    <div className="py-4 overflow-hidden whitespace-nowrap w-full relative overlay after-overlay before-overlay  border-0 hover:[animation-play-state:paused]">
      <div className="flex gap-x-16 animate-autoScrollInfinite hover:[animation-play-state:paused] w-max border-2 border-slate-950">
        <div className="w-[10rem] h-[5rem]">Hi</div>
        <div className="w-[10rem] h-[5rem]">Hello</div>
        <div className="w-[10rem] h-[5rem]">How are you</div>
      </div>
    </div>
  );
}

export default SliderInfinite;
