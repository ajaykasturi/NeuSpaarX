import React, { useEffect, useState } from "react";
import { blogs } from "../../constants/blog";
import { useParams } from "react-router-dom";
import MdToHtml from "../../utils/MdToHtml";
function BlogView() {
  const { blogId } = useParams(); // blogId is a string by default
  const blog = blogs.find((blog) => blog.id === parseInt(blogId, 10));
  if (!blog) {
    return <div>Blog not found</div>; // Handle case when blog is not found
  }
  return (
    <div className="flex flex-col justify-center items-center m-2">
      {/* <div className="flex gap-x-3 items-center">
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
      </div> */}
      <MdToHtml path={blog.blogPath} blog={blog} />
    </div>
  );
}

export default BlogView;
