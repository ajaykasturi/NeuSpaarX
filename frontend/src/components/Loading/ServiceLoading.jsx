import React from "react";

function ServiceLoading() {
  return (
    <div className="animate-pulse flex flex-col border min-h-dvh border-blue-300 shadow rounded-md p-4 m-1 relative items-center">
      <div className="bg-slate-50 rounded flex justify-between px-10 py-2 w-full">
        <div className="grow">
          <div className="rounded-full bg-slate-200 size-[5rem]"></div>
        </div>
        <nav className="flex gap-x-2 justify-center items-center grow-[4]">
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
          <div className="h-16 bg-slate-200 rounded-full w-full"></div>
        </nav>
      </div>
      <div className="animate-pulse grid grid-cols-1   sm:grid sm:grid-cols-2 items-center justify-items-center grow  gap-8 sm:pb-10 mx-[4vw]  w-full">
        <div className="flex flex-col gap-y-3 items-center sm:items-start  w-full pl-10 h-full justify-center">
          <div className="text-[#1B2C59] flex flex-col gap-y-2 items-start  w-full">
            <div className="h-16 bg-slate-200 rounded max-w-md w-full"></div>
            <div className="h-8 bg-slate-200 rounded  w-full"></div>
          </div>
          <div className="w-full">
            <div className="h-16 bg-slate-200 rounded max-w-60 w-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2  w-full h-full p-2 items-center justify-center overflow-hidden">
          {Array.from({ length: 15 }, (_, index) => (
            <div key={index} className="h-5 bg-slate-200 rounded w-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceLoading;
