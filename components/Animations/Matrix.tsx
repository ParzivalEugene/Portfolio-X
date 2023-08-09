"use client";

import React, { useEffect, useRef } from "react";

const renderMatrix = (ref: React.RefObject<HTMLCanvasElement>) => {
  let canvas = ref.current;
  if (canvas === null) throw new Error("canvas is null");
  let context = canvas.getContext("2d");
  if (context === null) throw new Error("context is null");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const alphabet = katakana + latin + nums;

  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const rainDrops: number[] = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const render = () => {
    if (context === null) throw new Error("context is null");
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    // @ts-ignore
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#0F5757";
    context.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      // @ts-ignore
      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  return () => {
    setInterval(render, 60);
  };
};

export const Matrix = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => renderMatrix(ref));

  return (
    <React.Fragment>
      <canvas className="absolute left-0 top-0 -z-50" ref={ref} />
    </React.Fragment>
  );
};
