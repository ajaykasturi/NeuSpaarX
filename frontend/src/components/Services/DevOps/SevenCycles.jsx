import React from "react";
import sevencycles from "../../../assets/devopsimgs/sevencycles.jpeg";
import CycleCard from "./CycleCard";
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
    <div className="mx-[5vw] flex flex-col gap-y-20 items-center justify-center lg:h-screen">
      <div className="text-headingClamp text-colorblue">
        We follow the 7C's of DevOps
      </div>
      <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 items-center justify-items-center">
        <div className="border-2 border-slate-600 w-[80%]">
          <img src={sevencycles} className="w-full h-full object-contain" />
        </div>
        <div className="border-2 border-slate-600 flex justify-start items-center">
          {/* slider */}
          <CycleCard />
        </div>
      </div>
    </div>
  );
}

export default SevenCycles;
