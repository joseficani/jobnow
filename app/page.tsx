import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full">
        <Navbar />
        <Hero />
      </section>
      
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-16">
          <h2 className="text-2xl font-bold text-[var(--text)]">How it works</h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
            This section is white, because the split background ends after the hero.
          </p>
        </div>
      </section>
    </main>
  );
}

