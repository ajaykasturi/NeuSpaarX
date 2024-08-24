import React, { createContext, useState } from "react";

export const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [isSideBarOpen, setIsSiderBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSiderBarOpen((prev) => !prev);
  };

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}

export default SideBarProvider;
