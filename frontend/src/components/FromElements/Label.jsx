import React from "react";

function Label(props) {
  const { label, ...inputProps } = props;
  return (
    <label className="font-Poppins text-base" {...inputProps}>
      {label}
    </label>
  );
}

export default Label;
