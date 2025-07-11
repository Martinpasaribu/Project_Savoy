"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/assets/Image/Carousel/Item_Product/dining_room.png",
    text: `Dining Room`,
  },
  {
    img: "/assets/Image/Carousel/Item_Product/bedroom.jpg",
    text: `Master Bedroom`,
  },
 
  {
    img: "/assets/Image/Carousel/Item_Product/kitchen.jpg",
    text: `Kitchen`,
  },
  
  {
    img: "/assets/Image/Carousel/Item_Product/sitting_room.jpg",
    text: `Living room`,
  },
  {
    img: "/assets/Image/Carousel/Item_Product/extra_space2.jpg",
    text: `Home Office or Study room`,
  },
  {
    img: "/assets/Image/Carousel/Item_Product/swiming_pool.jpg",
    text: `Private pool`,
  },

];

export default function CarouselItemProduct() {
  const [current, setCurrent] = useState(0);
  const visibleCount = useResponsiveCount();

  const next = () => {
    if (current + visibleCount < slides.length) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // Reset current if out of bound after resize
  useEffect(() => {
    if (current + visibleCount > slides.length) {
      setCurrent(0);
    }
  }, [visibleCount]);

  return (

    <div className="absolute top-2 overflow-hidden w-full pt-[2rem] md:mt-[3rem]">

      <div className="max-w-6xl mx-auto px-4 ">

        <div className="flex relative justify-center items-center ">

          {/* Prev button */}
          <div className=" absolute left-0 bottom-[1rem] w-full max-w-[5rem] flex justify-center">
            <button
              onClick={prev}
              className="w-full max-w-[2.5rem] bg-[#cbc5bb] text-white shadow-md h-10 flex items-center justify-center rounded-full z-10 disabled:opacity-30"
              disabled={current === 0}
            >
              &lt;
            </button>
          </div>

          {/* Slide wrapper */}
          <div className="overflow-hidden w-full ">
            <div
              className="flex transition-transform duration-500 gap-2 sm:gap-2 p-1"
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full max-w-[20rem] flex-center flex-col rounded-3xl p-2 sm:p-4 text-center shrink-0 bg-white/10 shadow-sm dark:bg-[rgb(238,238,238)] backdrop-blur border-[1px] border-[#cdba9a] card-responsive"
                  style={{ '--visible-count': visibleCount } as React.CSSProperties}
                >
                  <div className="flex justify-center items-center w-full h-[18rem] max-w-[25rem]">
                    <Image
                      src={slide.img}
                      alt={`slide-${index}`}
                      width={500}
                      height={500}
                      className=" transition-transform duration-300 transform hover:scale-110 h-[16rem]"
                    />
                  </div>

                  <p className="mt-4 text-sm text-white">{slide.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <div className="absolute right-0 bottom-[1rem] w-full max-w-[5rem] flex justify-center">
            <button
              onClick={next}
              className="w-full max-w-[2.5rem] bg-[#cbc5bb] text-white shadow-md h-10 flex items-center justify-center rounded-full z-10 disabled:opacity-30"
              disabled={current + visibleCount >= slides.length}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-slate-50" : "bg-gray-300"
              } transition-colors duration-300`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

// Hook untuk menentukan jumlah slide yang terlihat berdasarkan lebar layar
function useResponsiveCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 640) setCount(1);       // Mobile
      else if (width < 1024) setCount(2); // Tablet
      else setCount(3);                   // Desktop
    };

    updateCount(); // set initial value
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return count;
}