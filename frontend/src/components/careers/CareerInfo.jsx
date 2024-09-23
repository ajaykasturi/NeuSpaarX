import React from "react";
import InfoCard from "./InfoCard";
import dev from "../../assets/career/dev.png";
import workplace from "../../assets/career/workplace.png";
import staffing from "../../assets/career/staffing.png";
import encouragement from "../../assets/career/encouragement.png";
function CareerInfo() {
  const config = [
    {
      id: 1,
      title: "Learning & Development",
      content: [
        "Collaboration and Teamwork",
        "Independence & Empowerment",
        "Efficient Communication",
        "Comprehensive Development",
        "Learning Opportunitie",
      ],
      img: dev,
    },
    {
      id: 2,
      title: "Workplace",
      content: [
        "Open Communication Channels",
        "Work-Life Balance",
        "Supportive Management",
        "Encouragement of Innovation and Creativity",
        "Collaborative Decision Making",
      ],
      img: workplace,
    },
    {
      id: 3,
      title: "Staffing Guidelines",
      content: [
        "Competitive Compensation",
        "Monthly Paid Leaves",
        "Employee Benefits Package",
        "Performance-Based Rewards and Bonuses",
        "Health and Wellness Programs",
      ],
      img: staffing,
    },
    {
      id: 4,
      title: "Encouragement",
      content: [
        "Team Recognition",
        "Performance-Based Bonuses",
        "Rewards for Excellence",
        "Employee of the Month/Year Awards",
        "Individual Recognition",
      ],
      img: encouragement,
    },
  ];
  return (
    <div className="mx-[5vw] my-24 flex flex-col justify-center items-center gap-y-20">
      {config.map((card, index) => (
        <InfoCard
          card={card}
          key={card.id}
          reverse={index % 2 == 0 ? true : false}
        />
      ))}
    </div>
  );
}

export default CareerInfo;
