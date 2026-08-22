import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { contact, navLinks } from "@/data/site";
import { EASE, viewportOnce } from "@/lib/motion";

const links = [{ label: "Home", href: "#top" }, ...navLinks, { label: "Contact", href: "#contact" }];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Page-end green line animation */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-full origin-left bg-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.4, ease: EASE }}
      />

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Building digital experiences that move business.
            </p>
          </motion.div>

          <motion.nav
            aria-label="Footer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE, delay: 0.07 }}
          >
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
          >
            <h2 className="eyebrow">Elsewhere</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {contact.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    rel="noopener noreferrer"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
                    />
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
                  />
                  {contact.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">© 2026 CODEVAP. All rights reserved.</p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
            />
            Available for new projects
          </p>
        </div>
      </div>
    </footer>
  );
}
