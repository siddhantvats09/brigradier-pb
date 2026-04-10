"use client";

import { useState } from "react";

const data = [
    {
        title: "01. We Train You to Clear Screening",
        points: [
            "Detailed understanding of the screening procedure",
            "PPDT practice",
            "Dedicated doubt sessions",
            "Story writing practice",
            "Group discussion with feedback",
            "OIR test practice",
            "CBT pattern introduction",
            "Decision-making & time-bound tests",
            "Situational judgement practice",
        ],
    },
    {
        title: "02. We Build Your Psychological Strength",
        points: [
            "Detailed session on PIQ (Personal Information Questionnaire)",
            "Guidance on proper PIQ form filling",
            "TAT explanation with story writing practice",
            "Practice sessions for effective story writing",
            "TAT practice tests with group discussions",
            "WAT explanation and practice",
            "SRT explanation and practice",
            "Self-Description guidance with practice",
        ],
    },
    {
        title: "03. We Develop Your GTO Performance",
        points: [
            "Introduction to group testing techniques",
            "Lecture sessions on Group Discussion (GD)",
            "GD topics practice with guided discussions",
            "Group Planning Exercise (GPE) explanation and practice",
            "Progressive Group Tasks (PGT) practice",
            "Half Group Task (HGT) overview and execution",
            "Command Task (CT) practice sessions",
            "Guidance on Group Obstacles Race",
            "Lecturette and Individual Obstacles practice",
            "Final Group Task and Conference overview",
        ],
    },
    {
        title: "04. We Prepare You for the Final Interview",
        points: [
            "Overview of personal interview process",
            "Guidance on answering PIQ-based questions",
            "Practice sessions for common interview questions",
            "One-to-one mock interview sessions",
            "Feedback on communication, confidence & clarity",
            "Tips to handle stress and tricky questions",
            "Understanding conference round procedure",
            "Preparation for final board interaction",
        ],
    },
];

export default function SSBAccordion() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f5f7fa] py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* HEADING */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0D2B4D]">
                        We Don’t Teach SSB.{" "}
                        <span className="text-yellow-500">We Simulate It.</span>
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our training is designed to replicate the exact SSB experience,
                        so you are never facing it for the first time.
                    </p>
                </div>

                {/* ACCORDION */}
                <div className="space-y-5">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                        >

                            {/* HEADER */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="font-semibold text-[#0D2B4D]">
                                    {item.title}
                                </span>

                                <span className="text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {/* CONTENT */}
                            <div
                                className={`transition-all duration-300 px-5 ${openIndex === index
                                    ? "max-h-[600px] pb-6"
                                    : "max-h-0 overflow-hidden"
                                    }`}
                            >
                                <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-yellow-500 mt-1">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contactssb">


                                    <button className="mt-6 cursor-pointer bg-[#0D2B4D] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#0a223d] transition">
                                        Know More About the Course
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}