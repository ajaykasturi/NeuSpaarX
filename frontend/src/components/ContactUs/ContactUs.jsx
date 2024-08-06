import React from "react";
import Address from "../Footer/Address";
import Label from "../FromElements/Label";
import Input from "../FromElements/Input";
import TextArea from "../FromElements/TextArea";
import Button from "../Button/Button";

function ContactUs() {
  return (
    <div className="flex flex-col gap-y-8 pt-10 pb-12 px-14 max-[450px]:px-8">
      <div className="text-6xl font-normal font-Poppins text-center max-[450px]:text-5xl">
        Contact Us
      </div>
      <div className="flex justify-center gap-x-2 max-[900px]:flex-col max-[900px]:gap-y-6">
        <div className="flex flex-col gap-y-8 flex-shrink grow-[1]">
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
        <form className="flex flex-col p-9 gap-y-9 rounded-lg bg-formBg grow-[5] w-full">
          <div className="flex flex-col gap-y-1">
            <Label label={"Your Name"} name="fullname" />
            <Input placeholder={"John Doe"} type="text" />
          </div>
          <div className="flex flex-col gap-y-1">
            <Label label={"Email"} name="email" />
            <Input placeholder={"example@gamil.com"} type="email" />
          </div>
          <div className="flex flex-col gap-y-1">
            <Label label={"Phone Number"} name="phone" />
            <Input placeholder={"+91 9876543210"} type="tel" />
          </div>
          <div className="flex flex-col gap-y-1">
            <Label label={"Details of Project"} name="projectDetails" />
            <TextArea placeholder="Project Details" />
          </div>
          <Button name={"Send Message"} />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
