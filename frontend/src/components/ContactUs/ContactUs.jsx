import React from "react";
import Address from "../Footer/Address";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div className="flex flex-col gap-y-16 pt-10 pb-24 px-14 max-[450px]:px-8">
      <div className="text-6xl font-normal font-Poppins text-center max-[450px]:text-5xl">
        Contact Us
      </div>
      <div className="flex justify-center gap-x-2 max-[900px]:flex-col max-[900px]:gap-y-6">
        <div className="flex flex-col gap-y-8 grow w-full">
          <div className="flex flex-col gap-y-2">
            <div className="text-xl font-semibold">
              Contact for Premium Business Services
            </div>
            <div className="text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue. Aliquam
              ornare hendrerit augue.
            </div>
          </div>
          <Address />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
