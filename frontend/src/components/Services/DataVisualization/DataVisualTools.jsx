import React from "react";
import PowerCard from "../PowerBi/PowerCard";

function DataVisualTools() {
  const config = [
    {
      id: 1,
      title: "Power BI",
      content:
        "Power BI is a leading Microsoft tool for connecting multiple data sources and creating interactive, effective reports to enhance business data understanding.",
      img: "",
    },
    {
      id: 2,
      title: "SSRS",
      content:
        "SQL Server Reporting System (SSRS) is a Microsoft tool used to create, design, deploy and manage reports. We use SSRS to build custom reports for business requirements.",
      img: "",
    },
    {
      id: 3,
      title: "Tableau",
      content:
        "Tableau is among the world’s leading reporting tools which is used to build reports interactively. We use Tableau to build reports that give successful business ideas, strategies by understanding their data.",
      img: "",
    },
    {
      id: 4,
      title: "Qlik",
      content:
        "Qlik provides both integration and reporting in a single tool. We use Qlik to reduce the gap between data and insightable actions.",
      img: "",
    },
  ];
  return (
    <div className="mx-[5vw] my-10 flex flex-col gap-y-9 sm:gap-y-16 items-center">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        Tools We Use
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {config.map((card) => (
          <PowerCard  card={card} />
        ))}
      </div>
    </div>
  );
}

export default DataVisualTools;
