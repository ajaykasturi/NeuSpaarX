import React from "react";
import SnowCard from "./SnowCard";
import datacolab from "../../../assets/snowflake/datacolab.png";
import crosscloud from "../../../assets/snowflake/crosscloud.png";
import fastquery from "../../../assets/snowflake/fastquery.png";
function TechFeatures() {
  const config = [
    {
      id: 1,
      title: "Data Collaboration",
      content:
        "Facilitate seamless collaboration across teams and partners with Snowflake's secure data sharing capabilities.",
      img: datacolab,
    },
    {
      id: 2,
      title: "Cross-Cloud Compatibility",
      content:
        "Run your data operations smoothly across multiple cloud providers (AWS, Azure, GCP) without any vendor lock-in.",
      img: crosscloud,
    },
    {
      id: 3,
      title: "Fast Query Performance",
      content:
        "Benefit from near-instant query results, regardless of the scale of your data.",
      img: fastquery,
    },
  ];
  return (
    <div className="bg-mainBgImg bg-no-repeat bg-full py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl border-0 my-24 relative px-[5vw]">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        Technical Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[16rem_16rem] xl:grid-cols-[16rem_16rem_16rem] place-items-center gap-8 place-content-center lg:gap-20 xl:gap-20 ">
        {config.map((item) => (
          <SnowCard
            key={item.id}
            card={item}
            h="h-[26.5rem]"
            w="min-[376px]:w-[16rem]"
          />
        ))}
      </div>
    </div>
  );
}

export default TechFeatures;
