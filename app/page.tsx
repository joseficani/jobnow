// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
//     <main>
//       <section>
//         <Navbar />
//         <Hero />
//       </section>

//       <section className="bg-white">
//         <div className="container px-6 md:px-12 py-16">
//         </div>
//       </section>
//     </main>
//   );
// }
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
        <div className="container mx-auto px-6 py-16" />
      </section>
    </main>
  );
}