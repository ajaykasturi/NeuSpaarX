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
    <div className="h-full bg-mainBgImg bg-no-repeat bg-cover border-2 rounded-3xl px-[0vw] py-10 flex flex-col items-center gap-y-8">
      <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-Poppins text-center text-[#1B2C59] font-medium md:font-normal">
        Our Expertise
      </div>
      <div className="place-items-center grid grid-cols-1 gap-y-5 min-[680px]:grid-cols-2 min-[680px]:gap-4 min-[750px]:gap-8 min-[850px]:gap-12 lg:gap-12">
        {config.map((card) => (
          <ExpertiseCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default OurExpertise;
