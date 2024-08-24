import React, { useContext } from "react";
import logo from "../../assets/neuspaarx/neuspaarxlogo.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import SideBarMain from "../SideBarMain.jsx/SideBarMain";
import ToggleButton from "../SideBarMain.jsx/ToggleButton";
import { SideBarContext } from "../../context/SideBarProvider";
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
            name: "Data Engeneering",
            path: "/services/data-engeneering",
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
            name: "Aws",
            path: "/services/aws",
          },
          {
            name: "Gcp",
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
          { name: "Blog", path: "/blog" },
          { name: "Case Studies", path: "/case-studies" },
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
  return (
    <>
      <header className="flex justify-between px-10 py-6 w-full">
        <NavLink to="/" className="h-12" onClick={() => handleLink("")}>
          <img src={logo} className="w-full h-full" alt="NeuspaRx Logo" />
        </NavLink>
        <nav className="flex gap-x-2 justify-center items-center">
          {navConfig.map((item) => (
            <NavLink
              to={`${item.path}`}
              key={item.name}
              className={({ isActive }) =>
                `max-[1200px]:hidden flex items-center px-5 py-2 rounded-full ${
                  item.styles ? item.styles : ""
                } ${
                  isActive ? "underline" : "no-underline"
                }  hover:bg-[#274797] hover:text-white text-nowrap grow shrink`
              }
            >
              {item.name} {item.icon ? <span>{item.icon} </span> : ""}
            </NavLink>
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
