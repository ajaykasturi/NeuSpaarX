import React from "react";
import PowerCard from "../PowerBi/PowerCard";
import CoreCard from "./CoreCard";
function CoreSolutions() {
  const config = [
    {
      id: 1,
      title: "Predictive Analytics",
      content:
        "Leverage historical data to forecast future trends, enabling informed decision-making and strategic planning. Our predictive models enhance business outcomes by anticipating customer behavior and market shifts.",
      path: "",
    },
    {
      id: 2,
      title: "Machine Learning",
      content:
        "Implement machine learning algorithms to automate data-driven processes, improving accuracy and efficiency. We tailor solutions to optimize operations and drive innovation in various industries.",
      path: "",
    },
    {
      id: 3,
      title: "Natural Language Processing",
      content:
        "Enhance communication and data interpretation with NLP techniques. Our solutions extract meaningful insights from textual data, empowering businesses to better understand and respond to customer needs.",
      path: "",
    },
    {
      id: 4,
      title: "Data Visualization",
      content:
        "Transform complex datasets into clear, actionable visuals. Our data visualization services help businesses identify trends, patterns, and outliers, making data-driven decisions more accessible and effective.",
      path: "",
    },
    {
      id: 5,
      title: "Big Data Analytics",
      content:
        "Process and analyze large volumes of data to uncover valuable insights. Our big data solutions enable organizations to harness the power of extensive datasets for competitive advantage.",
      path: "",
    },
    {
      id: 6,
      title: "Data Mining",
      content:
        "Discover hidden patterns and correlations within your data. Our data mining services support decision-making by extracting actionable insights from vast datasets, optimizing performance and growth.",
      path: "",
    },
  ];

  const title = "Core Solutions";
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-9 sm:gap-y-16">
      <h1 className="text-2xl font-medium font-Poppins min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center sm:text-left">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[22rem_22rem] xl:grid-cols-[22rem_22rem_22rem] place-items-center gap-8 place-content-center lg:gap-20 xl:gap-8 2xl:gap-20">
        {config.map((item) => (
          <CoreCard key={item.id} card={item} h="min-[341px]:h-[24rem]" className="max-[340px]:h-auto" />
        ))}
      </div>
    </div>
  );
}

export default CoreSolutions;
