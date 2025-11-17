"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { Toaster, toast } from "sonner"

export function FooterCTA() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          origem: "Site",
        }),
      })

      if (!res.ok) {
        throw new Error("Erro ao enviar lead")
      }

      toast.success("Inscrição realizada com sucesso! 🎉")
      setEmail("")
    } catch (error) {
      console.error("Erro ao enviar lead:", error)
      toast.error("Não foi possível enviar sua inscrição. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster richColors closeButton />

      <section id="inscricao" className="py-24 sm:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Pronto para o <span className="text-primary">Próximo Nível?</span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
                Não perca a oportunidade de estar no evento que vai transformar sua carreira em tecnologia.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 bg-background border-border text-foreground"
              />

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8"
              >
                {loading ? "Enviando..." : "Garanta Sua Vaga"}
              </Button>
            </form>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Siga-nos nas redes sociais</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-border relative z-10">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Tech Start Summit. Todos os direitos reservados.</p>
            <p className="mt-2">Realização: Rede Unificada Acadêmica Tech do Paraná</p>
          </div>
        </footer>
      </section>
    </>
  )
}
