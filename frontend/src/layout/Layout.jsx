import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer/Footer";
import WeFocusOn from "../components/WeFocusOn/WeFocusOn";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Carousel from "../components/Courosel/Carousel";
import ContactUs from "../components/ContactUs/ContactUs";
import Industries from "../components/Industries/Industries";
import Card from "../components/Industries/Card";
import D6Process from "../components/6DProcess/D6Process";
import WhyNeuSpaarx from "../components/WhyNeuSpaarx/WhyNeuSpaarx";
import WhoWeAre from "../components/AboutUs/WhoWeAre";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Home />
      <D6Process />
      <WhyNeuSpaarx />
      <WhoWeAre />
      <AboutUs />
      <WeFocusOn />
      <Services />
      <Industries />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Layout;
