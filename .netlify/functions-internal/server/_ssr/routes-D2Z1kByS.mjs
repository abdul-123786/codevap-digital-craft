import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as __exportAll } from "./server-BrCn0fsX.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BrCn0fsX2.mjs";
import { n as useTheme } from "./router-D5lOG2B9.mjs";
import { a as useMotionValue, c as AnimatePresence, i as useTransform, n as useReducedMotion, o as useScroll, r as useSpring, s as motion, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { a as Menu, c as ArrowUpRight, i as MessageCircle, l as ArrowRight, n as Sun, o as LoaderCircle, r as Moon, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as gsapWithCSS } from "../_libs/gsap.mjs";
import { t as timer } from "../_libs/d3+[...].mjs";
import { i as bounds_default, n as path_default, r as graticule, t as orthographic_default } from "../_libs/d3-geo.mjs";
import { a as SiJavascript, c as SiNodedotjs, d as SiReact, f as SiRedis, h as SiVuedotjs, i as SiGit, l as SiPostgresql, m as SiTypescript, n as SiCloudinary, o as SiMongodb, p as SiTailwindcss, r as SiExpress, s as SiNextdotjs, t as TbApi, u as SiRazorpay } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2Z1kByS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useMediaQuery(query) {
	const [matches, setMatches] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mql = window.matchMedia(query);
		setMatches(mql.matches);
		const onChange = (e) => setMatches(e.matches);
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, [query]);
	return matches;
}
/** True only on pointer-precise, non-touch, motion-allowing devices. */
function useFinePointer() {
	return useMediaQuery("(hover: hover) and (pointer: fine)");
}
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var codevap_logo_dark_default = "/assets/codevap-logo-dark-Tvj1zyWZ.png";
var EASE = [
	.16,
	1,
	.3,
	1
];
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: EASE
		}
	}
};
var stagger = (staggerChildren = .08, delayChildren = 0) => ({
	hidden: {},
	visible: { transition: {
		staggerChildren,
		delayChildren
	} }
});
var viewportOnce = {
	once: true,
	margin: "-12% 0px -12% 0px"
};
function Preloader() {
	const reduced = useReducedMotion();
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (reduced) {
			setDone(true);
			return;
		}
		const t = window.setTimeout(() => setDone(true), 1200);
		return () => window.clearTimeout(t);
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background",
		exit: {
			opacity: 0,
			y: -12
		},
		transition: {
			duration: .5,
			ease: EASE
		},
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: "/assets/codevap-logo-dark-Tvj1zyWZ.png",
				alt: "",
				width: 512,
				height: 512,
				className: "h-14 w-14 object-contain",
				initial: {
					opacity: 0,
					scale: .86
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .6,
					ease: EASE
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-px w-32 overflow-hidden bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-primary",
					initial: { scaleX: 0 },
					animate: { scaleX: 1 },
					style: { transformOrigin: "left" },
					transition: {
						duration: 1,
						ease: EASE
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				className: "mt-5 text-center text-[0.6rem] leading-relaxed font-medium tracking-[0.32em] text-muted-foreground uppercase",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: .5,
					delay: .15
				},
				children: [
					"Codevap",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Digital Experiences"
				]
			})
		]
	}) });
}
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
		className: "group inline-flex items-center gap-2.5",
		initial: "rest",
		whileHover: "hover",
		animate: "rest",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: codevap_logo_dark_default,
				alt: "",
				width: 512,
				height: 512,
				"aria-hidden": "true",
				className: "h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7",
				variants: {
					rest: {
						x: 0,
						scale: 1
					},
					hover: {
						x: 2,
						scale: 1.04
					}
				},
				transition: {
					duration: .35,
					ease: EASE
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[0.95rem] font-bold tracking-[0.16em] sm:text-base",
				children: "CODEVAP"
			}),
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": "true",
				className: "hidden h-1 w-1 rounded-full bg-primary sm:block",
				variants: {
					rest: { opacity: .5 },
					hover: {
						opacity: 1,
						scale: 1.6
					}
				},
				transition: {
					duration: .3,
					ease: EASE
				}
			})
		]
	});
}
var work_01_default = "/assets/work-01-D5cYMsW8.jpg";
var work_02_default = "/assets/work-02-BHi0aP7J.jpg";
var daya_creatives_default = "/assets/daya-creatives-CuvV_C-7.png";
var work_04_default = "/assets/work-04-CL7FZ_RN.jpg";
var work_05_default = "/assets/work-05-DOfV1POY.jpg";
var work_06_default = "/assets/work-06-CGJfcweN.jpg";
/**
* Single source of truth for editable content.
* Replace placeholder values (marked TODO) with real company data.
*/
var contact = {
	email: "hello@codevap.example",
	phone: "+91 82484 52433",
	whatsapp: "+91 82484 52433",
	location: "Remote — India",
	socials: [
		{
			label: "Instagram",
			href: "https://www.instagram.com/codevap_technology/"
		},
		{
			label: "LinkedIn",
			href: "#"
		},
		{
			label: "GitHub",
			href: "#"
		}
	]
};
var navLinks = [
	{
		label: "Work",
		href: "#work"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Founders",
		href: "#founders"
	},
	{
		label: "Process",
		href: "#process"
	},
	{
		label: "About",
		href: "#about"
	}
];
var services = [
	{
		id: "01",
		title: "Business Websites",
		description: "Professional websites that establish your brand and generate enquiries.",
		examples: [
			"Landing Pages",
			"Corporate Websites",
			"Portfolio Websites",
			"Service Websites"
		]
	},
	{
		id: "02",
		title: "Web Applications",
		description: "Custom platforms, dashboards, portals, and business tools built around your workflow.",
		examples: [
			"Dashboards",
			"Portals",
			"Management Systems",
			"SaaS Platforms"
		]
	},
	{
		id: "03",
		title: "E-Commerce",
		description: "Online stores with product management, payments, orders, and the systems behind them.",
		examples: [
			"B2C",
			"B2B",
			"Multi-Vendor",
			"Custom Commerce"
		]
	},
	{
		id: "04",
		title: "Custom Software",
		description: "Software designed specifically to solve your operational and business problems.",
		examples: [
			"Business Systems",
			"Admin Panels",
			"Internal Tools",
			"Custom Platforms"
		]
	},
	{
		id: "05",
		title: "Automation & Integrations",
		description: "Connect your tools, reduce repetitive work, and automate important business processes.",
		examples: [
			"APIs",
			"Payment Gateways",
			"Third-Party Services",
			"Business Automation"
		]
	}
];
var projects = [
	{
		id: "01",
		title: "E-Commerce Platform",
		category: "Commerce",
		description: "A storefront engineered around checkout speed, catalogue depth and repeat purchase behaviour.",
		technologies: [
			"React",
			"Node.js",
			"MongoDB",
			"Razorpay"
		],
		outcome: "Faster catalogue browsing and a shorter path to checkout.",
		image: work_01_default,
		href: "#contact",
		layout: "left"
	},
	{
		id: "02",
		title: "Business Website",
		category: "Brand",
		description: "A compact brand site built as a lead engine: clear positioning, fast pages, measurable enquiries.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind"
		],
		outcome: "Enquiry flow reduced to a single, focused action.",
		image: work_02_default,
		href: "#contact",
		layout: "right"
	},
	{
		id: "03",
		title: "Daya Creatives",
		category: "Creative Agency",
		description: "Premium fashion, web development, eCommerce solutions, and creative services platform.",
		technologies: [
			"React.js",
			"Node.js",
			"Tailwind",
			"RazorPay",
			"Cloudinary",
			"Express.js",
			"MongoDB"
		],
		outcome: "A high-end digital presence unifying diverse creative services.",
		image: daya_creatives_default,
		href: "https://dayacreatives.com/",
		layout: "left"
	},
	{
		id: "04",
		title: "Web Application",
		category: "Product",
		description: "A workflow product where every screen maps to a real internal process.",
		technologies: [
			"React",
			"TypeScript",
			"REST APIs"
		],
		outcome: "Manual coordination replaced with a single source of truth.",
		image: work_04_default,
		href: "#contact",
		layout: "right"
	},
	{
		id: "05",
		title: "Mobile Application",
		category: "Mobile",
		description: "A mobile-first experience for customers who decide in seconds, not sessions.",
		technologies: [
			"React Native",
			"Node.js",
			"Cloudinary"
		],
		outcome: "Core journey completed in under three taps.",
		image: work_05_default,
		href: "#contact",
		layout: "left"
	},
	{
		id: "06",
		title: "Admin Platform",
		category: "Internal Tools",
		description: "Roles, reporting and controls built for teams that run the business daily.",
		technologies: [
			"React",
			"PostgreSQL",
			"Express"
		],
		outcome: "Reporting time cut down to a single view.",
		image: work_06_default,
		href: "#contact",
		layout: "right"
	}
];
var technologies = [
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
	"Git"
];
var principles = [
	{
		id: "01",
		title: "Built Around Your Business",
		description: "Every business works differently. We understand your requirements first and build the solution around your actual workflow, customers, and goals.",
		summary: "Your business → Your requirements → Your solution"
	},
	{
		id: "02",
		title: "Quality Code. Real Performance.",
		description: "We care about what happens behind the screen too. Fast interfaces, clean architecture, responsive experiences, secure integrations, and reliable backend systems are part of every project.",
		summary: "Clean code · Fast performance · Reliable systems"
	},
	{
		id: "03",
		title: "Ready To Grow",
		description: "Your first version shouldn't become your biggest limitation. We build systems with a strong foundation so new features, users, products, integrations, and business requirements can be added as you grow.",
		summary: "Build today → Improve tomorrow → Scale when ready"
	},
	{
		id: "04",
		title: "One Team From Start To Finish",
		description: "No need to manage multiple teams for design, development, and deployment. CODEVAP brings the complete process together — from planning and UI/UX to development, testing, deployment, and support.",
		summary: "Plan · Design · Build · Launch · Support"
	}
];
var process = [
	{
		id: "01",
		title: "Understand",
		description: "We start by understanding what your business needs to achieve."
	},
	{
		id: "02",
		title: "Design",
		description: "Create the visual system and user experience."
	},
	{
		id: "03",
		title: "Build",
		description: "Engineer the product with practical, scalable technology."
	},
	{
		id: "04",
		title: "Launch",
		description: "Deploy, monitor and ensure everything works perfectly."
	},
	{
		id: "05",
		title: "Improve",
		description: "Continuous improvements and iteration based on real usage."
	}
];
var audiences = [
	{
		title: "Startups",
		description: "From idea to launch — websites, MVPs, applications, and complete digital products."
	},
	{
		title: "Small Businesses",
		description: "Build a professional online presence and replace manual processes with better digital systems."
	},
	{
		title: "Growing Brands",
		description: "Upgrade your website, launch e-commerce, build custom platforms, and support your next stage of growth."
	},
	{
		title: "Established Businesses",
		description: "Modernize existing systems, connect your tools, automate workflows, and build new digital capabilities."
	}
];
/** Empty until real, attributable testimonials exist. The section stays hidden. */
var testimonials = [];
var projectTypes = [
	"Website",
	"Web Application",
	"E-commerce",
	"Mobile App",
	"UI/UX",
	"Maintenance",
	"Other"
];
var budgets = [
	"Under ₹25K",
	"₹25K – ₹50K",
	"₹50K – ₹1L",
	"₹1L – ₹3L",
	"₹3L+"
];
var timelines = [
	"Immediate",
	"1-2 Months",
	"3-6 Months",
	"6-12 Months"
];
var mobileLinks = [
	{
		label: "Home",
		href: "#top"
	},
	...navLinks,
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const reduced = useReducedMotion();
	const { theme, setTheme } = useTheme();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		className: "fixed inset-x-0 top-0 z-50",
		initial: {
			y: reduced ? 0 : -24,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: EASE,
			delay: reduced ? 0 : .9
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `transition-all duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Main",
				className: `container-x flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "shrink-0",
						"aria-label": "CODEVAP home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-9 md:flex",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.href,
							className: "group relative font-display text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground",
							children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" })]
						}) }, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "group relative hidden overflow-hidden rounded-sm border border-border-strong px-4 py-2.5 font-display text-[0.65rem] font-bold tracking-[0.18em] uppercase md:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-y-full bg-primary transition-transform duration-300 ease-[var(--ease-out-premium)] group-hover:translate-y-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative transition-colors group-hover:text-primary-foreground",
									children: "Let's Talk"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
								"aria-label": "Toggle theme",
								className: "grid h-11 w-11 place-items-center rounded-sm border border-border transition-colors hover:bg-surface",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(true),
								"aria-label": "Open menu",
								className: "grid h-11 w-11 place-items-center rounded-sm border border-border md:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							})
						]
					})
				]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[70] flex flex-col bg-background md:hidden",
		initial: { clipPath: "circle(0% at 92% 5%)" },
		animate: { clipPath: "circle(150% at 92% 5%)" },
		exit: { clipPath: "circle(0% at 92% 5%)" },
		transition: {
			duration: .55,
			ease: EASE
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex h-20 items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
						"aria-label": "Toggle theme",
						className: "grid h-11 w-11 place-items-center rounded-sm border border-border transition-colors hover:bg-surface",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						"aria-label": "Close menu",
						className: "grid h-11 w-11 place-items-center rounded-sm border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Mobile",
				className: "container-x flex flex-1 flex-col justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: mobileLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							ease: EASE,
							delay: .12 + i * .05
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.href,
							onClick: () => setOpen(false),
							className: "group flex items-center gap-4 py-3 font-display text-[2rem] leading-none font-bold tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" }), l.label.toUpperCase()]
						})
					}, l.href))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "flex min-h-12 items-center justify-center rounded-sm bg-primary font-display text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase",
					children: "Start a Project"
				})
			})
		]
	}) })] });
}
/** Minimal green progress rail pinned to the top edge. */
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 26,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": "true",
		className: "fixed inset-x-0 top-0 z-[60] h-px origin-left bg-primary",
		style: { scaleX }
	});
}
/**
* Wraps a CTA button in a subtle magnetic pull effect.
* Desktop fine-pointer only. Disabled on touch/mobile.
* Limit strength to keep it subtle and professional.
*/
function MagneticButton({ children, strength = .32 }) {
	const fine = useFinePointer();
	const ref = (0, import_react.useRef)(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const x = useSpring(useTransform(mouseX, (v) => v * strength), {
		stiffness: 300,
		damping: 22,
		mass: .5
	});
	const y = useSpring(useTransform(mouseY, (v) => v * strength), {
		stiffness: 300,
		damping: 22,
		mass: .5
	});
	if (!fine) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	const onMove = (e) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		mouseX.set(e.clientX - rect.left - rect.width / 2);
		mouseY.set(e.clientY - rect.top - rect.height / 2);
	};
	const onLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		style: {
			x,
			y
		},
		onPointerMove: onMove,
		onPointerLeave: onLeave,
		className: "inline-block",
		children
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var CELL_SIZE = 55;
var INFLUENCE_RADIUS = 260;
var MAX_WARP = 24;
var DOT_SPACING = 28;
var LERP_SPEED = .08;
var NODE_BASE_RADIUS = 1.8;
var NODE_ACTIVE_RADIUS = 3.2;
function lerpN(a, b, t) {
	return a + (b - a) * t;
}
function lerpColor(base, active, t) {
	return `rgba(${Math.round(lerpN(base.r, active.r, t))},${Math.round(lerpN(base.g, active.g, t))},${Math.round(lerpN(base.b, active.b, t))},${lerpN(base.a, active.a, t).toFixed(3)})`;
}
function KineticGrid({ children, className, globalColor = "default" }) {
	const canvasRef = (0, import_react.useRef)(null);
	const { theme } = useTheme();
	const mouseRef = (0, import_react.useRef)({
		x: -9999,
		y: -9999
	});
	const targetMouseRef = (0, import_react.useRef)({
		x: -9999,
		y: -9999
	});
	const ripplesRef = (0, import_react.useRef)([]);
	const rafRef = (0, import_react.useRef)(0);
	const sizeRef = (0, import_react.useRef)({
		w: 0,
		h: 0
	});
	const getWarpedPoint = (0, import_react.useCallback)((gx, gy, col, row, mouse, ripples, cols, rows) => {
		const edgeMargin = 1.5;
		const colPin = Math.min(col / edgeMargin, (cols - 1 - col) / edgeMargin, 1);
		const rowPin = Math.min(row / edgeMargin, (rows - 1 - row) / edgeMargin, 1);
		const pinFactor = colPin * colPin * rowPin * rowPin;
		const dx = gx - mouse.x;
		const dy = gy - mouse.y;
		const dist = Math.sqrt(dx * dx + dy * dy);
		const proximity = Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pinFactor;
		let rx = 0, ry = 0;
		for (const r of ripples) {
			const rdx = gx - r.x;
			const rdy = gy - r.y;
			const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
			const waveWidth = 55;
			const diff = rdist - r.radius;
			if (Math.abs(diff) < waveWidth) {
				const strength = (1 - Math.abs(diff) / waveWidth) * r.opacity * 18 * pinFactor;
				const angle = Math.atan2(rdy, rdx);
				const sign = diff < 0 ? -1 : 1;
				rx += Math.cos(angle) * strength * sign * -1;
				ry += Math.sin(angle) * strength * sign * -1;
			}
		}
		if (dist < INFLUENCE_RADIUS && dist > 0 && pinFactor > 0) {
			const t = dist / INFLUENCE_RADIUS;
			const warpAmt = (t < .01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 60)) * MAX_WARP * pinFactor;
			const angle = Math.atan2(dy, dx);
			return {
				pt: {
					x: gx - Math.cos(angle) * warpAmt + rx,
					y: gy - Math.sin(angle) * warpAmt + ry
				},
				proximity
			};
		}
		return {
			pt: {
				x: gx + rx,
				y: gy + ry
			},
			proximity
		};
	}, []);
	const draw = (0, import_react.useCallback)((now) => {
		const isLight = theme === "light";
		const LINE_BASE = isLight ? {
			r: 0,
			g: 0,
			b: 0,
			a: .13
		} : {
			r: 255,
			g: 255,
			b: 255,
			a: .13
		};
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const { w: W, h: H } = sizeRef.current;
		const mouse = mouseRef.current;
		const ripples = ripplesRef.current;
		const currentTheme = {
			default: {
				bg: "transparent",
				lineActive: {
					r: 5,
					g: 80,
					b: 20,
					a: .9
				},
				nodeActive: {
					r: 5,
					g: 80,
					b: 20,
					a: 1
				},
				glow: "5,80,20",
				ripple: "5,80,20"
			},
			monochrome: {
				bg: "#000000",
				lineActive: {
					r: 255,
					g: 255,
					b: 255,
					a: .9
				},
				nodeActive: {
					r: 255,
					g: 255,
					b: 255,
					a: 1
				},
				glow: "255,255,255",
				ripple: "255,255,255"
			}
		}[globalColor ?? "default"];
		ctx.clearRect(0, 0, W, H);
		if (currentTheme.bg !== "transparent") {
			ctx.fillStyle = currentTheme.bg;
			ctx.fillRect(0, 0, W, H);
		}
		ctx.fillStyle = isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)";
		for (let x = DOT_SPACING / 2; x < W; x += DOT_SPACING) for (let y = DOT_SPACING / 2; y < H; y += DOT_SPACING) {
			ctx.beginPath();
			ctx.arc(x, y, .7, 0, Math.PI * 2);
			ctx.fill();
		}
		for (let i = ripples.length - 1; i >= 0; i--) {
			const r = ripples[i];
			const age = (now - r.born) / 1e3;
			r.radius = Math.max(0, age * 400);
			r.opacity = Math.max(0, 1 - age * 1.2);
			if (r.opacity <= 0) ripples.splice(i, 1);
		}
		const cols = Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;
		const rows = Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;
		const cellW = W / (cols - 1);
		const cellH = H / (rows - 1);
		const pts = [];
		const prox = [];
		for (let row = 0; row < rows; row++) {
			pts[row] = [];
			prox[row] = [];
			for (let col = 0; col < cols; col++) {
				const { pt, proximity } = getWarpedPoint(col * cellW, row * cellH, col, row, mouse, ripples, cols, rows);
				pts[row][col] = pt;
				prox[row][col] = proximity;
			}
		}
		const drawSeg = (p1, p2, pr1, pr2) => {
			const avg = (pr1 + pr2) / 2;
			const t = avg * avg * (3 - 2 * avg);
			ctx.beginPath();
			ctx.moveTo(p1.x, p1.y);
			ctx.lineTo(p2.x, p2.y);
			ctx.strokeStyle = lerpColor(LINE_BASE, currentTheme.lineActive, t);
			ctx.lineWidth = lerpN(.8, 1.5, t);
			ctx.stroke();
		};
		ctx.lineCap = "butt";
		for (let row = 0; row < rows; row++) for (let col = 0; col < cols - 1; col++) drawSeg(pts[row][col], pts[row][col + 1], prox[row][col], prox[row][col + 1]);
		for (let col = 0; col < cols; col++) for (let row = 0; row < rows - 1; row++) drawSeg(pts[row][col], pts[row + 1][col], prox[row][col], prox[row + 1][col]);
		for (let row = 0; row < rows; row++) for (let col = 0; col < cols; col++) {
			const p = pts[row][col];
			const pr = prox[row][col];
			const t = pr * pr * (3 - 2 * pr);
			const r = lerpN(NODE_BASE_RADIUS, NODE_ACTIVE_RADIUS, t);
			if (t > .3) {
				const glowR = r + lerpN(0, 6, (t - .3) / .7);
				const grd = ctx.createRadialGradient(p.x, p.y, r * .5, p.x, p.y, glowR);
				grd.addColorStop(0, `rgba(${currentTheme.glow},${(t * .3).toFixed(3)})`);
				grd.addColorStop(1, `rgba(${currentTheme.glow},0)`);
				ctx.beginPath();
				ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
				ctx.fillStyle = grd;
				ctx.fill();
			}
			ctx.beginPath();
			ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
			ctx.fillStyle = lerpColor(isLight ? {
				r: 0,
				g: 0,
				b: 0,
				a: .1
			} : {
				r: 255,
				g: 255,
				b: 255,
				a: .2
			}, currentTheme.nodeActive, t);
			ctx.fill();
		}
		for (const r of ripples) {
			const safeRadius = Math.max(0, r.radius);
			ctx.beginPath();
			ctx.arc(r.x, r.y, safeRadius, 0, Math.PI * 2);
			ctx.strokeStyle = `rgba(${currentTheme.ripple},${(r.opacity * .28).toFixed(3)})`;
			ctx.lineWidth = 1.5;
			ctx.stroke();
		}
	}, [
		getWarpedPoint,
		globalColor,
		theme
	]);
	const animate = (0, import_react.useCallback)((now) => {
		const m = mouseRef.current;
		const t = targetMouseRef.current;
		m.x = lerpN(m.x, t.x, LERP_SPEED);
		m.y = lerpN(m.y, t.y, LERP_SPEED);
		draw(now);
		rafRef.current = requestAnimationFrame(animate);
	}, [draw]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const setSize = () => {
			const w = window.innerWidth;
			const h = window.innerHeight;
			canvas.width = w;
			canvas.height = h;
			sizeRef.current = {
				w,
				h
			};
			if (mouseRef.current.x === -9999) {
				mouseRef.current = {
					x: -9999,
					y: -9999
				};
				targetMouseRef.current = {
					x: -9999,
					y: -9999
				};
			}
		};
		setSize();
		window.addEventListener("resize", setSize);
		const onMouseMove = (e) => {
			targetMouseRef.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		const onClick = (e) => {
			ripplesRef.current.push({
				x: e.clientX,
				y: e.clientY,
				radius: 0,
				opacity: 1,
				born: performance.now()
			});
		};
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("click", onClick);
		rafRef.current = requestAnimationFrame(animate);
		return () => {
			window.removeEventListener("resize", setSize);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("click", onClick);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [animate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative w-full overflow-hidden", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 w-full h-full z-0 pointer-events-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 w-full h-full",
			children
		})]
	});
}
var TextType = ({ text, as: Component = "div", typingSpeed = 50, initialDelay = 0, pauseDuration = 2e3, deletingSpeed = 30, loop = true, className = "", showCursor = true, hideCursorWhileTyping = false, cursorCharacter = "|", cursorClassName = "", cursorBlinkDuration = .5, textColors = [], variableSpeed, onSentenceComplete, startOnVisible = false, reverseMode = false, startFullyTyped = false, ...props }) => {
	const parsedText = Array.isArray(text) ? text : [text];
	const [displayedText, setDisplayedText] = (0, import_react.useState)(startFullyTyped ? parsedText[0] || "" : "");
	const [currentCharIndex, setCurrentCharIndex] = (0, import_react.useState)(startFullyTyped ? parsedText[0]?.length || 0 : 0);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	const [currentTextIndex, setCurrentTextIndex] = (0, import_react.useState)(0);
	const [isVisible, setIsVisible] = (0, import_react.useState)(!startOnVisible);
	const cursorRef = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	const textArray = (0, import_react.useMemo)(() => Array.isArray(text) ? text : [text], [text]);
	const getRandomSpeed = (0, import_react.useCallback)(() => {
		if (!variableSpeed) return typingSpeed;
		const { min, max } = variableSpeed;
		return Math.random() * (max - min) + min;
	}, [variableSpeed, typingSpeed]);
	const getCurrentTextColor = () => {
		if (textColors.length === 0) return "inherit";
		return textColors[currentTextIndex % textColors.length];
	};
	(0, import_react.useEffect)(() => {
		if (!startOnVisible || !containerRef.current) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setIsVisible(true);
			});
		}, { threshold: .1 });
		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [startOnVisible]);
	(0, import_react.useEffect)(() => {
		if (showCursor && cursorRef.current) {
			gsapWithCSS.set(cursorRef.current, { opacity: 1 });
			gsapWithCSS.to(cursorRef.current, {
				opacity: 0,
				duration: cursorBlinkDuration,
				repeat: -1,
				yoyo: true,
				ease: "power2.inOut"
			});
		}
	}, [showCursor, cursorBlinkDuration]);
	(0, import_react.useEffect)(() => {
		if (!isVisible) return;
		let timeout;
		const currentText = textArray[currentTextIndex] || "";
		const processedText = reverseMode ? currentText.split("").reverse().join("") : currentText;
		const executeTypingAnimation = () => {
			if (isDeleting) {
				if (displayedText === "") {
					setIsDeleting(false);
					if (currentTextIndex === textArray.length - 1 && !loop) return;
					if (onSentenceComplete) onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
					setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
					setCurrentCharIndex(0);
					timeout = setTimeout(() => {}, pauseDuration);
				} else timeout = setTimeout(() => {
					setDisplayedText((prev) => prev.slice(0, -1));
				}, deletingSpeed);
			} else if (currentCharIndex < processedText.length) timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + processedText[currentCharIndex]);
				setCurrentCharIndex((prev) => prev + 1);
			}, variableSpeed ? getRandomSpeed() : typingSpeed);
			else if (textArray.length >= 1) {
				if (!loop && currentTextIndex === textArray.length - 1) return;
				timeout = setTimeout(() => {
					setIsDeleting(true);
				}, pauseDuration);
			}
		};
		if (startFullyTyped && currentCharIndex === processedText.length && !isDeleting && currentTextIndex === 0) timeout = setTimeout(() => {
			setIsDeleting(true);
		}, initialDelay || pauseDuration);
		else if (currentCharIndex === 0 && !isDeleting && displayedText === "") timeout = setTimeout(executeTypingAnimation, initialDelay);
		else executeTypingAnimation();
		return () => clearTimeout(timeout);
	}, [
		currentCharIndex,
		displayedText,
		isDeleting,
		typingSpeed,
		deletingSpeed,
		pauseDuration,
		textArray,
		currentTextIndex,
		loop,
		initialDelay,
		isVisible,
		reverseMode,
		variableSpeed,
		onSentenceComplete
	]);
	const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < (textArray[currentTextIndex]?.length || 0) || isDeleting);
	return (0, import_react.createElement)(Component, {
		ref: containerRef,
		className: `text-type ${className}`,
		...props
	}, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-type__content",
		style: { color: getCurrentTextColor() || "inherit" },
		children: displayedText
	}), showCursor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: cursorRef,
		className: `text-type__cursor ${cursorClassName} ${shouldHideCursor ? "text-type__cursor--hidden" : ""}`,
		children: cursorCharacter
	}));
};
function Hero() {
	const reduced = useReducedMotion();
	const base = reduced ? 0 : 1.15;
	const sectionRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"]
	});
	const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
	const contentOpacity = useTransform(scrollYProgress, [0, .7], [1, 0]);
	const isFinePointer = useFinePointer();
	const glowX = useMotionValue(0);
	const glowY = useMotionValue(0);
	const springX = useSpring(glowX, {
		stiffness: 45,
		damping: 20,
		mass: .8
	});
	const springY = useSpring(glowY, {
		stiffness: 45,
		damping: 20,
		mass: .8
	});
	const x = useTransform(springX, (val) => `calc(-50% + ${val}px)`);
	const handlePointerMove = (e) => {
		if (!isFinePointer || reduced) return;
		const rect = sectionRef.current?.getBoundingClientRect();
		if (!rect) return;
		const pointerX = e.clientX - rect.left;
		const pointerY = e.clientY - rect.top;
		glowX.set(pointerX - rect.width / 2);
		glowY.set(pointerY - 150);
	};
	const handlePointerLeave = () => {
		glowX.set(0);
		glowY.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		id: "top",
		className: "relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-48 lg:pb-24",
		onPointerMove: handlePointerMove,
		onPointerLeave: handlePointerLeave,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KineticGrid, {
					globalColor: "default",
					className: "absolute inset-0 z-0 opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "green-glow absolute -top-40 left-1/2 h-[520px] w-[820px] opacity-70 z-0",
					style: {
						x,
						y: springY
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-24 space-y-6 z-0",
					children: [
						0,
						1,
						2
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "h-px w-full origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent",
						initial: {
							scaleX: 0,
							opacity: 0
						},
						animate: {
							scaleX: 1,
							opacity: 1
						},
						transition: {
							duration: 1.1,
							ease: EASE,
							delay: base + .5 + i * .12
						}
					}, i))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "container-x",
			style: reduced ? {} : {
				y: contentY,
				opacity: contentOpacity
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					className: "eyebrow flex flex-wrap items-center gap-x-3 gap-y-1",
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: EASE,
						delay: base
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-1.5 w-1.5 rounded-full bg-primary",
						"aria-hidden": "true"
					}), "Digital Products • Web • Design • Technology"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-7 font-display text-[2.6rem] leading-[0.94] font-bold tracking-[-0.04em] sm:text-6xl lg:text-[6.5rem]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "block",
								initial: { y: "110%" },
								animate: { y: "0%" },
								transition: {
									duration: .85,
									ease: EASE,
									delay: base + .12
								},
								children: "WE BUILD"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden min-h-[0.98em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "block text-primary",
								initial: { y: "110%" },
								animate: { y: "0%" },
								transition: {
									duration: .85,
									ease: EASE,
									delay: base + .23
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextType, {
									text: [
										"DIGITAL EXPERIENCES",
										"WEB APPLICATIONS",
										"E-COMMERCE SYSTEMS",
										"SCALABLE PLATFORMS"
									],
									typingSpeed: 65,
									deletingSpeed: 30,
									pauseDuration: 2800,
									initialDelay: 2800,
									startFullyTyped: true,
									cursorClassName: "text-primary opacity-80"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								className: "block",
								initial: { y: "110%" },
								animate: { y: "0%" },
								transition: {
									duration: .85,
									ease: EASE,
									delay: base + .34
								},
								children: [
									"THAT ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary duration-800 animate-in fade-in fill-mode-both",
										style: { animationDelay: `${(base + .7) * 1e3}ms` },
										children: "MOVE"
									}),
									" BUSINESS."
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-8 border-t border-border pt-8 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							ease: EASE,
							delay: base + .45
						},
						children: "High-performance websites, web applications and digital experiences engineered to make your brand move faster."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "flex flex-wrap items-center gap-3",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							ease: EASE,
							delay: base + .6
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-sm bg-primary px-6 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary-foreground uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: "Start a Project"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
								"aria-hidden": "true"
							})]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#work",
							className: "group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-sm border border-border-strong px-6 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-foreground/5 transition-transform duration-400 ease-[var(--ease-out-premium)] group-hover:translate-x-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: "View Our Work"
							})]
						})]
					})]
				})
			]
		})]
	});
}
var items = [
	"Web Development",
	"Digital Products",
	"E-Commerce",
	"UI/UX",
	"Mobile Apps",
	"Performance",
	"SEO"
];
function Marquee() {
	const reduced = useReducedMotion();
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-y border-border bg-surface/60 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex overflow-hidden",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex shrink-0 items-center whitespace-nowrap ${reduced ? "" : "animate-marquee"}`,
				children: row.concat(row).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `font-display text-sm font-bold tracking-[0.18em] uppercase sm:text-base ${i % 2 === 0 ? "text-foreground" : "text-primary"}`,
						children: item
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-5 h-1 w-1 rounded-full bg-border-strong sm:mx-7" })]
				}, i))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "sr-only",
			children: "Services: web development, digital products, e-commerce, UI/UX, mobile apps, performance, SEO."
		})]
	});
}
/** Standard scroll reveal: opacity 0→1, y 30→0, premium ease-out. */
function Reveal({ children, className, delay = 0, y = 30, as = "div" }) {
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: viewportOnce,
		transition: {
			duration: .7,
			ease: EASE,
			delay
		},
		children
	});
}
var words = [
	{ t: "WE" },
	{ t: "BUILD" },
	{ t: "WEBSITES." },
	{
		t: "APPS.",
		accent: true
	},
	{ t: "SOFTWARE." },
	{ t: "THAT" },
	{ t: "HELP" },
	{ t: "BUSINESSES" },
	{ t: "MOVE" },
	{
		t: "FORWARD.",
		accent: true
	}
];
var pillars = [
	{
		id: "01",
		title: "Business-Focused",
		desc: "We first understand your business, customers, and goals — then build the technology around them."
	},
	{
		id: "02",
		title: "Built for Performance",
		desc: "Fast websites, responsive interfaces, optimized code, and reliable systems designed for real-world users."
	},
	{
		id: "03",
		title: "Ready to Scale",
		desc: "We build with a solid foundation so your website or application can evolve as your business grows."
	},
	{
		id: "04",
		title: "From Idea to Launch",
		desc: "Design, development, integrations, deployment, and ongoing improvements — handled by one team."
	}
];
function Intro() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start center", "end start"]
	});
	const opacity = useTransform(scrollYProgress, [.7, 1], [1, .2]);
	const y = useTransform(scrollYProgress, [.7, 1], ["0%", "-6%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		id: "intro",
		className: "container-x py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				opacity,
				y
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "eyebrow",
					children: "01 / What We Do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					className: "mt-8 max-w-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-medium text-muted-foreground sm:text-xl",
						children: "We build more than websites."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-4xl font-display text-[1.9rem] leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.75rem]",
					children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block overflow-hidden leading-[1.15]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: `mr-[0.28em] inline-block ${w.accent ? "text-primary" : ""}`,
							initial: {
								y: "110%",
								opacity: 0
							},
							animate: {
								y: "0%",
								opacity: 1
							},
							transition: {
								duration: .65,
								ease: EASE,
								delay: .2 + i * .05
							},
							children: w.t
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					className: "mt-8 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground leading-relaxed sm:text-lg",
						children: [
							"From a business website to a complete digital platform, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground font-medium",
								children: "CODEVAP builds technology around the way your business actually works."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							"We focus on clean design, reliable development, fast performance, and systems that are ready for your next stage of growth."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": "true",
					className: "mt-12 h-px origin-left bg-primary/50",
					initial: { scaleX: 0 },
					whileInView: { scaleX: 1 },
					viewport: viewportOnce,
					transition: {
						duration: 1.1,
						ease: EASE,
						delay: .3
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
					children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * .07,
						className: "group relative bg-background p-6 transition-colors duration-300 hover:bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.65rem] font-bold tracking-[0.18em] text-primary",
								children: p.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-bold tracking-tight",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 ease-[var(--ease-out-premium)] group-hover:w-full"
							})
						]
					}, p.id))
				})
			]
		})
	});
}
function Services() {
	const [active, setActive] = (0, import_react.useState)(null);
	const containerRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-t border-border bg-surface/40 py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "eyebrow",
						children: "02 / Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl",
							children: "WHAT WE BUILD"
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .1,
						className: "max-w-sm text-sm text-muted-foreground leading-relaxed",
						children: [
							"We turn business ideas, requirements, and problems into ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground font-medium",
								children: "working digital products"
							}),
							" — from websites and online stores to custom platforms and business automation."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					ref: containerRef,
					className: "mt-14 border-t border-border",
					children: services.map((s, i) => {
						const isActive = active === s.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceRow, {
							service: s,
							index: i,
							isActive,
							anyActive: active !== null,
							onEnter: () => setActive(s.id),
							onLeave: () => setActive(null),
							onClick: () => setActive(isActive ? null : s.id)
						}, s.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "group inline-flex min-h-12 items-center gap-3 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border-b border-primary pb-1",
							children: "Start a Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
							"aria-hidden": "true"
						})]
					})
				})
			]
		})
	});
}
function ServiceRow({ service, index, isActive, anyActive, onEnter, onLeave, onClick }) {
	const rowRef = (0, import_react.useRef)(null);
	const inView = useInView(rowRef, {
		once: true,
		margin: "-8%"
	});
	const dimmed = anyActive && !isActive;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
		ref: rowRef,
		className: "relative border-b border-border",
		animate: {
			opacity: inView ? dimmed ? .35 : 1 : 0,
			y: inView ? 0 : 18
		},
		transition: {
			duration: dimmed ? .25 : .5,
			ease: EASE,
			delay: inView ? Math.min(index, 5) * .04 : 0
		},
		onMouseEnter: onEnter,
		onMouseLeave: onLeave,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": isActive,
			onClick,
			className: "group relative flex w-full items-start gap-4 px-1 py-5 text-left transition-colors hover:bg-foreground/[0.02] sm:items-center sm:gap-8 sm:py-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `mt-0.5 font-display text-[0.7rem] font-bold tracking-[0.16em] transition-colors sm:mt-0 ${isActive ? "text-primary" : "text-muted-foreground"}`,
					children: service.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl",
						children: service.title.toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "block overflow-hidden text-sm text-muted-foreground",
						initial: false,
						animate: {
							height: isActive ? "auto" : 0,
							opacity: isActive ? 1 : 0,
							marginTop: isActive ? 10 : 0
						},
						transition: {
							duration: .35,
							ease: EASE
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.description }), service.examples && service.examples.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2 pb-2",
							children: service.examples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-sm border border-border px-2 py-1 text-[0.65rem] tracking-[0.08em] text-foreground uppercase",
								children: ex
							}, ex))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					"aria-hidden": "true",
					className: `h-5 w-5 shrink-0 transition-all duration-300 ${isActive ? "translate-x-1 -translate-y-1 text-primary" : "text-muted-foreground"}`
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			"aria-hidden": "true",
			className: "absolute bottom-0 left-0 h-px w-full origin-left bg-primary",
			initial: false,
			animate: { scaleX: isActive ? 1 : 0 },
			transition: {
				duration: .4,
				ease: EASE
			}
		})]
	});
}
function ProjectMedia({ project, full }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center center"]
	});
	const width = useTransform(scrollYProgress, [0, 1], ["75%", "100%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		style: full ? {
			width,
			margin: "0 auto"
		} : {},
		className: `relative w-full overflow-hidden rounded-sm border border-border bg-surface-2 ${full ? "max-w-none" : ""}`,
		children: [failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex aspect-4/3 w-full items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: project.category
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src: project.image,
			alt: `${project.title} — ${project.category} project by CODEVAP`,
			loading: "lazy",
			decoding: "async",
			width: 1280,
			height: 960,
			onError: () => setFailed(true),
			className: "h-auto w-full object-cover bg-background",
			initial: {
				scale: 1.05,
				opacity: 0
			},
			whileInView: {
				scale: 1,
				opacity: 1
			},
			viewport: viewportOnce,
			transition: {
				duration: 1,
				ease: EASE
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "absolute inset-0 bg-background/20 transition-opacity duration-500 group-hover:opacity-0"
		})]
	});
}
function ProjectInfo({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary",
						children: project.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						"aria-hidden": "true",
						className: "h-px flex-1 origin-left bg-primary/50",
						initial: { scaleX: 0 },
						whileInView: { scaleX: 1 },
						viewport: viewportOnce,
						transition: {
							duration: .8,
							ease: EASE
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: project.category
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-2xl leading-tight font-bold tracking-tight sm:text-4xl",
				children: project.title.toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-sm leading-relaxed text-muted-foreground",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-wrap gap-2",
				children: project.technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-sm border border-border px-2.5 py-1 text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase",
					children: t
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 border-l border-primary pl-4 text-sm text-foreground",
				children: project.outcome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: project.href,
				className: "group/link mt-7 inline-flex min-h-11 items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "border-b border-border-strong pb-1 transition-colors group-hover/link:border-primary",
					children: "View Project"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					className: "h-4 w-4 text-primary transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "border-t border-border py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "eyebrow",
				children: "03 / Selected Work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold tracking-tight sm:text-5xl",
						children: "SELECTED WORK"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .08,
					className: "font-display text-sm tracking-[0.1em] text-muted-foreground uppercase",
					children: "Digital products built to perform."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 space-y-20 lg:space-y-28",
			children: projects.map((p) => {
				const full = p.layout === "full";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: `group ${full ? "w-full px-0" : "container-x"}`,
					"data-cursor": "project",
					children: full ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectMedia, {
							project: p,
							full: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectInfo, { project: p })
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${p.layout === "right" ? "lg:[&>*:first-child]:order-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectMedia, { project: p }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectInfo, { project: p })]
					})
				}, p.id);
			})
		})]
	});
}
/**
* Founder content is intentionally placeholder-only.
* Replace every ADD_* value with verified information before launch —
* nothing here is invented as a claim.
*/
var founders = [
	{
		id: "founder-01",
		name: "Vinoth Kumar.S",
		role: "Founder & CEO",
		image: "/assets/founder-02-DhJyymRq.jpg",
		shortBio: "I’m Vinoth Kumar.S, the Founder and Lead Developer of CODEVAP, a software developer and technology enthusiast focused on building modern websites, web applications, e-commerce platforms, and custom digital solutions. I specialize in transforming ideas into scalable, user-friendly, and production-ready digital products using modern technologies.",
		longBio: "I’m Abdul Hameethu, a software developer and technology enthusiast focused on building modern websites, web applications, e-commerce platforms, and custom digital solutions.",
		expertise: [
			"Lead developer",
			"SEO Specialist",
			"Client Partnership"
		],
		responsibilities: [
			"Strategy & positioning",
			"Client relationships",
			"Delivery oversight"
		],
		social: [{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/vinoth-kumar-s-73697b3a7/"
		}, {
			label: "Instagram",
			href: "https://www.instagram.com/codevap_technology/"
		}]
	},
	{
		id: "founder-02",
		name: "Abdul Hameethu M",
		role: "Co-Founder & CEO",
		image: "/assets/founder-01-DYv8sSG4.jpg",
		shortBio: "I’m Abdul Hameethu, a software developer and technology enthusiast focused on building modern websites, web applications, e-commerce platforms, and custom digital solutions.",
		longBio: "ADD THE FULL BIOGRAPHY. Keep it factual — engineering background, architecture focus and the systems this founder builds at CODEVAP.",
		expertise: [
			"Software Engineering",
			"System Architecture",
			"Lead Developer"
		],
		responsibilities: [
			"Technical architecture",
			"Engineering standards",
			"Infrastructure & security"
		],
		social: [{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/abdul-hameethu/"
		}, {
			label: "GitHub",
			href: "#"
		}]
	},
	{
		id: "founder-03",
		name: "Meenakshi S",
		role: "UI/UX Designer",
		image: "/assets/founder-3-m_Mc1JBK.png",
		shortBio: "I’m Meenakshi S., a UI/UX Designer and Business Development Executive focused on creating modern, user-friendly digital experiences while building strong client relationships and identifying new business opportunities. I work closely with clients and development teams to transform ideas and requirements into engaging designs and effective digital solutions.",
		longBio: "ADD THE FULL BIOGRAPHY. Keep it factual — background, focus areas and the kind of work this founder leads at CODEVAP.",
		expertise: [
			"UI/UX Designer",
			"Lead Generation Consultant",
			"Business Development Executive"
		],
		responsibilities: [
			"Strategy & positioning",
			"Client relationships",
			"Delivery oversight"
		],
		social: [{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/meenakshi-s-092829372/"
		}, {
			label: "Instagram",
			href: "https://www.instagram.com/codevap_technology/"
		}]
	}
];
function Founders() {
	const [active, setActive] = (0, import_react.useState)(null);
	const reduced = useReducedMotion();
	const pinned = useMediaQuery("(min-width: 1024px)") && !reduced;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "founders",
		className: "relative border-t border-border bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x pt-24 lg:pt-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: stagger(.1),
					initial: "hidden",
					whileInView: "visible",
					viewport: viewportOnce,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "eyebrow",
							children: "05 / People"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
							variants: fadeUp,
							className: "mt-5 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] font-bold tracking-tight",
							children: ["THE PEOPLE BEHIND ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "CODEVAP"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "mt-5 max-w-lg text-muted-foreground",
							children: "A small, senior team. The people who plan your project are the people who build it."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute top-1/2 left-1/2 -z-0 hidden -translate-x-1/2 font-display text-[22vw] leading-none font-bold tracking-tighter text-foreground/[0.025] select-none lg:block",
				children: "PEOPLE"
			}),
			pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinnedFounders, { onOpen: setActive }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid gap-10 py-16 sm:grid-cols-2",
				children: founders.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderCard, {
					founder: f,
					index: i,
					onOpen: () => setActive(f),
					stacked: true
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderModal, {
				founder: active,
				onClose: () => setActive(null)
			})
		]
	});
}
/** Desktop-only: vertical scroll drives horizontal founder movement. */
function PinnedFounders({ onOpen }) {
	const trackRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: trackRef,
		offset: ["start start", "end end"]
	});
	const trackHeight = founders.length * 100 + 100;
	const shift = -((founders.length - 1) / founders.length) * 100;
	const x = useTransform(scrollYProgress, [.05, .85], ["0%", `${shift}%`]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: trackRef,
		style: { height: `${trackHeight}vh` },
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 flex h-screen items-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "flex",
				style: {
					x,
					width: `${founders.length * 100}vw`
				},
				children: founders.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-screen shrink-0 items-center px-6 lg:px-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderCard, {
						founder: f,
						index: i,
						onOpen: () => onOpen(f)
					})
				}, f.id))
			})
		})
	});
}
function FounderCard({ founder, index, onOpen, stacked = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: stacked ? "w-full" : "mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center",
		initial: {
			opacity: .75,
			scale: .96
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: true,
			margin: "-10%"
		},
		transition: {
			duration: .7,
			ease: EASE
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onOpen,
			"data-cursor": "founder",
			"aria-label": `View profile: ${founder.name}, ${founder.role}`,
			className: "group relative block w-full overflow-hidden rounded-md border border-border bg-surface text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: founder.image,
					alt: "",
					width: 900,
					height: 1200,
					loading: "lazy",
					decoding: "async",
					className: "aspect-[3/4] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-premium)] group-hover:scale-[1.04]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[var(--ease-out-premium)] group-hover:scale-x-100" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute top-5 left-5 font-display text-xs tracking-[0.2em] text-primary",
					children: String(index + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "pointer-events-none absolute inset-x-5 bottom-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl font-bold tracking-tight lg:text-2xl",
						children: founder.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs tracking-[0.16em] text-muted-foreground uppercase transition-transform duration-500 ease-[var(--ease-out-premium)] group-hover:-translate-y-0.5",
						children: founder.role
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: stacked ? "mt-6" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm tracking-[0.18em] text-primary uppercase",
					children: founder.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-lg leading-relaxed text-muted-foreground",
					children: founder.shortBio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: founder.expertise.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-sm border border-border px-3 py-1.5 text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase",
						children: e
					}, e))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onOpen,
					className: "group mt-8 inline-flex min-h-11 items-center gap-2 font-display text-xs font-bold tracking-[0.18em] uppercase",
					children: ["View Profile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						"aria-hidden": "true",
						className: "h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
					})]
				})
			]
		})]
	});
}
function FounderModal({ founder, onClose }) {
	const panelRef = (0, import_react.useRef)(null);
	const onKeyDown = (0, import_react.useCallback)((e) => {
		if (e.key === "Escape") {
			onClose();
			return;
		}
		if (e.key !== "Tab" || !panelRef.current) return;
		const nodes = panelRef.current.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])");
		if (nodes.length === 0) return;
		const first = nodes[0];
		const last = nodes[nodes.length - 1];
		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}, [onClose]);
	(0, import_react.useEffect)(() => {
		if (!founder) return;
		const previous = document.activeElement;
		document.addEventListener("keydown", onKeyDown);
		document.body.style.overflow = "hidden";
		panelRef.current?.querySelector("button")?.focus();
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = "";
			previous?.focus?.();
		};
	}, [founder, onKeyDown]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: founder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .25,
			ease: EASE
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close profile",
			onClick: onClose,
			className: "absolute inset-0 bg-background/85 backdrop-blur-sm"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			ref: panelRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": `${founder.name} — ${founder.role}`,
			className: "relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-lg border border-border bg-surface sm:rounded-lg",
			initial: {
				y: 40,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			exit: {
				y: 24,
				opacity: 0
			},
			transition: {
				duration: .45,
				ease: EASE
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 sm:grid-cols-[0.85fr_1.15fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "relative overflow-hidden",
					initial: { clipPath: "inset(0 0 100% 0)" },
					animate: { clipPath: "inset(0 0 0% 0)" },
					transition: {
						duration: .6,
						ease: EASE,
						delay: .05
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: founder.image,
						alt: "",
						width: 900,
						height: 1200,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold tracking-tight sm:text-3xl",
								children: founder.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs tracking-[0.18em] text-primary uppercase",
								children: founder.role
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								"aria-label": "Close profile",
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: founder.longBio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "eyebrow mt-8",
							children: "Expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: founder.expertise.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-sm border border-border px-3 py-1.5 text-[0.7rem] tracking-[0.12em] uppercase",
								children: e
							}, e))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "eyebrow mt-8",
							children: "Responsibilities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted-foreground",
							children: founder.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "mt-2 h-1 w-3 shrink-0 bg-primary"
								}), r]
							}, r))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: founder.social.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.href,
								rel: "noopener noreferrer",
								className: "group inline-flex min-h-11 items-center gap-2 rounded-sm border border-border px-4 font-display text-[0.7rem] font-bold tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-primary",
								children: [s.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									"aria-hidden": "true",
									className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								})]
							}, s.label))
						})
					]
				})]
			})
		})]
	}) });
}
function RotatingEarth({ width = 800, height = 600, className = "" }) {
	const canvasRef = (0, import_react.useRef)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!canvasRef.current) return;
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		if (!context) return;
		const containerWidth = Math.min(width, window.innerWidth - 40);
		const containerHeight = Math.min(height, window.innerHeight - 100);
		const radius = Math.min(containerWidth, containerHeight) / 2.5;
		const dpr = window.devicePixelRatio || 1;
		canvas.width = containerWidth * dpr;
		canvas.height = containerHeight * dpr;
		canvas.style.width = `${containerWidth}px`;
		canvas.style.height = `${containerHeight}px`;
		context.scale(dpr, dpr);
		const projection = orthographic_default().scale(radius).translate([containerWidth / 2, containerHeight / 2]).clipAngle(90);
		const path = path_default().projection(projection).context(context);
		const pointInPolygon = (point, polygon) => {
			const [x, y] = point;
			let inside = false;
			for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
				const [xi, yi] = polygon[i];
				const [xj, yj] = polygon[j];
				if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
			}
			return inside;
		};
		const pointInFeature = (point, feature) => {
			const geometry = feature.geometry;
			if (geometry.type === "Polygon") {
				const coordinates = geometry.coordinates;
				if (!pointInPolygon(point, coordinates[0])) return false;
				for (let i = 1; i < coordinates.length; i++) if (pointInPolygon(point, coordinates[i])) return false;
				return true;
			} else if (geometry.type === "MultiPolygon") {
				for (const polygon of geometry.coordinates) if (pointInPolygon(point, polygon[0])) {
					let inHole = false;
					for (let i = 1; i < polygon.length; i++) if (pointInPolygon(point, polygon[i])) {
						inHole = true;
						break;
					}
					if (!inHole) return true;
				}
				return false;
			}
			return false;
		};
		const generateDotsInPolygon = (feature, dotSpacing = 16) => {
			const dots = [];
			const [[minLng, minLat], [maxLng, maxLat]] = bounds_default(feature);
			const stepSize = dotSpacing * .08;
			let pointsGenerated = 0;
			for (let lng = minLng; lng <= maxLng; lng += stepSize) for (let lat = minLat; lat <= maxLat; lat += stepSize) {
				const point = [lng, lat];
				if (pointInFeature(point, feature)) {
					dots.push(point);
					pointsGenerated++;
				}
			}
			return dots;
		};
		const allDots = [];
		let landFeatures;
		const render = () => {
			context.clearRect(0, 0, containerWidth, containerHeight);
			const currentScale = projection.scale();
			const scaleFactor = currentScale / radius;
			context.beginPath();
			context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
			context.strokeStyle = "#ffffff";
			context.lineWidth = 2 * scaleFactor;
			context.stroke();
			if (landFeatures) {
				const graticule$1 = graticule();
				context.beginPath();
				path(graticule$1());
				context.strokeStyle = "#ffffff";
				context.lineWidth = 1 * scaleFactor;
				context.globalAlpha = .25;
				context.stroke();
				context.globalAlpha = 1;
				context.beginPath();
				landFeatures.features.forEach((feature) => {
					path(feature);
				});
				context.strokeStyle = "#ffffff";
				context.lineWidth = 1 * scaleFactor;
				context.stroke();
				allDots.forEach((dot) => {
					const projected = projection([dot.lng, dot.lat]);
					if (projected && projected[0] >= 0 && projected[0] <= containerWidth && projected[1] >= 0 && projected[1] <= containerHeight) {
						context.beginPath();
						context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
						context.fillStyle = "#999999";
						context.fill();
					}
				});
			}
		};
		const loadWorldData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json");
				if (!response.ok) throw new Error("Failed to load land data");
				landFeatures = await response.json();
				landFeatures.features.forEach((feature) => {
					generateDotsInPolygon(feature, 16).forEach(([lng, lat]) => {
						allDots.push({
							lng,
							lat,
							visible: true
						});
					});
				});
				render();
				setIsLoading(false);
			} catch (err) {
				setError("Failed to load land map data");
				setIsLoading(false);
			}
		};
		const rotation = [0, 0];
		let autoRotate = true;
		const rotationSpeed = .5;
		const rotate = () => {
			if (autoRotate) {
				rotation[0] += rotationSpeed;
				projection.rotate(rotation);
				render();
			}
		};
		const rotationTimer = timer(rotate);
		const handleMouseDown = (event) => {
			autoRotate = false;
			const startX = event.clientX;
			const startY = event.clientY;
			const startRotation = [...rotation];
			const handleMouseMove = (moveEvent) => {
				const sensitivity = .5;
				const dx = moveEvent.clientX - startX;
				const dy = moveEvent.clientY - startY;
				rotation[0] = startRotation[0] + dx * sensitivity;
				rotation[1] = startRotation[1] - dy * sensitivity;
				rotation[1] = Math.max(-90, Math.min(90, rotation[1]));
				projection.rotate(rotation);
				render();
			};
			const handleMouseUp = () => {
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseup", handleMouseUp);
				setTimeout(() => {
					autoRotate = true;
				}, 10);
			};
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		};
		canvas.addEventListener("mousedown", handleMouseDown);
		loadWorldData();
		return () => {
			rotationTimer.stop();
			canvas.removeEventListener("mousedown", handleMouseDown);
		};
	}, [width, height]);
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center justify-center p-8 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-destructive font-semibold mb-2",
				children: "Error loading Earth visualization"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: error
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative ${className} flex items-center justify-center`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			style: { background: "transparent" }
		})
	});
}
var getIconConfig = (tech) => {
	switch (tech.toLowerCase()) {
		case "react": return {
			Icon: SiReact,
			brandColor: "group-hover:text-[#61DAFB]"
		};
		case "next.js": return {
			Icon: SiNextdotjs,
			brandColor: "group-hover:text-foreground dark:group-hover:text-white"
		};
		case "vue": return {
			Icon: SiVuedotjs,
			brandColor: "group-hover:text-[#4FC08D]"
		};
		case "node.js": return {
			Icon: SiNodedotjs,
			brandColor: "group-hover:text-[#339933]"
		};
		case "express": return {
			Icon: SiExpress,
			brandColor: "group-hover:text-foreground dark:group-hover:text-white"
		};
		case "mongodb": return {
			Icon: SiMongodb,
			brandColor: "group-hover:text-[#47A248]"
		};
		case "postgresql": return {
			Icon: SiPostgresql,
			brandColor: "group-hover:text-[#4169E1]"
		};
		case "redis": return {
			Icon: SiRedis,
			brandColor: "group-hover:text-[#DC382D]"
		};
		case "typescript": return {
			Icon: SiTypescript,
			brandColor: "group-hover:text-[#3178C6]"
		};
		case "javascript": return {
			Icon: SiJavascript,
			brandColor: "group-hover:text-[#F7DF1E]"
		};
		case "tailwind": return {
			Icon: SiTailwindcss,
			brandColor: "group-hover:text-[#06B6D4]"
		};
		case "razorpay": return {
			Icon: SiRazorpay,
			brandColor: "group-hover:text-[#02042B] dark:group-hover:text-blue-500"
		};
		case "git": return {
			Icon: SiGit,
			brandColor: "group-hover:text-[#F05032]"
		};
		case "cloudinary": return {
			Icon: SiCloudinary,
			brandColor: "group-hover:text-[#3448C5]"
		};
		case "rest apis": return {
			Icon: TbApi,
			brandColor: "group-hover:text-blue-400"
		};
		default: return null;
	}
};
function Technologies() {
	const [radius, setRadius] = (0, import_react.useState)(300);
	const [globeSize, setGlobeSize] = (0, import_react.useState)(450);
	(0, import_react.useEffect)(() => {
		const handleResize = () => {
			const w = window.innerWidth;
			if (w >= 1280) {
				setRadius(420);
				setGlobeSize(700);
			} else if (w >= 1024) {
				setRadius(340);
				setGlobeSize(550);
			} else if (w >= 768) {
				setRadius(240);
				setGlobeSize(400);
			} else {
				setRadius(130);
				setGlobeSize(170);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border bg-surface/40 py-12 lg:py-16 overflow-hidden relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-30 pointer-events-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "eyebrow",
				children: "04 / Technology"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl text-foreground mix-blend-difference",
					children: "BUILT WITH"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-8 lg:-mt-28 flex items-center justify-center min-h-[400px] sm:min-h-[600px] lg:min-h-[880px] w-full z-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotatingEarth, {
					width: globeSize,
					height: globeSize
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 60,
					ease: "linear",
					repeat: Infinity
				},
				className: "absolute left-1/2 top-1/2 w-0 h-0 z-20 pointer-events-none",
				children: technologies.map((t, i) => {
					const angle = i / technologies.length * 360;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-0 left-0",
						style: { transform: `rotate(${angle}deg) translateX(${radius}px)` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "group pointer-events-auto flex items-center gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-background/90 backdrop-blur-md border border-border/50 rounded-full whitespace-nowrap shadow-lg hover:border-foreground/20 hover:bg-background hover:scale-105 transition-all duration-300",
							style: {
								x: "-50%",
								y: "-50%"
							},
							initial: { rotate: -angle },
							animate: { rotate: [-angle, -360 - angle] },
							transition: {
								duration: 60,
								ease: "linear",
								repeat: Infinity
							},
							children: (() => {
								const config = getIconConfig(t);
								if (!config) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-semibold text-xs sm:text-[15px] lg:text-base cursor-default text-muted-foreground/80 group-hover:text-foreground transition-colors duration-300",
									children: t
								});
								const { Icon, brandColor } = config;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-muted-foreground/60 transition-colors duration-300 ${brandColor}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-display font-semibold text-xs sm:text-[15px] lg:text-base cursor-default text-muted-foreground/80 transition-colors duration-300 ${brandColor}`,
									children: t
								})] });
							})()
						})
					}, t);
				})
			})]
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative overflow-hidden border-t border-border bg-surface py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute -top-24 right-0 h-64 w-64 green-glow opacity-40"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "container-x",
			variants: stagger(.1),
			initial: "hidden",
			whileInView: "visible",
			viewport: viewportOnce,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: fadeUp,
					className: "eyebrow",
					children: "06 / About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: fadeUp,
					className: "mt-5 max-w-4xl font-display text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] font-bold tracking-tight",
					children: [
						"WE ARE ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "CODEVAP"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "max-w-xl space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"We build ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "websites, applications, e-commerce platforms, and custom software"
							}),
							" for businesses that want to build, improve, and grow their digital presence."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"From the first idea to the final product, we handle ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "design, development, integrations, deployment, and ongoing improvements"
							}),
							" — with technology chosen around the actual needs of the business."
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "mt-16 sm:mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "eyebrow",
								children: "WHAT MAKES CODEVAP DIFFERENT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-xl font-medium tracking-tight text-foreground",
								children: "We don't believe every business needs the same solution."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-lg font-bold tracking-tight text-primary sm:text-2xl",
								children: "We understand → We design → We build → We launch → We improve."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground",
								children: [
									"Our goal is simple:",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-medium text-foreground",
										children: "build technology that actually works for your business."
									})
								]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:pl-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
							variants: fadeUp,
							className: "eyebrow mb-6",
							children: "WHO WE WORK WITH"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
							variants: stagger(.07),
							className: "divide-y divide-border border-y border-border",
							children: audiences.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								variants: fadeUp,
								className: "flex gap-5 py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 font-display text-xs tracking-[0.18em] text-primary",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg font-bold tracking-tight text-foreground",
									children: a.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-sm text-muted-foreground leading-relaxed",
									children: a.description
								})] })]
							}, a.title))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": "true",
					className: "mt-14 h-px origin-left bg-primary/60",
					initial: { scaleX: 0 },
					whileInView: { scaleX: 1 },
					viewport: viewportOnce,
					transition: {
						duration: 1,
						ease: EASE
					}
				})
			]
		})]
	});
}
function WhyCodevap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "eyebrow",
					children: "05 / Difference"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl",
						children: ["WHY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "CODEVAP?"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground",
						children: [
							"We don't just deliver a website and walk away.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"We build ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "practical digital solutions that businesses can actually use, manage, and grow with."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14 grid gap-px border border-border bg-border sm:grid-cols-2",
					children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * .06,
						className: "group relative bg-background p-7 transition-colors duration-400 hover:bg-surface lg:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary",
								children: p.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-xl font-bold tracking-tight sm:text-2xl",
								children: p.title.toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
								children: p.description
							}),
							"summary" in p && typeof p.summary === "string" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[0.8rem] tracking-wide font-bold text-foreground",
								children: p.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 ease-[var(--ease-out-premium)] group-hover:w-full"
							})
						]
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 border-t border-border pt-16 text-center lg:mt-32",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow mx-auto text-primary",
							children: "OUR PROMISE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 mx-auto max-w-2xl font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
							children: [
								"We don't build technology just to say it is built.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"We build it to solve a real problem."
							]
						})]
					})
				})
			]
		})
	});
}
function Process() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 75%", "end 60%"]
	});
	const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
		stiffness: 120,
		damping: 30
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "border-t border-border bg-surface/40 py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "eyebrow",
					children: "06 / Process"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-3xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl",
						children: ["OUR ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "APPROACH."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					className: "mt-6 max-w-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground leading-relaxed sm:text-lg",
						children: [
							"We don't start with a template. We start by understanding ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground font-medium",
								children: "what your business needs to achieve"
							}),
							", then turn that requirement into a practical digital solution.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground font-bold text-primary",
								children: "CODEVAP — Technology built around your business."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref,
					className: "relative mt-16 pl-10 sm:pl-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "absolute top-2 bottom-2 left-[3px] w-px bg-border sm:left-[7px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full w-full origin-top bg-primary",
							style: { scaleY }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-10 lg:space-y-14",
						children: process.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							as: "li",
							delay: i * .04,
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "absolute top-2 -left-10 h-2 w-2 rounded-full border border-primary bg-background sm:-left-16"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline gap-x-5 gap-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary",
										children: step.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold tracking-tight sm:text-3xl",
										children: step.title.toUpperCase()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-md text-sm text-muted-foreground",
									children: step.description
								})
							]
						}, step.id))
					})]
				})
			]
		})
	});
}
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pr-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "eyebrow",
						children: "07 / WHO WE BUILD FOR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl",
							children: [
								"BUILT FOR BUSINESSES",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "AT EVERY STAGE."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground",
							children: "Whether you're starting from an idea or improving an existing business, CODEVAP builds digital solutions around where you are today — and where you want to go next."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 space-y-2",
						children: audiences.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							as: "li",
							delay: i * .05,
							className: "group border-b border-border pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-1.5 w-1.5 rounded-full bg-primary opacity-60 transition-opacity duration-300 group-hover:opacity-100"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-bold tracking-tight sm:text-2xl",
									children: a.title.toUpperCase()
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 pl-5 text-sm leading-relaxed text-muted-foreground",
								children: a.description
							})]
						}, a.title))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:border-l lg:border-border lg:pl-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "eyebrow",
						children: "WHAT WE DELIVER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 font-display text-[1.05rem] font-bold tracking-[0.05em] text-foreground sm:text-xl",
							children: [
								"WEBSITE → APPLICATION → ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden lg:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "E-COMMERCE"
								}),
								" → SOFTWARE → AUTOMATION"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground",
							children: "From a single website to a complete business platform, we build according to your actual requirements."
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 border-t border-border pt-12 sm:mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow text-primary",
							children: "OUR FOCUS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
							children: [
								"Useful technology.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Clean execution.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Long-term value."
							]
						})]
					})
				})]
			})]
		})
	});
}
/** Renders nothing until real, attributable testimonials exist. */
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	if (testimonials.length === 0) return null;
	const t = testimonials[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "eyebrow",
					children: "08 / Clients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 min-h-48",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -20
							},
							transition: {
								duration: .45,
								ease: EASE
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "max-w-3xl font-display text-2xl leading-tight font-bold tracking-tight sm:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "“"
								}), t.quote]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-6 text-sm text-muted-foreground",
								children: [
									t.name,
									" — ",
									t.company
								]
							})]
						}, i)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex gap-2",
					children: testimonials.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Show testimonial ${idx + 1}`,
						onClick: () => setI(idx),
						className: `h-1 w-10 transition-colors ${idx === i ? "bg-primary" : "bg-border-strong"}`
					}, idx))
				})
			]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-t border-border py-28 lg:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "green-glow absolute bottom-[-30%] left-1/2 h-[600px] w-[900px] -translate-x-1/2",
					initial: {
						opacity: 0,
						scale: .7
					},
					whileInView: {
						opacity: .9,
						scale: 1
					},
					viewport: viewportOnce,
					transition: {
						duration: 1.4,
						ease: EASE
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-lines absolute inset-0 opacity-40" }),
				[
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-x-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent",
					style: {
						top: `${30 + i * 18}%`,
						height: 1
					},
					initial: {
						scaleX: 0,
						opacity: 0
					},
					whileInView: {
						scaleX: 1,
						opacity: 1
					},
					viewport: viewportOnce,
					transition: {
						duration: 1.2,
						ease: EASE,
						delay: .1 + i * .15
					}
				}, i))
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "eyebrow",
					children: "BUILD SOMETHING WITH US"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-medium text-muted-foreground sm:text-xl",
						children: "Have an idea, requirement, or business problem?"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mx-auto mt-4 max-w-4xl font-display text-[2.2rem] leading-[0.98] font-bold tracking-[-0.04em] sm:text-5xl lg:text-7xl",
						children: ["LET'S BUILD THE RIGHT ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "SOLUTION."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .12,
					className: "mt-10 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "group inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary-foreground uppercase",
						children: ["Start Your Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
							"aria-hidden": "true"
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "inline-flex min-h-12 items-center rounded-sm border border-border-strong px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-colors hover:border-primary",
						children: "Talk To Us"
					})]
				})
			]
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	email: stringType().trim().email("Enter a valid email address").max(255),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	company: stringType().trim().max(120).optional().or(literalType("")),
	projectType: stringType().trim().min(1, "Select a project type").max(60),
	budget: stringType().trim().min(1, "Select a budget range").max(60),
	timeline: stringType().trim().min(1, "Select a timeline").max(60),
	message: stringType().trim().min(10, "Tell us a little more").max(1e3)
});
/**
* Receives a validated project enquiry. Server-side validation is re-run here.
* No secrets are read; wire an email/CRM provider inside the handler when available.
*/
var submitContact = createServerFn({ method: "POST" }).validator((data) => contactSchema.parse(data)).handler(createSsrRpc("1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd"));
var empty = {
	name: "",
	email: "",
	phone: "",
	company: "",
	projectType: "",
	budget: "",
	timeline: "",
	message: ""
};
var field = "min-h-12 w-full rounded-sm border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none";
function Contact() {
	useServerFn(submitContact);
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [state, setState] = (0, import_react.useState)("idle");
	const set = (key) => (e) => {
		setValues((v) => ({
			...v,
			[key]: e.target.value
		}));
		setErrors((prev) => ({
			...prev,
			[key]: void 0,
			form: void 0
		}));
	};
	async function onSubmit(e) {
		e.preventDefault();
		const parsed = contactSchema.safeParse(values);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		const data = parsed.data;
		const dateStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
		const text = `*🚀 New Project Request — CODEVAP*

