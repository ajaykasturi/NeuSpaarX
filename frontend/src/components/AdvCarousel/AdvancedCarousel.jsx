import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function AdvancedCarousel({
  children: slidesOrg,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const slides = [...slidesOrg];
  const [currIndex, setCurrIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrIndex((curr) => (curr === 0 ? slides.length - 2 : curr - 1));
  };
  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrIndex((curr) => (curr === slides.length - 1 ? 1 : curr + 1));
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currIndex === slides.length - 1) {
      setCurrIndex(1);
    } else if (currIndex === 0) {
      setCurrIndex(slides.length - 2);
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      next();
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next]);
  return (
    <div className="overflow-hidden relative min-[375px]:w-[19.6rem] min-[375px]:h-[14.7rem] min-[500px]:w-[22.4rem] min-[500px]:h-[16.8rem] min-[560px]:w-[25.2rem] min-[560px]:h-[18.9rem]  sm:w-[18rem] sm:h-[14rem] md:w-[19.6rem] md:h-[14.7rem] min-[800px]:w-[22.4rem] min-[800px]:[16.8rem] min-[900px]:w-[25.2rem] min-[900px]:h-[18.9rem] xl:h-[21rem] xl:w-[28rem]">
      <>
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            isTransitioning ? "transition-transform duration-500 ease-out" : ""
          }`}
          style={{ transform: `translateX(-${currIndex * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <button onClick={prev} className=" text-gray-800">
            <ChevronLeft size={30} />
          </button>
          <button onClick={next} className=" text-gray-800">
            <ChevronRight size={30} />
          </button>
        </div>
      </>
    </div>
  );
}

export default AdvancedCarousel;
