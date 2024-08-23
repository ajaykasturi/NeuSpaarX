import React from "react";

function SimpleCard({ text, className = "" }) {
  return (
    <div
      className={`p-8 text-colorblue text-center shadow-lg rounded-3xl sm:text-lg ${className}`}
    >
      {text}
    </div>
  );
}

export default SimpleCard;
