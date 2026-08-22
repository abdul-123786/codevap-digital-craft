import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/daya-creatives.png";
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
  phone: "+91 82484 52433",
  whatsapp: "+91 82484 52433", // e.g. "919999999999" — leave empty to hide the WhatsApp button
  location: "Remote — India",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/codevap_technology/" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Founders", href: "#founders" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const services = [
  {
    id: "01",
    title: "Business Websites",
    description: "Professional websites that establish your brand and generate enquiries.",
    examples: ["Landing Pages", "Corporate Websites", "Portfolio Websites", "Service Websites"],
  },
  {
    id: "02",
    title: "Web Applications",
    description: "Custom platforms, dashboards, portals, and business tools built around your workflow.",
    examples: ["Dashboards", "Portals", "Management Systems", "SaaS Platforms"],
  },
  {
    id: "03",
    title: "E-Commerce",
    description: "Online stores with product management, payments, orders, and the systems behind them.",
    examples: ["B2C", "B2B", "Multi-Vendor", "Custom Commerce"],
  },
  {
    id: "04",
    title: "Custom Software",
    description: "Software designed specifically to solve your operational and business problems.",
    examples: ["Business Systems", "Admin Panels", "Internal Tools", "Custom Platforms"],
  },
  {
    id: "05",
    title: "Automation & Integrations",
    description: "Connect your tools, reduce repetitive work, and automate important business processes.",
    examples: ["APIs", "Payment Gateways", "Third-Party Services", "Business Automation"],
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
    title: "Daya Creatives",
    category: "Creative Agency",
    description:
      "Premium fashion, web development, eCommerce solutions, and creative services platform.",
    technologies: ["React.js", "Node.js", "Tailwind", "RazorPay", "Cloudinary", "Express.js", "MongoDB"],
    outcome: "A high-end digital presence unifying diverse creative services.",
    image: work03,
    href: "https://dayacreatives.com/",
    layout: "left",
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
    layout: "right",
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
    title: "Built Around Your Business",
    description: "Every business works differently. We understand your requirements first and build the solution around your actual workflow, customers, and goals.",
    summary: "Your business → Your requirements → Your solution",
  },
  {
    id: "02",
    title: "Quality Code. Real Performance.",
    description: "We care about what happens behind the screen too. Fast interfaces, clean architecture, responsive experiences, secure integrations, and reliable backend systems are part of every project.",
    summary: "Clean code · Fast performance · Reliable systems",
  },
  {
    id: "03",
    title: "Ready To Grow",
    description: "Your first version shouldn't become your biggest limitation. We build systems with a strong foundation so new features, users, products, integrations, and business requirements can be added as you grow.",
    summary: "Build today → Improve tomorrow → Scale when ready",
  },
  {
    id: "04",
    title: "One Team From Start To Finish",
    description: "No need to manage multiple teams for design, development, and deployment. CODEVAP brings the complete process together — from planning and UI/UX to development, testing, deployment, and support.",
    summary: "Plan · Design · Build · Launch · Support",
  }
];

export const process = [
  { id: "01", title: "Understand", description: "We start by understanding what your business needs to achieve." },
  { id: "02", title: "Design", description: "Create the visual system and user experience." },
  { id: "03", title: "Build", description: "Engineer the product with practical, scalable technology." },
  { id: "04", title: "Launch", description: "Deploy, monitor and ensure everything works perfectly." },
  { id: "05", title: "Improve", description: "Continuous improvements and iteration based on real usage." },
];

export const audiences = [
  { title: "Startups", description: "From idea to launch — websites, MVPs, applications, and complete digital products." },
  { title: "Small Businesses", description: "Build a professional online presence and replace manual processes with better digital systems." },
  { title: "Growing Brands", description: "Upgrade your website, launch e-commerce, build custom platforms, and support your next stage of growth." },
  { title: "Established Businesses", description: "Modernize existing systems, connect your tools, automate workflows, and build new digital capabilities." }
];

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

export const timelines = [
  "Immediate",
  "1-2 Months",
  "3-6 Months",
  "6-12 Months",
];
