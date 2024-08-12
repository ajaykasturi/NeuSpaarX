import React from "react";
import Label from "../FromElements/Label";
import Input from "../FromElements/Input";
import TextArea from "../FromElements/TextArea";
import Button from "../Button/Button";
function ContactForm() {
  return (
    <form className="flex flex-col p-9 gap-y-9 rounded-lg bg-formBg  grow w-full">
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
  );
}

export default ContactForm;
