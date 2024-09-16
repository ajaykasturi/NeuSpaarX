import React from "react";
import Slider from "./Slider";
import consulting from "../../../assets/aws/consulting.png";
import migration from "../../../assets/aws/migration.png";
import dev from "../../../assets/devopsimgs/dev.png";
import deployment from "../../../assets/aws/deployment.png";
function CloudFocus() {
  const configMain = [
    { id: 1, title: "Consulting", icon: consulting },
    { id: 2, title: "Development", icon: dev },
    { id: 3, title: "Migration", icon: migration },
    { id: 4, title: "Deployment", icon: deployment },
  ];
  const title = "We Focus On";
  return <Slider title={title} config={configMain} />;
}

export default CloudFocus;
