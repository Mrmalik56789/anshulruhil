import type { Metadata } from "next";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { AchievementsHero } from "@/components/achievements/AchievementsHero";
import { AchievementsStats } from "@/components/achievements/AchievementsStats";
import { AchievementsTimeline } from "@/components/achievements/AchievementsTimeline";
import { AchievementsVentures } from "@/components/achievements/AchievementsVentures";
import { AchievementsAwards } from "@/components/achievements/AchievementsAwards";
import { AchievementsPhilosophy } from "@/components/achievements/AchievementsPhilosophy";
import { AchievementsVision } from "@/components/achievements/AchievementsVision";
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
        url: "/images/gallery/event-06.jpg",
        width: 1080,
        height: 718,
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
      <AchievementsVentures />
      <AchievementsAwards />
      <AchievementsPhilosophy />
      <AchievementsVision />
      <Footer />
    </main>
  );
}
