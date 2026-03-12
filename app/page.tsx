import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HelpSection from "@/components/HelpSection";
import JobCategories from "@/components/JobCategories";
import AddedJobs from "@/components/AddedJobs";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="w-full">
      <section className="relative w-full overflow-hidden md:block bg-[linear-gradient(to_right,var(--left)_64%,var(--brand)_70%)]">
        <Navbar />
        <Hero />
      </section>

      <section className="w-full bg-white">
        <HowItWorks />
        <HelpSection />
        <JobCategories />
        <AddedJobs/>
        <Feedback/>
        <Footer/>
      </section>
    </main>
  );
}