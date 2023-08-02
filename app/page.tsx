import { LeftFrame, RightFrame } from "@/components/Frames";
import { RunningLine, Navbar } from "@/components/global";
import { DevProjectsSection } from "@/sections/DevProjects";
import { HeroSection } from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <RunningLine />
      <main className="main-container items-start">
        <LeftFrame />
        <div>
          <HeroSection />
          <DevProjectsSection />
        </div>
        <RightFrame />
      </main>
    </>
  );
}
