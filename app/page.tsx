import { Navbar, RunningLine } from "@/components";
import { LeftFrame, RightFrame } from "@/components/Frames";
import { DevProjectsSection } from "@/sections/DevProjects/DevProjectsSection";
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
