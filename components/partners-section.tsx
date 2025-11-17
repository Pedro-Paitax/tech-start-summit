"use client"

import entidades from "@/data/entidades.json"

export function PartnersSection() {
  const partners = entidades.entities.filter(e => e.type === "partner")

  return (
    <section id="parceiros" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Parceiros</span>
              <div className="h-px w-full bg-primary/30 mt-2"></div>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Rede Unificada: <span className="text-primary">Nossas Entidades</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Atléticas, Centros Acadêmicos e universidades unidos pela missão de fortalecer o ecossistema tech do Paraná.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full h-16 object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
