import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import datamanagement from "../../assets/images/datamanagement.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import Data6D from "../../components/Services/DataMangement/Data6D";
import DataAction from "../../components/Services/DataMangement/DataAction";
function DataManagementPage() {
  return (
    <>
      <ServicesLanding
        title={"Data Mangement"}
        content={"Manage & Govern your Data assets effectively"}
        btnText={"Contact Us"}
        sideImg={datamanagement}
      />
      <SimpleCard
        text="Data management is important because it helps ensure that data is accurate, consistent, and available always. It also helps protect data
from loss or corruption and ensures compliance with relevant regulations. To turn the data into valuable asset, we follow Data Management techniques."
        className="mx-[5vw] my-20"
      />
      <Data6D />
      <DataAction />
      <LetsConnect
        title="Connect to us!"
        content="Looking for a right partner to help you with Data Engineering expertise?"
      />
    </>
  );
}

export default DataManagementPage;
