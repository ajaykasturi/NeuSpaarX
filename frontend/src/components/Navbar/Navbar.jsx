import React, { useState } from "react";
import logo from "../../assets/images/neuspaarxlogo.png";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const activeLinkStyles = {};
  const navConfig = [
    { name: "Home", link: "/", styles: "max-[600px]:hidden" },
    { name: "About", link: "about", styles: "max-[700px]:hidden" },
    {
      name: "Services",
      link: "services",
      icon: <ChevronDown />,
      styles: "max-[850px]:hidden",
    },
    {
      name: "Resources",
      link: "resources",
      icon: <ChevronDown />,
      styles: "max-[1020px]:hidden",
    },
    { name: "Industries", link: "industries", styles: "max-[1149px]:hidden" },
    { name: "Careers", link: "careers", styles: "max-[1200px]:hidden" },
    {
      name: "Contact Us",
      link: "contact-us",
      styles: "bg-[#274797] text-white max-[490px]:hidden",
    },
    {
      name: <EllipsisVertical />,
      styles: "hidden max-[1200px]:block",
    },
  ];
  function handleLink(link) {
    setActiveLink(link);
  }
  return (
    <header className="flex justify-between px-10 py-6 w-full bottom-0">
      <NavLink to="/" className="h-12" onClick={() => handleLink("")}>
        <img src={logo} className="w-full h-full" alt="NeuspaRx Logo" />
      </NavLink>
      <nav className="flex gap-x-4 justify-center items-center">
        {navConfig.map((item) => (
          <a
            href={`#${item.link}`}
            key={item.link}
            className={`flex items-center px-5 py-2 rounded-full ${
              item.styles ? item.styles : ""
            } ${
              activeLink === item.link ? "underline" : "no-underline"
            } hover:underline hover:bg-[#274797] hover:text-white text-nowrap grow shrink`}
            onClick={() => handleLink(item.link)}
          >
            {item.name} {item.icon ? <span>{item.icon} </span> : ""}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
