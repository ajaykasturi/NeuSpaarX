import React from "react";

function TextArea({ placeholder }) {
  return (
    <textarea
      className="p-3 rounded-lg h-24 border border-[#A3A3A3]"
      placeholder={placeholder}
    ></textarea>
  );
}

export default TextArea;
