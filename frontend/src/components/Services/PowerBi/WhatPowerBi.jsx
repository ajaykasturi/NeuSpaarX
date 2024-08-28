import React from "react";
import PowerCard from "./PowerCard";

function WhatPowerBi() {
  const config = [
    {
      id: 1,
      title: "Custom Dashboards",
      content:
        "Design interactive dashboards tailored to your specific business needs. Power BI offers an intuitive interface for easy customization and visualization.",
    },
    {
      id: 2,
      title: "Real-Time Updates",
      content:
        "Integrate with various data sources to receive real-time updates instantly. This feature ensures that your reports always reflect the most current data.",
    },
    {
      id: 3,
      title: "AI-Powered Insights",
      content:
        "Utilize AI capabilities to discover patterns and trends in your data. Power BI’s analytics tools provide predictive insights for proactive decision-making.",
    },
    {
      id: 4,
      title: "Data Security",
      content:
        "Protect sensitive data with robust security features like encryption and RLS. Power BI ensures compliance with industry standards for data safety.",
    },
    {
      id: 5,
      title: "Mobile Accessibility",
      content:
        "Access your dashboards and reports from any mobile device with ease. Power BI’s mobile app keeps your data insights at your fingertips, anywhere.",
    },
    {
      id: 6,
      title: "Team Collaboration",
      content:
        "Share reports and collaborate seamlessly with team members. Power BI enables easy distribution of insights for collective decision-making.",
    },
    {
      id: 7,
      title: "Scalable Solutions",
      content:
        "Adapt to growing data needs without sacrificing performance or speed. Power BI scales to handle increasing data volumes efficiently.",
    },
    {
      id: 8,
      title: "Cost-Effective",
      content:
        "Achieve high-quality data visualization without significant expense. Power BI offers affordable plans suitable for businesses of all sizes.",
    },
  ];
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-9 sm:gap-y-16">
      <h1 className="text-xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center sm:text-left">
        What Power BI Do to your business?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[22rem_22rem] xl:grid-cols-[22rem_22rem_22rem] place-items-center gap-8 place-content-center lg:gap-20 xl:gap-8 2xl:gap-20">
        {config.map((item) => (
          <PowerCard key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}

export default WhatPowerBi;
