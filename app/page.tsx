import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HelpSection from "@/components/HelpSection";
import JobCategories from "@/components/JobCategories";

export default function HomePage() {
  return (
    <main className="w-full">
      <section className="relative w-full overflow-hidden bg-[var(--left)]">
        <div className="pointer-events-none absolute inset-0 hidden md:block bg-[linear-gradient(to_right,var(--left)_54%,var(--brand)_54%)]" />
        <Navbar />
        <Hero />
      </section>

      <section className="w-full bg-white">
        <HowItWorks />
        <HelpSection />
        <JobCategories />
      </section>
    </main>
  );
}