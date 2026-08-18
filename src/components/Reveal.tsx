import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span" | "p";
};

/** Standard scroll reveal: opacity 0→1, y 30→0, premium ease-out. */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}
