import React from "react";
import AWSCard from "./AWSCard";

function AWSWeFollow() {
  const configMain = [
    {
      id: 1,
      title: "Consulting",
      content: "We assess your cloud needs and create a tailored AWS strategy.",
      img: "",
    },
    {
      id: 2,
      title: "Discovery",
      content: "We analyze your systems and plan the AWS migration roadmap.",
      img: "",
    },
    {
      id: 3,
      title: "Migration",
      content:
        "We move your systems to AWS with minimal downtime and disruption.",
      img: "",
    },
    {
      id: 4,
      title: "Modeling",
      content:
        "We optimize AWS workflows to boost your operational efficiency.",
      img: "",
    },
    {
      id: 5,
      title: "Reporting",
      content:
        "We provide performance reports and ongoing AWS improvement strategies.",
      img: "",
    },
  ];
  const config = [...configMain, ...configMain];
  return (
    <div className="bg-mainBgImg bg-no-repeat  bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl border-0 my-24 relative">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        Approach we follow
      </h1>
      <div className="overflow-hidden  w-full overlay before-overlay">
        <div className="flex gap-x-[4.6rem] w-max animate-animateArrowInfinte hover:[animation-play-state:paused]">
          {config.map((card, index) => (
            <AWSCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AWSWeFollow;
