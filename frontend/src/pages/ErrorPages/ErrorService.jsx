import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function ErrorService() {
  return (
    <div className="bg-mainBgImg bg-no-repeat bg-cover mb-10 h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-96 text-3xl tex-center">
        <p className="text-center">
          We're on it! The page you're looking for is temporarily unavailable,
          but we're working to fix that.
        </p>
      </div>
    </div>
  );
}

export default ErrorService;
