import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import dynamic365img from "../../assets/images/dynamic365.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import BusinessCapabilities from "../../components/Services/Dynamic365/BusinessCapabilities";
import SevenCyclesWrapper from "../../components/Services/DevOps/SevenCyclesWrapper/SevenCyclesWrapper";
import WhatSetsDynamic365 from "../../components/Services/Dynamic365/WhatSetsDynamic365";
function Dynamic365Page() {
  return (
    <>
      <ServicesLanding
        title={"Dynamic 365"}
        content={"Empower Your Operations with CRM, ERP, AI, and IoT"}
        btnText={"Contact Us"}
        sideImg={dynamic365img}
      />
      <SimpleCard
        text={
          "Dynamics 365 includes customer relationship management (CRM) and enterprise resource planning (ERP) capabilities, artificial intelligence (AI), machine learning, and Internet of Things (IoT) capabilities. D365 helps you read real time data insights with its built in predictive analytics feature."
        }
        className="my-24 mx-[5vw]"
      />
      <BusinessCapabilities />
      <WhatSetsDynamic365 />
      <LetsConnect
        title={"Take Your Business to the Next Level"}
        content={"Get Started with Dynamics 365 Today"}
      />
    </>
  );
}

export default Dynamic365Page;
