"use client"

import palestrantes from "@/data/palestrantes.json"
import { Linkedin } from "lucide-react"

export function SpeakersSection() {
  return (
    <section id="palestrantes" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Palestrantes</span>
            <div className="h-px w-full bg-primary/30 mt-2"></div>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Os Líderes que Vão <span className="text-primary">Guiar</span> a Jornada
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {palestrantes.map((p) => {
            const openLinkedin = (url?: string) => {
              if (!url) return;
              window.open(url, "_blank", "noopener,noreferrer");
            };

            return (
              <div
                key={p.nome}
                role={p.lkdn ? "button" : undefined}
                tabIndex={p.lkdn ? 0 : undefined}
                onKeyDown={(e) => {
                  if (!p.lkdn) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLinkedin(p.lkdn);
                  }
                }}
                onClick={(e) => {
                  if (!p.lkdn || e.defaultPrevented) return;
                  openLinkedin(p.lkdn);
                }}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.foto || "/placeholder.svg"}
                    alt={p.nome}
                    className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{p.nome}</h3>
                  <p className="text-sm font-semibold text-primary">{p.profissão}</p>
                  <p className="text-sm text-muted-foreground">{p.entidade}</p>
                  <p className="text-sm text-muted-foreground pt-2 leading-relaxed">{p.bio}</p>
                </div>

                <div
                  className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
                >
                  <a
                    href={p.lkdn}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(p.lkdn, "_blank", "noopener,noreferrer")
                    }}
                    className="flex items-center gap-2 text-primary-foreground font-semibold hover:scale-110 transition-transform"
                  >
                    <Linkedin size={24} />
                    <span>Ver Perfil</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
