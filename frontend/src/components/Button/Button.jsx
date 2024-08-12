import React from "react";

function Button({ name, onClick }) {
  return (
    <div
      className="bg-[#274797] text-white text-nowrap flex justify-center items-center hover:opacity-90 px-5 py-2 max-h-fit rounded-full w-fit cursor-pointer"
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default Button;
