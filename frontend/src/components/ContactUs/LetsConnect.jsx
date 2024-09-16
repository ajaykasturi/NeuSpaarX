import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function LetsConnect({
  title = "Let's Connect",
  content = "Would you like to start a project with us?",
}) {
  const navigate = useNavigate();
  return (
    <div className="my-28 mx-[5vw] flex flex-col gradient-border py-10 sm:py-16 rounded-3xl items-center gap-y-10 px-[5vw] justify-center">
      <div className="flex flex-col items-center text-[#1B2C59] gap-y-2">
        <div className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-center">
          {title}
        </div>
        <div className="text-base sm:text-xl lg:text-2xl text-center">
          {content}
        </div>
      </div>

      <Button
        name="Contact Us"
        clasName="hover:scale-[1.02]"
        onClick={() => navigate("/contact-us")}
      />
    </div>
  );
}

export default LetsConnect;
