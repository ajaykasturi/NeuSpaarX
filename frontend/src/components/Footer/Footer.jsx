import React from "react";
import logo from "../../assets/images/neuspaarxlogo.png";
import { MapPin, Phone, Mail } from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <footer className="flex flex-col gap-y-6 w-full px-10 py-8 bottom-0">
      <div className="flex flex-row gap-12 justify-between">
        <div className="flex flex-col gap-y-6 items-start grow">
          <div className="h-16">
            <img src={logo} className="w-full h-full" alt="NeuspaRx Logo" />
          </div>
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
        </div>
        <div className="flex flex-col gap-y-6 items-start grow">
          <div className="text-2xl font-medium">Services</div>
          <div className="">Business Intelligence</div>
          <div className="">Cloud computing</div>
          <div className="">Data Science & ML</div>
          <div className="">Data management</div>
          <div className="">Devops</div>
          <div className="">Business Apps</div>
        </div>
        <div className="flex flex-col gap-y-6 items-center grow">
          <div className="text-2xl font-medium">Business</div>
          <div className="">Blog</div>
          <div className="">Case studies</div>
          <div className="">About us</div>
          <div className="">Contact</div>
        </div>
        <div className="flex flex-col gap-y-6 items-center grow">
          <div className="text-2xl font-medium">Get In Touch</div>
          <div className="flex gap-x-4">
            <FacebookIcon />
            <XIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
          <div className="bg-[#ffffff] border rounded-full px-5 py-2 hover:bg-[#274797] hover:text-white">
            Contact Us
          </div>
        </div>
      </div>
      <div className="h-[0.1875rem] bg-[#757575]"></div>
      <div className="text-base font-normal">
        Copyright © 2023 Neuspaarx, All Rights Reserved | Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;
