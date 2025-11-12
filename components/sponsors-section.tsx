import { Button } from "@/components/ui/button"

const institutionalSupport = [
  { name: "Secretaria de Inovação PR", logo: "/government-innovation-logo.jpg" },
  { name: "SENAI PR", logo: "/senai-logo.jpg" },
  { name: "SEBRAE PR", logo: "/sebrae-logo.jpg" },
]

const sponsors = [
  { name: "TechCorp", logo: "/tech-company-logo.jpg", tier: "gold" },
  { name: "DataFlow", logo: "/data-company-logo.png", tier: "gold" },
  { name: "CloudSync", logo: "/cloud-company-logo.png", tier: "silver" },
  { name: "DevTools", logo: "/developer-tools-logo.png", tier: "silver" },
  { name: "SecureNet", logo: "/security-company-logo.png", tier: "silver" },
]

export function SponsorsSection() {
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

          {/* Apoio Institucional */}
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

          {/* Patrocinadores */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Patrocinadores</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className={`bg-card border rounded-lg p-6 flex items-center justify-center hover:border-primary/50 transition-all duration-300 ${
                    sponsor.tier === "gold" ? "border-primary/50 md:col-span-1" : "border-border"
                  }`}
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

          {/* CTA para patrocinadores */}
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
