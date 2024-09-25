import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateBtn({
  name,
  path = "",
  styles = "px-5 py-2",
  className = "",
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#274797] text-white text-nowrap flex justify-center items-center hover:opacity-90 max-h-fit rounded-xl w-fit cursor-pointer font-Poppins ${styles} ${className}`}
      onClick={() => navigate(path)}
    >
      {name}
    </div>
  );
}

export default NavigateBtn;
