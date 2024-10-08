import React from "react";
import ServicesLanding from "../../components/Services/ServicesLanding";
import datamigration from "../../assets/datamigration/dmigration.png";
import SimpleCard from "../../components/CommonComps/SimpleCard";
import DataMigrationApproach from "../../components/Services/DataMigration/DataMigrationApproach";
import DataMigrationPhases from "../../components/Services/DataMigration/DataMigrationPhases";
import OurTechniques from "../../components/Services/DataMigration/OurTechniques";
import LetsConnect from "../../components/ContactUs/LetsConnect";
function DataMigrationPage() {
  return (
    <>
      <ServicesLanding
        title={"Data Migration"}
        content={"Seamlessly transfer data across platforms."}
        btnText={"Contact Us"}
        sideImg={datamigration}
      />
      <SimpleCard
        text="Organizations are increasingly upgrading from traditional systems to modern solutions. With rapidly growing data, migrating to optimized systems offers better performance and cost efficiency. However, data migration can be complex, requiring careful handling to ensure that all data is accurately transferred and fully functional in the new environment."
        className="my-20 mx-[5vw]"
      />
      <DataMigrationApproach />
      <DataMigrationPhases />
      <OurTechniques />
      <LetsConnect
        title={"Ready for a Smooth Transition?"}
        content={"Effortlessly upgrade your systems with our proven techniques"}
      />
    </>
  );
}

export default DataMigrationPage;
