import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
function Card({ card }) {
  return (
    <div className="flex flex-col items-center gap-y-8 px-11 py-8 w-[23rem] h-[23rem] rounded-[6.25rem] gradient-border relative cursor-pointer">
      <div className="rounded-full size-20 bg-white border-[1px] border-slate-300"></div>
      <div className="flex flex-col items-center gap-y-3">
        <div className="font-Poppins text-2xl font-semibold">{card.title}</div>
        <div className="text-justify font-Poppins text-lg font-normal">
          {card.content}
        </div>
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
