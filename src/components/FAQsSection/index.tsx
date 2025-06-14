"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";
import questions from "./questions.json";

const FAQsSection = () => {
  const [value, setValue] = useState("");

  return (
    <DefaultSectionContainer id="perguntas-frequentes" className="bg-white">
      <SectionContent title="Perguntas Frequentes">
        <div className="flex flex-col ">
          <Accordion
            type="single"
            collapsible
            value={value}
            onValueChange={setValue}
          >
            {questions.map((question) => (
              <AccordionItem
                key={`question-${question.id}`}
                value={`question-${question.id}`}
              >
                <AccordionTrigger className="text-base cursor-pointer">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="">
                  {question.response}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContent>
    </DefaultSectionContainer>
  );
};

export default FAQsSection;
