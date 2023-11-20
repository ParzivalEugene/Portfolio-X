import { LeftFrame, RightFrame } from "@/components/Frames";
import { Navbar, RunningLine } from "@/components/global";
import { DesignProjectsSection } from "@/sections/DesignProjects";
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
          <DesignProjectsSection />
        </div>
        <RightFrame />
      </main>
    </>
  );
}
