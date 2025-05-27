import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [end, duration]);

  return value;
}
