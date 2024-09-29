import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function JobCard({ job }) {
  return (
    <div className="cursor-pointer card-border border rounded-xl px-6 py-6 max-w-[90%] w-full">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between flex-wrap gap-y-4">
          <div className="flex items-center gap-x-4 flex-wrap gap-y-2">
            <h2 className="text-companycolor font-medium text-xl sm:text-2xl">
              {job.jobTitle}
            </h2>
            <span className="bg-[#EEE] rounded-md px-2 py-1 text-xs font-bold">
              {job.department}
            </span>
          </div>
          <div className="hidden items-center gap-x-1 md:flex">
            <span className="font-Poppins">Apply Now</span>{" "}
            <KeyboardArrowRightIcon />
          </div>
        </div>
        <div className="font-Poppins text-base">{job.jobContent}</div>
        <div className="flex items-center gap-x-4 flex-wrap gap-y-4">
          <div className="flex items-center justify-center gap-x-1">
            <LocationOnOutlinedIcon />
            {job.location}
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <AccessTimeIcon />
            {job.contractType}
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-1 md:hidden">
          <span className="font-Poppins">Apply Now</span>{" "}
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
