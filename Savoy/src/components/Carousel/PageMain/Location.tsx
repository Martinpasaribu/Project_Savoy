"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/assets/Image/Carousel/Location/rs_drSuyoto.png",
    title: "RS dr. Suyoto",
    subtitle: "8 Mins",
  },
  {
    image: "/assets/Image/Carousel/Location/rsud.png",
    title: "RSUD Pesanggrahan",
    subtitle: "20 Mins",
  },
  {
    image: "/assets/Image/Carousel/Location/pondok_indah.png",
    title: "Pondok Indah Mall",
    subtitle: "18 Mins",
},
  {
    image: "/assets/Image/Carousel/Location/gandaria_city.png",
    title: "Gandaria City",
    subtitle: "16 Mins",
  },
  {
    image: "/assets/Image/Carousel/Location/sport_soccer.png",
    title: "Soccer Chief",
    subtitle: "5 Mins",
  },
  {
    image: "/assets/Image/Carousel/Location/golf.png",
    title: "Pondok Indah Padang Golf",
    subtitle: "15 Mins",
  },
  {
    image: "/assets/Image/Carousel/Location/mrt.png",
    title: "MRT Lebak Bulus",
    subtitle: "10 Mins",
  },
  {
    image: "/assets/Image/Carousel/Location/tol_veteran.png",
    title: "Gerbang Tol Veteran",
    subtitle: "5 Mins",
  },
];

export default function CarouselLocation() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        speed={1000}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }}
        className="rounded-3xl overflow-hidden"
      >
        <div
          slot="container-start"
          className="absolute inset-0 bg-gray-900"
          data-swiper-parallax="-23%"
        >
          {/* Optional background overlay */}
        </div>

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[400px] w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover"
                data-swiper-parallax="30%"
              />
              <div className="absolute inset-0 bg-black/20 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center  h-full text-center text-white px-6">
                <h2
                  className="text-4xl md:text-4xl font-bold pt-[15rem]"
                  data-swiper-parallax="-300"
                >
                  {slide.title}
                </h2>
                <p
                  className="text-lg md:text-xl"
                  data-swiper-parallax="-100"
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>


          </SwiperSlide>
        ))}

        <style jsx global>{`
        .swiper-pagination-bullet {
            background-color: #665B48FF; /* Warna default */
            opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
            background-color: #D4C38BFF; /* Warna saat aktif */
            opacity: 1;
        }
        `}</style>

        <div className="swiper-button-next !text-[#a48f6c] hover:!text-[#b0925f]" />
        <div className="swiper-button-prev !text-[#a48f6c] hover:!text-[#b0925f]" />
        
      </Swiper>
    </div>
  );
}
