import Image from "next/image";

import LogoImage from "@/assets/logo.jpg";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5">
        <Image
          className="dark:invert"
          src={LogoImage}
          alt="logo da adrap"
          width={500}
          height={500}
          priority
        />

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 lg:text-5xl">
          Site em construção
        </h1>

        <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 lg:text-4xl">
          Volte em breve!
        </p>
      </main>
  );
}
