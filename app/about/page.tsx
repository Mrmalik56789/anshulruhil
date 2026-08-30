import type { Metadata } from "next";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { AboutIntro } from "@/components/about/AboutIntro";
import { LeadershipImpact } from "@/components/about/LeadershipImpact";
import { AboutAwards } from "@/components/about/AboutAwards";
import { CareerJourney } from "@/components/about/CareerJourney";
import { SkillsExpertise } from "@/components/about/SkillsExpertise";
import { CommunityImpact } from "@/components/about/CommunityImpact";
import { VisionBand } from "@/components/about/VisionBand";
import { AboutCTA } from "@/components/about/AboutCTA";
import { aboutPage } from "@/data/aboutPage";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
  openGraph: {
    title: aboutPage.title,
    description: aboutPage.description,
    url: "/about",
    type: "website",
    images: [{ url: "/images/about/headshot.png", width: 894, height: 792, alt: aboutPage.photoAlt }],
  },
};

export default function AboutPage() {
  return (
    <main className="page-bg min-h-screen">
      <div className="world-map" aria-hidden />
      <div className="swoosh" aria-hidden />
      <Nav />
      <AboutIntro />
      <LeadershipImpact />
      <AboutAwards />
      <CareerJourney />
      <SkillsExpertise />
      <CommunityImpact />
      <VisionBand />
      <AboutCTA />
      <Footer />
    </main>
  );
}
