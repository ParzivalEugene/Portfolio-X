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

    const image = new Image();
    image.src = `data:image/svg+xml;base64,${btoa(svg)}`;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    let currentAngle = 0;
    const animationDuration = 2000; // Продолжительность анимации в миллисекундах
    let startTime = 0;

    // Функция анимации
    function animate(currentTime: number) {
      // Определяем прошедшее время с начала анимации
      if (!startTime) {
        startTime = currentTime;
      }
      const elapsedTime = currentTime - startTime;

      // Рассчитываем текущий угол вращения
      currentAngle = easeInOut(
        elapsedTime,
        startAngle,
        endAngle - startAngle,
        animationDuration
      );

      // Очищаем canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Рисуем картинку с учетом угла вращения
      context.save();
      context.translate(centerX, centerY);
      context.rotate(currentAngle);
      context.drawImage(image, -image.width / 2, -image.height / 2);
      context.restore();

      // Проверяем, достигнут ли конец анимации
      if (elapsedTime < animationDuration) {
        requestAnimationFrame(animate);
      }
    }

    // Функция ease in out
    function easeInOut(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    // Запускаем анимацию при загрузке картинки
    image.onload = function () {
      requestAnimationFrame(animate);
    };
  }, []);

  return <canvas ref={ref} />;
};
