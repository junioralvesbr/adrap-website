import Image from "next/image";

import aboutImage from "@/assets/about.jpg";
import faixaVerde from "@/assets/faixa-verde.png";

export default function AboutUs() {
  return (
    <section className="flex justify-center mt-20">
      <div className="flex justify-center items-center gap-32 flex-wrap">
        <div className="max-w-xl">
          <h2 className="text-6xl font-bold font-merriweather text-secondary-500">
            Quem somo nós?
            <span>
              <Image
                src={faixaVerde}
                alt="Faixa verde"
                width={100}
                height={10}
                className="inline-block"
              />
            </span>
          </h2>
          <p className="text-secondary-500 font-poppins leading-8 mt-8">
            Somos uma organização sem fins lucrativos comprometida em capacitar crianças por meio do acesso à cultura de qualidade, através da musica, pintura, arte e dança.
          </p>
          <p className="text-secondary-500 font-poppins leading-8 mt-4">
            Desde 2018, ajudamos crinaças no desenvolvimento de suas habilidades e capacidades sociais.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={aboutImage}
            alt="Pessoas voluntariando"
            width={500}
            height={500}
          />
          <div className="absolute bottom-0 left-0 right-0 h-28 overlay-blur-branco" />
        </div>
      </div>
    </section>
  )
}