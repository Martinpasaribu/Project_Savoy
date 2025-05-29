"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/assets/Image/Carousel/application.png",
    text: `"Public's Favorite Online Transportation App"...`,
  },
  {
    img: "/assets/Image/Carousel/ecommerce.png",
    text: `Integrated Public Transport with PT KCI...`,
  },
  {
    img: "/assets/Image/Carousel/education.png",
    text: `The first company in Southeast Asia...`,
  },
  {
    img: "/assets/Image/Carousel/Portofolio.png",
    text: `And more company insights...`,
  },
  {
    img: "/assets/Image/Carousel/Tools.png",
    text: `Continued success and recognition...`,
  },
];

export default function CarouselProduct() {
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
    <div className="py-10 absolute -top-[8rem] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  relative justify-between items-center mb-4">
          {/* Prev button */}
          <div className=" absolute left-0 bottom-[8rem] w-full max-w-[5rem] flex justify-end">
            <button
              onClick={prev}
              className="bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full z-10 disabled:opacity-30"
              disabled={current === 0}
            >
              &lt;
            </button>
          </div>

          {/* Slide wrapper */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 gap-2 sm:gap-6"
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="bg-transparent w-[10rem] rounded-3xl p-2 sm:p-6 text-center shrink-0"
                  style={{ minWidth: `${100 / visibleCount}%` }}
                >
                  <div className="flex justify-center">
                    <Image
                      src={slide.img}
                      alt={`slide-${index}`}
                      width={150}
                      height={150}
                      className="object-contain transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <p className="mt-4 text-sm text-white">{slide.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <div className="absolute right-0 bottom-[8rem] w-full max-w-[5rem] flex justify-start">
            <button
              onClick={next}
              className="w-full max-w-[2.5rem] bg-white shadow-md h-10 flex items-center justify-center rounded-full z-10 disabled:opacity-30"
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
