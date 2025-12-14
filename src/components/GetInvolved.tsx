import FaixaVerdeImage from "@/assets/faixa-verde.png"
import Image from "next/image"

import donateImage from "@/assets/donate.jpg"
import campaignImage from "@/assets/fundos.jpg"
import slowVerdeImage from "@/assets/slow-verde.png"
import volunteerImage from "@/assets/voluntarios.jpg"

const data = [
  {
    id: 1,
    title: "Doações",
    description: "Com o seu apoio, podemos fornecer material de apoio, manter o centro de aprendizagem, capacitar professores e abrir portas para crianças carentes. Mesmo uma pequena contribuição pode fazer uma grande diferença.",
    image: donateImage,
  },
  {
    id: 2,
    title: "Campanhas",
    description: "A arrecadação de fundos é uma das maneiras mais eficazes de apoiar nossa missão. Realizamos eventos, bazares, campanhas de arrecadação de e muito mais. Fique ligado nas nossas redes sociais para saber mais.",
    image: campaignImage,
  },
  {
    id: 3,
    title: "Voluntários",
    description: "O voluntariado é mais do que doar seu tempo, é doar seu coração. Seja atendendo nossas crianças, ensinando-as, preparando os lanches e auxiliando no dia dia e nos nossos eventos, seu esforço gera mudanças reais e duradouras.",
    image: volunteerImage,
  },

]

const Card = ({ item }: { item: typeof data[0] }) => {
  return (
    <article className="max-w-80 flex flex-col items-center gap-6">
      <Image
        src={item.image}
        alt={item.title}
        width={320}
        height={320}
      />

      <div className="flex flex-col items-center gap-2">
        <span className="text-4xl font-merriweather font-bold text-second">
          {item.title}
        </span>
        <Image
          src={slowVerdeImage}
          alt="Faixa Verde"
          width={100}
          height={50}
        />
      </div>

      <p className="text-center font-poppins text-sm text-second">
        {item.description}
      </p>
    </article>
  )
}

export default function GetInvolved() {
  return (
    <section className="py-20 px-4 sm:px-0">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-6xl text-center font-bold font-merriweather text-second">
          Seja um parceiro
        </h2>
        <Image
          src={FaixaVerdeImage}
          alt="Faixa Verde"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-wrap max-w-7xl justify-around mx-auto">
        {
          data?.map((item) => <Card key={item.id} item={item} />)
        }
      </div>

    </section>
  )
}