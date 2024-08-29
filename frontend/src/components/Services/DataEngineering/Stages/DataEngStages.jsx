import React from "react";
import StageCard from "./StageCard";
import datacollectionimg from "../../../../assets/stages/datacollection.png";
import dataprocessingimg from "../../../../assets/stages/dataprocessing.png";
import datastorageimg from "../../../../assets/stages/datastorage.png";
import dataanalysisimg from "../../../../assets/stages/dataanalysis.png";
function DataEngStages() {
  const config = [
    {
      id: 1,
      title: "Data Collection",
      content: [
        "To perform data analysis, we need to collect the data from multiple sources such as databases, applications, or sensors.",
        "Data Collection involves tasks such as data ingestion (Ingest data from various sources) and data transformation (cleaning and formatting data).",
      ],
      img: datacollectionimg,
    },
    {
      id: 2,
      title: "Data Processing",
      content: [
        "Data processing refers to the tasks involved in preparing data for analysis.",
        "Data Processing involves tasks such as data cleaning (removing errors or inconsistencies from data), data transformation (formatting data in a specific way), and data aggregation (combining data from multiple sources).",
      ],
      img: dataprocessingimg,
    },

    {
      id: 3,
      title: "Data Storage",
      content: [
        "Data storage refers to the process of storing data in a data repository, such as a data warehouse or a data lake.",
        "Data storage involves tasks such as data storage (storing data in a data repository) and data management (organizing and protecting data).",
      ],
      img: datastorageimg,
    },
    {
      id: 4,
      title: "Data Analysis",
      content: [
        "Data analysis is the process of observing and analysing data to extract insights which further helps in business growth, decision making.",
        "This can be done using a variety of tools and techniques, such as statistical analysis, machine learning, and data visualization.",
      ],
      img: dataanalysisimg,
    },
  ];
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        Stages we follow as a part of Data Engineering
      </h1>
      <div className="flex flex-col justify-center items-center gap-y-8">
        {config.map((card) => (
          <StageCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default DataEngStages;
