import { motion } from "framer-motion";
import { EASE, viewportOnce } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

const words = [
  { t: "WE" },
  { t: "BUILD" },
  { t: "DIGITAL" },
  { t: "SYSTEMS", accent: true },
  { t: "DESIGNED" },
  { t: "TO" },
  { t: "GROW", accent: true },
  { t: "WITH" },
  { t: "YOUR" },
  { t: "BUSINESS." },
];

export function Intro() {
  return (
    <section id="about" className="container-x py-24 lg:py-36">
      <Reveal className="eyebrow">01 / What We Do</Reveal>

      <Reveal delay={0.05} className="mt-8 max-w-2xl">
        <p className="font-display text-lg font-medium text-muted-foreground sm:text-xl">
          We don&apos;t just build websites.
        </p>
      </Reveal>

      <h2 className="mt-4 max-w-4xl font-display text-[1.9rem] leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.75rem]">
        {words.map((w, i) => (
          <motion.span
            key={i}
            className={`mr-[0.28em] inline-block ${w.accent ? "text-primary" : ""}`}
            initial={{ opacity: 0.12, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.045 }}
          >
            {w.t}
          </motion.span>
        ))}
      </h2>
    </section>
  );
}
