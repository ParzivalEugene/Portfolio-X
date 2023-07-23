import { ReactNode } from "react";

export interface HeroBlockProps {
  title: string;
  subtitle: ReactNode;
  className?: string;
}

const HeroBlock: React.FC<HeroBlockProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center rounded-3xl bg-white px-3 py-6 text-black ${className}`}
    >
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="text-center text-base font-medium">{subtitle}</p>
    </div>
  );
};

export default HeroBlock;
