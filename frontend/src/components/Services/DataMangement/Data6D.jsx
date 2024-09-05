import React from "react";
import PowerCard from "../PowerBi/PowerCard";
function Data6D() {
  const config = [
    {
      id: 1,
      title: "Data Ingestion",
      content:
        "Data ingestion involves the collection of data from various sources such as databases, applications, and sensors. This process ensures the seamless transfer of data into designated destination systems, making it available for subsequent processing and analysis.",
      img: "",
    },
    {
      id: 2,
      title: "Data Transformation",
      content:
        "Data transformation focuses on cleaning, formatting, and integrating data for effective analysis. This stage includes removing inconsistencies, applying specific formats, and combining data from different sources to provide a unified view.",
      img: "",
    },
    {
      id: 3,
      title: "Data Warehousing",
      content:
        "Data warehousing creates centralized storage solutions designed to handle large volumes of data from multiple sources. It supports efficient querying and analysis, making it easier to organize, load, and process data for business intelligence.",
      img: "",
    },
    {
      id: 4,
      title: "Data Storage",
      content:
        "Data storage refers to securely saving data in repositories like data lakes or warehouses. This process involves organizing data systematically, ensuring easy retrieval, and maintaining data integrity and availability over time.",
      img: "",
    },
    {
      id: 5,
      title: "Data Governance",
      content:
        "Data governance establishes policies and procedures for data management within the organization. It includes defining roles, setting standards, and implementing processes to ensure data quality, compliance, and proper usage throughout its lifecycle.",
      img: "",
    },
    {
      id: 6,
      title: "Data Security",
      content:
        "Data security is about safeguarding data from unauthorized access, alterations, or loss. It encompasses implementing security measures, monitoring data access, and ensuring compliance with regulations to protect sensitive information effectively.",
      img: "",
    },
  ];
  const title = "Data Mastery: 6D's";
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-9 sm:gap-y-16">
      <h1 className="text-xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center sm:text-left">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[22rem_22rem] xl:grid-cols-[22rem_22rem_22rem] place-items-center gap-8 place-content-center lg:gap-20 xl:gap-8 2xl:gap-20">
        {config.map((item) => (
          <PowerCard key={item.id} card={item}  />
        ))}
      </div>
    </div>
  );
}

export default Data6D;
