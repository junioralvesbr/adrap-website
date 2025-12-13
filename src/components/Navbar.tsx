import Image from "next/image";

import LogoImage from "@/assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <div className="container flex items-center gap-8 py-6 px-4 flex-wrap">
        <Image
          src={LogoImage}
          alt="Logo"
          width={80}
          height={80}
        />

        <h1 className="font-bold font-merriweather text-third flex-col hidden sm:flex">
          <span className="text-2xl">ADRAP</span>
          <span className="text-lg">Associação das Ruas ao Palácio</span>
        </h1>
      </div>
    </nav>
  )
}