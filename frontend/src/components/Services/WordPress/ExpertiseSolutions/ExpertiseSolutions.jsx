import React from "react";
import ExpertiseCard from "./ExpertiseCard";

function ExpertiseSolutions() {
  const config = [
    {
      id: 1,
      title: "WordPress Hosting & Security",
      content:
        "Keep your site fast, secure, and always available with our optimized WordPress hosting services. We provide robust security measures, including regular updates, malware scanning, and firewall configurations, to protect your site against threats and ensure reliability.",
      icon: "",
    },
    {
      id: 2,
      title: "Custom Themes & Design",
      content:
        "We create bespoke WordPress themes that align with your brand’s identity. Whether you need a sleek, minimalist design or a feature-rich interface, our themes are responsive, SEO-friendly, and built with the latest technologies for a seamless user experience.",
      icon: "",
    },
    {
      id: 3,
      title: "Plugins & Integration",
      content:
        "Enhance your site’s functionality with our advanced plugin development and integration services. From e-commerce solutions to membership systems, we equip your site with the necessary tools to ensure smooth operation and meet your business needs.",
      icon: "",
    },
    {
      id: 4,
      title: "SEO & Performance",
      content:
        "Boost your website’s visibility and performance with our comprehensive SEO and speed optimization services. We implement best practices to ensure your WordPress site ranks high on search engines and delivers a fast, seamless experience to users..",
      icon: "",
    },
    {
      id: 5,
      title: "E-Commerce Solutions",
      content:
        "Power your online store with fully integrated WooCommerce solutions. From product listings to secure payment gateways, we offer tailored e-commerce services that ensure a smooth and efficient shopping experience for your customers.s",
      icon: "",
    },
    {
      id: 6,
      title: "Support & Maintenance",
      content:
        "Our work doesn’t end at launch. We provide ongoing support and maintenance to keep your WordPress site updated, secure, and performing at its best. From regular updates to troubleshooting, we ensure your site remains in top shape.",
      icon: "",
    },
  ];
  return (
    <div className="mx-[5vw] my-40 flex flex-col gap-y-9 sm:gap-y-16">
      <h1 className="text-3xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center sm:text-left">
        Expertise and Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-8 xl:gap-20 place-items-center">
        {config.map((item) => (
          <ExpertiseCard key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}

export default ExpertiseSolutions;
