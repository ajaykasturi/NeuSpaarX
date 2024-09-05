import React from "react";
import DMCard from "./DMCard";

function OurTechniques() {
  const configMain = [
    {
      id: 1,
      title: "Big Bang Migration",
      content:
        "Quickly transfers all data in one go, minimizing transition time and enabling immediate use of the new system.",
      path: "",
    },
    {
      id: 2,
      title: "Incremental Migration",
      content:
        "Moves data gradually, ensuring continuous operation and allowing for careful monitoring and adjustments.",
      path: "",
    },
    {
      id: 3,
      title: "Pilot Migration",
      content:
        "Tests a small portion of data first, identifying potential issues early and ensuring a smoother full migration.",
      path: "",
    },
    {
      id: 4,
      title: "Phased Migration",
      content:
        "Migrates data in stages, reducing risk by handling one part at a time while keeping other systems active.",
      path: "",
    },
    {
      id: 5,
      title: "Hybrid Migration",
      content:
        "Combines multiple techniques, offering flexibility and customization to meet unique project needs.",
      path: "",
    },
  ];
  const config = [...configMain, ...configMain];
  return (
    <div className="bg-mainBgImg bg-no-repeat  bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl border-0 my-24 relative">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        Our Techniques
      </h1>
      <div className="overflow-hidden  w-full overlay before-overlay">
        <div className="flex gap-x-16 w-max animate-autoScrollInfinite hover:[animation-play-state:paused]">
          {config.map((card, index) => (
            <DMCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTechniques;
