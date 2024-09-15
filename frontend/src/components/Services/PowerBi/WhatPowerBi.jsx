import React from "react";
import PowerCard from "./PowerCard";
import Catalog from "../Catalog";
import dashboard from "../../../assets/powerbi/dashboard.png";
import realtime from "../../../assets/powerbi/realtime.png";
import insights from "../../../assets/powerbi/insights.png";
import dsecurity from "../../../assets/powerbi/dsecurity.png";
import mobileaccess from "../../../assets/powerbi/mobileaccess.png";
import team from "../../../assets/powerbi/team.png";
import scalable from "../../../assets/powerbi/scalable.png";
import cost from "../../../assets/powerbi/cost.png";
function WhatPowerBi() {
  const config = [
    {
      id: 1,
      title: "Custom Dashboards",
      content:
        "Design interactive dashboards tailored to your specific business needs. Power BI offers an intuitive interface for easy customization and visualization.",
      img: dashboard,
    },
    {
      id: 2,
      title: "Real-Time Updates",
      content:
        "Integrate with various data sources to receive real-time updates instantly. This feature ensures that your reports always reflect the most current data.",
      img: realtime,
    },
    {
      id: 3,
      title: "AI-Powered Insights",
      content:
        "Utilize AI capabilities to discover patterns and trends in your data. Power BI’s analytics tools provide predictive insights for proactive decision-making.",
      img: insights,
    },
    {
      id: 4,
      title: "Data Security",
      content:
        "Protect sensitive data with robust security features like encryption and RLS. Power BI ensures compliance with industry standards for data safety.",
      img: dsecurity,
    },
    {
      id: 5,
      title: "Mobile Accessibility",
      content:
        "Access your dashboards and reports from any mobile device with ease. Power BI’s mobile app keeps your data insights at your fingertips, anywhere.",
      img: mobileaccess,
    },
    {
      id: 6,
      title: "Team Collaboration",
      content:
        "Share reports and collaborate seamlessly with team members. Power BI enables easy distribution of insights for collective decision-making.",
      img: team,
    },
    {
      id: 7,
      title: "Scalable Solutions",
      content:
        "Adapt to growing data needs without sacrificing performance or speed. Power BI scales to handle increasing data volumes efficiently.",
      img: scalable,
    },
    {
      id: 8,
      title: "Cost-Effective",
      content:
        "Achieve high-quality data visualization without significant expense. Power BI offers affordable plans suitable for businesses of all sizes.",
      img: cost,
    },
  ];
  const title = "What Power BI Do to your business?";
  return <Catalog title={title} config={config} />;
}

export default WhatPowerBi;
