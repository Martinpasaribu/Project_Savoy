"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";


export default function PromoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPromo");
    if (!hasSeenPopup) {
      setTimeout(() => {
        setShow(true);
      }, 1000); // delay 1 detik
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenPromo", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]">
     

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative p-6 md:flex">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleClose}
        >
          <X />
        </button>

        {/* Left Side (Image) */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/assets/Image/promo/promo2.jpeg"
            alt="Promo"
            width={400}
            height={400}
            className="rounded-l-lg object-cover h-full"
          />
        </div>

        {/* Right Side (Text) */}
        <div className="md:w-1/2 md:pl-4 text-center md:text-left">
          <p className="text-sm text-gray-500 font-semibold">ONLY TODAY!</p>
          <h2 className="text-3xl font-bold text-gray-900 my-2">30% OFF</h2>
          <p className="text-[#a07c40] text-[12px] mb-4 text-sm">
            Free 3 Unit AC,<br />
            {/* Gold 1 Kg<br /> */}
            Goat 2 tead
          </p>
          <button className="bg-[#a07c40] text-[12px] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Claim Now
          </button>
        </div>
      </div>

    </div>
  );
}
