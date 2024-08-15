import React from "react";
import SliderBackground from "../../../CommonComps/SliderBackground";
import TechCard from "./TechCard";
import jira from "../../../../assets/toolstech/jira.png";
import githubpages from "../../../../assets/toolstech/githubpages.png";
import azuredevops from "../../../../assets/toolstech/azuredevops.png";
import github from "../../../../assets/toolstech/github.png";
import azurerepos from "../../../../assets/toolstech/azurerepos.png";
import azurepipelines from "../../../../assets/toolstech/azurepipelines.png";
import jenkins from "../../../../assets/toolstech/jenkins.png";
import gitlab from "../../../../assets/toolstech/gitlab.png";

function ToolsTechnologies() {
  const config = [
    { id: 1, img: jira },
    { id: 2, img: githubpages },
    { id: 3, img: azuredevops },
    { id: 5, img: azurerepos },
    { id: 6, img: azurepipelines },
    { id: 7, img: jenkins },
    { id: 8, img: gitlab },
  ];
  const techConfig = [...config, ...config];
  return (
    <SliderBackground>
      <div className="text-[1.5rem] min-[450px]:text-[1.8rem] min-[500px]:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-Poppins text-center text-[#1B2C59] font-medium md:font-normal">
        Tools and Technologies
      </div>
      <div className="py-4 overflow-hidden whitespace-nowrap w-full relative overlay after-overlay before-overlay  border-0 hover:[animation-play-state:paused]">
        <div className="flex gap-x-16 max-[500px]:gap-x-4 hover:[animation-play-state:paused] w-max max-[500px]:animate-autoScrollInfiniteMobile10 min-[501px]:animate-autoScrollInfinite10">
          {techConfig.map((item) => (
            <TechCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </SliderBackground>
  );
}

export default ToolsTechnologies;
