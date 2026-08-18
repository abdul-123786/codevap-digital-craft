import { useReducedMotion } from "framer-motion";

const items = [
  "Web Development",
  "Digital Products",
  "E-Commerce",
  "UI/UX",
  "Mobile Apps",
  "Performance",
  "SEO",
];

export function Marquee() {
  const reduced = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="border-y border-border bg-surface/60 py-4">
      <div className="flex overflow-hidden" aria-hidden="true">
        <div className={`flex shrink-0 items-center whitespace-nowrap ${reduced ? "" : "animate-marquee"}`}>
          {row.concat(row).map((item, i) => (
            <span key={i} className="flex items-center">
              <span
                className={`font-display text-sm font-bold tracking-[0.18em] uppercase sm:text-base ${
                  i % 2 === 0 ? "text-foreground" : "text-primary"
                }`}
              >
                {item}
              </span>
              <span className="mx-5 h-1 w-1 rounded-full bg-border-strong sm:mx-7" />
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Services: web development, digital products, e-commerce, UI/UX, mobile apps, performance,
        SEO.
      </p>
    </div>
  );
}
