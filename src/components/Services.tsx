import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";
import { EASE } from "@/lib/motion";

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="eyebrow">02 / Capabilities</Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                WHAT WE BUILD
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-xs text-sm text-muted-foreground">
            Eight disciplines, one delivery team. Every engagement is scoped around the outcome you
            need.
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-border">
          {services.map((s, i) => {
            const isActive = active === s.id;
            return (
              <motion.li
                key={s.id}
                className="relative border-b border-border"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, ease: EASE, delay: Math.min(i, 5) * 0.04 }}
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActive(isActive ? null : s.id)}
                  className="group relative flex w-full items-start gap-4 px-1 py-5 text-left transition-colors hover:bg-foreground/[0.02] sm:items-center sm:gap-8 sm:py-7"
                >
                  <span
                    className={`mt-0.5 font-display text-[0.7rem] font-bold tracking-[0.16em] transition-colors sm:mt-0 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {s.id}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl">
                      {s.title.toUpperCase()}
                    </span>
                    <motion.span
                      className="block overflow-hidden text-sm text-muted-foreground"
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 10 : 0,
                      }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      {s.description}
                    </motion.span>
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isActive ? "translate-x-1 -translate-y-1 text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>

                <motion.span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-primary"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </motion.li>
            );
          })}
        </ul>

        <Reveal delay={0.05} className="mt-12">
          <a
            href="#contact"
            className="group inline-flex min-h-12 items-center gap-3 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase"
          >
            <span className="border-b border-primary pb-1">Start a Project</span>
            <ArrowUpRight
              className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
