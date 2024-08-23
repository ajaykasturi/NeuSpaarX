import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import powerautomateimg from "../../assets/images/powerautomate.png";
import WhatPowerAutomate from "../../components/Services/PowerAutomate/WhatPowerAutomate/WhatPowerAutomate";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import PowerAutomateTools from "../../components/Services/PowerAutomate/PowerAutomateTools/PowerAutomateTools";
function PowerAutomatePage() {
  return (
    <>
      <ServicesLanding
        title={"Power Automate"}
        content={"Automate workflows, save time, and boost efficiency."}
        btnText={"Contact Us"}
        sideImg={powerautomateimg}
      />
      <WhatPowerAutomate />
      <PowerAutomateTools />
      <LetsConnect />
    </>
  );
}

export default PowerAutomatePage;
