import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { EASE, viewportOnce } from "@/lib/motion";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="green-glow absolute bottom-[-30%] left-1/2 h-[600px] w-[900px] -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <div className="grid-lines absolute inset-0 opacity-40" />
      </div>

      <div className="container-x text-center">
        <Reveal className="eyebrow">Have an idea?</Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[2.2rem] leading-[0.98] font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            LET&apos;S <span className="text-primary">BUILD</span>
            <br />
            SOMETHING GREAT.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary-foreground uppercase"
          >
            Start Your Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-sm border border-border-strong px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-colors hover:border-primary"
          >
            Talk To Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
