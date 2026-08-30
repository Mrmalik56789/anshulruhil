import type { Metadata } from "next";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { AchievementsHero } from "@/components/achievements/AchievementsHero";
import { AchievementsStats } from "@/components/achievements/AchievementsStats";
import { AchievementsTimeline } from "@/components/achievements/AchievementsTimeline";
import { AchievementsCompanies } from "@/components/achievements/AchievementsCompanies";
import { AchievementsAwards } from "@/components/achievements/AchievementsAwards";
import { AchievementsMedia } from "@/components/achievements/AchievementsMedia";
import { AchievementsImpact } from "@/components/achievements/AchievementsImpact";
import { AchievementsClosing } from "@/components/achievements/AchievementsClosing";
import { achievementsPage } from "@/data/achievementsPage";

export const metadata: Metadata = {
  title: achievementsPage.title,
  description: achievementsPage.description,
  openGraph: {
    title: achievementsPage.title,
    description: achievementsPage.description,
    url: "/achievements",
    type: "website",
    images: [
      {
        url: "/images/gallery/award-ceremony.jpeg",
        width: 1600,
        height: 1067,
        alt: "Anshul Ruhil achievements",
      },
    ],
  },
};

export default function AchievementsPage() {
  return (
    <main className="page-bg min-h-screen">
      <div className="world-map" aria-hidden />
      <div className="swoosh" aria-hidden />
      <Nav />
      <AchievementsHero />
      <AchievementsStats />
      <AchievementsTimeline />
      <AchievementsCompanies />
      <AchievementsAwards />
      <AchievementsMedia />
      <AchievementsImpact />
      <AchievementsClosing />
      <Footer />
    </main>
  );
}
