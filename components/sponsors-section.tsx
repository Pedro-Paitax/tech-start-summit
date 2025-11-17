"use client"

import entidades from "@/data/entidades.json"
import { Button } from "@/components/ui/button"

export function SponsorsSection() {
  const institutionalSupport = entidades.entities.filter(e => e.type === "institutional")
  const sponsors = entidades.entities.filter(e => e.type === "sponsor")

  return (
    <section id="patrocinadores" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Patrocinadores</span>
              <div className="h-px w-full bg-primary/30 mt-2"></div>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Empresas que <span className="text-primary">Investem</span> no Futuro de TI
            </h2>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Apoio Institucional</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {institutionalSupport.map((org, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-primary/30 rounded-lg p-8 flex items-center justify-center"
                >
                  <img
                    src={org.logo || "/placeholder.svg"}
                    alt={org.name}
                    className="max-w-full h-12 object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Patrocinadores</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className={`bg-card border rounded-lg p-6 flex items-center justify-center transition-all duration-300 hover:border-primary/50
                    ${sponsor.tier === "gold" ? "border-primary/50" : "border-border"}
                  `}
                >
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="max-w-full h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-6">Quer apoiar o maior evento de tech do Paraná?</p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Seja um Patrocinador
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
