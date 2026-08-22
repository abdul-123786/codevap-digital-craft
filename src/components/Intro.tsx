import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, viewportOnce } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

const words = [
  { t: "WE" },
  { t: "BUILD" },
  { t: "WEBSITES." },
  { t: "APPS.", accent: true },
  { t: "SOFTWARE." },
  { t: "THAT" },
  { t: "HELP" },
  { t: "BUSINESSES" },
  { t: "MOVE" },
  { t: "FORWARD.", accent: true },
];

const pillars = [
  { id: "01", title: "Business-Focused", desc: "We first understand your business, customers, and goals — then build the technology around them." },
  { id: "02", title: "Built for Performance", desc: "Fast websites, responsive interfaces, optimized code, and reliable systems designed for real-world users." },
  { id: "03", title: "Ready to Scale", desc: "We build with a solid foundation so your website or application can evolve as your business grows." },
  { id: "04", title: "From Idea to Launch", desc: "Design, development, integrations, deployment, and ongoing improvements — handled by one team." },
];

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0.7, 1], ["0%", "-6%"]);

  return (
    <section
      ref={ref}
      id="intro"
      className="container-x py-24 lg:py-36"
    >
      <motion.div style={{ opacity, y }}>
        <Reveal className="eyebrow">01 / What We Do</Reveal>

        <Reveal delay={0.05} className="mt-8 max-w-2xl">
          <p className="font-display text-lg font-medium text-muted-foreground sm:text-xl">
            We build more than websites.
          </p>
        </Reveal>

        <h2 className="mt-4 max-w-4xl font-display text-[1.9rem] leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.75rem]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden leading-[1.15]">
              <motion.span
                className={`mr-[0.28em] inline-block ${w.accent ? "text-primary" : ""}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.2 + i * 0.05 }}
              >
                {w.t}
              </motion.span>
            </span>
          ))}
        </h2>

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed sm:text-lg">
            From a business website to a complete digital platform, <strong className="text-foreground font-medium">CODEVAP builds technology around the way your business actually works.</strong>
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            We focus on clean design, reliable development, fast performance, and systems that are ready for your next stage of growth.
          </p>
        </Reveal>

        {/* Green motion divider */}
        <motion.div
          aria-hidden="true"
          className="mt-12 h-px origin-left bg-primary/50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
        />

        {/* Supporting pillars */}
        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.id}
              delay={i * 0.07}
              className="group relative bg-background p-6 transition-colors duration-300 hover:bg-surface"
            >
              <span className="font-display text-[0.65rem] font-bold tracking-[0.18em] text-primary">
                {p.id}
              </span>
              <h3 className="mt-3 font-display text-base font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 ease-[var(--ease-out-premium)] group-hover:w-full"
              />
            </Reveal>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
