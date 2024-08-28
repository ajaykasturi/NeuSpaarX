import React from "react";
import businesscapsimg from "../../../assets/images/businesscaps.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function BusinessCapabilities() {
  const config = [
    { id: 1, title: "Sales" },
    { id: 2, title: "Marketing" },
    { id: 3, title: "Finance" },
    { id: 4, title: "Project Service Automation" },
    { id: 5, title: "Customer Service" },
    { id: 6, title: "Operations" },
    { id: 7, title: "Field Service" },
  ];
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-24 flex flex-col gap-y-10">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center text-colorblue">
        Unlock Key Business Capabilities
      </h1>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 place-items-center">
        <div className="flex flex-col gap-y-6">
          {config.map((item) => (
            <div key={item.id} className="flex gap-x-4">
              <CheckCircleIcon />{" "}
              <span className="font-Poppins text-xl sm:text-xs min-[700px]:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-[90%]">
          <img src={businesscapsimg} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default BusinessCapabilities;
