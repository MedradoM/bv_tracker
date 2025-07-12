"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { SplitText } from "../ui/split-text";
import { motion } from "motion/react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";
import DataBlock from "../ui/data-block";
import { unstable_ViewTransition as ViewTransition } from "react";

type ContentProps = {
  data: TServiceData;
};

const Content = ({ data }: ContentProps) => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-rows-none grid-rows-2 lg:grid-cols-12 gap-8 h-full items-center">
        <div className="flex flex-col col-span-1 lg:col-span-5 gap-2">
          <Badge className="text-sm">{data.title}</Badge>

          <SplitText
            text={data?.description}
            className="lg:text-4xl text-2xl font-bold text-blue-900 leading-tight"
          />

          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs lg:text-base text-gray-700"
          >
            {data?.data?.description_data}
          </motion.span>

          <Button
            className="text-sm lg:w-fit w-full cursor-pointer py-4 px-6"
            type="button"
            onClick={() => router.push("#contato")}
          >
            Entre em contato
          </Button>
        </div>

        <div className="lg:col-span-7 col-span-1 row-start-1 lg:row-start-auto">
          <ViewTransition name={`data-${data.slug}`}>
            <Image
              src={data.image}
              alt="Imagem do serviço"
              height={450}
              width={1000}
              className="rounded-lg"
            />
          </ViewTransition>
        </div>
      </div>
      <Separator />
      <div className="flex  flex-col gap-2 items-center">
        <SplitText
          className="lg:text-4xl text-2xl text-center lg:w-[60%] items-center justify-center"
          text={data.data.title_data}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center lg:text-lg text-sm text-gray-500">
            {data.data.title_2}
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 mt-8">
        {data.data.text.map((item) => (
          <DataBlock key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Content;
