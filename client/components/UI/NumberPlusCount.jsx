// components/NumberPlusCount.jsx

"use client";

import { useEffect, useRef, useState } from "react";

export default function NumberPlusCount({
  number = 100,
  duration = 2000,
  suffix = "",
  prefix = "+",
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // حرکت نرم‌تر
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animate);
  }, [started, number, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}