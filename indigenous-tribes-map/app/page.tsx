import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PillarsSection } from "@/components/pillars-section"
import { FeaturedTribes } from "@/components/featured-tribes"
import { CTASection } from "@/components/cta-section"
import { DonationSection } from "@/components/donation-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <FeaturedTribes />
        <DonationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
