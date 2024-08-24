import React from "react";
import IndustryPageCard from "./IndustryPageCard";

function IndustryCards() {
  const cardConfig = [
    {
      id: 1,
      title: "Security Industry",
      content:
        "In the security and surveillance industry, data analysis is crucial. We help businesses elevate their strategies using advanced AI, machine learning, computer vision, and data analytics. With our experienced team, your data security is assured.",
    },
    {
      id: 2,
      title: "Transportation Industry",
      content:
        "Running a transportation company involves managing vast data and daily challenges. Our experienced team offers tailored AI and data analysis solutions to help you innovate, manage your data, and overcome industry-specific obstacles effectively.",
    },
    {
      id: 3,
      title: "Telecommunication Industry",
      content:
        "In telecommunications, data is unpredictable, and traditional methods quickly become outdated. To stay ahead, leverage the latest data management technologies and strategies to reach new heights and meet your goals in a fast-paced environment.",
    },
    {
      id: 4,
      title: "E-Commerce Industry",
      content:
        "As eCommerce and logistics grow rapidly, NeuSpaarX understands the critical role of data. Our team designs smart, data-driven strategies using AI and chatbots to enhance your business. We help you leverage the right technology for sustainable growth.",
    },
    {
      id: 5,
      title: "Hospitality Industry",
      content:
        "The hospitality industry is rapidly growing, and NeuSpaarX can help you maximize its potential. We offer data collection, analysis, and automation solutions to keep you ahead. Enhance your data methods, analyze behaviors, and streamline operations effectively.",
    },
    {
      id: 6,
      title: "Medical & HealthCare Industry",
      content:
        "Running a successful healthcare business today demands market insight and the right tools. NeuSpaarX helps you leverage big data, AI, and advanced analytics to enhance your business. We unlock the potential of these technologies for greater success.",
    },
  ];
  return (
    <div className="flex flex-col items-center my-20 gap-y-6">
      {cardConfig.map((card) => (
        <IndustryPageCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default IndustryCards;
