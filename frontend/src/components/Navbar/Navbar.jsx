import React, { useState } from "react";
import logo from "../../assets/images/neuspaarxlogo.png";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar/Sidebar";
import ToggleButton from "../Sidebar/ToggleButton";
export const navConfig = [
  { name: "Home", link: "", styles: "max-[1200px]:hidden" },
  { name: "About", link: "about", styles: "max-[1200px]:hidden" },
  {
    name: "Services",
    link: "services",
    icon: <ChevronDown />,
    styles: "max-[1200px]:hidden",
  },
  {
    name: "Resources",
    link: "resources",
    icon: <ChevronDown />,
    styles: "max-[1200px]:hidden",
  },
  { name: "Industries", link: "industries", styles: "max-[1200px]:hidden" },
  { name: "Careers", link: "careers", styles: "max-[1200px]:hidden" },
  {
    name: "Contact Us",
    link: "contact-us",
    styles: "bg-[#274797] text-white max-[1200px]:hidden",
  },
];
const Navbar = () => {
  return (
    <header className="flex justify-between px-10 py-6 w-full">
      <NavLink to="/" className="h-12" onClick={() => handleLink("")}>
        <img src={logo} className="w-full h-full" alt="NeuspaRx Logo" />
      </NavLink>
      <nav className="flex gap-x-2 justify-center items-center">
        {navConfig.map((item) => (
          <NavLink
            to={`/${item.link}`}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center px-5 py-2 rounded-full ${
                item.styles ? item.styles : ""
              } ${
                isActive ? "underline" : "no-underline"
              }  hover:bg-[#274797] hover:text-white text-nowrap grow shrink`
            }
          >
            {item.name} {item.icon ? <span>{item.icon} </span> : ""}
          </NavLink>
        ))}
        <div className="cursor-pointer hidden max-[1200px]:block">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
