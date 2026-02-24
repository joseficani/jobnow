
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
//     <main className="w-full">
//       <section className="w-full">
//         <Navbar />
//         <Hero />
//       </section>

//       <section className="w-full bg-white">
//         <div className="container mx-auto px-6 py-16" />
//       </section>
//     </main>
//   );
// }

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="w-full">
      <section className="w-full bg-[var(--left)] md:bg-[linear-gradient(to_right,var(--left)_50%,var(--brand)_50%)]">
        <Navbar />
        <Hero />
      </section>

      <section className="w-full bg-white">
      </section>
    </main>
  );
}