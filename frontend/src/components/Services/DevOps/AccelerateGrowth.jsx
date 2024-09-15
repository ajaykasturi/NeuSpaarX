import React from "react";
import PowerCard from "../PowerBi/PowerCard";
import cicd from "../../../assets/devopsimgs/cicd.png";
import iaac from "../../../assets/devopsimgs/iaac.png";
import automate from "../../../assets/devopsimgs/automate.png";
function AccelerateGrowth() {
  const config = [
    {
      id: 1,
      title: "CI/CD Pipelines",
      content:
        "Streamline your development process with automated CI/CD pipelines, enabling faster and more reliable software releases.",
      img: cicd,
    },
    {
      id: 2,
      title: "Infrastructure as Code",
      content:
        "Automate your infrastructure management with IaC, ensuring consistency and reducing manual errors.",
      img: iaac,
    },
    {
      id: 3,
      title: "Automated Testing",
      content:
        "Ensure code quality and reliability through automated testing integrated into your pipeline.",
      img: automate,
    },
  ];
  const title = "Let's Accelerate Your Growth Together";
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-9 sm:gap-y-16">
      <h1 className="text-xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center">
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

export default AccelerateGrowth;
