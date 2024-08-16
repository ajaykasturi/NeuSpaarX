import React from "react";

function Button({ name, onClick, styles = "px-5 py-2", clasName = "" }) {
  return (
    <div
      className={`bg-[#274797] text-white text-nowrap flex justify-center items-center hover:opacity-90 max-h-fit rounded-full w-fit cursor-pointer ${styles} ${clasName}`}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default Button;
