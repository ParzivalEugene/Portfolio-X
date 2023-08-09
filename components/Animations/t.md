```typescript
import React, { useEffect, useRef } from 'react';

const RotatingImage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Задаем размеры canvas
      canvas.width = 500;
      canvas.height = 500;

      // Загружаем картинку
      const image = new Image();
      image.src = 'path/to/your/image.png';

      // Задаем начальные значения для анимации
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
        currentAngle = easeInOut(elapsedTime, startAngle, endAngle - startAngle, animationDuration);

        // Очищаем canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Рисуем картинку с учетом угла вращения
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(currentAngle);
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
        ctx.restore();

        // Проверяем, достигнут ли конец анимации
        if (elapsedTime < animationDuration) {
          requestAnimationFrame(animate);
        }
      }

      // Функция ease in out
      function easeInOut(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      // Запускаем анимацию при загрузке картинки
      image.onload = function () {
        requestAnimationFrame(animate);
      };
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingImage;
```