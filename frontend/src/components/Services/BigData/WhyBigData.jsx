import React from "react";
import SimpleCard from "../../CommonComps/SimpleCard";
import BigCard from "./BigCard";
import hadoop from "../../../assets/BigData/hadoop.png";
import spark from "../../../assets/BigData/spark.png";
function WhyBigData() {
  const title = "When, Why and How ???";
  return (
    <div className="bg-mainBgImg bg-no-repeat px-[5vw] bg-cover py-10 sm:py-16 md:py-24 flex flex-col gap-y-12 sm:gap-y-16 rounded-2xl">
      <h1 className="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row md:gap-x-5 lg:gap-x-10 gap-y-12 xl:gap-x-20 items-center">
        <SimpleCard
          text={
            "Big data can be used to extract valuable insights and inform decision-making in a variety of industries, including finance, healthcare, retail, and manufacturing. Big Data often requires the use of distributed computing systems, such as Hadoop and Spark, which are designed to process large amounts of data in parallel across many servers. We use tools and techniques from the field of data science, such as machine learning and predictive analytics."
          }
          className="bg-[#FFFFFF82] h-fit"
        />
        <div className="flex flex-col gap-y-8">
          <BigCard img={hadoop} />
          <BigCard img={spark} />
        </div>
      </div>
    </div>
  );
}

export default WhyBigData;
