import React from "react";

function BlogCardSkelton() {
  return (
    <div className="animate-pulse flex flex-col items-start gap-y-5 min-w-[20rem] w-full max-w-[25rem] sm:max-w-[30rem] min-[960px]:max-w-[25rem] min-[960px]:min-w-[25rem] rounded-2xl p-1 overflow-hidden cursor-pointer transition-all hover:scale-[1.01] duration-500">
      <div className="bg-slate-200 w-full aspect-[16/8] rounded-2xl"></div>
      <div className="flex flex-col gap-y-2 w-full">
        <h2 className="bg-slate-200  max-w-32 w-full h-4 rounded-xl"></h2>
        <h1 className="bg-slate-200 max-w-56 w-full h-4 rounded-xl"></h1>
        <p className="bg-slate-200 w-full h-3 rounded-xl"></p>
        <p className="bg-slate-200 w-full h-3 rounded-xl"></p>
      </div>
      <div className="flex gap-x-3 items-center  w-full">
        <div className="bg-slate-200 size-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-y-1  w-full">
          <h2 className="bg-slate-200 h-3 rounded-xl max-w-20 w-full"></h2>
          <div className="leading-none w-full  flex gap-x-4">
            <div className="bg-slate-200 w-full h-3 rounded-xl max-w-20"></div>
            <span className="bg-slate-200 w-full h-3 rounded-xl max-w-20"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardSkelton;
