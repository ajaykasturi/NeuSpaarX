import React from "react";
import Slider from "./Slider";

function CloudFocus() {
  const configMain = [
    { id: 1, title: "Consulting", icon: "" },
    { id: 2, title: "Development", icon: "" },
    { id: 3, title: "Migration", icon: "" },
    { id: 4, title: "Deployment", icon: "" },
  ];
  const title = "We Focus On";
  return <Slider title={title} config={configMain} />;
}

export default CloudFocus;
