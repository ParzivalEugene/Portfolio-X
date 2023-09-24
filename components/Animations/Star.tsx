"use client";

import { useEffect, useRef } from "react";

export const Star = () => {
  const svg = `
    <svg
      width="36"
      height="208"
      viewBox="0 0 36 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.4375 207.5L1.4375 17.5358L17.9409 0.5H34.5625L34.5625 190.464L18.0591 207.5H1.4375Z"
        fill="#0D0D0C"
        stroke="#EF3939"
      />
      <path
        d="M1.4375 207.5V190.869L17.9409 173.833H34.5625V190.464L18.0591 207.5H1.4375Z"
        fill="#0D0D0C"
        stroke="#EF3939"
      />
      <line x1="18.2292" x2="18.2292" y2="173.333" stroke="#EF3939" />
    </svg>
  `;

  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current === null) throw new Error("ref is null");
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    canvas.width = 208;
    canvas.height = 208;

    const images: HTMLImageElement[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const animationDuration = 2000;
    const totalFrames = 8;
    const frameDuration = animationDuration / totalFrames;
    let currentFrame = 0;
    let startTime = 0;

    function animate(currentTime: number) {
      if (!startTime) {
        startTime = currentTime;
      }
      const elapsedTime = currentTime - startTime;

      currentFrame = Math.floor(
        (elapsedTime / frameDuration) % totalFrames
      );

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.save();
      context.translate(centerX, centerY);
      context.rotate((currentFrame * 2 * Math.PI) / totalFrames);
      context.drawImage(images[currentFrame], -images[currentFrame].width / 2, -images[currentFrame].height / 2);
      context.restore();

      if (elapsedTime < animationDuration) {
        requestAnimationFrame(animate);
      }
    }

    function easeInOut(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    Promise.all(Array.from({ length: totalFrames }, (_, i) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = `data:image/svg+xml;base64,${btoa(svg)}`;
      });
    })).then((loadedImages) => {
      images.push(...loadedImages);
      requestAnimationFrame(animate);
    });
  }, []);

  return <canvas ref={ref} />;
};