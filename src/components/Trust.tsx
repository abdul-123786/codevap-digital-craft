import { Reveal } from "@/components/Reveal";
import { audiences, metrics } from "@/data/site";

export function Trust() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div className="lg:pr-8">
          <Reveal className="eyebrow">07 / WHO WE BUILD FOR</Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              BUILT FOR BUSINESSES
              <br />
              <span className="text-primary">AT EVERY STAGE.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">
              Whether you&apos;re starting from an idea or improving an existing business, CODEVAP builds digital solutions around where you are today — and where you want to go next.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-2">
            {audiences.map((a, i) => (
              <Reveal
                as="li"
                key={a.title}
                delay={i * 0.05}
                className="group border-b border-border pb-6"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-primary opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="font-display text-lg font-bold tracking-tight sm:text-2xl">
                    {a.title.toUpperCase()}
                  </span>
                </div>
                <p className="mt-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-border lg:pl-16">
          <div>
            <Reveal className="eyebrow">WHAT WE DELIVER</Reveal>
            
            <Reveal delay={0.05}>
              <p className="mt-8 font-display text-[1.05rem] font-bold tracking-[0.05em] text-foreground sm:text-xl">
                WEBSITE → APPLICATION → <br className="hidden lg:block"/>
                <span className="text-primary">E-COMMERCE</span> → SOFTWARE → AUTOMATION
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">
                From a single website to a complete business platform, we build according to your actual requirements.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.15}>
            <div className="mt-16 border-t border-border pt-12 sm:mt-24">
              <h3 className="eyebrow text-primary">OUR FOCUS</h3>
              <p className="mt-8 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Useful technology.
                <br />
                Clean execution.
                <br />
                Long-term value.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
