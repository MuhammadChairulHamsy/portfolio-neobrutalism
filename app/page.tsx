import { Button } from "@/app/components/retroui/Button";
import Navbar from "./components/layouts/navbar/page";

export default function Home() {
  return (
    <div className="min-h-screen relative font-sans">
      <div className="fixed inset-0 z-[-1] bg-[#FFFBF0]">
        <div className="absolute inset-0 bg-dots pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-5 md:pt-10 relative z-10 max-w-6xl pb-24 md:pb-8">
        <Navbar />
      </div>

      <main className="container mx-auto px-4 md:px-6 pt-5 md:pt-10 relative z-10 max-w-6xl pb-24 md:pb-8">
        <Button>Click Me!</Button>
      </main>
    </div>
  );
}
