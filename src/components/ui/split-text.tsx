"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

const letterAnim = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.07,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function SplitText({
  text,
  className,
}: {
  text: string;
  className?: ClassNameValue;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ").map((word, i) => {
    const isBold = word.startsWith("**") && word.endsWith("**");
    const isBreak = word === "<br>";
    const isLineBreak = word === "<br/>" || word === "<br />";
    const cleanWord = isBold ? word.replace(/\*\*/g, "") : word;

    if (isBreak) {
      return <br key={i} />;
    }

    if (isLineBreak) {
      return (
        <span key={i} className="inline-flex w-full whitespace-pre">
          <br /> <br />
        </span>
      );
    }

    return (
      <motion.span
        ref={ref}
        key={i}
        custom={i}
        variants={letterAnim}
        initial="hidden"
        animate={isInView && "visible"}
        className={twMerge(
          "inline-flex w-fit whitespace-pre",
          isBold && "font-bold text-foreground"
        )}
      >
        {`${cleanWord} `}
      </motion.span>
    );
  });

  return <h1 className={twMerge("flex flex-wrap", className)}>{words}</h1>;
}
