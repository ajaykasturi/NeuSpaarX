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
        className="grid grid-cols-2 grid-rows-1 gradient-border rounded-2xl break-words h-[25rem] w-[60%]"
      >
        <div className="bg-D6Img rounded-l-2xl relative overflow-hidden">
          <motion.div style={{ scale: scaleImg }} className="w-full h-full">
            <img src={card.img} className="w-full h-full object-cover" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-6 items-start justify-center p-12">
          <div className="text-[#1B2C59] font-Poppins text-7xl font-normal">
            {card.title}
          </div>
          <div className="text-[#1B2C59] font-Poppins  text-2xl font-normal">
            {card.content}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default D6Card;
