"use client";

import { Clock, Mail, MapPin, PhoneCall, Send } from "lucide-react";
import DefaultSectionContainer from "../ui/default-section-container";
import SectionContent from "../ui/section-content";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

const contact = [
  {
    title: "Telefone",
    Icon: PhoneCall,
    content: [
      {
        text: "(17) 99136-4360",
        href: "https://wa.me/5517991364360",
      },
    ],
  },
  {
    title: "Endereço",
    Icon: MapPin,
    content: [
      {
        text: "Av. José Zancaner, 1073-1015, Catiguá - SP, 15870-000",
        href: "https://maps.app.goo.gl/re8M7bpbVTUYNg6w7",
      },
    ],
  },
  {
    title: "Email",
    Icon: Mail,
    content: [
      {
        text: "atendimento@bvtracker.com.br",
        href: "mailto:atendimento@bvtracker.com.br",
      },
    ],
  },
  {
    title: "Horários",
    Icon: Clock,
    content: [
      {
        text: "De segunda a sábado 7h às 18h.",
        href: "https://maps.app.goo.gl/re8M7bpbVTUYNg6w7",
      },
    ],
  },
];

type TForm = {
  name: string;
  phone: number;
  subject: string;
  message: string;
  email: string;
};

const ContactSection = () => {
  const { register, handleSubmit } = useForm<TForm>();
  const registerWithMask = useHookFormMask(register);
  const ref = useRef(null);
  const animatePresence = useInView(ref, { once: true });

  const submitForm = (data: TForm) => {
    console.log("Form submitted:", data);
  };

  return (
    <DefaultSectionContainer id="contato" className="bg-white my-0">
      <SectionContent title="Entre em contato">
        <div ref={ref} className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-8 lg:w-[60%]">
            {contact.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={animatePresence && { filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gap-8 flex flex-col "
                key={item.title}
              >
                <div className="flex group items-start gap-4 p-4">
                  <div className="p-3 rounded-lg bg-slate-100">
                    <item.Icon className="size-5 min-w-5 stroke-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-500 font-semibold">
                      {item.title}
                    </h3>
                    {item.content.map((content, index) => (
                      <a
                        key={index}
                        href={content.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm  hover:text-primary font-semibold transition-colors"
                      >
                        {content.text}
                      </a>
                    ))}
                  </div>
                </div>

                {index < contact.length - 1 && (
                  <hr className="border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>

          <Card className="border-0 shadow-none lg:shadow-xl bg-white flex lg:justify-self-end lg:w-[80%]">
            <CardContent className="lg:p-8 p-0">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Envie uma mensagem
                </h2>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato o mais
                  breve possível.
                </p>
              </div>

              <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Nome completo
                    </Label>
                    <Input
                      {...register("name")}
                      id="name"
                      placeholder="Seu nome"
                      className="border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Telefone
                    </Label>
                    <Input
                      {...registerWithMask(
                        "phone",
                        ["(99) 99999-9999", "(99) 9999-9999"],
                        {
                          autoUnmask: true,
                        }
                      )}
                      id="phone"
                      placeholder="(00) 00000-0000"
                      className="border-gray-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Assunto
                  </Label>
                  <Input
                    {...register("subject")}
                    id="subject"
                    placeholder="Como podemos ajudar?"
                    className="border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Mensagem
                  </Label>
                  <Textarea
                    {...register("message")}
                    id="message"
                    placeholder="Descreva sua necessidade ou dúvida..."
                    rows={5}
                    className="border-gray-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </SectionContent>
    </DefaultSectionContainer>
  );
};

export default ContactSection;
