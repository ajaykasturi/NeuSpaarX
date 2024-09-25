import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import { Outlet } from "react-router-dom";
function BlogMain() {
  return (
    <>
      <Navbar />
      <Outlet />
      <LetsConnect
        title={"Join Us and Grow your Business now"}
        content={"Get started!"}
      />
    </>
  );
}

export default BlogMain;
