"use client";

import { useRef } from "react";
import DefaultSectionContainer from "../ui/default-section-container";
import { motion, useScroll, useTransform } from "framer-motion";

const WhoWeAreSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const card1Opacity = useTransform(scrollYProgress, [0, 0], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const card2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.45, 0.55], [50, 0]);

  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

  return (
    <div id="quem-somos" className="h-[400vh] w-full relative" ref={sectionRef}>
      <DefaultSectionContainer className="bg-white h-[100vh] text-black w-[99%] m-auto rounded-3xl justify-self-center flex self-center sticky top-0">
        <div className="px-[2vw] h-full">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Quem nós somos?
          </h2>

          <div className="flex flex-col h-full items-center justify-center scroll-py-96 relative w-full">
            <motion.div
              style={{ opacity: card3Opacity, y: card3Y }}
              className="rounded-3xl p-10 lg:h-[50vh] h-[70vh] w-[98%] self-center -translate-y-8 absolute z-10 items-center flex text-white shadow-x bg-gradient-to-bl from-[#5351fb] to-[#ff1a1a]"
            >
              <h3 className="lg:text-4xl text-2xl lg:max-w-[40%] font-bold">
                Oferecendo soluções inovadoras que garantem segurança,
                eficiência e sustentabilidade.
              </h3>
            </motion.div>

            <motion.div
              style={{
                opacity: card2Opacity,
                y: card2Y,
              }}
              className="rounded-3xl p-10 lg:h-[50vh] h-[70vh] w-[95%] self-center absolute items-center flex text-white shadow-x  from-purple-900 via-fuchsia-700 to-orange-500 bg-gradient-to-br"
            >
              <h3 className="lg:text-4xl text-2xl lg:max-w-[40%] font-bold">
                Pensando nisso, buscamos transformar a forma como as empresas
                gerenciam suas frotas{" "}
              </h3>
            </motion.div>

            <motion.div
              style={{
                opacity: card1Opacity,
                y: card1Y,
                background:
                  "radial-gradient(circle at 100%, #5351fb 40%, #e40024 100%, transparent 70%)",
              }}
              className="rounded-3xl absolute w-[90%] self-center p-10 lg:h-[50vh] h-[70vh] translate-y-4 -z-10  items-center flex text-white shadow-xl"
            >
              <h3 className="lg:text-4xl text-2xl lg:max-w-[40%] font-bold">
                Desde o inicio, nosso objetivo foi priorizar{" "}
                <span className="text-orange-400">sua segurança</span>
              </h3>
            </motion.div>
          </div>
          {/* <div className="flex flex-col w-full items-center justify-center bg-white">
            <p className="text-lg lg:text-xl text-center justify-center flex max-w-3xl">
              Quer saber mais sobre nossa história e qual nosso propósito?
              clique no botão abaixo saiba mais
            </p>
            <div className="flex justify-center">
              <Button>Quem somos</Button>
            </div>
          </div> */}
        </div>
      </DefaultSectionContainer>
    </div>
  );
};

export default WhoWeAreSection;
