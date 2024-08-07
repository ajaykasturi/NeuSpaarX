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
  ];
  return (
    <div className="flex flex-col px-20 py-24 gap-y-8">
      <div className="text-6xl font-Poppins font-normal">Industries</div>
      <div className="flex justify-between items-center gap-x-8 max-[690px]:flex-col max-[690px]:gap-y-4">
        <div className="font-Poppins text-xl text-justify">
          We support all kinds of businesses for their growth using data
          analysis, data management, cloud computing, data visualization and
          many data related technologies regardless of business size.
        </div>
        <Button name={"Know More"} />
      </div>
      <div className="flex gap-x-6 mt-8 justify-center">
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
