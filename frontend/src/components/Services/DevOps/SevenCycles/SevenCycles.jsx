import React from "react";
import sevencycles from "../../../../assets/devopsimgs/sevencycles.jpeg";

import SevenCyclesWrapper from "../SevenCyclesWrapper/SevenCyclesWrapper";

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
    <SevenCyclesWrapper
      content={devopsConfig}
      title={"We follow the 7C's of DevOps"}
      img={sevencycles}
    />
  );
}

export default SevenCycles;
