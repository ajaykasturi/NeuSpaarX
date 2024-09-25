import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function BlogCard({ blog }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${blog.id}`)}
      className="flex flex-col items-start gap-y-5 max-w-[25rem] sm:max-w-[30rem] min-[960px]:max-w-[25rem] min-[960px]:min-w-[25rem] rounded-2xl p-1 overflow-hidden cursor-pointer transition-all hover:scale-[1.01] duration-500"
    >
      <div className="bg-[#DBDBDB] w-full aspect-[16/8] max-h-[12rem] rounded-2xl">
        <img src={blog.img} className="rounded-2xl w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-y-1  w-full">
        <h2 className="font-medium font-Poppins text-sm">{blog.category}</h2>
        <h1 className="font-semibold text-base font-Poppins truncate">
          <abbr title={blog.title} className="no-underline">
            {blog.title}
          </abbr>
        </h1>
        <p className="font-Poppins text-sm text-wrap">
          {blog.content.substring(0, 100)}...
        </p>
      </div>
      <div className="flex gap-x-3 items-center">
        <div className="bg-[#274797] size-10 rounded-full text-white font-semibold flex justify-center items-center text-2xl">
          {blog.publisher.charAt(0)}
        </div>
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
