import Image from "next/image";

const images = [
    "/images/image-11.webp",
    "/images/image-12.webp",
    "/images/image-13.webp",
    "/images/image-14.webp",
    "/images/image-15.webp",
];

export default function GallerySectionV2() {
    return (
        <section className="w-full bg-[#f2f2f2] py-14 px-4">
            <div className="max-w-6xl mx-auto">

                {/* OUTER BORDER BOX */}
                <div className="border border-gray-400 rounded-md px-6 md:px-10 py-10 bg-white">

                    {/* HEADING */}
                    <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#0D2B4D] leading-snug">
                        Real Simulation{" "}
                        <span className="text-yellow-500 font-bold">
                            Ground Practice
                        </span>{" "}
                        With GTO
                    </h2>

                    {/* IMAGES ROW */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative w-full h-[130px] md:h-[160px] rounded-lg overflow-hidden group"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery ${index + 1}`}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />

                                {/* subtle overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}