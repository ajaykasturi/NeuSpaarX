import React, { useState } from "react";
import JobCard from "./JobCard";
import { jobOpenings } from "../../constants/jobs";
function JobBoard() {
  const title = "Current Openings At NeuSpaarX";
  const config = [
    { id: 1, name: "View all", match: "" },
    { id: 2, name: "Engineering", match: "engineering" },
    { id: 3, name: "Operations", match: "operations" },
    { id: 4, name: "Cloud", match: "cloud" },
    { id: 5, name: "Design", match: "design" },
    { id: 6, name: "Data", match: "data" },
  ];
  const [jobs, setJobs] = useState(jobOpenings);
  const [selected, setSelected] = useState(1);
  const handleClick = (id, match) => {
    setSelected(id);
    if (!match) {
      setJobs(jobOpenings);
      return;
    }
    const filteredJobs = jobOpenings.filter(
      (job) => job.department.toLowerCase() == match.toLowerCase()
    );
    setJobs(filteredJobs);
  };
  return (
    <div className="mx-[5vw] my-20 flex flex-col gap-y-16">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue font-Poppins">
        {title}
      </h1>

      <div className="flex flex-col gap-y-8">
        <div className="flex gap-4 items-center justify-start flex-wrap">
          {config.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id, item.match)}
              className={`${
                item.id == selected ? "card-border border-2 shadow-lg" : ""
              } cursor-pointer rounded-xl px-4 py-1 font-Poppins transition-all duration-500`}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-8 justify-center">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobBoard;
