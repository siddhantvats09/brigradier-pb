import Image from "next/image";

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

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-8">
                    {resultsData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden shadow-lg"
                        >
                            {/* IMAGE */}
                            <div className="relative h-[620px] md:h-[680px] w-full">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>



                            {/* HOVER EFFECT */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-2xl transition"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}