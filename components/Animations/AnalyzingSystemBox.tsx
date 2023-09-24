"use client";

import { BoxWithCorners } from "@/components/common";
import { useEffect, useRef } from "react";

export const AnalyzingSystemBox = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const gap = 4;
    const width = 16;
    const amount = 14;

    ctx.fillStyle = "#EF3939";
    for (let i = 0; i <= amount; i++) {
      ctx.fillRect(i * (width + gap), 36, width, 2);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, 32);
      
      
      requestAnimationFrame(draw);
    }

    draw()
  }, []);

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
        <canvas ref={ref} width={276} height={38} />
      </div>
      <div className="flex justify-between text-[8px] uppercase text-secondary-700">
        <p>sysver ax36v</p>
        <p>scanner hosted</p>
      </div>
    </BoxWithCorners>
  );
};
