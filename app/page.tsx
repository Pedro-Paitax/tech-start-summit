import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramSection } from "@/components/program-section"
import { SpeakersSection } from "@/components/speakers-section"
import { PartnersSection } from "@/components/partners-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { FooterCTA } from "@/components/footer-cta"
export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <SpeakersSection />
      <PartnersSection />
      <SponsorsSection />
      <FooterCTA />
    </main>
  )
}
