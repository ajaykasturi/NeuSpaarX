import React from "react";
import { NavLink } from "react-router-dom";
function ResourcesDropDown({ subNav }) {
  return (
    <div className="bg-white border border-t-0 border-gray-200 rounded-3xl shadow-lg p-8 w-[15rem]  relative mt-9 transition-all duration-200 hover:scale-[1.03]">
      <div className="absolute -top-7 left-[45%] text-center border-l-[20px] border-r-[20px] border-b-[30px] border-transparent border-b-white size-0 "></div>
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-col gap-y-1">
          {subNav[0].subitems.map((subItem) => (
            <NavLink
              key={subItem.name}
              to={`${subItem.path}`}
              className={({ isActive }) =>
                `px-4 py-2  hover:bg-[#3b5ab0] hover:text-white rounded-2xl ${
                  isActive && "bg-[#274797] text-white"
                }`
              }
            >
              {subItem.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourcesDropDown;
