import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/HomePage";
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
import { useLocation } from "react-router-dom";
import SideBarProvider from "../context/SideBarProvider";
import SideBarMain from "../components/SideBarMain.jsx/SideBarMain";
function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <SideBarProvider>
      <div className="flex flex-col min-h-screen relative">
        {/* <D6Process />
      <WhoWeAre />
      <WhyNeuSpaarx /> */}
        <div className="grow">{children}</div>
        <Footer />
      </div>
      <SideBarMain />
    </SideBarProvider>
  );
}

export default Layout;
