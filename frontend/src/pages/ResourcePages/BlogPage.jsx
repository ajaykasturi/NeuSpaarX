import React from "react";
import BlogCard from "../../components/Blog/BlogCard";
import { blogs as blogPosts } from "../../constants/blog";
function BlogPage() {
  const blogs = blogPosts.sort((a, b) => b.id - a.id);
  return (
    <>
      <div className="flex justify-center items-center my-10 mx-[5vw]">
        <div className="grid grid-cols-1 gap-y-12 min-[960px]:grid-cols-2 min-[960px]:gap-6  lg:gap-8 xl:gap-10 2xl:gap-12 min-[1600px]:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
