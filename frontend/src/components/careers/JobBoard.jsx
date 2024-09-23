import React from "react";

function JobBoard() {
  const title = "Current Openings At NeuSpaarX";
  return (
    <div className="mx-[5vw] my-20 flex flex-col gap-y-16">
      <h1 class="text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl xl:text-5xl text-center text-colorblue">
        Current Openings At NeuSpaarX
      </h1>
      <div className="border shadow-xl h-96 rounded-xl flex justify-center items-center w-full p-4">
        Currently there are no openings at NeuSpaarX
      </div>
    </div>
  );
}

export default JobBoard;
