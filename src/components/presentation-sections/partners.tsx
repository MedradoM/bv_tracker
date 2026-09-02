"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";
import { SplitText } from "../ui/split-text";
import { Building2, ShieldCheck, Sparkles } from "lucide-react";

const partners = Array.from({ length: 28 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");
  return {
    id,
    name: `Parceiro ${id}`,
    image: `/presentation/partners/${id}.png`,
  };
});

const stats = [
  {
    icon: Building2,
    value: "28+",
    label: "Empresas Parceiras",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Frotas Monitoradas",
  },
  {
    icon: Sparkles,
    value: "24/7",
    label: "Suporte & Inteligência",
  },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <DefaultSectionContainer
      id="parceiros"
      className="bg-white justify-self-center my-0 py-16 lg:py-32 shadow-sm"
    >
      <SectionContent>
        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col items-center gap-3 lg:max-w-3xl mx-auto text-center"
        >
          <SplitText
            className="lg:text-5xl text-3xl text-center w-full items-center justify-center font-bold text-slate-900"
            text="Empresas que confiam na BV Tracker"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-slate-500 lg:text-lg text-sm max-w-2xl mt-2 leading-relaxed">
              Empresas de diversos setores e tamanhos escolheram a BV Tracker
              como sua parceira estratégica em gestão de frotas e inteligência de dados.
            </p>
          </motion.div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-5 mt-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                ease: "easeOut",
              }}
              className="group relative aspect-square rounded-2xl bg-slate-50/70 border border-slate-100/80 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center justify-center p-3 overflow-hidden cursor-pointer hover:-translate-y-1"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                  className="object-contain p-2 filter lg:grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        
      </SectionContent>
    </DefaultSectionContainer>
  );
};

export default PartnersSection;