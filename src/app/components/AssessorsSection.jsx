import Image from "next/image";

export default function AssessorsSection() {
    return (
        <section className="w-full bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Learn from{" "}
                    <span className="text-yellow-500">
                        ex-SSB Assessors
                    </span>{" "}
                    from Bhopal & Allahabad boards
                </h2>

                {/* IMAGE */}
                <div className="mt-10 relative w-full h-[260px] md:h-[450px] rounded-xl overflow-hidden">
                    <Image
                        src="/images/ssb.jpeg"
                        alt="SSB Assessors"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* CTA SECTION */}
                <div className="mt-12 bg-[#0D2B4D] rounded-2xl p-8 md:p-12 shadow-xl">

                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Next Batch <span className="text-yellow-400">Filling Fast</span>
                    </h3>

                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Don’t wait for another attempt. Start preparing the right way.
                    </p>

                    <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition">
                        Reserve Your Seat Now
                    </button>
                </div>

            </div>
        </section>
    );
}