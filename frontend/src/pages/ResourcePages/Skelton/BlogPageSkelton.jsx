import React from "react";
import BlogCardSkelton from "./BlogCardSkelton";
function BlogPageSkelton() {
  return (
    <>
      <div className="bg-slate-50 animate-pulse rounded flex justify-between px-10 py-2 w-full">
        <div className="grow">
          <div className="rounded-full bg-slate-200 size-[5rem]"></div>
        </div>
        <nav className="flex gap-x-2 justify-center items-center grow-[4]">
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
        </nav>
      </div>
      <div className="flex justify-center items-center my-10 mx-[5vw]">
        <div className="grid grid-cols-1 gap-y-12 min-[960px]:grid-cols-2 min-[960px]:gap-6  lg:gap-8 xl:gap-10 2xl:gap-12 min-[1600px]:grid-cols-3">
          <BlogCardSkelton />
          {Array.from({ length: 10 }).map((_, index) => (
            <BlogCardSkelton key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPageSkelton;
