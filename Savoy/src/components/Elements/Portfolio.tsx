"use client";
import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "CANVA",
    category: "Design",
    image: "/assets/Image/Carousel/ecommerce.png",
    year: "2023",
  },
  {
    title: "LIVINGROOM",
    category: "Interior",
    image: "/assets/Image/Carousel/education.png",
    year: "2023",
  },
  {
    title: "AR",
    category: "Tech",
    image: "/assets/Image/Carousel/education.png",
    year: "2023",
  },
  {
    title: "ZOOM",
    category: "Web",
    image: "/assets/Image/Carousel/ecommerce.png",
    year: "2023",
  },
];

const categories = ["All", "Web", "Design", "Interior", "Tech"];

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-medium text-blue-500 bg-blue-100 inline-block px-3 py-1 rounded-full mb-4">
          Work
        </p>
        <h2 className="text-3xl font-bold mb-6">
          Our Work <span className="text-blue-600">Portfolio</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm px-4 py-2 rounded-full ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] flex-shrink-0  overflow-hidden  hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-[250px] overflow-hidden rounded-2xl shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-4 text-left">
                <h3 className="font-bold text-md text-blue-600">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.category} – {item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
