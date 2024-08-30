import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function D6Card({ card, i, progress, targetScale, range }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scaleImg = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ position: "relative", top: `calc(-1% + ${i * 25}px)`, scale }}
        className="flex flex-col lg:flex-row  items-center justify-start  border-[0.5px] shadow bg-gray-50 border-companycolor  rounded-2xl break-words h-[25rem] w-full lg:w-[50rem] overflow-hidden p-4 gap-6"
      >
        <div className="rounded-3xl relative overflow-hidden size-[11.5rem] min-[800px]:size-[13rem] lg:size-[20rem] shrink-0 ">
          <motion.div
            style={{ scale: scaleImg }}
            className="bg-[#EDEDED] w-full h-full"
          >
            <img src={card.img} className="w-full h-full object-cover" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-5 items-center justify-center max-w-[35rem]">
          <h1 className="text-colorblue text-center font-Poppins font-semibold text-2xl sm:text-3xl md:text-4xl">
            {card.title}
          </h1>
          <div className="text-[#1B2C59] font-Poppins font-normal  lg:px-0">
            {card.content}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default D6Card;
