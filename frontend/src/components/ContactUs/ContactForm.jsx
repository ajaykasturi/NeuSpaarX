import React, { useState } from "react";
import Label from "../FromElements/Label";
import Input from "../FromElements/Input";
import TextArea from "../FromElements/TextArea";
import Button from "../Button/Button";
import InputLabel from "../FromElements/InputLabel";
const API_URL = import.meta.env.VITE_API_BASE_URL || "";
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    fullName: "",
    email: "",
    phone: "",
    projectDetails: "",
  };
  const [values, setValues] = useState(defaultValues);
  const config = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "John Doe",
      label: "Your Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "+91 9876543210",
      label: "Phone Number",
      required: true,
    },
  ];
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/sendMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setLoading(false);
      setValues(defaultValues);
      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        alert("Mail Sent Successfully!");
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-9 gap-y-9 rounded-lg bg-formBg  grow w-full"
    >
      {config.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-1">
          <InputLabel
            {...item}
            value={values[item.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <div className="flex flex-col gap-y-1">
        <Label
          htmlFor="textarea"
          label={"Details of Project"}
          name="projectDetails"
        />
        <TextArea
          id="textarea"
          required={true}
          placeholder={"Project Details Here"}
          name={"projectDetails"}
          onChange={handleChange}
          value={values["projectDetails"]}
        />
      </div>
      <button
        className={`bg-[#274797] text-white text-nowrap flex justify-center items-center hover:opacity-90 max-h-fit rounded-xl w-fit cursor-pointer px-5 py-2`}
        type="submit"
      >
        {loading ? "Message Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
