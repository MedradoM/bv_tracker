"use client";

import {
  Award,
  BarChart2,
  Clock,
  Fuel,
  Gauge,
  Image as ImageIcon,
  LayoutGrid,
  MapPin,
  ShieldAlert,
  Timer,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";
import { SplitText } from "../ui/split-text";
import { useRef } from "react";

const dashboardCards = [
  {
    icon: MapPin,
    title: "Distância Percorrida",
    description:
      "Total de quilômetros rodados pela frota. Controle de utilização, planejamento de manutenção e nível de operação.",
  },
  {
    icon: ShieldAlert,
    title: "Risco de Roubo e Furto",
    description:
      "Padrões e situações de risco com base em localização, horários e comportamento. Ações preventivas contra incidentes.",
  },
  {
    icon: Gauge,
    title: "Faixas de RPM",
    description:
      "Análise de condução em relação ao giro do motor. Redução de desgaste mecânico e otimização do consumo.",
  },
  {
    icon: Clock,
    title: "Motor Ocioso",
    description:
      "Tempo com veículos ligados sem movimentação. Redução de desperdício de combustível e custos operacionais.",
  },
  {
    icon: LayoutGrid,
    title: "Visão Geral",
    description:
      "Dashboard consolidado com os principais indicadores. Leitura rápida para decisões imediatas e estratégicas.",
  },
  {
    icon: BarChart2,
    title: "Produtividade e Ociosidade",
    description:
      "Análise de utilização vs. tempo parado. Identificação de subutilização e otimização de recursos.",
  },
  {
    icon: Timer,
    title: "Velocidade",
    description:
      "Monitoramento do comportamento de velocidade e excessos. Segurança, redução de acidentes e multas.",
  },
  {
    icon: Zap,
    title: "Alertas",
    description:
      "Eventos e ocorrências críticas centralizadas. Resposta rápida e controle operacional em tempo real.",
  },
  {
    icon: Award,
    title: "Ranking de Motoristas",
    description:
      "Classificação por desempenho: condução, economia, segurança. Incentivo a boas práticas na equipe.",
  },
  {
    icon: Fuel,
    title: "Consumo km/l",
    description:
      "Eficiência em quilômetros por litro. Identificação de veículos ou motoristas com baixo rendimento.",
  },
  {
    icon: Fuel,
    title: "Consumo l/h",
    description:
      "Consumo por hora de operação. Controle preciso para veículos que trabalham parados ou com equipamentos.",
  },
];

const DashboardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
    
  return (
    <DefaultSectionContainer
      id="dashboards"
      className="bg-white w-[98%] m-auto rounded-b-3xl justify-self-center my-0 pt-8 pb-24"
    >
      <SectionContent>
        <div
        ref={ref}
        className="flex flex-col items-center gap-3 lg:max-w-3xl mx-auto text-center">
          <SplitText
            className="lg:text-5xl text-3xl text-center w-full items-center justify-center"
            text="Dashboards inteligentes para a sua frota"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 lg:text-lg text-sm max-w-2xl mt-2">
            Transforme dados complexos em gráficos e relatórios visuais de fácil
            interpretação para otimizar o desempenho da sua equipe.
          </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full relative min-h-[350px] lg:min-h-[480px] rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center overflow-hidden shadow-inner group hover:border-primary/50 transition-colors"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ImageIcon className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            Imagem do Dashboard
          </h3>
          <p className="text-sm text-slate-400 max-w-md">
            Espaço reservado para a imagem ou demonstração interativa do
            dashboard (será anexada posteriormente).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-4">
          {dashboardCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-300 shadow-xs hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-background text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContent>
    </DefaultSectionContainer>
  );
};

export default DashboardsSection;