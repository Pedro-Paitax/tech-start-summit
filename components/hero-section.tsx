"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("sobre")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            TECH START
            <br />
            <span className="text-primary">SUMMIT</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto text-balance">
            A Jornada da Inovação e da Carreira de Tecnologia
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base font-medium pt-4">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              30 e 31 DE MAIO, 2025
            </span>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              CURITIBA, PR
            </span>
          </div>

          <div className="pt-8">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("inscricao")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 h-auto group"
            >
              Garanta Sua Vaga Agora
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors"
        aria-label="Scroll para próxima seção"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
