"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const videos = [
  "/video/1.mp4",
  "/video/2.mp4",
  "/video/3.mp4",
];

const images = [
  "/images/review1.png",
  "/images/review2.png",
  "/images/review3.png",
  "/images/review4.png",
  "/images/review5.png",
];

export default function TestimonialSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 400;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#d7e6eb] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B4D]">
            Don’t Take Our Word For It{" "}
            <span className="text-yellow-500">
              Hear It From Recommended Candidates
            </span>
          </h2>

          <p className="mt-3 text-gray-600">
            Real stories. Real struggles. Real recommendations.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            
            {/* VIDEOS FIRST */}
            {videos.map((src, index) => (
              <div
                key={`video-${index}`}
                className="min-w-[280px] md:min-w-[350px] h-[280px] md:h-[300px] rounded-xl overflow-hidden"
              >
                <video
                  src={src}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* IMAGES AFTER */}
            {images.map((src, index) => (
              <div
                key={`image-${index}`}
                className="min-w-[380px] md:min-w-[450px] h-[240px] md:h-[300px] rounded-xl overflow-hidden group"
              >
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}

          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}