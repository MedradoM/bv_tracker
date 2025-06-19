"use client";

import { useScrollContext } from "@/context/scrollContext";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const WhatsAppButton = () => {
  const { isScrolled } = useScrollContext();

  return (
    <Link
      href={"https://wa.me/17999999999"}
      target="_blank"
      className={twMerge(
        "fixed transition-all duration-300 -bottom-24 lg:right-8 right-4 z-50 border-2 border-white rounded-full",
        isScrolled && "bottom-4 lg:bottom-8"
      )}
    >
      <Image
        alt="icone do whatsapp flutuante no canto inferior na direita"
        src={"/whatsapp.png"}
        width={52}
        height={52}
      />
    </Link>
  );
};

export default WhatsAppButton;
