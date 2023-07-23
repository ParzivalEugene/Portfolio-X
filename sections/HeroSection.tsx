import ASCIIRenderer from "@/components/ASCIIRenderer";
import HeroBlock, { HeroBlockProps } from "@/components/HeroBlock";
import HeroModules from "@/components/HeroModules";
import Link from "next/link";

const data: HeroBlockProps[] = [
  {
    title: "Team Lead",
    subtitle: (
      <span>
        Frontend team leader in{" "}
        <Link className="font-bold" href="https://discopus.ru">
          Discopus
        </Link>
      </span>
    ),
  },
  {
    title: "3+",
    subtitle: "Years in industry",
  },
  {
    title: "10+",
    subtitle: "Open source projects",
  },
  {
    title: "100+",
    subtitle: "Contributions",
  },
];

const HeroSection = () => {
  return (
    <div className="flex flex-row">
      <div className="flex w-full flex-col items-center gap-8">
        <HeroModules />
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <HeroBlock
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              className={
                index === 0 || index === data.length - 1 ? "col-span-2" : ""
              }
            />
          ))}
        </div>
      </div>
      <div className="min-h-[500px] w-full">
        <ASCIIRenderer />
      </div>
    </div>
  );
};

export default HeroSection;
