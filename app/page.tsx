import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HelpSection from "@/components/HelpSection";

export default function HomePage() {
  return (
    <main className="w-full">
      <section className="w-full bg-[var(--left)] md:bg-[linear-gradient(to_right,var(--left)_50%,var(--brand)_50%)]">
        <Navbar />
        <Hero />
        <HowItWorks />
        <HelpSection />

      </section>

      <section className="w-full bg-white">
      </section>
    </main>
  );
}