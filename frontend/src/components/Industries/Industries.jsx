import React from "react";
import Button from "../Button/Button";
import Card from "./Card";

function Industries() {
  const config = [
    {
      id: 1,
      title: "Startups",
      content:
        "We assist startups in knowing the power of their data by performing data collection, transformation and analysis. Our aim is to help startups make informed decisions that will drive their success. Using data-driven insights, and advanced analytics tools, we strive to help startups to grow their business.",
    },
    {
      id: 2,
      title: "Small Scale",
      content:
        "We understand that small businesses have tremendous potential. With the power of AI, data science, analytics and machine learning, we can help small businesses accelerate their growth and expansion. Whether it’s through automating routine tasks or providing data-driven insights we will help small businesses grow.",
    },
    {
      id: 3,
      title: "Medium Scale",
      content:
        "NeuSpaarX offers various services depending on the unique needs of a Medium Scale Business including Custom Software Development, Mobile and Web apps, Cloud-based solutions, Business Intelligence and Analytics, Cybersecurity solutions, IT consulting services and Digital Marketing solutions to make the informed decisions and grow their business.",
    },
    {
      id: 4,
      title: "Large Scale",
      content:
        "We understand the requirements and offers tailer made solutions to the large scale business. Our key services include Mobile and Web App development, Custom Software Development, Enterprise Software Integration, Cloud Computing Solutions, Data Analytics and Business Intelligence and Digital Transformation Consulting.",
    },
  ];
  return (
    <div className="flex flex-col px-[5vw] py-24 gap-y-8 items-center md:items-start">
      <div className="text-6xl font-Poppins font-normal">Industries</div>
      <div className="flex justify-between items-center gap-x-8 max-[690px]:flex-col max-[690px]:gap-y-4">
        <div className="font-Poppins text-xl tracking-wide text-center sm:text-left">
          We support all kinds of businesses for their growth using data
          analysis, data management, cloud computing, data visualization and
          many data related technologies regardless of business size.
        </div>
        <Button name={"Know More"} />
      </div>
      <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 lg:gap-10 xl:gap-12 justify-items-center self-center">
        {config.map((card) => (
          <Card
            key={card.id}
            card={card}
            className={"transition ease-in-out hover:scale-105 duration-500"}
          />
        ))}
      </div>
    </div>
  );
}

export default Industries;
