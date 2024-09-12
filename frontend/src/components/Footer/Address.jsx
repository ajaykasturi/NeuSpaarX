import React from "react";
import { contact } from "../../constants/contact";
function Address() {
  return (
    <div className="flex flex-col gap-4 items-start">
      {contact.map((item) => (
        <div key={item.name} className="flex gap-1">
          {item.icon} <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Address;
