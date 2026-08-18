import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { technologies } from "@/data/site";
import { EASE, viewportOnce } from "@/lib/motion";

/** Offsets create an intentional, flowing typographic field instead of an icon grid. */
const offsets = ["lg:translate-y-0", "lg:translate-y-6", "lg:-translate-y-4", "lg:translate-y-3"];

export function Technologies() {
  return (
    <section className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="eyebrow">04 / Technology</Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            BUILT WITH
          </h2>
        </Reveal>

        <ul className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-5 lg:gap-x-14">
          {technologies.map((t, i) => (
            <motion.li
              key={t}
              className={offsets[i % offsets.length]}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 7) * 0.05 }}
            >
              <span className="font-display cursor-default text-xl font-bold tracking-tight text-muted-foreground transition-colors duration-300 hover:text-primary sm:text-3xl lg:text-4xl">
                {t}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
