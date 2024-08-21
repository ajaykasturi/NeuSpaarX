import React from "react";

function PowerCard({ card, className = "" }) {
  return (
    <div
      className={`${className} flex items-center justify-start gap-x-4 sm:gap-x-6 md:gap-x-12 lg:gap-x-16 xl:gap-x-20`}
    >
      <div className="text-awesome text-[8rem] min-[550px]:text-[9rem] min-[600px]:text-[10rem] min-[650px]:text-[11rem] min-[700px]:text-[12rem] min-[750px]:text-[13rem] min-[800px]:text-[14rem] min-[850px]:text-[15rem] min-[900px]:text-[16rem] min-[1000px]:text-[17rem] lg:text-[18rem]  text-shadow-1">
        {card.id}
      </div>
      <div className="grow flex flex-col gap-y-2 sm:gap-y-3 text-colorblue min-[450px]:max-w-[13.5rem] min-[500px]:max-w-[14.5rem] min-[550px]:max-w-[18rem] min-[750px]:max-w-[20rem]  min-[850px]:max-w-[23rem] min-[950px]:max-w-[25rem] min-[1050px]:max-w-[27rem] min-[1150px]:max-w-[30rem] min-[1250px]:max-w-[32rem] min-[1350px]:max-w-[34rem] min-[1450px]:max-w-[36rem]">
        <div className="font-Poppins min-[600px]:text-[1.2rem]  sm:text-3xl font-medium">
          {card.title}
        </div>
        <div className="font-Roboto text-xs min-[600px]:text-[0.80rem] min-[650px]:text-[0.85rem] min-[700px]:text-[0.90rem] min-[750px]:text-[0.95rem] min-[800px]:text-[1rem] min-[900px]:text-[1.1rem] min-[1000px]:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-tight">
          {card.content}
        </div>
      </div>
    </div>
  );
}

export default PowerCard;
