import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import powerbiimg from "../../assets/images/powerbiimg.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import SecurityCompilance from "../../components/Services/PowerBi/SecurityCompilance";
import WhatPowerBi from "../../components/Services/PowerBi/WhatPowerBi";
function PowerBiPage() {
  return (
    <div>
      <ServicesLanding
        title={"Power BI"}
        content={
          "Real-time analytics, seamless integration, and intuitive dashboards."
        }
        btnText={"Contact Us"}
        sideImg={powerbiimg}
      />
      <WhatPowerBi />
      <SecurityCompilance />
      <LetsConnect
        title="See Power BI in Action"
        content="Talk to our experts and discover the benefits of Power BI for your business."
      />
    </div>
  );
}

export default PowerBiPage;
