import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import datascienceimg from "../../assets/datascience/datasciencelanding.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import DSApproach from "../../components/Services/DataScience/DSApproach";
import CoreSolutions from "../../components/Services/DataScience/CoreSolutions";
import LetsConnect from "../../components/ContactUs/LetsConnect";
function DataSciencePage() {
  return (
    <>
      <ServicesLanding
        title={"Data Science"}
        content={"Data really powers everything that we do"}
        btnText={"Contact Us"}
        sideImg={datascienceimg}
      />
      <SimpleCard
        text={
          "Is the data accessible in today’s complicated business environment? NeuSpaarX uses Data Science to get the understanding of data. Data science provides scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It is a multidisciplinary field that combines domain expertise, programming skills, and knowledge of math and statistics to extract insights from data."
        }
        className="my-20 mx-[5vw]"
      />
      <CoreSolutions />
      <DSApproach />
      <LetsConnect
        title={"Take the Next Step in Data Science"}
        content={
          "Connect with our experts to explore custom data solutions that drive your business forward"
        }
      />
    </>
  );
}

export default DataSciencePage;
