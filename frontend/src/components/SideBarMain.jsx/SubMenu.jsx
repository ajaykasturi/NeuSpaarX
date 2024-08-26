import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
function SubMenu({ item, isOpenMenu, setIsOpenMenu }) {
  const [subnav, setSubnav] = useState(false);
  const toggleSubnav = () => {
    setSubnav((prev) => !prev);
  };
  const handleToggle = () => {
    setIsOpenMenu((prev) => (prev == item.name ? null : item.name));
  };
  return (
    <div key={item.name}>
      <NavLink
        onClick={item.subNav && handleToggle}
        to={`${item.subNav ? "#" : item.path}`}
        className={({ isActive }) =>
          `hover:bg-[#3b5ab0] hover:text-white text-nowrap h-[60px] flex justify-start items-center gap-x-1 pl-8 my-1 rounded-xl ${
            isActive && !item.subNav ? "bg-[#274797] text-white" : ""
          }`
        }
      >
        {item.name}
        {item.subNav &&
          (isOpenMenu == item.name ? <ChevronUp /> : <ChevronDown />)}
      </NavLink>
      {item.subNav && isOpenMenu == item.name && (
        <div className="card-border rounded-xl ml-2 p-4 my-1">
          {item.subNav.map((subnav) => (
            <React.Fragment key={subnav.subNavHeading}>
              {subnav.subNavHeading && (
                <h2 className="font-semibold pb-1">{subnav.subNavHeading}</h2>
              )}
              {subnav.subitems.map((subitem) => (
                <NavLink
                  to={`${subitem.path}`}
                  key={subitem.name}
                  className={({ isActive }) =>
                    `hover:bg-[#3b5ab0] hover:text-white text-nowrap h-[60px] flex justify-start items-center gap-x-1 pl-8 my-1 rounded-xl  ${
                      isActive ? "bg-[#274797] text-white" : ""
                    }`
                  }
                >
                  {subitem.name}
                </NavLink>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubMenu;
