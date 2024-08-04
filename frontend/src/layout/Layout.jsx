import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer/Footer";
import WeFocusOn from "../components/WeFocusOn/WeFocusOn";
import AboutUs from "../components/AboutUs/AboutUs";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AboutUs />
      <WeFocusOn />
      <Footer />
    </div>
  );
}

export default Layout;
