import React from "react";
import sevencycles from "../../../../assets/devopsimgs/sevencycles.jpeg";
import CycleCard from "./CycleCard";
import AdvancedCarousel from "../../../AdvCarousel/AdvancedCarousel";
function SevenCycles() {
  const devopsConfig = [
    {
      id: 1,
      title: "Continuos Development",
      content:
        "We focus on updating requirements, resolving issues, optimizing code, integrating features, and delivering quality software to clients.",
    },
    {
      id: 2,
      title: "Continuos Integration",
      content:
        "We ensure smooth integration by consolidating data and changes from multiple sources, maintaining consistency and functionality.",
    },
    {
      id: 3,
      title: "Continuos Testing",
      content:
        "We prioritize ongoing testing from the start to prevent bottlenecks, reduce costs, and ensure a smooth development process.",
    },
    {
      id: 4,
      title: "Continuos Deployment",
      content:
        "We automate code deployment across environments using pipelines and tests to deliver high-quality software to production.",
    },
    {
      id: 5,
      title: "Continuos Feedback",
      content:
        "We consistently implement client feedback and suggestions, ensuring their needs are met and improvements are ongoing.",
    },
    {
      id: 6,
      title: "Continuos Monitoring",
      content:
        "We employ advanced monitoring techniques to ensure code runs successfully and smoothly across all environments.",
    },
    {
      id: 7,
      title: "Continuos Operations",
      content:
        "We ensure systems are always up and running efficiently, addressing any issues immediately to maintain uninterrupted service.",
    },
  ];
  return (
    <div className="mx-[5vw] my-10 flex flex-col gap-y-8 sm:gap-y-20 items-center justify-center lg:h-screen">
      <div className="text-headingClamp text-colorblue text-center">
        We follow the 7C's of DevOps
      </div>
      <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2 gap-y-4 items-center justify-items-center">
        <div className="min-[375px]:h-[16rem]  min-[500px]:h-[20rem] sm:h-auto md:h-[20rem] lg:h-[25rem] xl:h-auto">
          <img src={sevencycles} className="w-full h-full object-contain" />
        </div>
        <div className="w-full flex justify-center">
          <AdvancedCarousel autoSlide={false} autoSlideInterval={2000}>
            {devopsConfig.map((item, index) => (
              <div className="min-w-full flex justify-center">
                <CycleCard card={item} key={`${item.id}|${index}`} />
              </div>
            ))}
          </AdvancedCarousel>
        </div>
      </div>
    </div>
  );
}

export default SevenCycles;
