import AboutUs from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-white">
      <header>
        <Hero />
      </header>

      <main>
        <AboutUs />
      </main>
    </div>
  );
}
