"use client";

import { useRef, useState } from "react";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";
import { SplitText } from "../ui/split-text";
import { useInView, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import data from "./data.json";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <DefaultSectionContainer id="nosso-trabalho" className="bg-white mb-0">
        <SectionContent>
          <div
            ref={ref}
            className="flex flex-col items-center lg:gap-2 gap-4 lg:max-w-3xl mx-auto"
          >
            <SplitText
              className="lg:text-5xl text-3xl text-center w-full items-center justify-center"
              text="Conheça nosso trabalho"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-center lg:text-lg text-sm text-gray-500">
                Unimos as tecnologias ideais para garantir o melhor do
                rastremento e monitoramento veicular. Conheça nossos serviços e
                veja como reduzir seus custos e aumentar a segurança da sua
                frota.
              </p>
            </motion.div>
          </div>

          <div
            className="lg:flex flex-col gap-4 size-full hidden"
            onMouseLeave={() => setSelectedIndex(null)}
          >
            {[0, 3].map((row) => (
              <div key={row} className="flex gap-4 size-full">
                {data.works.slice(row, row + 3).map((item) => {
                  const isSelected = selectedIndex === item.id;
                  const isAnySelected = selectedIndex !== null;
                  const selectedIndexPosition = data.works.findIndex(
                    (work) => work.id === selectedIndex
                  );

                  const isSameRow =
                    selectedIndexPosition >= row &&
                    selectedIndexPosition < row + 3;

                  return (
                    <motion.div
                      transition={{
                        layout: { duration: 0.5, ease: "easeInOut" },
                      }}
                      className={twMerge(
                        "w-full relative flex flex-col h-64 lg:flex-1 rounded-xl bg-slate-500 text-white transition-all duration-500",
                        isSameRow
                          ? isSelected
                            ? "lg:flex-1 h-96 "
                            : "lg:flex-[0.3] h-96 justify-center"
                          : isAnySelected
                          ? " h-32 justify-center"
                          : " h-64 justify-center"
                      )}
                      key={`index-${item.id}`}
                      onMouseEnter={() => setSelectedIndex(item.id)}
                    >
                      <Link
                        href={`/servico/${item.slug}`}
                        className="size-full"
                      >
                        <motion.div
                          layout
                          className={twMerge(
                            "absolute left-0 break-words z-10 text-wrap p-8 bottom-0 flex flex-col w-full"
                          )}
                        >
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-xs">{item.description}</p>
                        </motion.div>

                        <ViewTransition name={`data-${item.slug}`}>
                          <Image
                            src={item.image}
                            alt={item.slug}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </ViewTransition>

                        <motion.div
                          className={twMerge(
                            "absolute inset-0 transition-all rounded-lg",
                            isSameRow
                              ? isSelected
                                ? "bg-gradient-to-t from-slate-800 to to-transparent"
                                : "bg-gradient-to-t from-slate-800 to to-transparent"
                              : isAnySelected
                              ? "bg-slate-800/80"
                              : "bg-gradient-to-t from-slate-800 to to-transparent"
                          )}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="lg:hidden relative">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                  active: true,
                  stopOnInteraction: false,
                  stopOnFocusIn: false,
                }),
              ]}
            >
              <CarouselContent>
                {data.works.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-[80%] min-h-[38vh]"
                  >
                    <Link
                      href={`/servico/${item.slug}`}
                      className="size-full flex flex-col justify-between h-full"
                    >
                      <div className="flex flex-col gap-2">
                        <ViewTransition name={`mobile-${item.slug}`}>
                          <Image
                            alt={item.slug}
                            src={item.image}
                            height={200}
                            width={500}
                            className="object-cover rounded-lg mb-2"
                          />
                        </ViewTransition>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <Button type="button">Saiba mais</Button>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </SectionContent>
      </DefaultSectionContainer>

      <DefaultSectionContainer className="my-0">
        <SectionContent>
          <div className="flex flex-col  gap-4 lg:w-[40vw]">
            <SplitText
              className="lg:text-5xl text-3xl w-full"
              text="Elevando a gestão de frotas a um novo patamar"
            />
            <p className=" lg:text-lg text-sm text-gray-500">
              Quer saber mais como podemos revolucionar sua gestão de frotas?
              entre em contato e saiba mais!
            </p>
            <div>
              <Link
                href="#contato"
                className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all"
              >
                Entre em contato
              </Link>
            </div>
          </div>
        </SectionContent>
      </DefaultSectionContainer>
    </>
  );
};

export default WorkSection;
