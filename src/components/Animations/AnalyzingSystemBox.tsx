"use client";
import { BoxWithCorners } from "@/components/common";
import { Player } from "@lottiefiles/react-lottie-player";

export const AnalyzingSystemBox = () => {
  return (
    <BoxWithCorners
      intent={"withBorder"}
      className="flex w-fit flex-col gap-4 p-2"
    >
      <div className="flex justify-between text-[8px] uppercase text-secondary-700">
        <p>voltage surges are possible</p>
        <p>呆在冰箱里</p>
      </div>
      <div className="flex flex-col items-center gap-2 self-center px-8">
        <p className="text-2xl uppercase">Analyzing system</p>
        <Player src={"/lotties/analyzing.json"} autoplay loop />
      </div>
      <div className="flex justify-between text-[8px] uppercase text-secondary-700">
        <p>sysver ax36v</p>
        <p>scanner hosted</p>
      </div>
    </BoxWithCorners>
  );
};
