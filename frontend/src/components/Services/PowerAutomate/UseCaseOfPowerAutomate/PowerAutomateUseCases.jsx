import React from "react";
import UseCaseCard from "./UseCaseCard";
import emailautomate from "../../../../assets/powerautomateusecases/emailautomate.png";
import documentapproval from "../../../../assets/powerautomateusecases/documentapproval.png";
import salescrm from "../../../../assets/powerautomateusecases/salescrm.png";
import socialmedia from "../../../../assets/powerautomateusecases/socialmedia.png";
import datacollection from "../../../../assets/powerautomateusecases/datacollection.png";
function PowerAutomateUseCases() {
  const config = [
    {
      id: 1,
      title: "Email Automation",
      content:
        "Route emails to relevant teams, categorize them, and trigger specific actions automatically based on content or sender.",
      img: emailautomate,
    },
    {
      id: 2,
      title: "Document Approval",
      content:
        "Streamline document approvals by setting up workflows that send documents to stakeholders and track their status.",
      img: documentapproval,
    },
    {
      id: 3,
      title: "Sales and CRM Integration",
      content:
        "Integrate with your CRM to automate customer follow-ups, update records, and trigger notifications for your sales teams.",
      img: salescrm,
    },
    {
      id: 4,
      title: "Social Media Management",
      content:
        "Schedule posts, monitor brand mentions, and automate responses, making social media management more efficient.",
      img: socialmedia,
    },
    {
      id: 5,
      title: "Data Collection and Reporting",
      content:
        "Automatically gather data from various sources, consolidate it, and generate insightful reports with minimal manual input.",
      img: datacollection,
    },
  ];
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        Top Use Cases for Power Automate
      </h1>
      <div className="flex flex-col justify-center items-center gap-y-8">
        {config.map((card) => (
          <UseCaseCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default PowerAutomateUseCases;
