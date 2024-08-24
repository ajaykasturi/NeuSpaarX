import React, { useContext, useState } from "react";
import ToggleButton from "./ToggleButton";
import { SideBarContext } from "../../context/SideBarProvider";
import { navConfig } from "../Navbar/Header";
import SubMenu from "./SubMenu";
function SideBarMain() {
  const { isSideBarOpen, toggleSideBar } = useContext(SideBarContext);
  const [isOpenMenu, setIsOpenMenu] = useState(null);
  return (
    <div
      className={`bg-[#ffffff] w-[350px] h-screen flex flex-col justify-start fixed ${
        isSideBarOpen ? "left-0" : "-left-full"
      } top-0 z-50 transition-all duration-500 overflow-scroll no-scrollbar px-2 min-[1200px]:hidden`}
    >
      <div className="flex justify-end items-center pr-8 min-h-[65px] max-h-[65px] sm:min-h-[96px] sm:max-h-[96px]">
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
