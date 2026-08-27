import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Leadership } from "@/components/sections/Leadership";
import { Media } from "@/components/sections/Media";
import { Philosophy } from "@/components/sections/Philosophy";
import { Speaking } from "@/components/sections/Speaking";
import { Timeline } from "@/components/sections/Timeline";
import { Ventures } from "@/components/sections/Ventures";

export default function Home() {
  return (
    <main id="home" className="page-bg min-h-screen">
      <div className="world-map" aria-hidden />
      <div className="swoosh" aria-hidden />
      <Nav />
      <Hero />
      <Leadership />
      <About />
      <Philosophy />
      <Achievements />
      <Speaking />
      <Gallery />
      <Ventures />
      <Timeline />
      <Awards />
      <Media />
      <Contact />
      <Footer />
    </main>
  );
}
