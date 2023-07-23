"use client";
import FutureCard from "@/components/FutureCard";
import Microchip from "@/components/Microchip";
import WarningLine from "@/components/WarningLine";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex h-full w-full items-center justify-center">
        <div className="relative">
          <div className="absolute -left-4 -top-4">
            <Image src="/corner.svg" alt="corner" width={150} height={150} />
          </div>
          <div className="absolute -bottom-4 -left-4 -rotate-90">
            <Image src="/corner.svg" alt="corner" width={150} height={150} />
          </div>
          <div className="absolute -right-4 -top-4 rotate-90">
            <Image src="/corner.svg" alt="corner" width={150} height={150} />
          </div>
          <div className="absolute -bottom-4 -right-4 rotate-180">
            <Image src="/corner.svg" alt="corner" width={150} height={150} />
          </div>
          <WarningLine />
          <div className="grid h-fit grid-cols-main content-center items-center gap-24 py-12">
            <FutureCard />
            <div className="flex flex-row gap-16">
              <Image src="/m_logo.svg" alt="m_logo" width={300} height={300} />
              <Image src="/e_logo.svg" alt="e_logo" width={300} height={300} />
            </div>
            <Microchip />
          </div>
          <WarningLine />
        </div>
      </main>
  );
}
