import AboutUs from "@/components/About";
import GetInvolved from "@/components/GetInvolved";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>

      <main>
        <AboutUs />
        <GetInvolved />
      </main>
    </>
  );
}
