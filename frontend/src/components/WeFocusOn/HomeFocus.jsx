import React from "react";
import Slider from "../Services/CloudComputing/Slider";

function HomeFocus() {
  const cardConfig = [
    { icon: "", title: "Deliver more at low cost" },
    { icon: "", title: "Innovation & Commitment" },
    { icon: "", title: "Continuos Learning" },
    { icon: "", title: "Less manual effort" },
  ];
  const title = "We Focus On";
  return <Slider title={title} config={cardConfig} />;
}

export default HomeFocus;
