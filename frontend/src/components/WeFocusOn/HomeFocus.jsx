import React from "react";
import Slider from "../Services/CloudComputing/Slider";
import deliver from "../../assets/home/deliver.png";
import learning from "../../assets/home/learning.png";
import innovation from "../../assets/home/innovation.png";
import effort from "../../assets/home/effort.png";
import scale from "../../assets/home/scale.png";
import quality from "../../assets/home/quality.png";
function HomeFocus() {
  const cardConfig = [
    { icon: deliver, title: "Deliver more at low cost" },
    { icon: innovation, title: "Innovation & Commitment" },
    { icon: learning, title: "Continuos Learning" },
    { icon: effort, title: "Less manual effort" },
    {
      icon: scale,
      title: "Flexibility & Scalability",
    },
    {
      icon: quality,
      title: "Quality Assurance",
    },
  ];
  const title = "We Focus On";
  return <Slider title={title} config={cardConfig} />;
}

export default HomeFocus;
