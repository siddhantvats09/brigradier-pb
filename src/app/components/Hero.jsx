import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative">
      <div className="hidden md:block relative h-[100vh] w-full">
        <Image
          src="/images/homepage.jpg"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="block md:hidden w-full">
        <Image
          src="/images/homepage.jpg"
          alt="Hero Banner"
          width={1200}
          height={800}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

    
      <div className="hidden md:block absolute inset-0 bg-black/20"></div>

    </section>
  );
}