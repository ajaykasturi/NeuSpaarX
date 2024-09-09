import React, { useState } from "react";
import AzureCard from "./AzureCard";
import azurefactory from "../../../assets/azure/azurefactory.png";
import azurestorage from "../../../assets/azure/azurestorage.png";
import azureanalytics from "../../../assets/azure/azureanalytics.png";
import azureiot from "../../../assets/azure/azureiot.png";
import azurefun from "../../../assets/azure/azurefun.png";
import azurelogic from "../../../assets/azure/azurelogic.png";
import azuresql from "../../../assets/azure/azuresql.png";
import azuredata from "../../../assets/azure/azuredata.png";
import azuresynapse from "../../../assets/azure/azuresynapse.png";
function AzureServices() {
  const [count, setCount] = useState(1);
  const config = [
    {
      id: 1,
      title: "Azure Data Factory (ADF)",
      content:
        "Integrate and orchestrate data flows across hybrid and cloud environments.",
      img: azurefactory,
    },
    {
      id: 2,
      title: "Azure Data Storage",
      content:
        "Comprehensive data management solutions for storage, processing, and analysis.",
      img: azurestorage,
    },
    {
      id: 3,
      title: "Azure Stream Analytics",
      content:
        "Real-time analytics for IoT, streaming data, and operational insights.",
      img: azureanalytics,
    },
    {
      id: 4,
      title: "Azure IoT Hub",
      content: "Securely connect, monitor, and control IoT devices at scale.",
      img: azureiot,
    },
    {
      id: 5,
      title: "Azure Functions",
      content:
        "Serverless compute for building and running event-driven applications.",
      img: azurefun,
    },
    {
      id: 6,
      title: "Azure Logic Apps",
      content:
        "Visually design and automate workflows across cloud and on-premises applications",
      img: azurelogic,
    },
    {
      id: 7,
      title: "Azure SQL Database",
      content: "Fully managed relational database service in the cloud.",
      img: azuresql,
    },
    {
      id: 8,
      title: "Azure Data Warehouse",
      content:
        "Scalable, massively parallel processing data warehouse for analytics workloads.",
      img: azuredata,
    },
    {
      id: 9,
      title: "Azure Synapse",
      content:
        "Unified analytics platform for data integration, warehousing, and machine learning.",
      img: azuresynapse,
    },
  ];

  return (
    <div className="mx-[4vw] py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        Azure Services
      </h1>
      <div className="transition-all grid grid-cols-[18rem] sm:grid-cols-[18rem_18rem] lg:grid-cols-[18rem_18rem_18rem] place-items-center gap-y-10 sm:gap-5 min-[700px]:gap-10 xl:gap-20 place-content-center overflow-hidden">
        {config.map((card) => (
          <AzureCard key={card.id} card={card} className={""} />
        ))}
      </div>
    </div>
  );
}

export default AzureServices;
