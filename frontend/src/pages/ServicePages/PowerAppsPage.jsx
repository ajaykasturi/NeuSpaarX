import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import powerapps from "../../assets/images/powerapps.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import PowerAppsIntro from "../../components/Services/PowerApps/PowerAppsIntro";
function PowerAppsPage() {
  return (
    <>
      <ServicesLanding
        title={"PowerApps"}
        content={"Empower Your Business with Custom Apps, No Coding Required"}
        btnText={"Contact Us"}
        sideImg={powerapps}
      />
      <PowerAppsIntro />
      <LetsConnect />
    </>
  );
}

export default PowerAppsPage;
