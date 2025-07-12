"use client";

import { useScrollContext } from "@/context/scrollContext";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navigation = [
  {
    name: "Nosso Trabalho",
    href: "/#nosso-trabalho",
  },
  {
    name: "Quem Somos",
    href: "/#quem-somos",
  },
  {
    name: "Depoimentos",
    href: "/#depoimentos",
  },
  {
    name: "Perguntas Frequentes",
    href: "/#perguntas-frequentes",
  },
  {
    name: "Contato",
    href: "/#contato",
  },
];

const Header = () => {
  const { isScrolled } = useScrollContext();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={twMerge(
        "w-screen bg-transparent transition-all z-50 fixed flex justify-center lg:pt-4 top-0 left-0"
      )}
    >
      <div
        className={twMerge(
          "container bg-transparent transition-all relative px-[4vw] flex justify-between items-center py-2",

          !open &&
            isScrolled &&
            "bg-background/50 backdrop-blur-lg shadow-lg rounded-b-3xl lg:rounded-xl"
        )}
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 0.5 }}
        >
          <Link href={"/#top"}>
            <Image
              src="/logo.svg"
              alt="Logo bv track"
              width={150}
              height={60}
            />
          </Link>
        </motion.div>

        <div
          className={twMerge(
            "flex items-center text-slate-800 gap-4 lg:bg-transparent lg:flex-row lg:static lg:h-full lg:w-fit fixed right-0 top-0 min-h-0 max-h-0 lg:min-h-full bg-background/50 lg:backdrop-blur-none  h-full lg:border-0 overflow-hidden lg:overflow-auto transition-all border-white w-full flex-col justify-center",
            open &&
              "max-h-screen min-h-screen !backdrop-blur-lg z-[99] border-2 slide-in-from-top"
          )}
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-normal "
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <label className="label lg:hidden flex">
          <input
            type="checkbox"
            onChange={() => (open ? setOpen(false) : setOpen(true))}
            id="check"
            checked={open}
          />
          <span className="menubar"></span>
          <span className="menubar"></span>
          <span className="menubar"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
