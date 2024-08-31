import React from "react";
import ServicesWeFollow from "../ServicesWeFollow";
import discover from "../../../assets/datascience/discover.svg";
import collect from "../../../assets/datascience/collect.svg";
import analyze from "../../../assets/datascience/analyze.svg";
import visualize from "../../../assets/datascience/visualize.svg";
import monitor from "../../../assets/datascience/monitor.svg";
function DSApproach() {
  const config = [
    {
      id: 1,
      title: "Define the problem and discover the data",
      content: [
        "Define the problem that you are trying to solve.",
        "This involves understanding the business need or question that you are trying to address. Discover the different data sources.",
      ],
      img: discover,
    },
    {
      id: 2,
      title: "Collect and explore data",
      content: [
        "Once the problem is defined and data is discovered, collect the data.",
        "This may involve gathering data from multiple sources and cleaning and preparing the data for analysis.",
      ],
      img: collect,
    },
    {
      id: 3,
      title: "Model and analyse data",
      content: [
        "In this stage, we build models to analyse the data.",
        "This may involve using statistical techniques, machine learning algorithms, or other methods to uncover patterns and insights in the data.",
      ],
      img: analyze,
    },
    {
      id: 4,
      title: "Visualize and present results",
      content: [
        "Once the analysis is complete, the results need to be communicated to stakeholders.",
        "This may involve creating visualizations and reports to present the findings in a clear and understandable way.",
      ],
      img: visualize,
    },
    {
      id: 5,
      title: "Implement and Monitor",
      content: [
        "The final step in the data science process is to implement the insights and recommendations that have been derived from the analysis.",
        "It is also important to monitor the results and track the impact of the implementation to ensure that it is having the desired result",
      ],
      img: monitor,
    },
  ];
  const title = "Our approach to solve business problems:";
  return <ServicesWeFollow title={title} config={config} />;
}

export default DSApproach;
