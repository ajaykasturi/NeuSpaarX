import React from "react";
import { NavLink } from "react-router-dom";
function ServicesDropDown({ subNav }) {
  return (
    <>
      <div className="bg-white border border-t-0 border-gray-200 rounded-3xl shadow-lg p-8 w-[45rem] grid grid-cols-3 gap-5 relative mt-9 transition-all duration-200 hover:scale-[1.03]">
        <div className="absolute -top-7 left-[45%] text-center border-l-[20px] border-r-[20px] border-b-[30px] border-transparent border-b-white size-0 "></div>
        {subNav.map((subMenu) => (
          <div className="flex flex-col gap-y-1" key={subMenu.subitems[0].name}>
            {subMenu.subNavHeading && (
              <h1 className="font-semibold text-[1.05rem] ml-4">
                {subMenu.subNavHeading}
              </h1>
            )}
            <div className="flex flex-col gap-y-1">
              {subMenu.subitems.map((subItem) => (
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
        ))}
      </div>
    </>
  );
}

export default ServicesDropDown;
