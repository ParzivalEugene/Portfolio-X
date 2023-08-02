import { Torus } from "@/components/Animations";
import Image from "next/image";

export const HeroLeftSection = () => {
  return (
    <section className="relative flex select-none flex-col justify-between py-8 pr-8">
      <>
        {/* top horizontal */}
        <div className="absolute right-4 top-0 h-1 w-[242px] border-t border-accent-800" />
        <div className="absolute right-4 top-0 h-1 w-6 border-t border-accent-500" />
        {/* top vertical */}
        <div className="absolute right-0 top-4 h-[242px] w-4 border-r border-accent-800" />
        <div className="absolute right-0 top-4 h-6 w-4 border-r border-accent-500" />
        {/* bottom horizontal */}
        <div className="absolute bottom-0 right-4 h-1 w-[242px] border-b border-accent-800" />
        <div className="absolute bottom-0 right-4 h-1 w-6 border-b border-accent-500" />
        {/* bottom vertical */}
        <div className="absolute bottom-4 right-0 h-[242px] w-4 border-r border-accent-800" />
        <div className="absolute bottom-4 right-0 h-6 w-4 border-r border-accent-500" />
        {/* top dot */}
        <div className="absolute -right-[1px] -top-[1px] h-[3px] w-[3px] bg-accent-500" />
        {/* bottom dot */}
        <div className="absolute -bottom-[1px] -right-[1px] h-[3px] w-[3px] bg-accent-500" />
      </>
      <div className="flex flex-col gap-20">
        <Torus />
        <Image src="/assets/star.svg" width={205} height={208} alt="star" />
      </div>
      <div className="flex gap-4 pl-4">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/protocol_icon.svg"
            width={56}
            height={10}
            alt="protocol"
          />
          <p className="text-center text-[10px] text-xs uppercase text-primary-500">
            Protocol
          </p>
          <p className="-mt-[4px] text-center text-[10px] text-xs uppercase text-primary-500">
            2023-msk
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-[8px] uppercase">User identified</p>
          <p className="text-[8px] uppercase">Breaching completed</p>
          <p className="text-[8px] uppercase">Compiling daemon</p>
        </div>
      </div>
    </section>
  );
};
