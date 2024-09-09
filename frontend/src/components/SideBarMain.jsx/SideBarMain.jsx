import React, { useContext, useState } from "react";
import ToggleButton from "./ToggleButton";
import { SideBarContext } from "../../context/SideBarProvider";
import { navConfig } from "../Navbar/Header";
import SubMenu from "./SubMenu";
import LazyImage from "../CommonComps/LazyImage";
import logo from "../../assets/neuspaarx/neuspaarxlogo.png";
function SideBarMain() {
  const { isSideBarOpen, toggleSideBar } = useContext(SideBarContext);
  const [isOpenMenu, setIsOpenMenu] = useState(null);
  return (
    <div
      className={`bg-[#ffffff] w-[350px] h-screen flex flex-col justify-start fixed ${
        isSideBarOpen ? "left-0" : "-left-full w-0"
      } top-0 z-50 transition-all duration-500 overflow-scroll no-scrollbar px-2 min-[1200px]:hidden`}
    >
      <div className="bg-transparent flex justify-center items-center pr-8 min-h-[80px] max-h-[80px] sm:min-h-[96px] sm:max-h-[96px] sticky top-0 gap-x-2">
        <div className="max-w-[18rem] w-full grow">
          <LazyImage src={logo} className="w-full h-full" />
        </div>
        <ToggleButton />
      </div>
      <div className="flex flex-col  grow">
        {navConfig.map((item) => (
          <SubMenu
            item={item}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
            key={item.path}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBarMain;
