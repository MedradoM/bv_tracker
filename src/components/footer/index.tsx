"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { SplitText } from "../ui/split-text";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-800 text-slate-50">
      <div className="container gap-8 mx-auto px-4 flex flex-col">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 items-center gap-8">
          <div className="col-span-1 flex flex-col gap-8">
            <SplitText
              className="lg:text-5xl text-3xl font-bold"
              text="Tenha ainda mais segurança e controle sobre sua frota, conte com a BV Tracker!"
            />

            <motion.div className="lg:text-base text-sm">
              Se você busca economia, segurança, e tecnologia, a BV Tracker está
              disposta para te fornecer o melhor. Fale conosco agora mesmo pelo
              WhatsApp
            </motion.div>

            <Button
              className="text-sm z-10 transition-all lg:w-fit w-full border-slate-800 text-slate-800 hover:text-slate-50 hover:bg-blue-600 cursor-pointer py-4 px-6"
              type="button"
              variant={"outline"}
            >
              Entre em contato
            </Button>
          </div>
          <div className="col-span-1 flex justify-end row-start-1 lg:row-start-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.651388991344!2d-49.058325024742906!3d-21.046630380607176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc238a02f03361%3A0x289c67980987f4cc!2sBV%20Tracker%20Rastreamento!5e0!3m2!1spt-BR!2sbr!4v1750300121802!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen={false}
              className="w-full lg:max-w-[80%] z-10 h-full min-h-[45vh]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-4 border-t border-slate-700 pt-8">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Bv Tracker. Todos direitos reservados.
          </p>

          <span className="text-sm text-center lg:flex-row flex-col items-center flex gap-2 ">
            Desenvolvido por{" "}
            <a
              href="https://github.com/MedradoM"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer z-10"
            >
              <Image
                alt="logo branca MathDeveloper"
                src={"/math_icon.svg"}
                width={96}
                height={16}
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
