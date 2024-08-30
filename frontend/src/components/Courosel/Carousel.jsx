import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";
import aiHands from "../../assets/images/aihands2.png";
import powerbi from "../../assets/images/powerBi.png";
import ds from "../../assets/images/ds.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slide1 from "../../assets/slides/slide1.png";
import slide2 from "../../assets/slides/slide2.png";
import slide3 from "../../assets/slides/slide3.png";
export default function Carousel() {
  const slides = [slide1, slide2, slide3];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, active: true, align: "center", axis: "x", slidesToScroll: 1 }
    // [Autoplay()]
  );
  useEffect(() => {
    if (emblaApi) {
      // Access API
    }
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="flex flex-col gap-y-2 relative h-full overflow-hidden">
      <div className="w-full h-full m-1" ref={emblaRef}>
        <div className="flex w-full gap-x-2 h-full">
          {slides.map((slide) => (
            <div
              key={slide}
              className="[flex:0_0_100%] flex justify-center items-center"
            >
              <img src={slide} className="w-full object-contain" />
            </div>
          ))}
          {/* <div className="[flex:0_0_100%] flex justify-center items-center">
            <img src={slide1} />
          </div>
          <div className="[flex:0_0_100%] flex justify-center items-center">
            <img src={slide2} className="w-full h-auto object-contain" />
          </div>
          <div className="[flex:0_0_100%] flex justify-center items-center">
            <img src={slide3} />
          </div> */}
        </div>
      </div>
      <div className="flex w-full justify-between items-center gap-x-2 absolute inset-0">
        <button
          className="hover:opacity-90 p-1 rounded-full w-fit h-fit"
          onClick={scrollPrev}
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          className="hover:opacity-90 p-1 rounded-full w-fit h-fit"
          onClick={scrollNext}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}
