import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import  SpeakersSection  from "@/components/speakers/SpeakersSection"
import { PartnersSection } from "@/components/partners/PartnersSection"
import { SponsorsSection } from "@/components/sponsors/SponsorsSection"
import { FooterCTA } from "@/components/footer-cta"
import  ProgramTimeline from "@/components/timeline-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramTimeline />
      <SpeakersSection />
      <PartnersSection />
      <SponsorsSection />
      <FooterCTA />
    </main>
  )
}
