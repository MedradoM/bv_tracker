"use client";

import { useEffect, useRef, useState } from "react";
import DefaultSectionContainer from "../ui/default-section-container";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SplitText } from "../ui/split-text";
import { Quote } from "lucide-react";

const WhoWeAreSection = () => {
  const firstStaticRef = useRef<HTMLDivElement | null>(null);
  const firstStaticRefInView = useInView(firstStaticRef, {once: true});
  const secondStaticRef = useRef<HTMLDivElement | null>(null);
  const secondStaticRefInView = useInView(secondStaticRef, {once: true});
  
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;

        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;

          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(
              1,
              Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance)
            );
          }

          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef?.current);
      }
    };
  }, []);

  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <>
      <div
        id="quem-somos"
        className="h-[320vh] w-full relative"
        ref={sectionRef}
      >
        <DefaultSectionContainer
          className="bg-white h-[100vh] mb-0

       text-black w-[98%] m-auto rounded-t-3xl justify-self-center flex self-center sticky top-0"
        >
          <SplitText
            text="Quem nós somos?"
            className="text-4xl lg:text-5xl font-bold mb-18"
          />

          <div className="flex flex-col h-full items-center justify-center scroll-py-96 relative w-full">
            <AnimatePresence>
              {isThirdCardVisible && (
                <motion.div
                  key={"1st-card"}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl p-10 lg:h-[50vh] h-[70vh] w-[98%] self-center -translate-y-8 absolute z-10 items-center flex text-white shadow-x bg-gradient-to-bl from-[#5351fb] to-[#ff1a1a]"
                >
                  <h3 className="lg:text-4xl text-2xl lg:max-w-[40%] font-bold">
                    Oferecendo soluções inovadoras que garantem segurança,
                    eficiência e sustentabilidade.
                  </h3>
                </motion.div>
              )}

              {isSecondCardVisible && (
                <motion.div
                  key={"2nd-card"}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl p-10 lg:h-[50vh] h-[70vh] w-[95%] self-center absolute items-center flex text-white shadow-x from-purple-900 via-fuchsia-700 to-orange-500 bg-gradient-to-br"
                >
                  <h3 className="lg:text-4xl text-2xl lg:max-w-[40%] font-bold">
                    Pensando nisso, buscamos transformar a forma como as
                    empresas gerenciam suas frotas
                  </h3>
                </motion.div>
              )}

              {isFirstCardVisible && (
                <motion.div
                  key={"3rd-card"}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl absolute w-[90%] self-center p-10 lg:h-[50vh] h-[70vh] translate-y-4 -z-10 items-center flex text-white shadow-xl"
                  style={{
                    background:
                      "radial-gradient(circle at 100%, #5351fb 40%, #e40024 100%, transparent 70%)",
                  }}
                >
                  <h3 className="lg:text-4xl text-2xl lg:max-w-[40%] font-bold">
                    Desde o início, nosso objetivo foi priorizar{" "}
                    <span className="text-orange-400">sua segurança</span>
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DefaultSectionContainer>
      </div>
      <DefaultSectionContainer className="bg-white w-[98%] m-auto rounded-b-3xl justify-self-center flex self-center">
        <div ref={firstStaticRef} className="grid gap-8 grid-cols-1 lg:items-center lg:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-2">
            <SplitText
              text="Simplificando a gestão de frotas e gerando resultados"
              className="lg:text-5xl text-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              animate={firstStaticRefInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              exit={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-600 "
            >
              Na BV Tracker, acreditamos que a tecnologia é a chave para o sucesso, por isso sempre fornecemos soluções modernas e eficientes para ajudar a reduzir custos, aumentar a segurança e melhorar a eficiência operacional das frotas. Nossa equipe é composta por profissionais altamente capacitados e apaixonados pelo que fazem, desde [ano] em busca de inovações e melhorias para atender às necessidades dos nossos clientes.
            </motion.div>
          </div>
          <div className="col-span-1">
            <div className="h-[50vh] text-sm border flex items-center justify-center rounded-xl">
              imagem
            </div>
          </div>
        </div>

        <div ref={secondStaticRef} className="grid gap-8 grid-cols-1 lg:items-center lg:grid-cols-2">
          <div className="col-span-1">
            <div className="h-[50vh] text-sm border flex items-center justify-center rounded-xl">
              imagem
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <SplitText
              text="Nossa história"
              className="lg:text-5xl text-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              animate={secondStaticRefInView ? { opacity: 1, y: 0, filter: "blur(0px)" }: {}}
              exit={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-600 "
            >
              Começamos nossa jornada com uma pequena equipe de entusiastas da tecnologia, determinados a transformar o setor de gestão de frotas. Desde então, evoluímos para uma empresa reconhecida nacionalmente, com uma base sólida de clientes satisfeitos e uma reputação de excelência. 
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              animate={secondStaticRefInView ? { opacity: 1, y: 0, filter: "blur(0px)" }: {}}
              exit={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              transition={{ delay: 1 }}
              className="text-sm italic text-gray-600 mt-4"
            >
              <Quote  className="stroke-blue-800/20 rotate-180 fill-blue-800/20 size-5"/>
              Crescemos graças à confiança dos nossos clientes e à dedicação da nossa equipe, criar uma relação de parceria com nossos clientes, entendendo suas necessidades e oferecendo soluções personalizadas. buscamos sempre inovações e melhorias para continuar a oferecer o melhor serviço possível.
            </motion.div>

          </div>
        </div>
      </DefaultSectionContainer>
    </>
  );
};

export default WhoWeAreSection;
