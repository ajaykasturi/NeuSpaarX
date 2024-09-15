import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import powerapps from "../../assets/images/powerapps.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import PowerAppsIntro from "../../components/Services/PowerApps/PowerAppsIntro";
function PowerAppsPage() {
  return (
    <>
      <ServicesLanding
        title={"Power Apps"}
        content={"Empower Your Business with Custom Apps, No Coding Required"}
        btnText={"Contact Us"}
        sideImg={powerapps}
      />
      <PowerAppsIntro />
      <LetsConnect
        title={"Want to build your Power Apps?"}
        content={
          "Get in touch with us to explore how we can bring your vision to life."
        }
      />
    </>
  );
}

export default PowerAppsPage;
