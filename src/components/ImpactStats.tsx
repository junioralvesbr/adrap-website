import Image from "next/image"

import FaixaVerdeImage from "@/assets/faixa-verde.png"
import impactos1 from "@/assets/impactos-1.jpg"
import impactos2 from "@/assets/impactos-2.jpg"
import impactos3 from "@/assets/impactos-3.jpg"

const stats = [
  {
    id: 1,
    number: "5,000+",
    label: "Instrumentos musicais",
  },
  {
    id: 2,
    number: "120+",
    label: "Crianças atendidas",
  },
  {
    id: 3,
    number: "300+",
    label: "Voluntarios mobilizados",
  },
  {
    id: 4,
    number: "50+",
    label: "Familias impactadas",
  },
]

export default function ImpactStats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-16 relative">
          {/* Decorative Images - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-0 top-0">
            <Image
              src={impactos1}
              alt="Impact 1"
              width={140}
              height={140}
              className="rounded-full object-cover w-32 h-32 xl:w-36 xl:h-36"
            />
          </div>

          <div className="hidden lg:block absolute right-0 top-0">
            <Image
              src={impactos2}
              alt="Impact 2"
              width={140}
              height={140}
              className="rounded-full object-cover w-32 h-32 xl:w-36 xl:h-36"
            />
          </div>

          <div className="hidden lg:block absolute right-12 bottom-0 xl:right-24">
            <Image
              src={impactos3}
              alt="Impact 3"
              width={120}
              height={120}
              className="rounded-full object-cover w-28 h-28 xl:w-32 xl:h-32"
            />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-merriweather text-second text-center">
            Impactos Sociais
          </h2>

          {/* Decorative Green Brush */}
          <Image
            src={FaixaVerdeImage}
            alt="Faixa Verde"
            width={100}
            height={50}
            className="w-16 sm:w-20 lg:w-24"
          />

          {/* Description */}
          <p className="text-center text-second font-poppins text-sm sm:text-base lg:text-lg max-w-3xl mt-4 px-4">
            Acreditamos que toda criança merece a oportunidade de alcançar seu pleno potencial. É por isso que nossos programas se concentram em cultura que apoia a educação e desenvolvimento comunitário. De materiais escolares a treinamento de professores, cada projeto é concebido com carinho e viabilizado pelo seu apoio.
          </p>
        </div>

        {/* Mobile Images - Visible only on mobile */}
        <div className="flex lg:hidden justify-center gap-4 mb-12">
          <Image
            src={impactos1}
            alt="Impact 1"
            width={100}
            height={100}
            className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24"
          />
          <Image
            src={impactos2}
            alt="Impact 2"
            width={100}
            height={100}
            className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24"
          />
          <Image
            src={impactos3}
            alt="Impact 3"
            width={100}
            height={100}
            className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${index < stats.length - 1 ? 'lg:border-r lg:border-gray-300' : ''
                }`}
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FF6B35] font-merriweather mb-2">
                {stat.number}
              </span>
              <span className="text-base sm:text-lg text-second font-poppins font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
