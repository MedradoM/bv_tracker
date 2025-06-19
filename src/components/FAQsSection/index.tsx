"use client";

import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";
import questions from "./questions.json";
import { useInView, motion } from "motion/react";

const FAQsSection = () => {
  const [value, setValue] = useState("");
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true });

  return (
    <DefaultSectionContainer
      id="perguntas-frequentes"
      className="bg-white mb-0"
    >
      <SectionContent title="Perguntas Frequentes">
        <div ref={viewRef} className="flex flex-col ">
          <Accordion
            type="single"
            collapsible
            value={value}
            onValueChange={setValue}
          >
            {questions.map((question) => (
              <AccordionItem
                id={`question-${question.id}`}
                value={`question-${question.id}`}
                key={`question-${question.id}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: question.id * 0.1 }}
                >
                  <AccordionTrigger className="text-base cursor-pointer">
                    {question.question}
                  </AccordionTrigger>
                  <AccordionContent className="">
                    {question.response}
                  </AccordionContent>
                </motion.div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContent>
    </DefaultSectionContainer>
  );
};

export default FAQsSection;
