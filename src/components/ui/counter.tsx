import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type TCounter = {
  value: number;
  duration?: number;
  prefix?: string;
  startValue?: number;
  className?: ClassNameValue;
  decimals?: number;
  suffix?: string;
};

const Counter = ({
  value,
  className,
  duration = 500,
  decimals = 0,
  suffix,
  prefix = "",
  startValue = 0,
}: TCounter) => {
  const [count, setCount] = useState(startValue);
  const Ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(Ref, { once: true });

  useEffect(() => {
    if (inView) {
      if (count >= value) return;

      const step = Math.ceil((value - count) / 20);
      const interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + step;
          return next >= value ? value : next;
        });
      }, duration / 20);

      return () => clearInterval(interval);
    }
  }, [value, duration, count, inView]);

  return (
    <div ref={Ref} className={twMerge("", className)}>
      <NumberFlow
        value={count}
        prefix={prefix}
        suffix={suffix}
        format={{ notation: "standard", minimumFractionDigits: decimals }}
        transformTiming={{ duration: 500, easing: "ease-in-out" }}
        spinTiming={{ duration: 500 }}
        opacityTiming={{ duration: 500 }}
        trend={() => +1}
      />
    </div>
  );
};

export default Counter;
