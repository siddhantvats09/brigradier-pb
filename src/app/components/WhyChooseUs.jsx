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

        {/* TOP CTA */}
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

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="group bg-[#0D2B4D] rounded-xl p-5 flex gap-4 items-start shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              {/* NUMBER */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500 text-black font-bold text-sm">
                {index + 1}
              </div>

              {/* TEXT */}
              <p className="text-white font-bold text-base leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}