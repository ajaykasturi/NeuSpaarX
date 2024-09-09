import React from "react";
import PowerCard from "../PowerBi/PowerCard";

function WhyAWS() {
  const config = [
    {
      id: 1,
      title: "Scalability",
      content:
        "AWS scales resources up or down seamlessly, adapting to business needs and optimizing performance with zero downtime.",
      img: "",
    },
    {
      id: 2,
      title: "Cost Efficiency",
      content:
        "AWS’s pay-as-you-go model cuts costs, allowing businesses to invest only in the resources they use.",
      img: "",
    },
    {
      id: 3,
      title: "Real-Time Data",
      content:
        "AWS enables real-time data processing, providing instant insights to help businesses make faster decisions.",
      img: "",
    },
    {
      id: 4,
      title: "Global Reach",
      content:
        "AWS’s global infrastructure allows businesses to deploy anywhere, ensuring fast access and low latency worldwide.",
      img: "",
    },
    {
      id: 5,
      title: "Security",
      content:
        "AWS offers industry-leading security features like encryption and identity management, protecting your data.",
      img: "",
    },
    {
      id: 6,
      title: "Automation",
      content:
        "AWS automates tasks like scaling and backups, freeing up teams to focus on innovation instead of manual work.",
      img: "",
    },
  ];
  const title = "Why AWS";
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-9 sm:gap-y-16">
      <h1 className="text-xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center sm:text-left">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[16rem_16rem] xl:grid-cols-[16rem_16rem_16rem] place-items-center gap-8 place-content-center lg:gap-20 xl:gap-20 ">
        {config.map((item) => (
          <PowerCard key={item.id} card={item} w="min-[376px]:w-[16rem]" />
        ))}
      </div>
    </div>
  );
}

export default WhyAWS;
