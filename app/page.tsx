import { Navbar, RunningLine } from "@/components";
import { HeroLeftSection, HeroMainSection } from "@/sections";
import { HeroRightSection } from "@/sections/HeroRight.section";

export default function Home() {
  return (
    <>
      <Navbar />
      <RunningLine />
      <div className="main-container mx-auto mt-4 w-fit">
        <HeroLeftSection />
        <HeroMainSection />
        <HeroRightSection />
      </div>
    </>
  );
}
