"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How should I start preparing for SSB?",
        answer: `SSB preparation is not about studying more — it’s about improving your personality, thinking, and behaviour under observation.

Most candidates struggle because they don’t get proper feedback on where they are going wrong. Without expert guidance, it becomes difficult to identify and correct these mistakes.

At Brigadier Defence Academy, we train you exactly as per the real SSB process — from Screening to Interview — with continuous feedback and improvement.

👉 The right start is to train under experts who understand SSB selection.`,
    },
    {
        question: "What are the SSB coaching in Dehradun fees?",
        answer: `The SSB coaching fees depend on the program duration and whether accommodation is included:

• 2 Weeks: ₹15,000 (Coaching Only) | ₹20,000 (With Hostel & Food)  
• 3 Weeks: ₹16,000 (Coaching Only) | ₹22,000 (With Hostel & Food)  
• 4 Weeks: ₹17,000 (Coaching Only) | ₹24,000 (With Hostel & Food)`,
    },
    {
        question: "Can we talk to students currently studying in BDA?",
        answer: `Yes, you can speak with students currently preparing at BDA to understand their real experience, training quality, and daily routine.

To connect, call or message us at +91 92860 11916 and we will arrange it for you.`,
    },
    {
        question: "Is there any discount available on SSB coaching in BDA?",
        answer: `Yes, a case-to-case discount is available based on factors like number of attempts, performance, and financial situation.

We also provide limited scholarship support for deserving candidates. Contact our team to check eligibility.`,
    },
    {
        question: "Can a fresher crack SSB?",
        answer: `Absolutely. With the right guidance and practice, many freshers get recommended in their first attempt.`,
    },
    {
        question: "Is coaching really required for SSB?",
        answer: `Not mandatory — but structured training and expert feedback significantly improve your chances.`,
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f5f7fa] py-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* HEADING */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B4D] text-center mb-10">
                    Frequently Asked Questions
                </h2>

                {/* ACCORDION */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-blue-200 rounded-xl overflow-hidden bg-white"
                        >

                            {/* QUESTION */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center px-5 py-4 text-left bg-[#e6f0ff]"
                            >
                                <span className="font-semibold text-[#0D2B4D]">
                                    Q.{index + 1} - {faq.question}
                                </span>

                                <span className="text-lg">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {/* ANSWER */}
                            <div
                                className={`transition-all duration-300 px-5 ${openIndex === index
                                        ? "max-h-[500px] py-4"
                                        : "max-h-0 overflow-hidden"
                                    }`}
                            >
                                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}