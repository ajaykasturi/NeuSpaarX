import React from "react";
import aboutBg from "../../assets/images/aboutus.png";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="flex gap-x-24 justify-between mx-[5vw] my-10 max-[1050px]:flex-col max-[1050px]:gap-y-10 max-[1050px]:items-center items-center">
      <div className="rounded-2xl w-[15rem] min-[650px]:w-[20rem] min-[1051px]:h-[30rem]  min-[1051px]:min-w-fit">
        <img
          src={aboutBg}
          className="w-full h-full rounded-2xl"
          alt="about us image"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-y-6 max-[1050px]:items-center">
        <div className="font-Poppins text-6xl font-normal max-[500px]:text-4xl">
          About Us
        </div>
        <div className="text-justify text-wrap">
          We are a team of trusted tech enthusiastic people inspired to do more,
          learn more, and help business ideas translate into reality, and hold a
          rich experience in collaborating, designing, implementing, and
          building quality solutions for a wide range of businesses.
        </div>
        <Link to={"/about"} className="rounded-full py-3 px-5 cursor-pointer hover:opacity-90  bg-companycolor text-white text-[1rem]">
          Know More
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
