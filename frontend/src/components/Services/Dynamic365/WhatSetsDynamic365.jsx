import React from "react";
import SevenCyclesWrapper from "../DevOps/SevenCyclesWrapper/SevenCyclesWrapper";
import dynamicsets from "../../../assets/images/dynamicsets.png";
function WhatSetsDynamic365() {
  const config = [
    {
      id: 1,
      title: "Customer Insights",
      content:
        "Gain a 360-degree view of your customers with advanced analytics and AI-driven insights, enabling personalized experiences and smarter decision-making across your business.",
    },
    {
      id: 2,
      title: "Field Service",
      content:
        "Optimize your field operations with real-time scheduling, resource management, and predictive maintenance, ensuring efficient service delivery and enhanced customer satisfaction.",
    },
    {
      id: 3,
      title: "Finance and Operations",
      content:
        "Streamline your financial and operational processes with integrated tools that provide comprehensive insights, helping you drive profitability and ensure regulatory compliance.",
    },
    {
      id: 4,
      title: "Sales Automation",
      content:
        "Empower your sales team with AI-driven tools that streamline the sales process, improve lead management, and enhance customer relationships, leading to increased revenue.",
    },
    {
      id: 5,
      title: "Supply Chain Management",
      content:
        "Enhance supply chain visibility and agility with real-time insights, automated workflows, and advanced analytics, helping you manage demand, optimize inventory, and reduce costs.",
    },
    {
      id: 6,
      title: "Marketing Automation",
      content:
        "Elevate your marketing efforts with personalized campaigns, customer journey mapping, and multi-channel outreach, all driven by data and AI to maximize engagement and ROI.",
    },
  ];
  return (
    <SevenCyclesWrapper
      content={config}
      title={"Dynamics 365: What Sets It Apart"}
      img={dynamicsets}
    />
  );
}

export default WhatSetsDynamic365;
