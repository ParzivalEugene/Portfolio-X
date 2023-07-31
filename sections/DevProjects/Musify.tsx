import { AnalyzingSystemBox, ProjectInfoCard } from "@/components";
import Image from "next/image";

export const Musify = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold uppercase text-accent-500">Musify</h2>
        <div className="flex gap-5">
          <div className="flex h-full items-center justify-center border border-primary-500 p-8">
            <Image
              src="/assets/vortex.svg"
              width={380}
              height={275}
              alt="vortex"
            />
          </div>
          <div className="flex flex-col gap-5 items-start">
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
                musify%$
              </p>
            </div>
            <div className="flex flex-col uppercase text-[10px]">
              <p>Connected to server</p>
              <p>connection established</p>
              <p>Breaching...</p>
              <p>Getting information...</p>
            </div>
            <Image src="/assets/cyber_sign_3.svg" height={64} width={55} alt="X"/>
          </div>
        </div>
        <AnalyzingSystemBox />
      </div>
      <div>
        <ProjectInfoCard />
      </div>
    </section>
  );
};
