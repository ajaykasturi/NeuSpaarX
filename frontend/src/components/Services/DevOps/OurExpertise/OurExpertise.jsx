import ExpertiseCard from "./ExpertiseCard";

function OurExpertise() {
  const config = [
    { id: 1, title: "Development", content: "Efficient, Scalable Solutions" },
    {
      id: 2,
      title: "Continuous Delivery",
      content: "Rapid & Reliable Releases",
    },
    { id: 3, title: "Support", content: "24/7 Expert Assistance" },
    { id: 4, title: "Monitoring", content: "Proactive Performance Monitoring" },
    { id: 5, title: "Security", content: "Robust Protection" },
    { id: 6, title: "Orchestration", content: " Seamless Automation" },
  ];
  return (
    <div className="h-full bg-mainBgImg bg-no-repeat bg-cover border-2 rounded-3xl px-[5vw] py-10 flex flex-col items-center gap-y-8">
      <div className="text-colorblue font-Poppins text-[4rem]">
        Our Expertise
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[32rem_32rem] gap-y-10 gap-x-32">
        {config.map((card) => (
          <ExpertiseCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default OurExpertise;
