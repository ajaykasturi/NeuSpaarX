import React from "react";
import StageCard from "../DataEngineering/Stages/StageCard";
import security from "../../../assets/datamigration/datasecurity.png";
import dataquality from "../../../assets/datamigration/dataquality.png";
import datatransformation from "../../../assets/datamigration/datatransformation.png";
import dataintegration from "../../../assets/datamigration/dataintegration.png";
import performance from "../../../assets/datamigration/performance.png";
import ServicesWeFollow from "../ServicesWeFollow";
function DataMigrationApproach() {
  const config = [
    {
      id: 1,
      title: "Data Quality",
      content: [
        "On migrating the data from one system to other, We ensure that the data is accurate, complete and consistent.",
      ],
      img: dataquality,
    },
    {
      id: 2,
      title: "Data transformation",
      content: [
        "Transforming the data as it is migrated to fit the requirements of the destination system.",
      ],
      img: datatransformation,
    },
    {
      id: 3,
      title: "Data Integration",
      content: [
        "We ensure that the migrated data is properly integrated with the destination system.",
      ],
      img: dataintegration,
    },
    {
      id: 4,
      title: "Data Security",
      content: [
        "We ensure that the data is protected as it is migrated to new system.",
      ],
      img: security,
    },
    {
      id: 5,
      title: "Performance",
      content: [
        "We ensure that the performance is efficient while migrating the old system to new system.",
      ],
      img: performance,
    },
  ];
  const title = "Data Mastery: 6D's";
  return <ServicesWeFollow title={title} config={config} />;
}

export default DataMigrationApproach;
