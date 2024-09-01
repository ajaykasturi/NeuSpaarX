import React from "react";
import PowerCard from "../PowerBi/PowerCard";
import powerbi from "../../../assets/datavisualization/powerbi.png";
import ssrs from "../../../assets/datavisualization/ssrs.png";
import tableau from "../../../assets/datavisualization/tableau.png";
import qlik from "../../../assets/datavisualization/qlik.png";
function DataVisualTools() {
  const config = [
    {
      id: 1,
      title: "Power BI",
      content:
        "Power BI is a Microsoft tool for creating interactive dashboards and reports. It integrates seamlessly with other Microsoft products and offers real-time data insights to support informed decision-making.",
      img: powerbi,
    },
    {
      id: 2,
      title: "SSRS",
      content:
        "SSRS provides enterprise-level reporting capabilities, enabling users to create, manage, and distribute detailed, interactive reports. It’s ideal for organizations needing structured, paginated reports.",
      img: ssrs,
    },
    {
      id: 3,
      title: "Tableau",
      content:
        "Tableau is a popular tool for creating dynamic visualizations from various data sources. Its intuitive interface allows users to easily build interactive dashboards that reveal business insights",
      img: tableau,
    },
    {
      id: 4,
      title: "Qlik",
      content:
        "Qlik is a data analytics platform known for its associative data model. It allows users to create interactive visualizations and dashboards, integrating data from multiple sources seamlessly.",
      img: qlik,
    },
  ];
  return (
    <div className="mx-[5vw] my-10 flex flex-col gap-y-9 sm:gap-y-16 items-center">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        Our Toolbox
      </h1>
      <div className="grid grid-cols-1 gap-y-16 min-[850px]:grid-cols-2 min-[850px]:gap-10 lg:gap-20">
        {config.map((card) => (
          <PowerCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default DataVisualTools;
