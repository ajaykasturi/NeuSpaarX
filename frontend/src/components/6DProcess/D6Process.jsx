import React from "react";
import D6Card from "./D6Card";
import defineImg from "../../assets/6DProcessImages/define.png";
import developImg from "../../assets/6DProcessImages/develop.png";
import designImg from "../../assets/6DProcessImages/design.png";
import deployImg from "../../assets/6DProcessImages/deploy.png";
import deliverImg from "../../assets/6DProcessImages/deliver.png";
function D6Process() {
  const config = [
    {
      id: 1,
      title: "Define",
      content:
        "We will define the problem and share it with the required audience so that everyone are on the same page.",
      img: defineImg,
    },
    {
      id: 2,

      title: "Design",
      content:
        "Once the problem is defined, we will design a quality solution and for any changes/enhancements required, we will iterrate as needed.",
      img: designImg,
    },
    {
      id: 3,
      title: "Develop",
      content:
        "Once the design is finalized, we will start developing the solution step by step.",
      img: developImg,
    },
    {
      id: 4,
      title: "Deploy",
      content:
        "We will deploy a live version of  solution, so that clients can view how the solution works and provide feedback.",
      img: deployImg,
    },
    {
      id: 6,
      title: "Deliver",
      content:
        "Once the clients are satisfied with the solution deployed, we will deliver the project.",
      img: deliverImg,
    },
  ];
  return (
    <div className="flex flex-col gap-y-16  mx-[8vw] my-16  relative">
      <div className="text-[#1B2C59] text-6xl font-Poppins text-center sticky top-10">
        Our 6-D Process
      </div>
      <div className="flex flex-col gap-y-16 relative">
        {config.map((card, index) => (
          <D6Card key={card.id} card={card} top={index} />
        ))}
      </div>
    </div>
  );
}

export default D6Process;
