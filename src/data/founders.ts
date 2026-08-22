import founder01 from "@/assets/founder-01.jpg";
import founder02 from "@/assets/founder-02.jpg";
import founder03 from "@/assets/founder-3.png";

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
    name: "Vinoth Kumar.S",
    role: "Founder & CEO",
    image: founder02,
    shortBio: "I’m Vinoth Kumar.S, the Founder and Lead Developer of CODEVAP, a software developer and technology enthusiast focused on building modern websites, web applications, e-commerce platforms, and custom digital solutions. I specialize in transforming ideas into scalable, user-friendly, and production-ready digital products using modern technologies.",
    longBio: "I’m Abdul Hameethu, a software developer and technology enthusiast focused on building modern websites, web applications, e-commerce platforms, and custom digital solutions.",
    expertise: ["Lead developer", "SEO Specialist", "Client Partnership"],
    responsibilities: ["Strategy & positioning", "Client relationships", "Delivery oversight"],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vinoth-kumar-s-73697b3a7/" },
      { label: "Instagram", href: "https://www.instagram.com/codevap_technology/" },
    ],
  },
  {
    id: "founder-02",
    name: "Abdul Hameethu M",
    role: "Co-Founder & CEO",
    image: founder01,
    shortBio: "I’m Abdul Hameethu, a software developer and technology enthusiast focused on building modern websites, web applications, e-commerce platforms, and custom digital solutions.",
    longBio: "ADD THE FULL BIOGRAPHY. Keep it factual — engineering background, architecture focus and the systems this founder builds at CODEVAP.",
    expertise: ["Software Engineering", "System Architecture", "Lead Developer"],
    responsibilities: ["Technical architecture", "Engineering standards", "Infrastructure & security"],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/abdul-hameethu/" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    id: "founder-03",
    name: "Meenakshi S",
    role: "UI/UX Designer",
    image: founder03,
    shortBio: "I’m Meenakshi S., a UI/UX Designer and Business Development Executive focused on creating modern, user-friendly digital experiences while building strong client relationships and identifying new business opportunities. I work closely with clients and development teams to transform ideas and requirements into engaging designs and effective digital solutions.",
    longBio: "ADD THE FULL BIOGRAPHY. Keep it factual — background, focus areas and the kind of work this founder leads at CODEVAP.",
    expertise: ["UI/UX Designer", "Lead Generation Consultant", "Business Development Executive"],
    responsibilities: ["Strategy & positioning", "Client relationships", "Delivery oversight"],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/meenakshi-s-092829372/" },
      { label: "Instagram", href: "https://www.instagram.com/codevap_technology/" },
    ],
  },
];
