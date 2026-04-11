"use client";

import Image from "next/image";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const resultsData = [
    {
        name: "Anurudh Bakshi",
        entry: "NDA",
        score: "15",
        image: "/images/Anurudh.jpg",
    },
    {
        name: "Anirudh Bakshi",
        entry: "CDS",
        score: "Recommended",
        image: "/images/Anand.jpg",
    },
    {
        name: "Tanvi Gupta",
        entry: "NDA",
        score: "22+",
        image: "/images/image2.jpg",
    },
    {
        name: "Tanvi Gupta",
        entry: "NDA",
        score: "22+",
        image: "/images/kartik.jpg",
    },
    {
        name: "Tanvi Gupta",
        entry: "NDA",
        score: "22+",
        image: "/images/khushi.jpg",
    },
    {
        name: "Tanvi Gupta",
        entry: "NDA",
        score: "22+",
        image: "/images/tanvi.jpg",
    },
];

export default function ResultsSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;

        const scrollAmount = 350;

        current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Results That Speak for Themselves
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Every year, our students consistently make it to the final
                        recommendation list across multiple SSB boards.
                    </p>
                </div>

                {/* SLIDER WRAPPER */}
                <div className="relative">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
                    >
                         <FiChevronLeft size={24} />
                    </button>

                    {/* SLIDER */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                    >
                        {resultsData.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[280px] md:min-w-[350px] group relative rounded-2xl overflow-hidden shadow-lg"
                            >
                                <div className="relative h-[560px] md:h-[680px] w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-2xl transition"></div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}