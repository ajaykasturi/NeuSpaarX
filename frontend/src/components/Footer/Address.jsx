import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
function Address() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-1">
        <MapPin /> <div>Hyderabad, Telangana, India 500081</div>
      </div>
      <div className="flex gap-1">
        <Phone />
        <div>+91 70130 47815</div>
      </div>
      <div className="flex gap-1">
        <Mail />
        <div>neuspaarx@gmail.com</div>
      </div>
    </div>
  );
}

export default Address;
