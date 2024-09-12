import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Card from "./Card";
import whyneu from "../../assets/about/whyneuspaarx.png";
import agile from "../../assets/about/agile.png";
import team from "../../assets/about/team.png";
import livesupport from "../../assets/about/livesupport.png";
function WhyNeuSpaarx() {
  const config = [
    {
      id: 1,
      title: "Agile Process",
      content:
        "We follow end - end agile process and ensure everything is transparent.",
      icon: agile,
    },
    {
      id: 2,
      title: "24x7 Live Support",
      content:
        "We support for any help 24x7. We help our clients get answers as soon as possible",
      icon: livesupport,
    },
    {
      id: 3,
      title: "Experienced Team",
      content:
        "We have a Experienced team in  quality solution for all wide range of business",
      icon: team,
    },
  ];
  return (
    <div className="flex flex-col rounded-3xl mb-8 items-center gap-y-16 bg-whyBg bg-full bg-no-repeat py-20 px-[5vw]">
      <div className="grid sm:grid-cols-1 place-items-center lg:grid-cols-[2fr_1fr] gap-x-6 gap-y-10">
        <div className="flex flex-col gap-y-10 font-Poppins">
          <div className="text-[#1B2C59] text-center sm:text-left text-5xl font-normal font-Poppins">
            Why NeuSpaarX?
          </div>
          <div className="text-lg sm:text-xl font-Poppins  tracking-wide">
            Delivering real value for your business is our goal. Our experienced
            team develops reliable, scalable solutions using the latest
            technologies.
          </div>
          <div className="flex gap-x-10">
            <CheckCircleIcon />
            <div className="">
              Utilize cloud technologies to reduce costs and increase
              flexibility.
            </div>
          </div>
          <div className="flex gap-x-8">
            <CheckCircleIcon />
            <div>
              Clearly understand and analyze requirements to build effective
              solutions.
            </div>
          </div>
          <div className="flex gap-x-8">
            <CheckCircleIcon />{" "}
            <div>
              Integrate multiple data sources for comprehensive insights.
            </div>
          </div>
        </div>
        <div className="w-[90%] sm:w-[60%] lg:w-auto rounded-3xl">
          <img src={whyneu} className="w-full h-auto rounded-3xl" />
        </div>
      </div>
      <div className="flex justify-evenly gap-x-8 flex-wrap gap-y-10">
        {config.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default WhyNeuSpaarx;
