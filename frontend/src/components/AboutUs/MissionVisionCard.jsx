import React from "react";

function MissionVisionCard() {
  return (
    <div className="flex flex-col gap-y-8 py-10 px-12 items-start w-full gradient-border rounded-3xl h-fit">
      <div className="text-[#1B2C59] font-Poppins flex flex-col gap-y-2">
        <div className="text-xl font-medium">Our Mission</div>
        <div className="leading-relaxed">
          We empower businesses with data-driven decisions and growth through
          high-quality software solutions and innovative approaches.
        </div>
      </div>
      <div className="text-[#1B2C59] font-Poppins flex flex-col gap-y-2">
        <div className="text-xl font-medium">Our Vision</div>
        <div className="leading-relaxed">
          To be a top digital service company known for technology, innovation,
          customer service, and business growth.
        </div>
      </div>
    </div>
  );
}

export default MissionVisionCard;
