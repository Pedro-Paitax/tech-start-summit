"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -40])
  const y2 = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Parallax lines */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.8, 0.12, 1] }}
          className="space-y-8"
        >
          <a href="/">
            <img
              src="https://2l1c0a72tw.ufs.sh/f/yEUlE6cUsfMPfdCMoSEbqMCsSxr5ViANnkGWDP7oYH2XmuIE"
              alt="Tech Start Summit"
              className="mx-auto h-32 w-auto mb-6"
            />
          </a>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none" style={{ fontFamily: "var(--font-heading)" }}>
            TECH START
            <br />
            <span className="text-primary">SUMMIT</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto text-balance"
          >
            A Jornada da Inovação e da Carreira de Tecnologia
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }}>
            <div className="pt-8">
              <Button size="lg" onClick={() => document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" })} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 h-auto group">
                Garanta Sua Vaga Agora
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <button onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors" aria-label="Scroll para próxima seção">
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
