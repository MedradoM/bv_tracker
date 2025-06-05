"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navigation = [
  {
    name: "Quem Somos",
    href: "/#quem-somos",
  },
  {
    name: "Nosso Trabalho",
    href: "/#nosso-trabalho",
  },
  {
    name: "Depoimentos",
    href: "/#depoimentos",
  },
  {
    name: "Contato",
    href: "/#contato",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-screen z-50 fixed flex justify-center top-0 left-0">
      <div className="container relative px-[4vw] flex justify-between items-center py-2">
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/logo.svg" alt="Logo bv track" width={150} height={60} />
        </motion.div>

        <div
          className={twMerge(
            "flex items-center gap-4 lg:bg-transparent lg:flex-row lg:static lg:h-full lg:w-fit fixed right-0 top-0 max-h-0 lg:max-h-full  bg-zinc-200/20 backdrop-blur-lg border-2 h-full lg:border-0 overflow-hidden lg:overflow-auto transition-all border-white w-full flex-col justify-center",
            open && "max-h-screen slide-in-from-top"
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

        <label className="label ">
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
