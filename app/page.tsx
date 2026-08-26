import { Nav } from "@/components/chrome/Nav";
import { Hero } from "@/components/hero/Hero";
import { Leadership } from "@/components/sections/Leadership";

export default function Home() {
  return (
    <main id="home" className="page-bg min-h-screen">
      <div className="world-map" aria-hidden />
      <div className="swoosh" aria-hidden />
      <Nav />
      <Hero />
      <Leadership />
    </main>
  );
}
