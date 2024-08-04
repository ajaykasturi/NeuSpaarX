import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer/Footer";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default Layout;
