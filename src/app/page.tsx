import AboutUs from "@/components/About";
import BeTheLight from "@/components/BeTheLight";
import GetInvolved from "@/components/GetInvolved";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
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
        <ImpactStats />
        <Volunteers />
      </main>
    </>
  );
}
