import ContactSection from "@/components/contactSection";
import { ReactNode } from "react";

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
      <ContactSection />
    </section>
  );
}
