import React from "react";
import logo from "../../assets/neuspaarx/neuspaarxlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Address from "./Address";
import LazyImage from "../CommonComps/LazyImage";
import { Link } from "react-router-dom";
function Footer() {
  const businessConfig = [
    { id: 1, name: "Blog", path: "blogs" },
    { id: 2, name: "Case Studies", path: "/case-studies" },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact-us",
    },
  ];
  const servicesConfig = [
    // {
    //   id: 1,
    //   name: "Business Intelligence",
    //   path: "services/business-intelligence",
    // },
    { id: 2, name: "Cloud computing", path: "/services/cloud-computing" },
    { id: 3, name: "Data Science & ML", path: "/services/data-science" },
    { id: 4, name: "Data management", path: "/services/data-management" },
    { id: 5, name: "Devops", path: "/services/devops" },
    {
      id: 6,
      name: "Web Development",
      path: "/services/wordpress",
    },
  ];
  return (
    <footer
      className={`flex flex-col gap-y-6 w-full px-10 py-8 bg-footerBg bg-no-repeat bg-cover max-[899px]:items-center justify-self-end rounded-2xl`}
    >
      <div className="flex max-[899px]:flex-col gap-12 grow flex-row max-[899px]:items-center">
        <div className="flex flex-col gap-y-6 items-start shrink-0 grow">
          <Link to="/" className="h-16">
            <LazyImage
              src={logo}
              className="w-full h-full"
              alt="NeuspaRx Logo"
            />
          </Link>
          <Address />
        </div>
        <div className="flex gap-x-10  justify-between grow-[3] max-[590px]:flex-col max-[590px]:gap-y-10 max-[590px]:">
          <div className="flex gap-x-10 grow">
            <div className="flex flex-col gap-y-6 items-start grow">
              <div className="text-2xl font-medium">Services</div>
              <div className="flex gap-x-8">
                <div className="flex flex-col gap-y-6 items-start">
                  {servicesConfig.map((item) => (
                    <div className="" key={item.id}>
                      <Link
                        to={item.path}
                        className="hover:border-b-2 border-slate-950"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  {/* <div className="">Business Intelligence</div>
                  <div className="">Cloud computing</div>
                  <div className="">Data Science & ML</div>
                  <div className="">Data management</div>
                  <div className="">Devops</div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 items-start grow">
              <div className="text-2xl font-medium">Business</div>
              {businessConfig.map((item) => (
                <div className="" key={item.id}>
                  <Link
                    to={item.path}
                    className="hover:border-b-2 border-slate-950"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              {/* <div className="">Blog</div>
              <div className="">Case studies</div>
              <div className="">About us</div>
              <div className="">
                <Link className="px-3 py-2 hover:bg-[#3b5ab0] hover:text-white rounded-3xl">
                  Contact
                </Link>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-y-6 items-start max-[899px]:grow max-[590px]:self-center max-[590px]:items-center">
            <div className="text-2xl font-medium">Get In Touch</div>
            <div className="flex gap-x-4">
              <FacebookIcon />
              <XIcon />
              <InstagramIcon />
              <a
                href="https://www.linkedin.com/company/neuspaarx/"
                target="_blank"
                className="no-underline"
              >
                <LinkedInIcon />
              </a>
            </div>
            <div>
              <Link
                to="/contact-us"
                className="bg-[#ffffff] border rounded-full px-5 py-2 hover:bg-[#274797] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.1875rem] bg-[#757575] self-stretch"></div>
      <div className="text-base font-normal">
        Copyright © {new Date().getFullYear()} Neuspaarx, All Rights Reserved |
        Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;
