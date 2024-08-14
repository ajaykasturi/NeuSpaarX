import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1220px at calc(100% - 50px) 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(25px at calc(100% - 50px) 50px)",
      transition: {
        delay: 0.2,
        stype: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="absolute right-0 top-0 bottom-0 flex flex-col items-center justify-center text-black h-screen"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        variants={variants}
        className={`absolute border-l-2 rounded-3xl top-0 right-0 bottom-0 bg-[#F0F0F0]  h-full ${"w-[400px]"}`}
      >
        {open ? <Links /> : ""}
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
}

export default Sidebar;
