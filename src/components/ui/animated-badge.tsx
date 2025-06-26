import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TAnimatedBadge = {
  badgeContent: string[];
};

export function AnimatedBadge({ badgeContent }: TAnimatedBadge) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % badgeContent.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-fit py-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={badgeContent[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="bg-[#A6B0F2] text-xs  text-slate-700 px-4 py-1 lg:text-sm rounded-full absolute"
        >
          {badgeContent[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
