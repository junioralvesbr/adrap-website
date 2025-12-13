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
    description: "With your support, we can provide school supplies, build learning centers, train teachers, and open doors for underprivileged children. Even a small contribution can make a big difference.",
    image: donateImage,
  },
  {
    id: 2,
    title: "Campanhas",
    description: "Fundraising is one of the most powerful ways to support our mission. Whether it’s your birthday, a personal challenge, or a community event — you can rally your friends, family, or followers to bring hope and education to children in need.",
    image: campaignImage,
  },
  {
    id: 3,
    title: "Voluntários",
    description: "Volunteering is more than giving your time — it’s giving your heart. Whether you’re helping a child read, packing school kits, or assisting with events, your effort fuels real, lasting change.",
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