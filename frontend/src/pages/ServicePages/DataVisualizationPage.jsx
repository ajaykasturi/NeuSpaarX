import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import datavisualimg from "../../assets/images/datavisual.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import DataVisualTools from "../../components/Services/DataVisualization/DataVisualTools";
import ApproachWeFollow from "../../components/Services/DataVisualization/ApproachWeFollow";
function DataVisualizationPage() {
  return (
    <>
      <ServicesLanding
        title={"Data Visualization"}
        content={"See Your Data Like Never Before!"}
        btnText={"Contact Us"}
        sideImg={datavisualimg}
      />
      <SimpleCard
        text={
          "Visualize your data in charts, matrix, tables and many more visuals to get correct business ideas. Make your decision making easy and quick by understanding and analyzing your data more clearly with visuals. It’s not easy to build appropriate and relevant visuals for your data without an experienced team. "
        }
        className="my-20 mx-[5vw]"
      />
      <DataVisualTools />
      <ApproachWeFollow />
      <LetsConnect
        title={"Get In Touch!"}
        content="Reach out to us to help you create relevant visuals for your data to get more insights."
      />
    </>
  );
}

export default DataVisualizationPage;
