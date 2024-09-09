import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateBtn({ name, path = "", styles = "px-5 py-2", clasName = "" }) {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#274797] text-white text-nowrap flex justify-center items-center hover:opacity-90 max-h-fit rounded-full w-fit cursor-pointer ${styles} ${clasName}`}
      onClick={() => navigate(path)}
    >
      {name}
    </div>
  );
}

export default NavigateBtn;
