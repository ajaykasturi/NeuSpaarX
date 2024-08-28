import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Error404() {
  return (
    <div className="bg-mainBgImg bg-no-repeat bg-cover mb-10 h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-96 text-6xl">
        {" "}
        Oops! 404 Error
      </div>
    </div>
  );
}

export default Error404;
