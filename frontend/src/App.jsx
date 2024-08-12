import React from "react";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IndustriesPage from "./pages/IndustriesPage";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="contact-us"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="industries"
        element={
          <Layout>
            <IndustriesPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
