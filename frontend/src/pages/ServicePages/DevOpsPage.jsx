import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bgImgHome from "../../assets/images/bgimg.png";
import Button from "../../components/Button/Button";
import devopsimg from "../../assets/images/devops.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import SevenCycles from "../../components/Services/DevOps/SevenCycles/SevenCycles";
import OurExpertise from "../../components/Services/DevOps/OurExpertise/OurExpertise";
import ToolsTechnologies from "../../components/Services/DevOps/ToolsTechnologies/ToolsTechnologies";
import ServicesLanding from "../../components/Services/ServicesLanding";
function DevOpsPage() {
  return (
    <>
      <ServicesLanding
        title={"DevOps"}
        content={
          "Accelerate Your Software Delivery with Continuous Integration and Deployment."
        }
        btnText={"Contact Us"}
        sideImg={devopsimg}
      />
      <ToolsTechnologies />
      <SevenCycles />
      <OurExpertise />
      <LetsConnect />
    </>
  );
}

export default DevOpsPage;
