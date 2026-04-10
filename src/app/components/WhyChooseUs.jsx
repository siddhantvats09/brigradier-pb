export default function WhyChooseUs() {
    const points = [
        "We don’t just prepare you for SSB — we prepare you the way SSB assesses you.",
        "Mentorship by ex-SSB assessors & defence officers",
        "Real GTO ground practice, not classroom theory",
        "1:1 personalised feedback on psychology & interview",
        "Small batch sizes for individual attention",
        "Complete SSB environment simulation",
    ];

    return (
        <section className="w-full bg-[#f5f7fa] py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* TOP CTA TEXT */}
                <div className="text-center mb-8">
                    <p className="text-lg md:text-xl text-gray-700">
                        Don’t make the same mistake.{" "}
                        <span className="font-semibold text-[#0D2B4D]">
                            Join BDA for the Best SSB preparation.
                        </span>
                    </p>
                    <a href="#contactssb">


                        <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium transition">
                            Join Now
                        </button>
                    </a>
                </div>

                {/* HEADING */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B4D] text-center mb-10">
                    Why Serious Aspirants Choose Us?
                </h2>

                {/* BOX */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-10">
                    <ol className="space-y-5 text-gray-800 text-base md:text-lg">
                        {points.map((point, index) => (
                            <li key={index} className="flex gap-4">

                                {/* NUMBER */}
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#0D2B4D] text-white font-semibold text-sm">
                                    {index + 1}
                                </span>

                                {/* TEXT */}
                                <p className="leading-relaxed">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>

            </div>
        </section>
    );
}