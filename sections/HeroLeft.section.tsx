import Image from "next/image";

export const HeroLeftSection = () => {
  return (
    <section className="relative flex flex-col justify-between pr-8 py-8">
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
        <div className="absolute -top-[1px] -right-[1px] h-[3px] w-[3px] bg-accent-500"/>
        {/* bottom dot */}
        <div className="absolute -bottom-[1px] -right-[1px] h-[3px] w-[3px] bg-accent-500"/>
      </>
      <div className="flex flex-col gap-20">
        <Image src="/assets/torus.svg" width={205} height={208} alt="torus" />
        <Image src="/assets/torus.svg" width={205} height={208} alt="torus" />
      </div>
      <div className="flex gap-4 pl-4">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/protocol_icon.svg"
            width={56}
            height={10}
            alt="protocol"
          />
          <p className="text-center text-xs uppercase text-primary-500 text-[10px]">
            Protocol
          </p>
          <p className="text-center text-xs uppercase text-primary-500 text-[10px] -mt-[4px]">
            2023-msk
          </p>
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-[8px]">User identified</p>
          <p className="uppercase text-[8px]">Breaching completed</p>
          <p className="uppercase text-[8px]">Compiling daemon</p>
        </div>
      </div>
    </section>
  );
};