import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { process } from "@/data/site";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 120,
    damping: 30,
  });

  return (
    <section id="process" className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="eyebrow">06 / Process</Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            OUR <span className="text-primary">APPROACH.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-2xl">
          <p className="text-muted-foreground leading-relaxed sm:text-lg">
            We don't start with a template. We start by understanding <strong className="text-foreground font-medium">what your business needs to achieve</strong>, then turn that requirement into a practical digital solution.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            <strong className="text-foreground font-bold text-primary">CODEVAP — Technology built around your business.</strong>
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-16">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[3px] w-px bg-border sm:left-[7px]">
            <motion.div className="h-full w-full origin-top bg-primary" style={{ scaleY }} />
          </div>

          <ol className="space-y-10 lg:space-y-14">
            {process.map((step, i) => (
              <Reveal as="li" key={step.id} delay={i * 0.04} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-10 h-2 w-2 rounded-full border border-primary bg-background sm:-left-16"
                />
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary">
                    {step.id}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-3xl">
                    {step.title.toUpperCase()}
                  </h3>
                </div>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
