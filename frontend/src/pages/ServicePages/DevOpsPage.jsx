import React from "react";
import devopsimg from "../../assets/images/devops.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import SevenCycles from "../../components/Services/DevOps/SevenCycles/SevenCycles";
import OurExpertise from "../../components/Services/DevOps/OurExpertise/OurExpertise";
import ToolsTechnologies from "../../components/Services/DevOps/ToolsTechnologies/ToolsTechnologies";
import ServicesLanding from "../../components/Services/ServicesLanding";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import IntroImg from "../../components/Services/DevOps/IntroImg";
import AccelerateGrowth from "../../components/Services/DevOps/AccelerateGrowth";
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
      <SimpleCard
        text={
          "Want to build, deliver and deploy quality software with good team work, then DEVOPS is the right choice. DEVOPS stands for DEV – Development and OPS -Operations i.e., to operate the process of development in a flexible and easy manner, DEVOPS is introduced. It operates and manages the life cycle of every project starting from the initial step of requirement gathering to deploying."
        }
        className="my-20 mx-[5vw]"
      />
      <IntroImg />
      <AccelerateGrowth />
      <ToolsTechnologies />
      <SevenCycles />
      <OurExpertise />
      <LetsConnect />
    </>
  );
}

export default DevOpsPage;
