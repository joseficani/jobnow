import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <section>
        <Navbar />
        <Hero />
      </section>

      <section className="bg-white">
        <div className="container px-6 md:px-12 py-16">
        </div>
      </section>
    </main>
  );
}
