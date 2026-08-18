import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/data/site";
import { EASE } from "@/lib/motion";

const mobileLinks = [{ label: "Home", href: "#top" }, ...navLinks, { label: "Contact", href: "#contact" }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: reduced ? 0 : -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: reduced ? 0 : 0.9 }}
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "border-b border-border bg-background/80 backdrop-blur-xl"
              : "border-b border-transparent"
          }`}
        >
          <nav
            aria-label="Main"
            className={`container-x flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-14" : "h-20"
            }`}
          >
            <a href="#top" className="shrink-0" aria-label="CODEVAP home">
              <Logo />
            </a>

            <ul className="hidden items-center gap-9 md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative font-display text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  >
                    {l.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="group relative hidden overflow-hidden rounded-sm border border-border-strong px-4 py-2.5 font-display text-[0.65rem] font-bold tracking-[0.18em] uppercase md:inline-flex"
              >
                <span className="absolute inset-0 -translate-y-full bg-primary transition-transform duration-300 ease-[var(--ease-out-premium)] group-hover:translate-y-0" />
                <span className="relative transition-colors group-hover:text-primary-foreground">
                  Let&apos;s Talk
                </span>
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid h-11 w-11 place-items-center rounded-sm border border-border md:hidden"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-background md:hidden"
            initial={{ clipPath: "circle(0% at 92% 5%)" }}
            animate={{ clipPath: "circle(150% at 92% 5%)" }}
            exit={{ clipPath: "circle(0% at 92% 5%)" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="container-x flex h-20 items-center justify-between">
              <Logo compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-sm border border-border"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center">
              <ul className="space-y-1">
                {mobileLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.12 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 py-3 font-display text-[2rem] leading-none font-bold tracking-tight"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      {l.label.toUpperCase()}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="container-x pb-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-sm bg-primary font-display text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
