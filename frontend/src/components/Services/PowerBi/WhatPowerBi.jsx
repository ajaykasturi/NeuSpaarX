import React from "react";
import PowerCard from "./PowerCard";
import Catalog from "../Catalog";

function WhatPowerBi() {
  const config = [
    {
      id: 1,
      title: "Custom Dashboards",
      content:
        "Design interactive dashboards tailored to your specific business needs. Power BI offers an intuitive interface for easy customization and visualization.",
      img: "",
    },
    {
      id: 2,
      title: "Real-Time Updates",
      content:
        "Integrate with various data sources to receive real-time updates instantly. This feature ensures that your reports always reflect the most current data.",
      img: "",
    },
    {
      id: 3,
      title: "AI-Powered Insights",
      content:
        "Utilize AI capabilities to discover patterns and trends in your data. Power BI’s analytics tools provide predictive insights for proactive decision-making.",
      img: "",
    },
    {
      id: 4,
      title: "Data Security",
      content:
        "Protect sensitive data with robust security features like encryption and RLS. Power BI ensures compliance with industry standards for data safety.",
      img: "",
    },
    {
      id: 5,
      title: "Mobile Accessibility",
      content:
        "Access your dashboards and reports from any mobile device with ease. Power BI’s mobile app keeps your data insights at your fingertips, anywhere.",
      img: "",
    },
    {
      id: 6,
      title: "Team Collaboration",
      content:
        "Share reports and collaborate seamlessly with team members. Power BI enables easy distribution of insights for collective decision-making.",
      img: "",
    },
    {
      id: 7,
      title: "Scalable Solutions",
      content:
        "Adapt to growing data needs without sacrificing performance or speed. Power BI scales to handle increasing data volumes efficiently.",
      img: "",
    },
    {
      id: 8,
      title: "Cost-Effective",
      content:
        "Achieve high-quality data visualization without significant expense. Power BI offers affordable plans suitable for businesses of all sizes.",
      img: "",
    },
  ];
  const title = "What Power BI Do to your business?";
  return <Catalog title={title} config={config} />;
}

export default WhatPowerBi;
