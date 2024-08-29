import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import datamanagement from "../../assets/images/datamanagement.webp";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import SimpleCard from "../../components/CommonComps/SimpleCard";
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

      <LetsConnect />
    </>
  );
}

export default DataManagementPage;
