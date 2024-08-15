import React, { useRef, useEffect, useState } from "react";
import D6Card from "./D6Card";
import defineImg from "../../assets/6DProcessImages/define.png";
import developImg from "../../assets/6DProcessImages/develop.png";
import designImg from "../../assets/6DProcessImages/design.png";
import deployImg from "../../assets/6DProcessImages/deploy.png";
import deliverImg from "../../assets/6DProcessImages/deliver.png";
import { motion, useScroll, useTransform } from "framer-motion";
function D6Process() {
  const config = [
    {
      id: 1,
      title: "Define",
      content:
        "We will define the problem and share it with the required audience so that everyone are on the same page.",
      img: defineImg,
    },
    {
      id: 2,

      title: "Design",
      content:
        "Once the problem is defined, we will design a quality solution and for any changes/enhancements required, we will iterrate as needed.",
      img: designImg,
    },
    {
      id: 3,
      title: "Develop",
      content:
        "Once the design is finalized, we will start developing the solution step by step.",
      img: developImg,
    },
    {
      id: 4,
      title: "Deploy",
      content:
        "We will deploy a live version of  solution, so that clients can view how the solution works and provide feedback.",
      img: deployImg,
    },
    {
      id: 6,
      title: "Deliver",
      content:
        "Once the clients are satisfied with the solution deployed, we will deliver the project.",
      img: deliverImg,
    },
  ];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: headingScroll } = useScroll({
    target: container,
    offset: ["start end", "end center"],
  });
  const scale = useTransform(headingScroll, [0, 1], [1, 0]);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    headingScroll.on("change", (e) => {
      console.log(headingScroll.current);
      headingScroll.current == 1
        ? setIsVisible((prev) => false)
        : setIsVisible(true);
    });
  }, []);
  return (
    <div className="flex flex-col gap-y-2 mt-16 ">
      <motion.div
        className="text-[#1B2C59] text-6xl font-Poppins text-center sticky top-20"
        style={{
          display: !isVisible ? "none" : "block",
        }}
      >
        Our 6-D Process
      </motion.div>
      <div className="flex flex-col gap-y-16" ref={container}>
        {config.map((card, index) => {
          const targetScale = 1 - (config.length - index) * 0.05;
          return (
            <D6Card
              key={card.id}
              card={card}
              i={index}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default D6Process;
