import { HeroLeftSection, HeroMainSection, HeroRightSection } from ".";

export const HeroSection = () => {
  return (
    <div className="hero-container mx-auto my-8 w-fit">
      <HeroLeftSection />
      <HeroMainSection />
      <HeroRightSection />
    </div>
  );
};
