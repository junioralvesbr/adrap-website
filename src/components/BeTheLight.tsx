import bgImage from "@/assets/beLight.jpg"
import Image from "next/image"

export default function BeTheLight() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Be the Light Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-merriweather text-white mb-8 leading-tight">
          Seja a Luz na vida
          <br />
          dessas crianças
        </h2>

        {/* Mission Statement */}
        <div className="mb-4">
          <p className="text-white text-base md:text-lg font-poppins max-w-2xl mx-auto">
            Acreditamos que a cultura com a educação é uma ferramenta
            <br />
            poderosa para gerar uma sociedade com mais de valor.
          </p>
        </div>

        <div className="mb-10">
          <p className="text-white text-base md:text-lg font-poppins max-w-2xl mx-auto">
            Nossa missão é fornecer às crianças ​​o apoio, os recursos e a orientação de que precisam para crescer na sociedade e na vida.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3 bg-[#8BC34A] hover:bg-[#7CB342] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Donate now
          </button>

          <button className="px-8 py-3 bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Become a Volunteer
          </button>

          <button className="px-8 py-3 bg-[#2196F3] hover:bg-[#1976D2] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Fundraise now
          </button>
        </div> */}
      </div>

      {/* Decorative Elements (Optional) */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-white/10 to-transparent rounded-tl-full" />
    </section>
  )
}
