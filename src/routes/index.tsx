import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Intro } from "@/components/Intro";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Founders } from "@/components/Founders";
import { Technologies } from "@/components/Technologies";
import { About } from "@/components/About";
import { WhyCodevap } from "@/components/WhyCodevap";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const CustomCursor = lazy(() =>
  import("@/components/CustomCursor").then((m) => ({ default: m.CustomCursor })),
);

const TITLE = "CODEVAP — Digital Experiences That Move Business";
const DESCRIPTION =
  "CODEVAP builds high-performance websites, web applications, e-commerce platforms and digital experiences designed to help businesses grow.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  useSmoothScroll();

  return (
    <>
      <Preloader />
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Services />
        <Portfolio />
        <Founders />
        <Technologies />
        <About />
        <WhyCodevap />
        <Process />
        <Trust />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
