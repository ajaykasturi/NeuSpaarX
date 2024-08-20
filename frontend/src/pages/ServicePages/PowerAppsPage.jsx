import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import powerapps from "../../assets/images/powerapps.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
function PowerAppsPage() {
  return (
    <>
      <ServicesLanding
        title={"PowerApps"}
        content={"Empower Your Business with Custom Apps, No Coding Required"}
        btnText={"Contact Us"}
        sideImg={powerapps}
      />
      <LetsConnect />
    </>
  );
}

export default PowerAppsPage;
