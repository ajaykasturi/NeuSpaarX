import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import cloud from "../../assets/cloudcomputing/cloudcomputing.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import WhyCloud from "../../components/Services/CloudComputing/WhyCloud";
import CloudMigration from "../../components/Services/CloudComputing/CloudMigration";
import CloudExpertiseTools from "../../components/Services/CloudComputing/CloudExpertiseTools";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import Slider from "../../components/Services/CloudComputing/Slider";
import CloudFocus from "../../components/Services/CloudComputing/CloudFocus";
function CloudComputingPage() {
  return (
    <>
      <ServicesLanding
        title={"Cloud Computing"}
        content={"Transform Your Business with Scalable Cloud Solution"}
        btnText={"Contact Us"}
        sideImg={cloud}
      />
      <SimpleCard
        text={
          "Cloud Computing is a demanding technology in the world today. Cloud computing is a model for delivering computing services, such as storage, processing, networking, software, analytics, and intelligence, over the Internet (the cloud). The best thing is users only pay for the services they use. It is On - Demand."
        }
        className="my-20 mx-[5vw]"
      />
      <WhyCloud />
      <CloudExpertiseTools />
      <CloudFocus />
      <CloudMigration />
      <LetsConnect
        title={"Start Your Cloud Journey"}
        content={"Reach out to us to help you optimize you cloud"}
      />
    </>
  );
}

export default CloudComputingPage;
