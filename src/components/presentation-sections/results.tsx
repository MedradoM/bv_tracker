"use client";

import { Database, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";
import { SplitText } from "../ui/split-text";

const resultsData = [
  {
    icon: Database,
    title: "O que é o BV Tracker?",
    description:
      "A solução de Business Intelligence da Systemsat que transforma os dados brutos da operação de rastreamento dos seus clientes em informações visuais e organizadas. Através de dashboards prontos e personalizáveis, ele conecta dados de veículos, telemetria, eventos e comportamento da frota em um único ambiente inteligente.",
    cardBg: "bg-background",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Para que serve?",
    description:
      "Serve para transformar dados em decisão e decisão em resultado. Identifique desperdícios, reduza custos operacionais, melhore a performance da frota, aumente a produtividade e gere insights estratégicos que antes estavam escondidos nos dados.",
    cardBg: "bg-background",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Para quem é?",
    description:
      "Ideal para empresas de gestão de frotas que querem evoluir de monitoramento para inteligência e resultados. Perfeito para transportadoras, frotistas, concessionárias e empresas de logística que precisam de decisões rápidas e controle total.",
    cardBg: "bg-background",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
];

const ResultsSection = () => {
  return (
    <DefaultSectionContainer
      id="resultados"
      className="bg-white w-[98%] m-auto rounded-t-3xl justify-self-center my-0 py-24"
    >
      <SectionContent>
        <div className="flex flex-col items-center gap-3 lg:max-w-3xl mx-auto text-center">
          
          <SplitText
            className="lg:text-5xl text-3xl text-center w-full items-center justify-center"
            text="Inteligência que gera resultado"
          />
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {resultsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col p-8 rounded-3xl ${item.cardBg} transition-transform duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionContent>
    </DefaultSectionContainer>
  );
};

export default ResultsSection;