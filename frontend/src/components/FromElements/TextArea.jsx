import React, { useState } from "react";

function TextArea(props) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <textarea
        onBlur={() => setFocused(true)}
        {...props}
        className="p-3 rounded-lg h-24 border peer border-[#A3A3A3] inputBox"
        focused={focused.toString()}
      ></textarea>
      {focused && (
        <span className="text-red-500 peer-valid:hidden peer-invalid:visible">
          This {props.name} field is required
        </span>
      )}
    </>
  );
}

export default TextArea;
