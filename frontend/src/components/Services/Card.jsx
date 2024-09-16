import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
function Card({ card }) {
  return (
    <div className="transition-all ease-in-out hover:scale-105 duration-500 flex flex-col items-center gap-y-8 px-11 py-8 w-[23rem] h-[23rem] rounded-[6.25rem] gradient-border relative cursor-pointer max-[380px]:scale-90 max-[380px]:hover:scale-95 sm:scale-[0.8] sm:hover:scale-[0.85] md:scale-[0.9] md:hover:scale-[1] min-[850px]:scale-100 min-[850px]:hover:scale-105">
      <div className="rounded-full size-20 bg-white border-[1px] border-slate-300 flex justify-center items-center overflow-hidden p-3">
        <img src={card.icon} />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <div className="font-Poppins text-xl font-semibold">{card.title}</div>
        <div className="font-Poppins text-base text-center font-normal">{card.content}</div>
      </div>
      <div className="size-[3.8355555rem]  border-t-companycolor border-l-companycolor border-b-transparent border-r-transparent rounded-full absolute bottom-0 right-0 border-2 border-slate-500 bg-[#EAEAEA]">
        <div className="rounded-full border-2 absolute bottom-0 right-0 border-companycolor size-[3rem] flex justify-center items-center">
          <CallMadeIcon />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
