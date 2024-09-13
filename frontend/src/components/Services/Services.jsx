import React from "react";
import Card from "./Card";
import bi from "../../assets/home/bi.png";
import cc from "../../assets/home/cc.png";
import ds from "../../assets/home/ds.png";
import dm from "../../assets/home/dm.png";
import devops from "../../assets/home/devops.png";
import bapps from "../../assets/home/bapps.png";
function Services() {
  const servicesConfig = [
    {
      id: "1",
      title: "Business Intelligence",
      content:
        "NeuSpaarX offers a complete set of BI services that will help businesses improve their performance and growth.",
      icon: bi,
    },
    {
      id: "2",
      title: "Cloud Computing",
      content:
        "Optimize your business in the cloud with the help of NeuSpaarX, an experienced team.",
      icon: cc,
    },
    {
      id: "3",
      title: "Data Science & ML",
      content:
        "Using Data Science & ML, We provide solutions that deliver insights and helps in growth.",
      icon: ds,
    },
    {
      id: "4",
      title: "Data Management",
      content:
        "Integrating Data Management with BI services, we ensure that you have timely access to quality and accurate data.",
      icon: dm,
    },
    {
      id: "5",
      title: "DevOps",
      content:
        "For continuous development, testing, deployment, and maintenance without compromising reliability or security.",
      icon: devops,
    },
    {
      id: "6",
      title: "Business Apps",
      content:
        "Convert multiple complex processes into a single, user-friendly app accessible anytime, anywhere.",
      icon: bapps,
    },
  ];
  return (
    <div className="flex flex-col gap-y-10 items-center bg-servicesBg bg-cover bg-no-repeat py-12 my-6 rounded-[1.875rem]">
      <div className="font-Poppins font-normal text-5xl">Our Services</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-16 max-[380px]:gap-4 sm:gap-x-2 sm:gap-y-0 md:gap-4 min-[850px]:gap-16">
        {servicesConfig.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Services;
