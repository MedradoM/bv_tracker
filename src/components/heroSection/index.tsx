"use client";

import { motion } from "motion/react";
import { AnimatedBadge } from "../ui/animated-badge";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const badgeContent = [
  "Segurança",
  "Eficiência",
  "Inovação",
  "Tecnologia",
  "Confiabilidade",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 0 50%, rgba(220, 38, 127, 0.1) 0%, rgba(160, 54, 105, 0.1) 25%, rgba(147, 51, 234, 0.06) 50%, transparent 70%)`,
        }}
      />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
          linear-gradient(rgba(100, 116, 139, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100, 116, 139, 0.5) 1px, transparent 1px)
        `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-32 h-32 border border-slate-200 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 border border-red-200 rotate-12 direction-reverse animate-spin"
          style={{ animationDuration: "60s" }}
        />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-slate-100 to-red-50 rotate-45" />
      </div>

      <div className="absolute lg:flex-row gap-8 flex-col justify-between container px-[4vw] flex z-10 self-center justify-self-center">
        <div className="flex flex-col items-start lg:max-w-[50%] gap-2">
          <AnimatedBadge badgeContent={badgeContent} />

          <motion.h1
            initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:text-6xl text-4xl font-bold text-slate-800 leading-tight"
          >
            Monitoramento
            <span className="block bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Inteligente para sua frota
            </span>
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base lg:text-lg"
          >
            Tenha controle total da sua frota com nosso sistema de monitoramento
            inteligente. Acompanhe em tempo real, receba alertas e otimize a
            gestão dos seus veículos.
          </motion.span>

          <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
            <Button
              className="text-sm lg:w-fit w-full bg-blue-800 hover:bg-blue-700 cursor-pointer py-4 px-6"
              type="button"
            >
              Saiba mais
            </Button>

            <Button
              className="text-sm lg:w-fit w-full border-blue-600 text-blue-600 hover:text-blue-600 cursor-pointer py-4 px-6"
              type="button"
              variant={"outline"}
            >
              Entre em contato
            </Button>
          </div>
        </div>

        <div className="flex w-full p-4 rounded-lg lg:w-[35%] bg-blue-800">
          <div className=" w-full min-h-36 flex items-center justify-center">
            <Play className="size-16 stroke-white fill-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
