import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Layout from "./layout/Layout";
import { Routes, Route, Outlet } from "react-router-dom";
import ErrorService from "./pages/ErrorPages/ErrorService";
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const IndustriesPage = React.lazy(() => import("./pages/IndustriesPage"));
const DevOpsPage = React.lazy(() => import("./pages/ServicePages/DevOpsPage"));
const WordPressPage = React.lazy(() =>
  import("./pages/ServicePages/WordPressPage")
);
const PowerAppsPage = React.lazy(() =>
  import("./pages/ServicePages/PowerAppsPage")
);
const PowerAutomatePage = React.lazy(() =>
  import("./pages/ServicePages/PowerAutomatePage")
);
const Error404 = React.lazy(() => import("./pages/ErrorPages/Error404"));
const Dynamic365Page = React.lazy(() =>
  import("./pages/ServicePages/Dynamic365Page")
);
const PowerBiPage = React.lazy(() =>
  import("./pages/ServicePages/PowerBiPage")
);
const DataIntegrationPage = React.lazy(() =>
  import("./pages/ServicePages/DataIntegrationPage")
);
const DataEngineeringPage = React.lazy(() =>
  import("./pages/ServicePages/DataEngineeringPage")
);
const DataVisualizationPage = React.lazy(() =>
  import("./pages/ServicePages/DataVisualizationPage")
);
const DataManagementPage = React.lazy(() =>
  import("./pages/ServicePages/DataManagementPage")
);
const DataMigrationPage = React.lazy(() =>
  import("./pages/ServicePages/DataMigrationPage")
);
const DataSciencePage = React.lazy(() =>
  import("./pages/ServicePages/DataSciencePage")
);
const CloudComputingPage = React.lazy(() =>
  import("./pages/ServicePages/CloudComputingPage")
);
const BigDataPage = React.lazy(() =>
  import("./pages/ServicePages/BigDataPage")
);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="contact-us"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <ContactPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="services"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
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
          <Route path="big-data" element={<BigDataPage />} />
          <Route
            path="*"
            element={
              <Layout>
                <ErrorService />
              </Layout>
            }
          />
        </Route>
        <Route
          path="industries"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <IndustriesPage />
              </Suspense>
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
