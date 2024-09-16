import React from "react";
import Navbar from "../components/Navbar/Navbar";
import contactimg from "../assets/images/contactimg.png";
import ContactForm from "../components/ContactUs/ContactForm";
import LazyImage from "../components/CommonComps/LazyImage";
import { contact } from "../constants/contact";
function Contact() {
  return (
    <div className="flex flex-col mb-20">
      <Navbar />
      <div className="flex flex-col mx-[3vw] gap-y-8 md:gap-y-20 my-10">
        <div className="flex flex-col text-[#1B2C59] gap-y-4">
          <div className="font-Poppins text-4xl text-center sm:text-5xl sm:text-left md:text-6xl">
            Contact Us
          </div>
          <div className="font-Poppins text-lg text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare
            hendrerit augue.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 place-items-center">
          <div className="w-[15rem] md:w-fit">
            <LazyImage src={contactimg} />
          </div>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center gap-8 min-[899px]:flex-row min-[899px]:justify-evenly mt-5">
          {contact.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-y-4"
            >
              <div>{item.icon}</div>
              <div className="sm:text-xl md:text-2xl font-semibold font-Poppins text-center">
                {item.name}
              </div>
              <div className="md:text-xl font-normal font-Poppins text-center">
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
