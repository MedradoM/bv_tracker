"use client";

import { Brain, Loader2, MessageSquare, Send, Sparkles, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";

const chatFeatures = [
  {
    icon: Brain,
    title: "Linguagem Natural",
    description:
      "Faça perguntas como 'quais veículos consumiram mais combustível essa semana?' e receba respostas claras e objetivas.",
  },
  {
    icon: Zap,
    title: "Insights Instantâneos",
    description:
      "Cruza informações de diferentes dashboards, analisa padrões e retorna comparações, rankings e recomendações.",
  },
  {
    icon: Users,
    title: "Democratiza o BI",
    description:
      "Qualquer pessoa — do operacional ao estratégico — utiliza dados de forma prática para gerar resultados reais.",
  },
];

const chatMessages = [
  {
    id: 1,
    sender: "ia",
    text: "Olá, como posso te ajudar hoje?",
    delay: 0.3,
  },
  {
    id: 2,
    sender: "user",
    text: "Quanto de combustível eu gastei no último mês?",
    delay: 0.9,
  },
  {
    id: 3,
    sender: "ia",
    content: (
      <span>
        Você gastou no total mês passado:{" "}
        <strong className="text-cyan-400 font-semibold">R$ 2.752.000,00</strong> — Sendo
        totalizados <strong className="text-cyan-400 font-semibold">400.000 litros</strong> — e
        uma média de <strong className="text-cyan-400 font-semibold">2,5 km/l</strong>.
      </span>
    ),
    delay: 1.6,
  },
  {
    id: 4,
    sender: "user",
    text: "Gere um relatório do ano inteiro.",
    delay: 2.4,
  },
  {
    id: 5,
    sender: "ia",
    isGenerating: true,
    text: "Gerando relatório...",
    delay: 3.1,
  },
];

const ChatIASection = () => {
  return (
    <DefaultSectionContainer
      id="chat-ia"
      className="justify-self-center my-0 py-16 lg:py-24"
    >
      <SectionContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight"
            >
              Converse diretamente{" "}
              <span className="text-primary">com seus dados</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 lg:text-lg text-sm leading-relaxed max-w-xl"
            >
              Em vez de navegar por múltiplos dashboards, simplesmente faça perguntas
              e receba respostas baseadas nos dados reais da frota. Sem conhecimento
              técnico necessário.
            </motion.p>

            <div className="flex flex-col gap-6 mt-4">
              {chatFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-base lg:text-lg font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-slate-500 leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-lg bg-[#131722] border border-slate-800 rounded-3xl p-5 lg:p-6 shadow-2xl flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      BV Tracker IA
                    </h4>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-slate-400 font-medium">
                        Online · Pronto para ajudar
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 py-2 min-h-[340px] justify-end">
                {chatMessages.map((msg) => {
                  const isIA = msg.sender === "ia";
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: msg.delay }}
                      className={`flex items-end gap-2 ${
                        isIA ? "justify-start" : "justify-end"
                      }`}
                    >
                      {isIA && (
                        <div className="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 flex items-center justify-center shrink-0 mb-0.5 text-xs">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div
                        className={`px-4 py-3 rounded-2xl text-xs lg:text-sm leading-relaxed max-w-[85%] shadow-sm ${
                          isIA
                            ? "bg-slate-800/90 border border-slate-700/60 text-slate-200 rounded-bl-xs"
                            : "bg-indigo-600 text-white rounded-br-xs font-medium"
                        }`}
                      >
                        {msg.isGenerating ? (
                          <div className="flex items-center gap-2 text-cyan-300">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{msg.text}</span>
                          </div>
                        ) : (
                          msg.content || msg.text
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-2.5">
                  <div className="text-xs lg:text-sm text-slate-500 select-none">
                    Faça sua pergunta...
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Send className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContent>
    </DefaultSectionContainer>
  );
};

export default ChatIASection;