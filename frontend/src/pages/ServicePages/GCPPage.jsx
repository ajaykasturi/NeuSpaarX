import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import gcpimg from "../../assets/gcp/gcpimg.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import GCPServices from "../../components/Services/GCP/GCPServices";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import GCPMigration from "../../components/Services/GCP/GCPMigration";

function GCPPage() {
  return (
    <>
      <ServicesLanding
        title={"GCP"}
        content={"Accelerate Your Business with Google Cloud"}
        btnText={"Contact Us"}
        sideImg={gcpimg}
      />
      <SimpleCard
        text={
          "Google Cloud Platform (GCP) provides scalable, secure, and cost-effective cloud solutions tailored to your business needs. With its advanced analytics and machine learning capabilities, GCP empowers you to innovate faster and make data-driven decisions. Leveraging Google's global network infrastructure ensures high performance and reliability, helping you stay ahead in a competitive market."
        }
        className="my-20 mx-[5vw]"
      />
      <GCPServices />
      <GCPMigration />
      <LetsConnect
        title={"Unlock the Power of Google Cloud!"}
        content={
          "Contact us for a seamless transition and start your GCP journey today"
        }
      />
    </>
  );
}

export default GCPPage;
