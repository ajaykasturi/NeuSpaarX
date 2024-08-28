import React from "react";
import TechStackCard from "./TechStackCard";
import awsglue from "../../../assets/techstack/awsglue.png";
import azurefactory from "../../../assets/techstack/azurefactory.png";
import sqlserver from "../../../assets/techstack/sqlserver.png";
import fivetran from "../../../assets/techstack/fivetran.png";
import informatica from "../../../assets/techstack/informatica.png";
import talend from "../../../assets/techstack/talend.png";
function DataIntTechStack() {
  const config = [
    {
      id: 1,
      content:
        "AWS Glue is a serverless data integration service by AWS. It ideal for building and managing ETL processes. It automates data preparation, integrates seamlessly with AWS services, and supports a variety of data formats.",
      img: awsglue,
    },
    {
      id: 2,
      content:
        "A cloud-based ETL service by Microsoft, Azure Data Factory offers scalable data integration. It orchestrates data movement and transformations, making it suitable for complex, large-scale data workflows in cloud environments.",
      img: azurefactory,
    },
    {
      id: 3,
      content:
        "SSIS is a powerful tool from Microsoft for data integration. It simplifies the process of extracting, transforming, and loading (ETL) data across different sources, ensuring clean and organized data for analysis and reporting.",
      img: sqlserver,
    },
    {
      id: 4,
      content:
        "Fivetran provides automated data pipelines for seamless data integration. It extracts data from various applications and databases, ensuring real-time synchronization and easy transfer to analytics tools and data warehouses.",
      img: fivetran,
    },
    {
      id: 5,
      content:
        "Informatica is a robust data integration platform known for its ETL capabilities and data warehousing solutions. It enables efficient integration of large datasets from multiple sources, ensuring high performance and data quality.",
      img: informatica,
    },
    {
      id: 6,
      content:
        "Talend is an open-source ETL tool offering extensive data integration capabilities. It supports big data and cloud integrations, providing tools for data transformation and ensuring data accuracy and consistency across platforms.",
      img: talend,
    },
  ];
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        Our Technology Stack
      </h1>
      <div className="flex flex-col gap-y-10">
        {config.map((card) => (
          <TechStackCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default DataIntTechStack;
