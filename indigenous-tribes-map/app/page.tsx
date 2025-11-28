import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PillarsSection } from "@/components/pillars-section"
import { FeaturedTribes } from "@/components/featured-tribes"
import { CTASection } from "@/components/cta-section"
import { DonationSection } from "@/components/donation-section"
import { RealityBondsArtifacts } from "@/components/reality-bonds-artifacts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "First Nations Living Journal | Map, Stories, and Reality Bonds",
  description:
    "Explore Indigenous territories, living history, and the Tribal Artifacts Reality Bonds collection guided by Tribal Grandmothers and Seed 2 Sea.",
  openGraph: {
    images: [
      {
        url: "/tribal-artifacts-marcine-quenzer.jpg",
        width: 1200,
        height: 630,
        alt: "Tribal Artifacts Reality Bonds",
      },
    ],
  },
  twitter: {
    images: ["/tribal-artifacts-marcine-quenzer.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <FeaturedTribes />
        <RealityBondsArtifacts />
        <DonationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
