"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type DataBlockProps = {
  item: {
    id: number;
    title: string;
    text: string;
    image: string;
  };
};

const DataBlock = ({ item }: DataBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} key={item.id} className="group">
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0)" } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col lg:group-even:flex-row-reverse lg:flex-row gap-4 items-center"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={400}
          className="rounded-lg lg:w-[50%]"
        />

        <div className="flex flex-col justify-between gap-8 lg:w-[50%]">
          <h3 className="text-3xl font-semibold">{item.title}</h3>
          <p className="text-lg text-gray-600">{item.text}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DataBlock;
