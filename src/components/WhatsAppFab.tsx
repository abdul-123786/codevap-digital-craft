import { MessageCircle } from "lucide-react";
import { contact } from "@/data/site";

/** Hidden until a real WhatsApp number is configured in src/data/site.ts. */
export function WhatsAppFab() {
  if (!contact.whatsapp) return null;

  return (
    <a
      href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex min-h-12 items-center gap-3 rounded-full border border-border-strong bg-surface px-4 shadow-lg transition-colors hover:border-primary"
    >
      <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
      <span className="font-display text-[0.65rem] font-bold tracking-[0.18em] uppercase max-lg:hidden lg:max-w-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:max-w-32 lg:group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
