import { Logo } from "@/components/Logo";
import { contact, navLinks } from "@/data/site";

const links = [{ label: "Home", href: "#top" }, ...navLinks, { label: "Contact", href: "#contact" }];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Building digital experiences that move business.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Elsewhere</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {contact.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">© 2026 CODEVAP. All rights reserved.</p>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
          />
          Available for new projects
        </p>
      </div>
    </footer>
  );
}
