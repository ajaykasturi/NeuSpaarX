import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";
import aiHands from "../../assets/images/aihands2.png";
import powerbi from "../../assets/images/powerBi.png";
export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, active: true, align: "center", axis: "x", slidesToScroll: 1 },
    [Autoplay()]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="mx-16 mb-12 flex flex-col gap-y-2">
      <div class="w-full overflow-hidden" ref={emblaRef}>
        <div class="flex w-full  gap-x-2 h-[40rem]">
          <div class="w-full flex flex-col items-center bg-mainBgImg bg-cover bg-no-repeat rounded-[0.9375rem] [flex:0_0_100%] border-2 border-slate-50">
            <div className="flex items-center justify-end gap-x-8 self-stretch grow">
              <div className="text-9xl pl-10 font-light">
                Unleash the <br /> Power of{" "}
                <span className="font-black">AI</span>{" "}
              </div>
              <div className="h-[35rem]">
                <img src={aiHands} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div class="flex justify-center gap-6 px-10 items-center w-full bg-mainBgImg bg-cover bg-no-repeat rounded-[0.9375rem] [flex:0_0_100%] border-2 border-slate-900">
            <div className="flex flex-col gap-y-4">
              <div className="font-Poppins text-5xl font-semibold">
                BI &DATA VISUALIZATION
              </div>
              <div className="font-Poppins text-2xl font-normal">
                Transforming Complex Information into Compelling insights
              </div>
            </div>
            <div className="">
              {" "}
              <img src={powerbi} className="h-full w-full object-cover" />
            </div>
          </div>
          <div class="w-full  border-2 border-slate-900 p-8 [flex:0_0_100%] mr-2">
            Slide 3
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-2">
        <button
          className=" bg-companycolor hover:opacity-90 text-white px-4 py-2 rounded-full"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className=" bg-companycolor hover:opacity-90 text-white px-4 py-2 rounded-full"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
