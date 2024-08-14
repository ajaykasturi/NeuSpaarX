import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function ToggleButton({ setOpen, open }) {
  return (
    <button
      className="w-[50px] h-[50px] rounded-[50px]  border-none cursor-pointer absolute top-[25px] right-[25px]"
      onClick={() => setOpen((prev) => !prev)}
    >
      {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
    </button>
  );
}

export default ToggleButton;
