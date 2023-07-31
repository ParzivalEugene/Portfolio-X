import { LeftFrame, Navbar, RunningLine } from "@/components";
import { HeroLeftSection, HeroMainSection } from "@/sections";
import { HeroRightSection } from "@/sections/HeroRight.section";

export default function Home() {
  return (
    <>
      <Navbar />
      <RunningLine />
      <main className="main-container items-start">
        <LeftFrame />
        <div>
          <div className="hero-container mx-auto mt-8 w-fit">
            <HeroLeftSection />
            <HeroMainSection />
            <HeroRightSection />
          </div>
        </div>
      </main>
    </>
  );
}
