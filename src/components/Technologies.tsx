import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { technologies } from "@/data/site";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";
import { 
  SiReact, 
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRazorpay,
  SiCloudinary,
  SiGit 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const getIconConfig = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react': return { Icon: SiReact, brandColor: "group-hover:text-[#61DAFB]" };
    case 'next.js': return { Icon: SiNextdotjs, brandColor: "group-hover:text-foreground dark:group-hover:text-white" };
    case 'vue': return { Icon: SiVuedotjs, brandColor: "group-hover:text-[#4FC08D]" };
    case 'node.js': return { Icon: SiNodedotjs, brandColor: "group-hover:text-[#339933]" };
    case 'express': return { Icon: SiExpress, brandColor: "group-hover:text-foreground dark:group-hover:text-white" };
    case 'mongodb': return { Icon: SiMongodb, brandColor: "group-hover:text-[#47A248]" };
    case 'postgresql': return { Icon: SiPostgresql, brandColor: "group-hover:text-[#4169E1]" };
    case 'redis': return { Icon: SiRedis, brandColor: "group-hover:text-[#DC382D]" };
    case 'typescript': return { Icon: SiTypescript, brandColor: "group-hover:text-[#3178C6]" };
    case 'javascript': return { Icon: SiJavascript, brandColor: "group-hover:text-[#F7DF1E]" };
    case 'tailwind': return { Icon: SiTailwindcss, brandColor: "group-hover:text-[#06B6D4]" };
    case 'razorpay': return { Icon: SiRazorpay, brandColor: "group-hover:text-[#02042B] dark:group-hover:text-blue-500" };
    case 'git': return { Icon: SiGit, brandColor: "group-hover:text-[#F05032]" };
    case 'cloudinary': return { Icon: SiCloudinary, brandColor: "group-hover:text-[#3448C5]" };
    case 'rest apis': return { Icon: TbApi, brandColor: "group-hover:text-blue-400" };
    default: return null;
  }
};

export function Technologies() {
  const [radius, setRadius] = useState(300);
  const [globeSize, setGlobeSize] = useState(450);

  useEffect(() => {
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

  return (
    <section className="border-t border-border bg-surface/40 py-12 lg:py-16 overflow-hidden relative">
      <div className="container-x relative z-30 pointer-events-none">
        <Reveal className="eyebrow">04 / Technology</Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl text-foreground mix-blend-difference">
            BUILT WITH
          </h2>
        </Reveal>
      </div>

      {/* Flanging the container margin to ensure clear drop on mobile, while bridging gap on huge screens */}
      <div className="relative mt-8 lg:-mt-28 flex items-center justify-center min-h-[400px] sm:min-h-[600px] lg:min-h-[880px] w-full z-20">
        {/* Globe in the center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto">
          <RotatingEarth width={globeSize} height={globeSize} />
        </div>

        {/* Wrapper for the orbiting items */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="absolute left-1/2 top-1/2 w-0 h-0 z-20 pointer-events-none"
        >
          {technologies.map((t, i) => {
            const angle = (i / technologies.length) * 360;
            return (
              <div
                key={t}
                className="absolute top-0 left-0"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px)`,
                }}
              >
                {/* Counter-rotation to keep the pill upright */}
                <motion.div
                  className="group pointer-events-auto flex items-center gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-background/90 backdrop-blur-md border border-border/50 rounded-full whitespace-nowrap shadow-lg hover:border-foreground/20 hover:bg-background hover:scale-105 transition-all duration-300"
                  style={{ x: "-50%", y: "-50%" }} // precisely center the label on the orbit dot
                  initial={{ rotate: -angle }}
                  animate={{ rotate: [-angle, -360 - angle] }}
                  transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                >
                  {(() => {
                    const config = getIconConfig(t);
                    if (!config) {
                      return (
                        <span className="font-display font-semibold text-xs sm:text-[15px] lg:text-base cursor-default text-muted-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {t}
                        </span>
                      );
                    }
                    const { Icon, brandColor } = config;
                    return (
                      <>
                        <span className={`text-muted-foreground/60 transition-colors duration-300 ${brandColor}`}>
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                        </span>
                        <span className={`font-display font-semibold text-xs sm:text-[15px] lg:text-base cursor-default text-muted-foreground/80 transition-colors duration-300 ${brandColor}`}>
                          {t}
                        </span>
                      </>
                    );
                  })()}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
