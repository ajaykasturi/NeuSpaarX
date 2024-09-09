import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import azureLand from "../../assets/azure/azurelanding.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import AzureStories from "../../components/Services/Azure/AzureStories";
import AzureServices from "../../components/Services/Azure/AzureServices";
function AzurePage() {
  return (
    <>
      <ServicesLanding
        title={"Azure"}
        content={"Empowering Businesses with Secure, Scalable Cloud Solutions"}
        btnText={"Contact Us"}
        sideImg={azureLand}
      />
      <SimpleCard
        text={
          "Microsoft Azure is a leading cloud provider, offering a wide range of services both on-premise and in the cloud. Azure provides numerous benefits such as scalability, cost reduction, security, flexibility, and ample storage. However, migrating data to the cloud presents significant challenges and requires a skilled and experienced technical team. Azure operates on a pay-as-you-go model, ensuring you only pay for what you use."
        }
        className="my-20 mx-[5vw]"
      />
      <AzureServices />
      <AzureStories />
      <LetsConnect
        title={"Looking to build your Cloud Solutions?"}
        content={"Connect to us to get started with Azure Services"}
      />
    </>
  );
}

export default AzurePage;
