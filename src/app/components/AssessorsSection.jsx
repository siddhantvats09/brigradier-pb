import Image from "next/image";

export default function AssessorsSection() {
  return (
    <section className="w-full bg-[#ffffff] py-20 px-4 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 "></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          Learn from{" "}
          <span className="text-yellow-400">
            ex-SSB Assessors
          </span>{" "}
          from Bhopal & Allahabad boards
        </h2>

        {/* CARDS */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="group bg-[#000000] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition duration-300">
            
            <div className="relative w-full h-[420px]">
              <Image
                src="/images/image14.png"
                alt="Brig. G.S. Sisodia"
                fill
                className="object-cover"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
            </div>

            <div className="p-6 text-left">
              <h3 className="font-bold text-xl text-white">
                BRIG. G.S. SISODIA
              </h3>

              <p className="text-sm text-yellow-400 font-semibold mt-1">
                26/11 HERO | GTO EXPERT
              </p>

              <p className="mt-4 text-gray-200 text-sm font-medium">
                Battle Proven Leader
              </p>
              <p className="text-gray-200 text-sm font-medium">
                GTO & Outdoor Tasks
              </p>

              {/* STRIP */}
              <div className="mt-6 bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg flex justify-center group-hover:scale-105 transition">
                Elite SSB Mentor
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-[#000000] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition duration-300">
            
            <div className="relative w-full h-[420px]">
              <Image
                src="/images/image13.png"
                alt="Col. R. Rana"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
            </div>

            <div className="p-6 text-left">
              <h3 className="font-bold text-xl text-white">
                COL. R. RANA (Retd.)
              </h3>

              <p className="text-sm text-yellow-400 font-semibold mt-1">
                VETERAN PSYCHOLOGIST
              </p>

              <p className="mt-4 text-gray-200 text-sm font-medium">
                Psychology & PI Expert
              </p>
              <p className="text-gray-200 text-sm font-medium">
                5000+ SSB Selections
              </p>

              <div className="mt-6 bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg flex justify-center group-hover:scale-105 transition">
                5000+ Selections Guided
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-[#000000] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition duration-300">
            
            <div className="relative w-full h-[420px]">
              <Image
                src="/images/image12.png"
                alt="Col. Subhrant Shanker"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
            </div>

            <div className="p-6 text-left">
              <h3 className="font-bold text-xl text-white">
                COL. SUBHRANT SHANKER (Retd.)
              </h3>

              <p className="text-sm text-yellow-400 font-semibold mt-1">
                INTERVIEWING OFFICER
              </p>

              <p className="mt-4 text-gray-200 text-sm font-medium">
                Personal Interview
              </p>
              <p className="text-gray-200 text-sm font-medium">
                Board Strategy Expert
              </p>

              <div className="mt-6 bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg flex justify-center group-hover:scale-105 transition">
                Interview Specialist
              </div>
            </div>
          </div>

        </div>

        {/* CTA (UNCHANGED STYLE BUT ADAPTED TO DARK BG) */}
        <div className="mt-16 bg-[#0D2B4D] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Next Batch <span className="text-yellow-400">Filling Fast</span>
          </h3>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Don’t wait for another attempt. Start preparing the right way.
          </p>

          <a href="#contactssb">
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl transition">
              Reserve Your Seat Now
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}