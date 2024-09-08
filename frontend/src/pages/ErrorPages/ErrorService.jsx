import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function ErrorService() {
  return (
    <div className="bg-mainBgImg bg-no-repeat bg-cover mb-10 h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-96 text-6xl">
        {" "}
        404! Service Under Maintainance...
      </div>
    </div>
  );
}

export default ErrorService;
