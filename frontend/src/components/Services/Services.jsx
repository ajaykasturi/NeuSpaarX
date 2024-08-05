import React from "react";
import Card from "./Card";

function Services() {
  const servicesConfig = [
    {
      id: "1",
      title: "Business Intelligence",
      content:
        "NeuSpaarX offers a complete set of BI services that will help businesses improve their performance and growth.",
    },
    {
      id: "2",
      title: "Cloud Computing",
      content:
        "Optimize your business in the cloud with the help of NeuSpaarX, an experienced team.",
    },
    {
      id: "3",
      title: "Data Science & ML",
      content:
        "Using Data Science & ML, We provide solutions that deliver insights and helps in growth.",
    },
    {
      id: "4",
      title: "Data Management",
      content:
        "Integrating Data Management with BI services, we ensure that you have timely access to quality and accurate data.",
    },
    {
      id: "5",
      title: "DevOps",
      content:
        "For continuous development, testing, deployment, and maintenance without compromising reliability or security.",
    },
    {
      id: "6",
      title: "Business Apps",
      content:
        "Convert multiple complex processes into a single, user-friendly app accessible anytime, anywhere.",
    },
  ];
  return (
    <div className="flex flex-col gap-y-10 items-center bg-servicesBg bg-cover bg-no-repeat py-12 my-6 rounded-[1.875rem]">
      <div className="font-Poppins font-normal text-5xl">Our Services</div>
      <div className="grid grid-cols-3 max-[1220px]:grid-cols-2 max-[860px]:grid-cols-1 justify-items-center gap-16">
        {servicesConfig.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default Services;
