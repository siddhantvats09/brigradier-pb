import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-[80vh] relative">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/images/homepage.jpg" // replace with your image path
                alt="Hero Banner"
                fill
                priority
                className="object-cover"
            />

            {/* OPTIONAL OVERLAY (for better readability if you add text later) */}
            <div className="absolute inset-0 bg-black/20"></div>

        </section>
    );
}