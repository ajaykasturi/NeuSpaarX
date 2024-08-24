import React from "react";
import Navbar from "../components/Navbar/Navbar";
import contactimg from "../assets/images/contactimg.png";
import ContactForm from "../components/ContactUs/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
function Contact() {
  const contactInfo = [
    { name: "Email", content: "hello@sample.io", icon: <Mail /> },
    { name: "Phone", content: "+1 (555) 000-0000", icon: <Phone /> },
    {
      name: "Office",
      content: "123 Sample St, Sydney NSW 2000 ",
      icon: <MapPin />,
    },
  ];
  return (
    <div className="flex flex-col mb-20">
      <Navbar />
      <div className="flex flex-col mx-[3vw] gap-y-8 md:gap-y-20">
        <div className="flex flex-col text-[#1B2C59] gap-y-4">
          <div className="font-Poppins text-headingClamp">Contact Us</div>
          <div className="font-Poppins text-contentClamp">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare
            hendrerit augue.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 place-items-center">
          <div className="w-[15rem] md:w-fit">
            <img src={contactimg} />
          </div>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center gap-8 min-[899px]:flex-row min-[899px]:justify-evenly">
          {contactInfo.map((item) => (
            <div key={item.name} className="flex flex-col items-center justify-center gap-y-4">
              <div>{item.icon}</div>
              <div className="text-2xl font-semibold font-Poppins text-center">
                {item.name}
              </div>
              <div className="text-xl font-normal font-Poppins text-center">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
