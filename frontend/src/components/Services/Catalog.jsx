import React from "react";
import PowerCard from "./PowerBi/PowerCard";
function Catalog({ config, title }) {
  return (
    <div className="mx-[5vw] my-16 sm:my-24 md:my-28 lg:my-36 flex flex-col gap-y-9 sm:gap-y-16">
      <h1 className="text-xl min-[450px]:text-3xl sm:text-4xl md:text-5xl text-colorblue text-center sm:text-left">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[22rem_22rem] xl:grid-cols-[22rem_22rem_22rem] place-items-center gap-8 place-content-center lg:gap-20 xl:gap-8 2xl:gap-20">
        {config.map((item) => (
          <PowerCard key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
