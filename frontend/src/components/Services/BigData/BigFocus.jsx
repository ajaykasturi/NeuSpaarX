import React from "react";
import SimpleCard from "../../CommonComps/SimpleCard";
import VCard from "./VCard";
import UnfoldMoreDoubleIcon from "@mui/icons-material/UnfoldMoreDouble";
function BigFocus() {
  const config = [
    {
      id: 1,
      title: "Volume",
      content:
        "The massive amount of data generated every second requires advanced storage, processing, and management solutions. Handling this volume is key to extracting valuable insights from diverse datasets",
      icon: "",
    },
    {
      id: 2,
      title: "Variety",
      content:
        "Big Data comes in multiple formats like structured databases, unstructured texts, images, and videos. Managing this variety demands flexible tools to analyze and integrate different data types effectively.",
      icon: "",
    },
    {
      id: 3,
      title: "Velocity",
      content:
        "The speed at which data is produced and needs to be processed is crucial. Fast-moving data streams require real-time analysis tools to ensure timely decision-making and competitive advantage.",
      icon: "",
    },
  ];
  const title = "We focus on 3 V's";
  const h = 24;
  return (
    <div className="px-[5vw] py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        {title}
      </h1>
      <div
        className={`grid md:grid-cols-2 grid-rows-[26rem] place-items-center`}
      >
        <div className="h-[27rem] overflow-auto no-scrollbar relative">
          <span className="sticky top-1/3 left-[90%] transform translate-x-1/2">
            <UnfoldMoreDoubleIcon />
          </span>
          <div className="flex flex-col justify-center items-center gap-y-20 w-full p-2">
            {config.map((item) => (
              <VCard
                key={item.id}
                card={item}
                h={`h-[${h}rem]`}
                w="min-[376px]:max-w-[25rem]"
              />
            ))}
          </div>
        </div>
        <div className="p-5">
          <div className="p-4 h-fit text-center shadow-lg rounded-3xl text-colorblue">
            The Volume, Variety, and Velocity of large volumes of data make it
            difficult to process and analyze using traditional data management
            systems. As a result, NeuSpaarX often use specialized tools and
            technologies, such as distributed computing, machine learning, and
            data lakes, to process and analyze big data.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigFocus;
