import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";
import aiHands from "../../assets/images/aihands2.png";
import powerbi from "../../assets/images/powerBi.png";
import ds from "../../assets/images/ds.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
    <div className="flex flex-col gap-y-2 relative">
      <div class="w-full overflow-hidden" ref={emblaRef}>
        <div class="flex w-full  gap-x-2 h-[40rem]">
          <div class="w-full flex flex-col items-center rounded-[0.9375rem] [flex:0_0_100%]">
            <div className="flex items-center justify-end gap-x-20 self-stretch">
              <div className="text-9xl pl-10 font-light">
                Unleash the <br /> Power of{" "}
                <span className="font-black">AI</span>{" "}
              </div>
              <div className="h-[40rem]">
                <img src={aiHands} className="h-full w-full" />
              </div>
            </div>
          </div>
          <div class="flex justify-end gap-6 px-10 items-center w-full rounded-[0.9375rem] [flex:0_0_100%]">
            <div className="flex flex-col gap-y-4 items-center">
              <div className="flex flex-col gap-y-6">
                <div className="font-Poppins text-6xl font-semibold inline-block">
                  BI & DATA VISUALIZATION
                </div>
                <div className="font-Poppins text-2xl font-normal">
                  Transforming Complex Information into Compelling insights
                </div>
              </div>
            </div>
            <div className="h-[50rem]">
              {" "}
              <img src={powerbi} className="h-full w-full object-cover" />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center w-full p-8 [flex:0_0_100%] mr-2">
            <div className="flex justify-evenly items-center gap-x-8 self-stretch">
              <div className="h-[30rem]">
                <img src={ds} className="w-full h-full" />
              </div>
              <div className="font-Poppins text-4xl font-normal">
                Navigating Insights & Solutions through <br />
                <span className="text-7xl font-semibold">DATA SCIENCE</span>
                <br />
                Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-x-2 absolute top-2/4">
        <button
          className="hover:opacity-90 px-4 py-2 rounded-full"
          onClick={scrollPrev}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 40 }} />
        </button>
        <button
          className="hover:opacity-90 px-4 py-2 rounded-full"
          onClick={scrollNext}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
        </button>
      </div>
    </div>
  );
}
