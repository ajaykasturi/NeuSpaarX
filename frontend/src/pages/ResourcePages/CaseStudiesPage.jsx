import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import StoriesCaseStudies from "../../components/CaseStudies/StoriesCaseStudies";

function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <StoriesCaseStudies />
      <LetsConnect
        title={"Join Us and Grow your Business now"}
        content={"Get started!"}
      />
    </>
  );
}

export default CaseStudiesPage;
