"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl sm:text-2xl font-bold tracking-tight">
            TECH <span className="text-primary">START</span> SUMMIT
          </div>
          <a href="/">
            <img src="https://2l1c0a72tw.ufs.sh/f/yEUlE6cUsfMPfdCMoSEbqMCsSxr5ViANnkGWDP7oYH2XmuIE" alt="Tech Start Summit" className="h-8 w-8" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("sobre")} className="text-sm hover:text-primary transition-colors">
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("programacao")}
              className="text-sm hover:text-primary transition-colors"
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection("palestrantes")}
              className="text-sm hover:text-primary transition-colors"
            >
              Palestrantes
            </button>
            <button
              onClick={() => scrollToSection("parceiros")}
              className="text-sm hover:text-primary transition-colors"
            >
              Parceiros
            </button>
            <button
              onClick={() => scrollToSection("patrocinadores")}
              className="text-sm hover:text-primary transition-colors"
            >
              Patrocinadores
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("inscricao")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Inscreva-se
          </Button>
        </div>
      </div>
    </nav>
  )
}
