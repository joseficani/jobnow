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
        </div>
      </section>
    </main>
  );
}

