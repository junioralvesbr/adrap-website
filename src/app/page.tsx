import Image from "next/image";

import AdrapLogo from '@/assets/adrap-logo.jpg'

export default function Home() {
  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center bg-[#e7e9ed]">
      <Image
        src={AdrapLogo}
        alt="Logo da Adrap"
        className="object-fill"
      />
      <h1 className="text-3xl">Site em construção</h1>
    </div>
  );
}
