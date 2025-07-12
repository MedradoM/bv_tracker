"use client";

import { motion } from "motion/react";
import { AnimatedBadge } from "../ui/animated-badge";
import { Button } from "../ui/button";
import { Clock, Play, Shield, Star } from "lucide-react";
import HeroBackground from "./heroBackground";
import CounterWithTextAndIcon from "../ui/counter-with-text-and-icon";
import { useRouter } from "next/navigation";

const listCounters = [
  {
    icon: Star,
    text: "Clientes satisfeitos",
    value: 500,
    prefix: "+",
    sufix: "",
  },
  {
    icon: Clock,
    text: "Anos de experiência",
    value: 5,
    prefix: "+",
    sufix: " anos",
  },
  {
    icon: Shield,
    text: "Veículos monitorados",
    value: 1000,
    prefix: "+",
    sufix: "",
  },
];

const badgeContent = [
  "Segurança",
  "Eficiência",
  "Inovação",
  "Tecnologia",
  "Confiabilidade",
];

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen mt-8 h-full flex items-center justify-center">
      <HeroBackground />

      <div className="lg:absolute flex flex-col gap-16 lg:mt-0 lg:mb-0 mb-[10vh] mt-[10vh]">
        <div className=" lg:flex-row gap-8 flex-col self-center justify-self-center container px-[4vw] flex z-10">
          <div className="flex flex-col items-start lg:max-w-[50%] gap-2">
            <AnimatedBadge badgeContent={badgeContent} />

            <motion.h1
              initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:text-6xl text-4xl font-bold text-blue-900 leading-tight"
            >
              Monitoramento
              <span className="block font-normal bg-blue-900 bg-clip-text text-transparent">
                Inteligente para sua frota
              </span>
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base lg:text-base text-gray-700"
            >
              Tenha controle total da sua frota com nosso sistema de
              monitoramento inteligente. Acompanhe em tempo real, receba alertas
              e otimize a gestão dos seus veículos.
            </motion.span>

            <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
              <Button
                className="text-sm lg:w-fit w-full bg-primary hover:bg-blue-700 cursor-pointer py-4 px-6"
                type="button"
                onClick={() => router.push("#contato")}
              >
                Entre em contato
              </Button>

              <Button
                className="text-sm lg:w-fit w-full border-blue-600 text-blue-600 hover:text-blue-600 cursor-pointer py-4 px-6"
                type="button"
                variant={"outline"}
                onClick={() => router.push("#nosso-trabalho")}
              >
                Saiba mais
              </Button>
            </div>
          </div>

          <div className="flex w-full p-4 rounded-lg bg-primary">
            <div className=" w-full min-h-36 flex items-center justify-center">
              <Play className="size-16 stroke-white fill-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full px-[4vw]">
          <div className="w-full border border-slate h-0" />

          <div className="flex lg:flex-row flex-col gap-8 lg:gap-0 w-full justify-around items-center">
            {listCounters.map((counter, index) => (
              <CounterWithTextAndIcon
                key={index}
                icon={counter.icon}
                text={counter.text}
                value={counter.value}
                prefix={counter.prefix}
                suffix={counter.sufix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
