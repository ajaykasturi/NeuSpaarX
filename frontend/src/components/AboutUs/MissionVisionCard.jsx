import React from "react";

function MissionVisionCard() {
  return (
    <div className="flex flex-col gap-y-8 py-10 px-12 items-center w-full gradient-border rounded-3xl h-fit">
      <div className="text-[#1B2C59] font-Poppins flex flex-col gap-y-2">
        <div className="text-2xl md:text-3xl lg:text-4xl">Our Mission</div>
        <div className="text-lg md:text-xl lg:text-2xl leading-relaxed">
          We empower businesses with data-driven decisions and growth through
          high-quality software solutions and innovative approaches.
        </div>
      </div>
      <div className="text-[#1B2C59] font-Poppins flex flex-col gap-y-2">
        <div className="text-2xl md:text-3xl lg:text-4xl">Our Vision</div>
        <div className="text-lg md:text-xl lg:text-2xl leading-relaxed">
          To be a top digital service company known for technology, innovation,
          customer service, and business growth.
        </div>
      </div>
    </div>
  );
}

export default MissionVisionCard;
