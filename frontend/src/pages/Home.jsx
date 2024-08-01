import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImgHome from "../assets/images/bgimg.png";
function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen absolute -z-10 w-full border-4 border-slate-950">
        <img src={bgImgHome} className="w-full h-full object-cover" />
      </div>
    </>
  );
}

export default Home;
