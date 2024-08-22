import React from "react";

function IntroCard({ text }) {
  return (
    <div className="p-8 text-colorblue text-center shadow-lg mx-[5vw] rounded-3xl sm:text-lg my-24">
      {text}
    </div>
  );
}

export default IntroCard;
