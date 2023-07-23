import Navbar from "@/components/Navbar";
import RunningLine from "@/components/RunningLine";
import HeroSection from "@/sections/HeroSection";
import Journey from "@/sections/Journey";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 px-5 py-5">
      <div className="flex min-h-screen flex-col gap-5">
        <Navbar />
        <RunningLine />
        <HeroSection />
      </div>
      <Journey />
    </main>
  );
}
