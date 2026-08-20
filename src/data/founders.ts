import founder01 from "@/assets/founder-01.jpg";
import founder02 from "@/assets/founder-02.jpg";

export type Founder = {
  id: string;
  /** TODO: replace with the real founder name. */
  name: string;
  role: string;
  image: string;
  shortBio: string;
  longBio: string;
  expertise: string[];
  responsibilities: string[];
  social: { label: string; href: string }[];
};

/**
 * Founder content is intentionally placeholder-only.
 * Replace every ADD_* value with verified information before launch —
 * nothing here is invented as a claim.
 */
export const founders: Founder[] = [
  {
    id: "founder-01",
    name: "ADD FOUNDER NAME",
    role: "Co-Founder & CEO",
    image: founder01,
    shortBio: "ADD A SHORT ONE-LINE BIO.",
    longBio: "ADD THE FULL BIOGRAPHY. Keep it factual — background, focus areas and the kind of work this founder leads at CODEVAP.",
    expertise: ["Business Strategy", "Product Direction", "Client Partnership"],
    responsibilities: ["Strategy & positioning", "Client relationships", "Delivery oversight"],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    id: "founder-02",
    name: "ADD FOUNDER NAME",
    role: "Co-Founder & CTO",
    image: founder02,
    shortBio: "ADD A SHORT ONE-LINE BIO.",
    longBio: "ADD THE FULL BIOGRAPHY. Keep it factual — engineering background, architecture focus and the systems this founder builds at CODEVAP.",
    expertise: ["Software Engineering", "System Architecture", "Performance"],
    responsibilities: ["Technical architecture", "Engineering standards", "Infrastructure & security"],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];
