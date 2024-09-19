import React, { useState } from "react";

function InputLabel(props) {
  const { id, label, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  return (
    <>
      <label className="font-Poppins text-base">{label}</label>
      <input
        className="w-full peer rounded-lg p-3 border border-[#A3A3A3] inputBox"
        {...inputProps}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
        onChange={onChange}
      />
      {focused && (
        <span className="text-red-500 peer-valid:hidden peer-invalid:visible">
          This {inputProps.name} field is required
        </span>
      )}
    </>
  );
}

export default InputLabel;
