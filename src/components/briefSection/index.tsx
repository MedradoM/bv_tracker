"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import AutoPlay from "embla-carousel-autoplay";
import data from "./testimonials.json";
import { Quote } from "lucide-react";
import { SplitText } from "../ui/split-text";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";
import Link from "next/link";

const BriefSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const ref = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (!api) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", updateSelectedIndex);
    updateSelectedIndex(); // init

    return () => {
      api.off("select", updateSelectedIndex);
    };
  }, [api]);

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="flex flex-col gap-16 my-32 scroll-mt-36"
    >
      <div className="flex flex-col items-center lg:gap-2 gap-4 lg:max-w-3xl mx-auto">
        <SplitText
          className="lg:text-5xl text-3xl text-center w-full items-center justify-center"
          text="O que nossos clientes dizem sobre nossos serviços"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-center lg:text-lg text-sm text-gray-500">
            Quer fazer parte do nosso time de clientes satisfeitos? Entre em
            contato conosco e descubra como podemos ajudar você a aprimorar a
            segurança e performance da sua frota!
          </p>
        </motion.div>

        <Link
          className="z-10 text-sm hover:bg-blue-700 bg-primary transition-all text-white py-2 px-4 rounded-lg"
          href={"#contato"}
        >
          Entre em contato
        </Link>
      </div>

      <div className="max-w-[90vw] mx-auto lg:hidden">
        <Carousel
          setApi={setApi}
          plugins={[
            AutoPlay({
              delay: 3000,
              active: true,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {data &&
              data?.carousel_1?.map((item, index) => (
                <CarouselItem
                  key={`carousel_2_${index}`}
                  className="lg:basis-1/4 basis-full md:basis-1/2"
                >
                  <div className="flex h-[20vh] flex-col justify-between p-4 rounded-xl bg-white shadow">
                    <Quote className="stroke-primary/20 lg:size-6 size-4 fill-primary/20 rotate-180" />

                    <p className="lg:text-base text-sm italic font-semibold">
                      {item.message}
                    </p>

                    <div className="flex flex-col">
                      <span className="lg:text-lg text-base">{item.name}</span>
                      <span className="text-xs text-gray-500">{item.role}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-4 flex justify-center gap-2">
          {data?.carousel_1?.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                selectedIndex === index ? "bg-primary w-4" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      <div className="lg:flex hidden flex-col gap-4 relative">
        <div>
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[
              AutoScroll({
                speed: 0.3,
                direction: "forward",
                stopOnFocusIn: true,
              }),
            ]}
          >
            <CarouselContent>
              {data &&
                data?.carousel_1?.map((item, index) => (
                  <CarouselItem
                    key={`carousel_1_${index}`}
                    className="lg:basis-1/4 basis-full md:basis-1/2"
                  >
                    <div className="flex min-h-[20vh] h-full gap-2 flex-col justify-between p-4 rounded-xl bg-white shadow">
                      <Quote className="stroke-primary/20 fill-primary/20 rotate-180" />

                      <p className="text-sm italic font-semibold">
                        {item.message}
                      </p>

                      <div className="flex flex-col">
                        <span className="text-lg">{item.name}</span>
                        <span className="text-xs text-gray-500">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div>
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[
              AutoScroll({
                speed: 0.3,
                direction: "backward",
                stopOnFocusIn: true,
              }),
            ]}
          >
            <CarouselContent>
              {data &&
                data?.carousel_2?.map((item, index) => (
                  <CarouselItem
                    key={`carousel_2_${index}`}
                    className="lg:basis-1/4 basis-full md:basis-1/2"
                  >
                    <div className="flex min-h-[20vh] h-full gap-2 flex-col justify-between p-4 rounded-xl bg-white shadow">
                      <Quote className="stroke-primary/20 fill-primary/20 rotate-180" />

                      <p className="text-sm italic font-semibold">
                        {item.message}
                      </p>

                      <div className="flex flex-col">
                        <span className="text-lg">{item.name}</span>
                        <span className="text-xs text-gray-500">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, var(--tw-bg-opacity, 1) theme('colors.background') 90%)`,
            maskImage:
              "radial-gradient(circle at center, transparent 70%, black 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, transparent 70%, black 100%)",
          }}
          className="absolute hidden lg:block size-full z-10 bg-background pointer-events-none"
        ></div>
      </div>
    </section>
  );
};

export default BriefSection;
