import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="min-h-screen relative font-sans">
      <div className="fixed inset-0 z-[-1] dot-pattern">
        <div className="absolute inset-0  pointer-events-none"></div>
      </div>

      <header className="container mx-auto px-4 md:px-6 pt-5 md:pt-10 relative z-10 max-w-6xl pb-24 md:pb-8">
        <Navbar />
      </header>

      <main className="min-h-screen relative font-sans">
        <Hero />
        <Marquee />
        <About />
      </main>
    </div>
  );
}
