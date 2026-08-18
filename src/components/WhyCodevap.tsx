import { Reveal } from "@/components/Reveal";
import { principles } from "@/data/site";

export function WhyCodevap() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="eyebrow">05 / Difference</Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            WHY CODEVAP?
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.id}
              delay={i * 0.06}
              className="group relative bg-background p-7 transition-colors duration-400 hover:bg-surface lg:p-10"
            >
              <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary">
                {p.id}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight sm:text-2xl">
                {p.title.toUpperCase()}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 ease-[var(--ease-out-premium)] group-hover:w-full"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
