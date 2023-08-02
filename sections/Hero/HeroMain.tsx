import { BoxWithCorners, HeroFaceASCII, Spinner } from "@/components/common";
import { hero as data } from "@/data/eng";
import Image from "next/image";
import Link from "next/link";
import { GrUbuntu } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const HeroMainSection = () => {
  return (
    <section className="relative p-8">
      <div className="absolute right-0 top-1/2 h-full w-1/2 -translate-y-1/2 select-none">
        <HeroFaceASCII />
      </div>
      <>
        {/* top left */}
        <div className="absolute left-4 top-0 h-1 w-[242px] border-t border-accent-800" />
        <div className="absolute left-4 top-0 h-1 w-6 border-t border-accent-500" />
        {/* top right */}
        <div className="absolute right-4 top-0 h-1 w-[242px] border-t border-accent-800" />
        <div className="absolute right-4 top-0 h-1 w-6 border-t border-accent-500" />
        {/* bottom left */}
        <div className="absolute bottom-0 left-4 h-1 w-[242px] border-b border-accent-800" />
        <div className="absolute bottom-0 left-4 h-1 w-6 border-b border-accent-500" />
        {/* bottom right */}
        <div className="absolute bottom-0 right-4 h-1 w-[242px] border-b border-accent-800" />
        <div className="absolute bottom-0 right-4 h-1 w-6 border-b border-accent-500" />
      </>
      <div className="flex items-stretch gap-5">
        <div className="z-10 flex flex-col gap-5">
          <div className="flex flex-col items-stretch">
            <div className="flex justify-center border border-primary-500 px-6 py-3">
              <h1 className="text-4xl font-bold uppercase">Michkoff.com</h1>
            </div>
            <div className="flex aspect-1 w-full min-w-[378px] items-center justify-center border-x border-primary-500">
              <Spinner />
            </div>
            <Link href="https://links.michkoff.com">
              <div className="flex justify-center border border-primary-500 bg-secondary-500 px-6 py-3 transition-colors hover:bg-secondary-700">
                <p className="text-2xl uppercase">{data.visitLinks} 浏览连结</p>
              </div>
            </Link>
          </div>
          <BoxWithCorners
            className="flex flex-col items-center gap-2 px-6 py-3"
            intent={"withBorder"}
          >
            <p className="text-2xl uppercase">{data.citizenDetected}</p>
            <Image
              src="/assets/barcode.svg"
              width={268}
              height={50}
              alt="barcode"
              className="select-none"
            />
          </BoxWithCorners>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex w-fit justify-center border border-accent-500 p-4">
            <p
              style={{ textOrientation: "upright", writingMode: "vertical-lr" }}
              className="text-2xl text-accent-500"
            >
              公开招聘
            </p>
          </div>
          <div className="z-10 w-min">
            <div className="flex justify-center border-x border-t border-primary-500 bg-background px-6 py-3">
              <h3 className="text-2xl">微芯片与信</h3>
            </div>
            <div className="hero-section-cut px-6 py-3">
              <h2 className="mb-3 w-max text-2xl font-medium text-accent-500">
                {data.infoCard.name}
              </h2>
              <div className="flex flex-col gap-1 ">
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker className="text-text" />
                  <p className="font-medium">{data.infoCard.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <GrUbuntu className="text-text" />
                  <p className="font-medium">{data.infoCard.age}</p>
                </div>
              </div>
              <p className="my-6 text-xs">{data.infoCard.description}</p>
              <p className="uppercase text-primary-500">
                {data.infoCard.dataIsMissing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};