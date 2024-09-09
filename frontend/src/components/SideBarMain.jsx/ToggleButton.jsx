import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SideBarContext } from "../../context/SideBarProvider";
function ToggleButton({ className }) {
  const { isSideBarOpen, toggleSideBar } = useContext(SideBarContext);

  return (
    <button
      className={`flex justify-center items-center shrink-0 w-[35px] h-[35px] rounded-[50px]  border-none cursor-pointer  ${className} bg-[#23538F] text-white`}
      onClick={toggleSideBar}
    >
      {isSideBarOpen ? (
        <CloseIcon fontSize="medium" />
      ) : (
        <MenuIcon fontSize="medium" />
      )}
    </button>
  );
}

export default ToggleButton;
