"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { BedDouble, Bath, WavesLadder, Car, Bed, ArrowRight, ArrowLeft } from "lucide-react";

const wines = [
  {
    image: "/assets/Image/Carousel/unit/floor1.jpeg",
    name: "Wine Relax: red semi-sweet",
    price: "1st Floor",

    list:[

      'Terace',
      'Dining Room',
      'Kitchen',
      'Toilet',
      'Living Room',
      'Swimming Pool'

    ]
  },
  {
    image: "/assets/Image/Carousel/unit/floor2.jpeg",
    name: "Wine Relax: red semi-sweet",
    price: "2nd Floor",
    list:[

      'Bedroom',
      'Bedroom 2',
      'Bathroom',
      'Master Bathroom',
      'Master Bedroom'

    ]
  },
  {
    image: "/assets/Image/Carousel/unit/floor3.jpeg",
    name: "Wine Relax: red semi-sweet",
    price: "3rd Floor",
    list:[

      'Maid`s Room',
      'Laundry & Yard',
      'Bathroom',
      'Study Room',

    ]
  },
];

const menuItems = [

  { name: "3+1 Bedrooms", icon: <BedDouble size={30} /> },
  { name: "2 Bathrooms 1 toilet",  icon: <Bath size={30} /> },
  { name: "Swimming pool", icon: <WavesLadder size={30} /> },
  { name: "Maid's quarter", icon: <Bed size={30} /> },
  { name: "2 Carports", icon: <Car size={30} /> },

];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideWidth = 350; // Width per slide (px)
  const maxIndex = wines.length - 1;

  const next = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (

    <div className="space-y-5">

        <div className="flex flex-col md1:flex-row gap-2 bg-[#a48f6c] text-white min-h-screen  px-3 hp2:px-4 md2:px-10 py-16">

          {/* Left Section */}
          <div className="w-full max-w-[50rem] flex flex-col justify-between ">
            <div>
              <h1 className="text-2xl md2:text-4xl font-light leading-tight mb-6">
                Now<br />
                <p className="text-2xl md2:text-4xl ">10 Exclusive Units Available</p>
              </h1>
              <p className="text-sm md2:text-md text-white/70 mb-6">
                Savoy Residences offers more than just a home— it delivers a statement of modern luxury. Each 3-storey townhouse is equipped with a private swimming pool, expansive open-plan living and dining areas, and premium finishes that highlight quality in every detail.

              </p>
              <p className="text-sm md2:text-md text-white/70 mb-6">
                Designed for families who appreciate both style and practicality, every corner of the home is built to support your dynamic lifestyle. From daily routines to weekend gatherings, experience a space that looks refined, feels spacious, and functions beautifully.
              </p>
              <button className="text-[11px] md2:text-[15px] border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#a48f6c] transition">
                View more
              </button>

              <div className="w-full flex-center mb-2">
                  
              {wines[currentIndex].list && (
                <div
                  key={currentIndex} // <== ini bikin div remount dan animasi ulang
                  className="mt-10 w-full max-w-[45rem] flex flex-col md:flex-col justify-center sm:justify-start items-center sm:items-start"
                >
                  <h2 className="font-semibold mb-5 text-[18px] hp2:text-left">Facilities</h2>
                  <div className="flex flex-wrap justify-center gap-4 text-sm  opacity-0 translate-y-[-20px] animate-fadeSlideDown">
                    {wines[currentIndex].list.map((item, idx) => (
                      <p key={idx} className="p-1 px-2 hp1:p-2 text-[10px] md:text-[13px] border-gray-200  border-[1px] rounded-3xl">{item}</p>
                    ))}
                  </div>
                </div>
              )}


              </div>

            </div>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-[26rem] relative overflow-hidden ">
            {/* Track */}
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`,
              }}
            >
              {wines.map((wine, idx) => (
                <div
                  key={idx}
                  className="min-w-[350px] flex flex-col items-center text-center px-4 "
                >
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    width={250}
                    height={500}
                    className="mb-6 rounded-lg"
                  />
                  {/* <h3 className="text-base font-light">{wine.name}</h3> */}
                  <p className="text-sm mt-1">{wine.price}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={clsx(
                "absolute left-[2rem] bottom-[.5rem] -translate-y-1/2 bg-white/30 text-[#a17d41] w-10 h-10 rounded-full flex items-center justify-center shadow-lg font-semibold",
                currentIndex === 0 && "opacity-50 cursor-not-allowed"
              )}
            >
              <ArrowLeft />
            </button>

            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className={clsx(
                "absolute right-[6rem] bottom-[.5rem] -translate-y-1/2 bg-white/30 text-[#a17d41] w-10 h-10 rounded-full flex items-center justify-center shadow-lg font-semibold",
                currentIndex === maxIndex && "opacity-50 cursor-not-allowed"
              )}
            >
              <ArrowRight />
            </button>
          </div>
        </div>


        <div className="flex flex-col  gap-2 md2:gap-10  min-h-screen px-2 md2:px-10 py-16 text-[#a17d41]">

            <div className=" mb-8 ">
              
              <h1 className="mb-10 font-bold text-3xl">Floor Plan</h1>

              <div className="flex flex-col md1:flex-row justify-around gap-5 text-[#be954d]">

                <figure className="w-full max-w-[20rem] flex justify-start md1:justify-center md1:items-center gap-8 text-[17px] md1:text-[19px] font-semibold">

                  <div className="">
                      <h1 className=""> Land Area </h1>
                      <p className="text-[12px] text-gray-500"> 113 - 155 sqm </p>
                  </div>

                  <div className="">
                      <h1 className=""> Building Area </h1>
                      <p className="text-[12px] text-gray-500"> 142 sqm </p>
                  </div>

                </figure>

                <div>

                  <nav className=" flex flex-wrap mt-4 gap-2 text-gray-500 text-[10px] md1:text-[13px]">
                    {menuItems.map((item) => {
                      return (
                        <div
                          key={item.name}
                          className={`flex flex-col justify-center text-center items-center gap-3 px-2 md1:px-4 py-2 mx-2 rounded-lg font-medium  transition-all duration-500`}
                        >
                          {item.icon}
                          {item.name}
                        </div>
                      );
                    })}
                  </nav>
                  
                </div>

              </div>

            </div>

            {/* Track */}
            <div
              className="flex-center "
          
            >
              {wines.map((wine, idx) => (
                <div
                  key={idx}
                  className="max-w-[350px] flex flex-col items-center text-center px-4"
                >
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    width={250}
                    height={500}
                    className="mb-6"
                  />
                  {/* <h3 className="text-base font-light">{wine.name}</h3> */}
                  <p className="text-sm mt-1 ">{wine.price}</p>
                </div>
              ))}
            </div>

        </div>

    </div>

  );
}
