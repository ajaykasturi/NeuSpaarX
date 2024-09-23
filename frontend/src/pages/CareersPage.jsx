import React from "react";
import CareerLanding from "../components/careers/CareerLanding";
import careerImg from "../assets/career/career.png";
import CareerInfo from "../components/careers/CareerInfo";
import JobBoard from "../components/careers/JobBoard";
function CareersPage() {
  return (
    <>
      <CareerLanding
        title={"Shape Your Future with NeuSpaarX"}
        content={
          "Join a team where technology meets innovation. Let's build the future together."
        }
        btnText={"Join Us"}
        sideImg={careerImg}
      />
      <CareerInfo />
      <JobBoard />
    </>
  );
}

export default CareersPage;
