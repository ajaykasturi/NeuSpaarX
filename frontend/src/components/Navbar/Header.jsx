import React, { useContext, useState } from "react";
import logo from "../../assets/neuspaarx/neuspaarxlogo.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import SideBarMain from "../SideBarMain.jsx/SideBarMain";
import ToggleButton from "../SideBarMain.jsx/ToggleButton";
import { SideBarContext } from "../../context/SideBarProvider";
import ServicesDropDown from "./ServicesDropDown";
import ResourcesDropDown from "./ResourcesDropDown";
export const navConfig = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    icon: <ChevronDown />,
    close: <ChevronDown />,
    open: <ChevronUp />,
    subNav: [
      {
        subNavHeading: "Data and Analytics",
        subitems: [
          {
            name: "Data Engineering",
            path: "/services/data-engineering",
          },
          {
            name: "Data Management",
            path: "/services/data-management",
          },
          {
            name: "Big Data",
            path: "/services/big-data",
          },
          {
            name: "Data Science",
            path: "/services/data-science",
          },
          {
            name: "Data Migration",
            path: "/services/data-migration",
          },
        ],
      },
      {
        subNavHeading: "Cloud",
        subitems: [
          {
            name: "Cloud Computing",
            path: "/services/cloud-computing",
          },
          {
            name: "Azure",
            path: "/services/azure",
          },
          {
            name: "AWS",
            path: "/services/aws",
          },
          {
            name: "GCP",
            path: "/services/gcp",
          },
          {
            name: "Snowflake",
            path: "/services/snowflake",
          },
        ],
      },
      {
        subNavHeading: "Business Intelligence",
        subitems: [
          {
            name: "Data Visualization",
            path: "/services/data-visualization",
          },
          {
            name: "Data Integration",
            path: "/services/data-integration",
          },
          {
            name: "Power BI",
            path: "/services/power-bi",
          },
        ],
      },
      {
        subNavHeading: "Business Apps",
        subitems: [
          {
            name: "Power Apps",
            path: "/services/powerapps",
          },
          {
            name: "Power Automate",
            path: "/services/power-automate",
          },
          {
            name: "Dynamic 365",
            path: "/services/dynamic-365",
          },
        ],
      },
      {
        subNavHeading: "Project Management",
        subitems: [
          {
            name: "DevOps",
            path: "/services/devops",
          },
        ],
      },
      {
        subNavHeading: "Web Development",
        subitems: [
          {
            name: "Wordpress",
            path: "/services/wordpress",
          },
        ],
      },
    ],
  },
  {
    name: "Resources",
    path: "/resources",
    icon: <ChevronDown />,
    subNav: [
      {
        subNavHeading: "",
        subitems: [
          { name: "Blog", path: "/resources/blog" },
          { name: "Case Studies", path: "/resources/case-studies" },
        ],
      },
    ],
  },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  {
    name: "Contact Us",
    path: "/contact-us",
    styles: "bg-[#274797] text-white",
  },
];

const Header = () => {
  const { isSideBarOpen } = useContext(SideBarContext);
  const [dropdown, setDropdown] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Navigation is blocked!");
  };
  const handleMouseEnter = (name) => {
    setDropdown(name);
  };
  const handleMouseLeave = () => {
    setDropdown(null);
  };
  function handleDropDown(name) {
    dropdown == null ? handleMouseEnter(name) : setDropdown(null);
  }
  return (
    <>
      <header className="flex justify-between px-10 py-6 w-full">
        <NavLink to="/" className="h-12" onClick={() => handleLink("")}>
          <img src={logo} className="w-full h-full" alt="NeuspaRx Logo" />
        </NavLink>
        <nav className="flex gap-x-2 justify-center items-center">
          {navConfig.map((item) => (
            <div
              key={item.name}
              onClick={() => handleDropDown(item.name)}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <NavLink
                onClick={item.subNav ? handleClick : ""}
                to={`${item.path}`}
                className={({ isActive }) =>
                  `max-[1200px]:hidden flex items-center px-5 py-2 rounded-full ${
                    item.styles ? item.styles : ""
                  } ${
                    isActive ? "text-[#274797] font-semibold" : ""
                  }  hover:border-[] border-2 border-transparent text-nowrap grow shrink`
                }
              >
                {item.name} {item.icon ? <span>{item.icon} </span> : ""}
              </NavLink>
              {/* Dropdown Menu */}
              {item.subNav && dropdown === item.name && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[80%] z-10  bg-transparent transition-all max-[1200px]:hidden">
                  {item.path == "/services" && (
                    <ServicesDropDown subNav={item.subNav} />
                  )}
                  {item.path === "/resources" && (
                    <ResourcesDropDown subNav={item.subNav} />
                  )}
                </div>
              )}
            </div>
          ))}
          {!isSideBarOpen && (
            <ToggleButton className="hidden max-[1200px]:block" />
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
