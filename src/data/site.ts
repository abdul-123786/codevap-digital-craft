import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";
import work06 from "@/assets/work-06.jpg";

/**
 * Single source of truth for editable content.
 * Replace placeholder values (marked TODO) with real company data.
 */

export const contact = {
  // TODO: replace with real CODEVAP contact details before launch.
  email: "hello@codevap.example",
  phone: "+00 00000 00000",
  whatsapp: "", // e.g. "919999999999" — leave empty to hide the WhatsApp button
  location: "Remote — India",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Business websites and high-performance web experiences.",
  },
  {
    id: "02",
    title: "Web Applications",
    description: "Scalable applications built around real business workflows.",
  },
  {
    id: "03",
    title: "E-Commerce",
    description: "Conversion-focused online stores and marketplaces.",
  },
  {
    id: "04",
    title: "Mobile Applications",
    description: "Modern mobile experiences designed for customers on the move.",
  },
  {
    id: "05",
    title: "UI / UX Design",
    description: "Interfaces that balance usability, clarity and visual identity.",
  },
  {
    id: "06",
    title: "Admin Systems",
    description: "Powerful dashboards and internal management platforms.",
  },
  {
    id: "07",
    title: "SEO & Performance",
    description: "Fast, discoverable and technically optimized websites.",
  },
  {
    id: "08",
    title: "Maintenance & Support",
    description: "Continuous improvements, monitoring and technical support.",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  outcome: string;
  image: string;
  href: string;
  layout: "left" | "right" | "full" | "split";
};

export const projects: Project[] = [
  {
    id: "01",
    title: "E-Commerce Platform",
    category: "Commerce",
    description:
      "A storefront engineered around checkout speed, catalogue depth and repeat purchase behaviour.",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
    outcome: "Faster catalogue browsing and a shorter path to checkout.",
    image: work01,
    href: "#contact",
    layout: "left",
  },
  {
    id: "02",
    title: "Business Website",
    category: "Brand",
    description:
      "A compact brand site built as a lead engine: clear positioning, fast pages, measurable enquiries.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    outcome: "Enquiry flow reduced to a single, focused action.",
    image: work02,
    href: "#contact",
    layout: "right",
  },
  {
    id: "03",
    title: "Multi-Vendor Marketplace",
    category: "Platform",
    description:
      "Vendor onboarding, payouts and moderation designed as one operational system.",
    technologies: ["React", "Express", "PostgreSQL", "Redis"],
    outcome: "Vendor operations consolidated into one dashboard.",
    image: work03,
    href: "#contact",
    layout: "full",
  },
  {
    id: "04",
    title: "Web Application",
    category: "Product",
    description:
      "A workflow product where every screen maps to a real internal process.",
    technologies: ["React", "TypeScript", "REST APIs"],
    outcome: "Manual coordination replaced with a single source of truth.",
    image: work04,
    href: "#contact",
    layout: "split",
  },
  {
    id: "05",
    title: "Mobile Application",
    category: "Mobile",
    description:
      "A mobile-first experience for customers who decide in seconds, not sessions.",
    technologies: ["React Native", "Node.js", "Cloudinary"],
    outcome: "Core journey completed in under three taps.",
    image: work05,
    href: "#contact",
    layout: "left",
  },
  {
    id: "06",
    title: "Admin Platform",
    category: "Internal Tools",
    description:
      "Roles, reporting and controls built for teams that run the business daily.",
    technologies: ["React", "PostgreSQL", "Express"],
    outcome: "Reporting time cut down to a single view.",
    image: work06,
    href: "#contact",
    layout: "right",
  },
];

export const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind",
  "TypeScript",
  "JavaScript",
  "Cloudinary",
  "Razorpay",
  "Redis",
  "REST APIs",
  "Git",
];

export const principles = [
  {
    id: "01",
    title: "Built For Business",
    description:
      "We focus on measurable business outcomes, not just visual appearance.",
  },
  {
    id: "02",
    title: "Engineered For Speed",
    description: "Fast interfaces, optimized assets and scalable architecture.",
  },
  {
    id: "03",
    title: "Designed To Scale",
    description: "Systems that can evolve as your business grows.",
  },
  {
    id: "04",
    title: "One Digital Partner",
    description:
      "Design, development, deployment and ongoing support under one roof.",
  },
];

export const process = [
  { id: "01", title: "Discover", description: "Understand the business, users and goals." },
  {
    id: "02",
    title: "Plan",
    description: "Define architecture, user journeys and project scope.",
  },
  { id: "03", title: "Design", description: "Create the visual system and user experience." },
  { id: "04", title: "Build", description: "Engineer the product with scalable technology." },
  {
    id: "05",
    title: "Test",
    description: "Performance, security, responsiveness and quality testing.",
  },
  { id: "06", title: "Launch", description: "Deploy, monitor and continuously improve." },
];

export const audiences = ["Startups", "Small Businesses", "Growing Brands", "Enterprise Teams"];

/** TODO: replace placeholders with verified numbers. Nothing is published as a claim. */
export const metrics = [
  { value: "01+", label: "Years Building" },
  { value: "XX+", label: "Projects" },
  { value: "XX+", label: "Businesses" },
  { value: "XX%", label: "Client Satisfaction" },
];

/** Empty until real, attributable testimonials exist. The section stays hidden. */
export const testimonials: { quote: string; name: string; company: string }[] = [];

export const projectTypes = [
  "Website",
  "Web Application",
  "E-commerce",
  "Mobile App",
  "UI/UX",
  "Maintenance",
  "Other",
];

export const budgets = [
  "Under ₹25K",
  "₹25K – ₹50K",
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L+",
];
