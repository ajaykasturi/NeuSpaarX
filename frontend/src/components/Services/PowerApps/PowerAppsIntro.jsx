import React from "react";
import PowerCard from "./PowerCard";

function PowerAppsIntro() {
  const config = [
    {
      id: "01",
      title: "Ideate and Design",
      content:
        "Start with a clear vision. Power Apps allows you to design apps visually, reducing the need for coding expertise. Quickly prototype and iterate, ensuring your app aligns perfectly with business needs.",
    },
    {
      id: "02",
      title: "Manage and Integrate Data",
      content:
        "Centralize your data management with Power Apps. Seamlessly connect to on-premises or cloud-based data sources, ensuring real-time updates and consistency across your operations.",
    },
    {
      id: "03",
      title: "Automate Processes",
      content:
        "Transform repetitive tasks into automated workflows. Power Apps integrates with Microsoft Power Automate, allowing you to streamline processes and free up valuable resources.",
    },
    {
      id: "04",
      title: "Deploy and Maintain",
      content:
        "Launch your app with confidence. Power Apps simplifies deployment, enabling you to manage and update your app with ease, ensuring continuous improvement without downtime.",
    },
  ];
  return (
    <div className="mx-[4vw] my-20 flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-5 sm:gap-y-6">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Poppins font-medium text-colorblue text-center sm:text-left">
          Build your Power Apps application with us
        </div>
        <div className="text-base sm:text-xl md:text-[1.3rem] lg:text-2xl font-Poppins font-normal text-center sm:text-left">
          Simplify Your Business Processes in Four Steps
        </div>
      </div>
      <div className="flex flex-col max-[500px]:gap-y-5">
        {config.map((item, index) => (
          <PowerCard
            card={item}
            className={`${index % 2 == 0 ? "" : "flex-row-reverse"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PowerAppsIntro;
