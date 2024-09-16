import React, { useState } from "react";
import UseCaseCard from "../Services/Azure/UseCaseCard";

function StoriesCaseStudies() {
  const [selected, setSelected] = useState("");
  const config = [
    {
      id: 1,
      title: "Migrate your Solution to Cloud for better features",
      content:
        "Our client used to store their data in the on prem servers (SQL DB) due to which the costs and maintenance increased Significantly over the years.Our requirement is to reduce the costs, manage the infrastructure, eliminate on-prem hardware servers and decrease the dependency on many servers. devops",
      path: "/path1",
      img: "",
      category: "devops",
    },
    {
      id: 2,
      title: "Optimize the management of data from to Azure",
      content:
        "Our client is facing low data processing time and data latency with on-prem servers as they are dealing with huge amounts of data.Requirement is to have no data latency and fast data processing and to have redundancy in case of failures. data science",
      path: "/path2",
      img: "",
      category: "data science",
    },
    {
      id: 3,
      title: "Optimize the management of data from to Azure",
      content:
        "Our client is facing low data processing time and data latency with on-prem servers as they are dealing with huge amounts of data.Requirement is to have no data latency and fast data processing and to have redundancy in case of failures. cloud computing",
      path: "/path2",
      img: "",
      category: "cloud computing",
    },
    {
      id: 4,
      title: "Optimize the management of data from to Azure",
      content:
        "Our client is facing low data processing time and data latency with on-prem servers as they are dealing with huge amounts of data.Requirement is to have no data latency and fast data processing and to have redundancy in case of failures.",
      path: "/path2",
      img: "",
      category: "devops",
    },
  ];
  const [searchList, setSearchList] = useState(config);
  const handleSearch = (e) => {
    const category = e.target.value;
    const filteredList = config.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setSelected(category);
    setSearchList(filteredList);
  };
  return (
    <div className="mx-[5vw]">
      <h1 className="text-2xl text-center sm:text-4xl sm:text-left 2xl:text-5xl font-Poppins my-10">
        Customer Stories and Case Studies
      </h1>
      <div className="flex gap-2 items-center justify-center sm:justify-start">
        <label className="text-xl flex gap-2 items-center justify-center">
          Category :
          <select
            name="category"
            value={selected}
            onChange={handleSearch}
            className="border px-3 py-3 rounded-xl"
          >
            <option value="">Select a category</option>
            <option value="devops">DevOps</option>
            <option value="data science">Data Science</option>
            <option value="cloud computing">Cloud Computing</option>
            <option value="aws">AWS</option>
            <option value="azure">Azure</option>
            <option value="full stack">Full Stack Dev</option>
          </select>
        </label>
      </div>
      <div className="flex justify-center items-center my-10">
        <div className="flex flex-col gap-y-10 w-full max-w-[90%]">
          {searchList.map((card) => (
            <UseCaseCard key={card.id} card={card} imgBg="bg-[#DBDBDB]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoriesCaseStudies;
