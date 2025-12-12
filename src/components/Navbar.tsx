import Image from "next/image";

import LogoImage from "@/assets/logo.jpg";

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center gap-8 pl-52 py-8">
        <Image
          src={LogoImage}
          alt="Logo"
          width={120}
          height={120}
        />

        <h1 className="font-bold font-merriweather text-third flex flex-col gap-4">
          <span className="text-4xl">ADRAP</span>
          <span className="text-2xl">Associação das Ruas ao Palácio</span>
        </h1>
      </div>
    </nav>
  )
}