import Image from "next/image";

export default function SelectionBanner() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-3xl md:text-5xl font-bold text-[#0D2B4D] leading-tight">
                    All-time <span className="text-yellow-500">Highest Selection</span>{" "}
                    among all SSB Academies in Dehradun
                </h2>

                {/* SUB HEADING */}
                <div className="mt-4 flex flex-col items-center">
                    <div className="w-24 h-[2px] bg-yellow-500 mb-3"></div>
                    <p className="text-gray-700 font-medium">
                        96% Selection Ratio in SSB Screening
                    </p>
                </div>

                {/* IMAGE BANNER */}
                <div className="mt-10 relative w-full h-[200px] md:h-[580px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/nda00.jpg" // replace with your image
                        alt="SSB Selections"
                        fill
                        className="object-cover"
                    />

                    {/* OPTIONAL OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}