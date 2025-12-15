import AboutUs from "@/components/About";
import BeTheLight from "@/components/BeTheLight";
import Events from "@/components/Events";
import GetInvolved from "@/components/GetInvolved";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Missao from "@/components/Missao";
import Volunteers from "@/components/Volunteers";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>

      <main>
        <AboutUs />
        <GetInvolved />
        <BeTheLight />
        <Missao />
        <ImpactStats />
        <Volunteers />
        <Events />
      </main>
    </>
  );
}
