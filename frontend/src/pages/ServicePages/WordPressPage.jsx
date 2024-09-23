import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import wordpress from "../../assets/wordpress/wordPressLanding.png";
import LetsConnect from "../../components/ContactUs/LetsConnect";
import IntroCard from "../../components/Services/WordPress/IntroCard";
import ExpertiseSolutions from "../../components/Services/WordPress/ExpertiseSolutions/ExpertiseSolutions";
import SimpleCard from "../../components/CommonComps/SimpleCard";
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
      <SimpleCard
        text={
          "Developing a website for any business plays as a key role for communication. With WordPress we can develop your website fast and reliable. As it is an online platform, we don't need any application to download and can do work parallel"
        }
        className="my-24 mx-[5vw]"
      />
      <ExpertiseSolutions />
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
