import { Reveal } from "@/components/Reveal";
import { audiences, metrics } from "@/data/site";

export function Trust() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <Reveal className="eyebrow">07 / Who We Build For</Reveal>
          <ul className="mt-8 space-y-1">
            {audiences.map((a, i) => (
              <Reveal
                as="li"
                key={a}
                delay={i * 0.05}
                className="group flex items-center gap-4 border-b border-border py-4"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-primary opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="font-display text-lg font-bold tracking-tight sm:text-2xl">
                  {a.toUpperCase()}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal className="eyebrow">By The Numbers</Reveal>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-border">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05} className="bg-background p-6">
                <dt className="eyebrow">{m.label}</dt>
                <dd className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {m.value}
                </dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.2} className="mt-4 text-xs text-muted-foreground">
            Placeholder values — replaced with verified figures before publication.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
