import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import snowFlakeLanding from "../../assets/snowflake/snowFlakeLanding.png";
import SnowServices from "../../components/Services/SnowFlake/SnowServices";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import TechFeatures from "../../components/Services/SnowFlake/TechFeatures";
function SnowFlakePage() {
  return (
    <>
      <ServicesLanding
        title={"Snowflake"}
        content={"Unlock the Power of Cloud Data with Snowflake."}
        btnText={"Contact Us"}
        sideImg={snowFlakeLanding}
      />
      <SimpleCard
        text={
          "Snowflake is a cloud data platform that simplifies data management and analysis across multiple cloud environments like AWS, Azure, and GCP. Its unique architecture separates storage and compute, enabling businesses to scale efficiently while optimizing performance and costs. Snowflake stands out with easy data sharing, high security, and flexible integration for both structured and semi-structured data."
        }
        className="my-20 mx-[5vw]"
      />
      <SnowServices />
      <TechFeatures />
      <LetsConnect
        title={"Explore Snowflake Solutions now!"}
        content={
          "Leverage the Power of Snowflake for Seamless Data Integration"
        }
      />
    </>
  );
}

export default SnowFlakePage;
