import React from "react";
import UseCaseCard from "./UseCaseCard";
import migrate from "../../../assets/azure/migrate.png";
import optimize from "../../../assets/azure/optimize.png";
function AzureStories() {
  const config = [
    {
      id: 1,
      title: "Migrate your Solution to Cloud for better features",
      content:
        "Our client used to store their data in the on prem servers (SQL DB) due to which the costs and maintenance increased Significantly over the years.Our requirement is to reduce the costs, manage the infrastructure, eliminate on-prem hardware servers and decrease the dependency on many servers.",
      path: "/path1",
      img: migrate,
    },
    {
      id: 2,
      title: "Optimize the management of data from to Azure",
      content:
        "Our client is facing low data processing time and data latency with on-prem servers as they are dealing with huge amounts of data.Requirement is to have no data latency and fast data processing and to have redundancy in case of failures.",
      path: "/path2",
      img: optimize,
    },
  ];
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl items-center">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        Our Stories
      </h1>
      <div className="flex flex-col gap-y-10 w-full max-w-[90%]">
        {config.map((card) => (
          <UseCaseCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default AzureStories;
