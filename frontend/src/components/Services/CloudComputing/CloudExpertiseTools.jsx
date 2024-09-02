import React from "react";
import TechStackCard from "../DataIntegration/TechStackCard";
import azure from "../../../assets/cloudcomputing/azure.png";
import aws from "../../../assets/cloudcomputing/aws.png";
import gcp from "../../../assets/cloudcomputing/gcp.png";
function CloudExpertiseTools() {
  const config = [
    {
      id: 1,
      title: "Azure",
      content:
        "A comprehensive cloud platform offering scalable solutions for computing, analytics, storage, and networking to accelerate business transformation",
      img: azure,
    },
    {
      id: 2,
      title: "AWS",
      content:
        "A leading cloud service provider, offering reliable and scalable infrastructure for diverse computing, storage, and networking needs.",
      img: aws,
    },
    {
      id: 3,
      title: "GCP",
      content:
        "A versatile cloud platform providing robust data analytics, machine learning, and scalable infrastructure for innovative business solutions.",
      img: gcp,
    },
  ];
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center ">
        Expertise Tools
      </h1>
      <div className="flex flex-col gap-y-10">
        {config.map((card) => (
          <TechStackCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CloudExpertiseTools;
