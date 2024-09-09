import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import awslanding from "../../assets/aws/awslanding.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import ImgCom from "../../components/Services/ImgCom";
import awsservices from "../../assets/aws/awsservices.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import WhyAWS from "../../components/Services/AWS/WhyAWS";
function AWSPage() {
  return (
    <>
      <ServicesLanding
        title={"AWS"}
        content={"Scale, Innovate, and Transform with Our AWS Expertise"}
        btnText={"Contact Us"}
        sideImg={awslanding}
      />
      <SimpleCard
        text={
          "AWS is one of the leading cloud providers because of its benefits like Scalability, Flexibility, Integration, Storage. Moving your data to AWS is easy with a technically experienced team. Our team helps you in building, migrating and managing your data/applications on AWS."
        }
        className="my-20 mx-[5vw]"
      />
      <WhyAWS />
      <ImgCom img={awsservices} title={""} />
      <LetsConnect
        title={"Get Started with AWS Today"}
        content={"Contact us to build your Cloud Solution"}
      />
    </>
  );
}

export default AWSPage;
