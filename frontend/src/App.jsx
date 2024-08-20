import React from "react";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IndustriesPage from "./pages/IndustriesPage";
import DevOpsPage from "./pages/ServicePages/DevOpsPage";
import WordPressPage from "./pages/ServicePages/WordPressPage";
import PowerAppsPage from "./pages/ServicePages/PowerAppsPage";
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
      <Route
        path="devops"
        element={
          <Layout>
            <DevOpsPage />
          </Layout>
        }
      />
      <Route
        path="wordpress"
        element={
          <Layout>
            <WordPressPage />
          </Layout>
        }
      />
      <Route
        path="powerapps"
        element={
          <Layout>
            <PowerAppsPage />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-screen text-6xl">
            Oops! 404 Error
          </div>
        }
      />
    </Routes>
  );
}

export default App;
