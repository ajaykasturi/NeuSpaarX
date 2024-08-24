import React from "react";
import ToolCard from "./ToolCard";

function PowerAutomateTools() {
  const config = [
    {
      id: 1,
      title: "Automated Workflows",
      content:
        "Seamlessly automate processes across apps and services, setting triggers and actions to save time and reduce human errors.",
    },
    {
      id: 2,
      title: "AI Builder",
      content:
        "Leverage AI capabilities to enhance your workflows. From form processing to object detection, AI Builder makes automation smarter.",
    },
    {
      id: 3,
      title: "Process Advisor",
      content:
        "Analyze and visualize your processes to identify inefficiencies and opportunities for automation, helping you optimize workflows effectively.",
    },
    {
      id: 4,
      title: "Secure Data Handling",
      content:
        "Ensure your data flows securely between services with built-in encryption and compliance support, safeguarding your information.",
    },
  ];
  return (
    <div className="flex flex-col mx-[5vw] my-28 gap-y-20">
      <div className="text-center md:text-left font-Poppins text-colorblue text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
        Power Up with These Must-Have Automation Tools
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-12 lg:gap-16">
        {config.map((item) => (
          <ToolCard key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}

export default PowerAutomateTools;
