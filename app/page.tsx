import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import  SpeakersSection  from "@/components/landing/speakers/SpeakersSection"
import { PartnersSection } from "@/components/landing/partners/PartnersSection"
import { SponsorsSection } from "@/components/landing/sponsors/SponsorsSection"
import { FooterCTA } from "@/components/landing/footer-cta"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <PartnersSection />
      <SponsorsSection />
      <FooterCTA />
    </main>
  )
}
