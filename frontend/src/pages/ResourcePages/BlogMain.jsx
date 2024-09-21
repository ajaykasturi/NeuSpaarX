import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LetsConnect from "../../components/ContactUs/LetsConnect";

function BlogMain({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <LetsConnect
        title={"Join Us and Grow your Business now"}
        content={"Get started!"}
      />
    </>
  );
}

export default BlogMain;
