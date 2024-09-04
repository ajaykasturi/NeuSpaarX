import React from "react";
import Layout from "./layout/Layout";
import { Routes, Route, Outlet } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IndustriesPage from "./pages/IndustriesPage";
import DevOpsPage from "./pages/ServicePages/DevOpsPage";
import WordPressPage from "./pages/ServicePages/WordPressPage";
import PowerAppsPage from "./pages/ServicePages/PowerAppsPage";
import PowerAutomatePage from "./pages/ServicePages/PowerAutomatePage";
import Error404 from "./pages/ErrorPages/Error404";
import Dynamic365Page from "./pages/ServicePages/Dynamic365Page";
import PowerBiPage from "./pages/ServicePages/PowerBiPage";
import DataIntegrationPage from "./pages/ServicePages/DataIntegrationPage";
import DataEngineeringPage from "./pages/ServicePages/DataEngineeringPage";
import DataVisualizationPage from "./pages/ServicePages/DataVisualizationPage";
import DataManagementPage from "./pages/ServicePages/DataManagementPage";
import DataMigrationPage from "./pages/ServicePages/DataMigrationPage";
import DataSciencePage from "./pages/ServicePages/DataSciencePage";
import CloudComputingPage from "./pages/ServicePages/CloudComputingPage";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
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
          path="services"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<DevOpsPage />} />
          <Route path="devops" element={<DevOpsPage />} />
          <Route path="dynamic-365" element={<Dynamic365Page />} />
          <Route path="wordpress" element={<WordPressPage />} />
          <Route path="powerapps" element={<PowerAppsPage />} />
          <Route path="power-automate" element={<PowerAutomatePage />} />
          <Route path="power-bi" element={<PowerBiPage />} />
          <Route path="data-integration" element={<DataIntegrationPage />} />
          <Route
            path="data-visualization"
            element={<DataVisualizationPage />}
          />
          <Route path="data-engineering" element={<DataEngineeringPage />} />
          <Route path="data-management" element={<DataManagementPage />} />
          <Route path="data-migration" element={<DataMigrationPage />} />
          <Route path="data-science" element={<DataSciencePage />} />
          <Route path="cloud-computing" element={<CloudComputingPage />} />
        </Route>
        <Route
          path="industries"
          element={
            <Layout>
              <IndustriesPage />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <Error404 />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
