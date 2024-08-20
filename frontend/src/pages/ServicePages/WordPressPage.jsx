import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import wordpress from "../../assets/images/wordpress.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
function WordPressPage() {
  return (
    <>
      <ServicesLanding
        title={"WordPress"}
        content={
          "Fast, Reliable, and Flexible Website Development Tailored to Your Needs."
        }
        btnText={"Contact Us"}
        sideImg={wordpress}
      />
      <LetsConnect
        title={"Ready to Transform Your Website?"}
        content={
          "Get in touch with us to explore how we can bring your vision to life."
        }
      />
    </>
  );
}

export default WordPressPage;
