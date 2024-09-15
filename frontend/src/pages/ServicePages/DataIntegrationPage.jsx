import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import dataintimg from "../../assets/images/dataintimg.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import DataIntegrationProcess from "../../components/Services/DataIntegration/DataIntegrationProcess";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import DataIntTechStack from "../../components/Services/DataIntegration/DataIntTechStack";
function DataIntegrationPage() {
  return (
    <>
      <ServicesLanding
        title={"Data Integration"}
        content={"Seamlessly Integrate Data for Powerful Insights"}
        btnText={"Contact Us"}
        sideImg={dataintimg}
      />
      <SimpleCard
        text={
          "Data integration is crucial for turning scattered information into valuable insights, driving better business decisions and efficiency. Our seamless data integration services unify your data sources, ensuring real-time accuracy and accessibility, empowering your business to thrive in a data-driven world."
        }
        className="my-24 mx-[5vw]"
      />
      <DataIntegrationProcess />
      <DataIntTechStack />
      <LetsConnect
        title="Seamless Data Integration Awaits"
        content="Seamless Data Integration Awaits"
      />
    </>
  );
}

export default DataIntegrationPage;
