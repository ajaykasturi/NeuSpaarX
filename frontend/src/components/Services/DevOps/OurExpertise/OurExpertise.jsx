import ExpertiseCard from "./ExpertiseCard";
import dev from "../../../../assets/devopsimgs/dev.png";
import cd from "../../../../assets/devopsimgs/cd.png";
import support from "../../../../assets/devopsimgs/support.png";
import orchestrate from "../../../../assets/devopsimgs/orchestrate.png";
import security from "../../../../assets/devopsimgs/security.png";
import monitor from "../../../../assets/devopsimgs/monitor.png";
import { Moon } from "lucide-react";
function OurExpertise() {
  const config = [
    {
      id: 1,
      title: "Development",
      content: "Efficient, Scalable Solutions",
      img: dev,
    },
    {
      id: 2,
      title: "Continuous Delivery",
      content: "Rapid & Reliable Releases",
      img: cd,
    },
    {
      id: 3,
      title: "Support",
      content: "24/7 Expert Assistance",
      img: support,
    },
    {
      id: 4,
      title: "Monitoring",
      content: "Proactive Performance Monitoring",
      img: monitor,
    },
    { id: 5, title: "Security", content: "Robust Protection", img: security },
    { id: 6, title: "Orchestration", content: " Seamless Automation", img: orchestrate},
  ];
  return (
    <div className="h-full bg-mainBgImg bg-no-repeat bg-cover border-2 rounded-3xl px-[0vw] py-10 flex flex-col items-center gap-y-8">
      <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-Poppins text-center text-[#1B2C59] font-medium md:font-normal">
        Our Expertise
      </div>
      <div className="place-items-center grid grid-cols-1 gap-y-5 min-[680px]:grid-cols-2 min-[680px]:gap-4 min-[750px]:gap-8 min-[850px]:gap-12 lg:gap-12">
        {config.map((card) => (
          <ExpertiseCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default OurExpertise;
