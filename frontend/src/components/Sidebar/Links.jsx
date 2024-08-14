import React from "react";
import { navConfig } from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
function Links() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-6 text-4xl">
      {navConfig.map((item) => (
        <a>{item.name}</a>
      ))}
    </div>
  );
}

export default Links;
