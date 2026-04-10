"use client";

import { useState } from "react";

const testimonials = [
    {
        video: "/video/1.mp4",
        name: "Anand Choudhary",
        review:
            "The training experience was excellent. The structured guidance helped me clear SSB with confidence.",
    },
    {
        video: "/video/2.mp4",
        name: "Tanvi Gupta",
        review:
            "Amazing mentors and real SSB simulation. It felt like I was already prepared before the actual interview.",
    },
    {
        video: "/video/3.mp4",
        name: "Anirudh Bakshi",
        review:
            "Best decision I made. The feedback and practice sessions made a huge difference.",
    },
];

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const { video, name, review } = testimonials[current];

    return (
        <section className="w-full bg-[#d7e6eb] py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B4D]">
                    Don’t Take Our Word For It.{" "}
                    <span className="text-yellow-500">
                        Hear It From Recommended Candidates
                    </span>
                </h2>

                <p className="mt-3 text-gray-600">
                    Real stories. Real struggles. Real recommendations.
                </p>

                {/* SLIDER */}
                <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 md:p-10 relative">

                    <div className="grid md:grid-cols-2 gap-8 items-center">

                        {/* LEFT VIDEO */}
                        <div className="w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                            <video
                                src={video}
                                controls
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="text-left">

                            {/* STARS */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-xl">★</span>
                                ))}
                            </div>

                            {/* REVIEW */}
                            <p className="text-gray-700 text-lg leading-relaxed">
                                “{review}”
                            </p>

                            {/* NAME */}
                            <h4 className="mt-6 font-semibold text-[#0D2B4D] text-xl">
                                {name}
                            </h4>
                        </div>
                    </div>

                    {/* ARROWS */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
                    >
                        ◀
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
                    >
                        ▶
                    </button>

                    {/* DOTS */}
                    <div className="flex justify-center mt-6 gap-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-[#0D2B4D]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}