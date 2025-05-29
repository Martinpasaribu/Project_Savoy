"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const wines = [
  {
    image: "/assets/Image/Carousel/unit/floor1.jpeg",
    name: "Wine Relax: red semi-sweet",
    price: "€143",
  },
  {
    image: "/assets/Image/Carousel/unit/floor2.jpeg",
    name: "Wine Relax: red semi-sweet",
    price: "€143",
  },
  {
    image: "/assets/Image/Carousel/unit/floor3.jpeg",
    name: "Wine Relax: red semi-sweet",
    price: "€143",
  },
  
];

export default function WineCarousel() {
  const nextRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      nextRef.current &&
      prevRef.current &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="flex bg-[#a48f6c] text-white min-h-screen px-10 py-16">
      {/* Left Text Section */}
      <div className="w-1/3 flex flex-col justify-between pr-10">
        <div>
          <h1 className="text-5xl font-light leading-tight mb-6">
            Just relax,<br />
            and go with the flow
          </h1>
          <p className="text-sm text-white/70 mb-6">
            Delicious Georgian cuisine in a historical place of Batumi. Order home.
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#a48f6c] transition">
            View more
          </button>
        </div>
        <div className="mt-20">
          <h2 className="text-sm">Come to the wine-tasting</h2>
          <p className="text-xs text-white/60 mt-1">
            Only on June 1 there will be a tasting of our new wines in Tbilisi.
          </p>
          <button className="mt-4 border border-white px-4 py-1 text-xs rounded-full">
            Read more
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-2/3 relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1.5}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
        >
          {wines.map((wine, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center px-4">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  width={250}
                  height={500}
                  className="mb-6"
                />
                <h3 className="text-base font-light">{wine.name}</h3>
                <p className="text-sm mt-1">{wine.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev Button */}
        <div
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white text-red-700 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer text-sm font-semibold z-50 shadow-lg"
        >
          Prev
        </div>

        {/* Custom Next Button */}
        <div
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white text-red-700 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer text-sm font-semibold z-50 shadow-lg"
        >
          Next
        </div>
      </div>
    </div>
  );
}
