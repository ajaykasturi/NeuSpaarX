import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import dataeng from "../../assets/images/dataengineering.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import DataEngStages from "../../components/Services/DataEngineering/Stages/DataEngStages";
function DataEngineeringPage() {
  return (
    <>
      <ServicesLanding
        title={"Data Engineering"}
        content={"Unlock the Power of Your Data with Expert Engineering."}
        btnText={"Contact Us"}
        sideImg={dataeng}
      />
      <SimpleCard
        text={
          "Data is everything in today’s world. Data engineering focuses on the design, implementing, maintenance, and management of ETL systems. It involves collecting, storing, processing, and analysing huge volumes of data to extract valuable insights and support decision-making."
        }
        className="mx-[5vw] my-20"
      />
      <DataEngStages />
      <LetsConnect
        title={"Get in touch with us!!"}
        content="Looking for a right partner to help you with Data Engineering expertise?"
      />
    </>
  );
}

export default DataEngineeringPage;
