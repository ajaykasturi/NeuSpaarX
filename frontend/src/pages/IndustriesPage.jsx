import React from "react";
import IndustryCards from "../components/Industries/IndustryPage/IndustryCards";
import ServicesLanding from "../components/Services/ServicesLanding";
import industryimg from "../assets/images/industriesheadimg.png";
function Industries() {
  return (
    <>
      <ServicesLanding
        title={"Industries"}
        content={
          "Data is rapidly increasing and is playing a key role in decision making across all the industries."
        }
        sideImg={industryimg}
        imgClass="rounded-full"
      />
      <IndustryCards />
    </>
  );
}

export default Industries;
