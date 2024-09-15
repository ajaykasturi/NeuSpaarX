import React from "react";
import GCPCard from "./GCPCard";
import discovery from "../../../assets/aws/discovery.png";
import plan from "../../../assets/aws/plan.png";
import migration from "../../../assets/aws/migration.png";
import optimize from "../../../assets/aws/optimize.png";
function GCPMigration() {
  const config = [
    {
      id: 1,
      title: " Discover",
      content:
        "We begin by analyzing your current IT infrastructure, understanding your business needs, and identifying the key opportunities and challenges for cloud migration.",
      img: discovery,
    },
    {
      id: 2,
      title: "Plan",
      content:
        "A comprehensive migration plan is crafted, outlining the necessary resources, timelines, and risk mitigation measures to ensure a smooth transition.",
      img: plan,
    },
    {
      id: 3,
      title: "Migrate",
      content:
        "During migration, we transfer your applications, data, and workloads to Google Cloud with minimal disruptions, ensuring business continuity and data integrity.",
      img: migration,
    },
    {
      id: 4,
      title: "Optimize",
      content:
        "Once migrated, we continuously monitor and optimize your cloud environment for performance, security, and cost-efficiency.",
      img: optimize,
    },
  ];
  const configLength = config.length;
  //   const config = [...configMain, ...configMain];
  return (
    <div className="bg-mainBgImg bg-no-repeat bg-full py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl border-0 my-24 relative px-[5vw]">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        Migration Process
      </h1>
      <div className="flex flex-col  justify-center items-center gap-y-[5rem]">
        {config.map((card, index) => (
          <GCPCard
            key={index}
            card={card}
            lastCard={configLength === index + 1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default GCPMigration;
