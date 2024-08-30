import React, { useEffect } from "react";
import WhoWeAre from "../components/AboutUs/WhoWeAre";
import D6Process from "../components/6DProcess/D6Process";
import WhyNeuSpaarx from "../components/WhyNeuSpaarx/WhyNeuSpaarx";
import LetsConnect from "../components/ContactUs/LetsConnect";
import { useLocation } from "react-router-dom";
function About() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <WhoWeAre />
      <D6Process />
      {/* <WhyNeuSpaarx /> */}
      <LetsConnect />
    </>
  );
}

export default About;