Hello CODEVAP Team 👋

I would like to discuss a new project with CODEVAP.

*👤 CLIENT DETAILS*

• *Name:* ${data.name}
• *Email:* ${data.email}
• *Phone:* ${data.phone || "Not provided"}
• *Company:* ${data.company || "Not provided"}

*💻 PROJECT DETAILS*

• *Project Type:* ${data.projectType}
• *Estimated Budget:* ${data.budget}
• *Expected Timeline:* ${data.timeline}

*📝 PROJECT REQUIREMENT*

${data.message}

I would like to discuss the project requirements, scope, timeline, and development process with the CODEVAP team.

Please contact me using the details provided above.

Thank you,
*${data.name}*

━━━━━━━━━━━━━━━━━━

*📌 Submitted via:* CODEVAP Website
*🕐 Submitted on:* ${dateStr}`;
		const whatsappUrl = `https://wa.me/918248452433?text=${encodeURIComponent(text)}`;
		window.open(whatsappUrl, "_blank");
		setState("success");
		setValues(empty);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border bg-surface/40 py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "eyebrow",
					children: "09 / Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-3xl leading-[1.05] font-bold tracking-tight sm:text-5xl",
						children: [
							"LET'S BUILD",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"SOMETHING."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Share a few details about the project. We reply with a scope, timeline and a realistic estimate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3 border-t border-border pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${contact.email}`,
										className: "hover:text-primary",
										children: contact.email
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-muted-foreground",
									children: contact.phone
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-muted-foreground",
									children: contact.location
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Contact details are placeholders until final company information is supplied."
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				children: state === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-72 flex-col items-start justify-center gap-4 rounded-sm border border-primary/40 bg-background p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 place-items-center rounded-full bg-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-5 w-5 text-primary-foreground",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold tracking-tight",
							children: "REQUEST SENT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Thanks — we've received your project request and will be in touch shortly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setState("idle"),
							className: "min-h-11 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary uppercase",
							children: "Send another"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							error: errors.name,
							id: "name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								name: "name",
								value: values.name,
								onChange: set("name"),
								maxLength: 100,
								autoComplete: "name",
								"aria-invalid": Boolean(errors.name),
								className: field,
								placeholder: "Your name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							error: errors.email,
							id: "email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								type: "email",
								value: values.email,
								onChange: set("email"),
								maxLength: 255,
								autoComplete: "email",
								"aria-invalid": Boolean(errors.email),
								className: field,
								placeholder: "you@company.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone (optional)",
							error: errors.phone,
							id: "phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "phone",
								name: "phone",
								type: "tel",
								value: values.phone,
								onChange: set("phone"),
								maxLength: 30,
								autoComplete: "tel",
								className: field,
								placeholder: "+91 99999 99999"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company (optional)",
							error: errors.company,
							id: "company",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "company",
								name: "company",
								value: values.company,
								onChange: set("company"),
								maxLength: 120,
								autoComplete: "organization",
								className: field,
								placeholder: "Company name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Project Type",
							error: errors.projectType,
							id: "projectType",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "projectType",
								name: "projectType",
								value: values.projectType,
								onChange: set("projectType"),
								"aria-invalid": Boolean(errors.projectType),
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select…"
								}), projectTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t,
									children: t
								}, t))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Budget",
							error: errors.budget,
							id: "budget",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "budget",
								name: "budget",
								value: values.budget,
								onChange: set("budget"),
								"aria-invalid": Boolean(errors.budget),
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select…"
								}), budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: b,
									children: b
								}, b))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Expected Timeline",
							error: errors.timeline,
							id: "timeline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "timeline",
								name: "timeline",
								value: values.timeline,
								onChange: set("timeline"),
								"aria-invalid": Boolean(errors.timeline),
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select…"
								}), timelines.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t,
									children: t
								}, t))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								error: errors.message,
								id: "message",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									value: values.message,
									onChange: set("message"),
									rows: 5,
									maxLength: 1e3,
									"aria-invalid": Boolean(errors.message),
									className: `${field} resize-none py-3`,
									placeholder: "What are you building?"
								})
							})
						}),
						errors.form && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm text-destructive sm:col-span-2",
							children: errors.form
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: state === "loading",
								className: "group inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-7 font-display text-[0.7rem] font-bold tracking-[0.18em] text-primary-foreground uppercase disabled:opacity-70",
								children: state === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "h-4 w-4 animate-spin",
									"aria-hidden": "true"
								}), "Sending"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Project Request", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
									"aria-hidden": "true"
								})] })
							})
						})
					]
				})
			})]
		})
	});
}
function Field({ label, id, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "eyebrow mb-2 block",
			children: label
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-destructive",
			role: "alert",
			children: error
		})
	] });
}
var links = [
	{
		label: "Home",
		href: "#top"
	},
	...navLinks,
	{
		label: "Contact",
		href: "#contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": "true",
			className: "absolute top-0 left-0 h-px w-full origin-left bg-primary",
			initial: { scaleX: 0 },
			whileInView: { scaleX: 1 },
			viewport: viewportOnce,
			transition: {
				duration: 1.4,
				ease: EASE
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: viewportOnce,
						transition: {
							duration: .7,
							ease: EASE
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm text-muted-foreground",
							children: "Building digital experiences that move business."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
						"aria-label": "Footer",
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: viewportOnce,
						transition: {
							duration: .7,
							ease: EASE,
							delay: .07
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: l.href,
								className: "group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
								}), l.label]
							}) }, l.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: viewportOnce,
						transition: {
							duration: .7,
							ease: EASE,
							delay: .14
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow",
							children: "Elsewhere"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: [contact.socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.href,
								className: "group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
								}), s.label]
							}) }, s.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${contact.email}`,
								className: "group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"
								}), contact.email]
							}) })]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "© 2026 CODEVAP. All rights reserved."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
					}), "Available for new projects"]
				})]
			})]
		})]
	});
}
/** Hidden until a real WhatsApp number is configured in src/data/site.ts. */
function WhatsAppFab() {
	if (!contact.whatsapp) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "group fixed right-5 bottom-5 z-40 flex min-h-12 items-center gap-3 rounded-full border border-border-strong bg-surface px-4 shadow-lg transition-colors hover:border-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "h-5 w-5 text-primary",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-[0.65rem] font-bold tracking-[0.18em] uppercase max-lg:hidden lg:max-w-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:max-w-32 lg:group-hover:opacity-100",
			children: "Chat with us"
		})]
	});
}
/**
* Premium smooth scrolling via Lenis.
* Loaded lazily on the client only, skipped entirely for reduced-motion
* and touch devices so native scrolling and accessibility stay intact.
*/
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const coarse = window.matchMedia("(pointer: coarse)").matches;
		if (reduced || coarse) return;
		let raf = 0;
		let lenis = null;
		let cancelled = false;
		(async () => {
			const { default: Lenis } = await import("../_libs/lenis.mjs").then((n) => n.t);
			if (cancelled) return;
			lenis = new Lenis({
				duration: .9,
				smoothWheel: true,
				touchMultiplier: 1.6,
				easing: (t) => 1 - Math.pow(1 - t, 3)
			});
			const loop = (time) => {
				lenis?.raf(time);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		})();
		return () => {
			cancelled = true;
			cancelAnimationFrame(raf);
			lenis?.destroy();
		};
	}, []);
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
var CustomCursor = (0, import_react.lazy)(() => import("./CustomCursor-DPM7Ew1e.mjs").then((m) => ({ default: m.CustomCursor })));
function Home() {
	useSmoothScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founders, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Technologies, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyCodevap, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
	] });
}
//#endregion
export { useFinePointer as n, routes_exports as t };
