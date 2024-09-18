import React, { useEffect, useState } from "react";
function BlogCard({ blog }) {
  return (
    <div className="flex flex-col items-start gap-y-5 max-w-[25rem] sm:max-w-[30rem] min-[960px]:max-w-[25rem] min-[960px]:min-w-[25rem] rounded-2xl p-1 overflow-hidden cursor-pointer transition-all hover:scale-[1.01] duration-500">
      <div className="bg-[#DBDBDB] w-full aspect-[16/8] rounded-2xl"></div>
      <div className="flex flex-col gap-y-1">
        <h2 className="font-medium font-Poppins text-sm">{blog.category}</h2>
        <h1 className="font-semibold text-base font-Poppins overflow-hidden">
          {blog.title}
        </h1>
        <p className="font-Poppins text-sm">
          {blog.content.substring(0, 100)}...
        </p>
      </div>
      <div className="flex gap-x-3 items-center">
        <div className="bg-[#DBDBDB] size-10 rounded-full"></div>
        <div className="flex flex-col gap-y-1">
          <h2 className="font-Poppins text-sm leading-none">
            {blog.publisher}
          </h2>
          <div className="leading-none">
            <span className="font-Roboto text-sm leading-none">
              {blog.date}
            </span>
            <span>&nbsp;•&nbsp;</span>
            <span className="font-Roboto text-sm leading-none">
              {blog.readLength}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
