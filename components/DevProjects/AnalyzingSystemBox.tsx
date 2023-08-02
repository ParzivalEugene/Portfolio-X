import { BoxWithCorners } from "@/components/common";
import Image from "next/image";

export const AnalyzingSystemBox = () => {
  return (
    <BoxWithCorners intent={"withBorder"} className="flex flex-col gap-4 p-2 w-fit">
      <div className="flex justify-between text-[8px] uppercase text-secondary-700">
        <p>voltage surges are possible</p>
        <p>呆在冰箱里</p>
      </div>
      <div className="flex flex-col items-center gap-2 self-center px-8">
        <p className="text-2xl uppercase">Analyzing system</p>
        <Image
          src="/assets/scanner_banner.png"
          width={276}
          height={38}
          alt="scanner"
        />
      </div>
      <div className="flex justify-between text-[8px] uppercase text-secondary-700">
        <p>sysver ax36v</p>
        <p>Scanner hosted</p>
      </div>
    </BoxWithCorners>
  );
};