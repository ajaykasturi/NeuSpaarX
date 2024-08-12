import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function LetsConnect() {
  const navigate = useNavigate();
  return (
    <div className="my-10 mx-[5vw] flex flex-col gradient-border pt-16 pb-24 rounded-3xl items-center gap-y-10 px-[5vw]">
      <div className="flex flex-col items-center text-[#1B2C59] gap-y-2">
        <div className="text-headingClamp text-center">Let's Connect</div>
        <div className="text-contentClamp text-center">
          Would you like to start a project with us?
        </div>
      </div>

      <Button name="Contact Us" onClick={() => navigate("/contact-us")} />
    </div>
  );
}

export default LetsConnect;
