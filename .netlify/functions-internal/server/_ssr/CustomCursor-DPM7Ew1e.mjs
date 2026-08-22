import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useMotionValue, n as useReducedMotion, r as useSpring, s as motion } from "../_libs/framer-motion+[...].mjs";
import { n as useFinePointer } from "./routes-D2Z1kByS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CustomCursor-DPM7Ew1e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Desktop-only decorative cursor. Native cursor stays enabled for accessibility. */
function CustomCursor() {
	const fine = useFinePointer();
	const reduced = useReducedMotion();
	const enabled = fine && !reduced;
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, {
		stiffness: 700,
		damping: 40,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 700,
		damping: 40,
		mass: .4
	});
	const [mode, setMode] = (0, import_react.useState)("default");
	(0, import_react.useEffect)(() => {
		if (!enabled) return;
		const onMove = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const el = e.target?.closest?.("[data-cursor], a, button, input, textarea, select");
			const flag = el?.dataset?.["cursor"];
			setMode(flag === "project" ? "project" : flag === "founder" ? "founder" : el ? "link" : "default");
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [
		enabled,
		x,
		y
	]);
	if (!enabled) return null;
	const size = mode === "project" ? 88 : mode === "founder" ? 72 : mode === "link" ? 44 : 14;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": "true",
		className: "pointer-events-none fixed top-0 left-0 z-[90] hidden lg:block",
		style: {
			x: sx,
			y: sy
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "flex items-center justify-center rounded-full border border-primary",
			animate: {
				width: size,
				height: size,
				marginLeft: -size / 2,
				marginTop: -size / 2,
				backgroundColor: mode === "project" || mode === "founder" ? "var(--primary)" : mode === "link" ? "transparent" : "var(--primary)",
				opacity: mode === "default" ? .9 : 1
			},
			transition: {
				duration: .25,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children: (mode === "project" || mode === "founder") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[0.55rem] font-bold tracking-[0.14em] text-primary-foreground",
				children: mode === "founder" ? "MEET" : "VIEW →"
			})
		})
	});
}
//#endregion
export { CustomCursor };
