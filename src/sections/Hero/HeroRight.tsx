"use client";
import { hero as data } from "data/eng";
import { generateRandomString } from "@/tools";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HeroRightSection = () => {
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(92));
  }, []);

  return (
    <section className="relative flex justify-between py-8 pl-8">
      <>
        {/* top horizontal */}
        <div className="absolute left-4 top-0 h-1 w-[242px] border-t border-accent-800" />
        <div className="absolute left-4 top-0 h-1 w-6 border-t border-accent-500" />
        {/* top vertical */}
        <div className="absolute left-0 top-4 h-[242px] w-4 border-l border-accent-800" />
        <div className="absolute left-0 top-4 h-6 w-4 border-l border-accent-500" />
        {/* bottom horizontal */}
        <div className="absolute bottom-0 left-4 h-1 w-[242px] border-b border-accent-800" />
        <div className="absolute bottom-0 left-4 h-1 w-6 border-b border-accent-500" />
        {/* bottom vertical */}
        <div className="absolute bottom-4 left-0 h-[242px] w-4 border-l border-accent-800" />
        <div className="absolute bottom-4 left-0 h-6 w-4 border-l border-accent-500" />
        {/* top dot */}
        <div className="absolute -left-[1px] -top-[1px] h-[3px] w-[3px] bg-accent-500" />
        {/* bottom dot */}
        <div className="absolute -bottom-[1px] -left-[1px] h-[3px] w-[3px] bg-accent-500" />
      </>
      <div className="flex w-min flex-col justify-between gap-5">
        {data.tags.map((item, key) => (
          <div key={key} className="border border-accent-500 px-3 py-6">
            <h2
              className="text-xl"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {item}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between">
        <Image
          src="/assets/cyber_sign_2.svg"
          alt="cyber_sign_2"
          width={92}
          height={92}
          className="select-none"
        />
        <div className="flex">
          <p
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            className="text-[8px] text-secondary-700"
          >
            {randomString}
          </p>
          <div className="flex flex-col justify-between uppercase text-primary-500">
            <p
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              className="w-min"
            >
              serial number is not found
            </p>
            <p style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
              access denied
            </p>
          </div>
        </div>
        <Image
          src="/assets/cyber_sign_1.svg"
          alt="cyber_sign_1"
          width={64}
          height={64}
          className="select-none"
        />
      </div>
    </section>
  );
};
