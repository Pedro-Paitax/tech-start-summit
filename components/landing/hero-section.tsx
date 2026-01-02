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
          <a href="/" className="inline-block">
            <motion.img
              src="https://2l1c0a72tw.ufs.sh/f/yEUlE6cUsfMPfdCMoSEbqMCsSxr5ViANnkGWDP7oYH2XmuIE"
              alt="Tech Start Summit"
              className="mx-auto h-32 w-auto mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </a>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
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
            Seu primeiro passo real na carreira em tecnologia.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-primary font-semibold tracking-wide">
              <span className="uppercase text-sm">Save the Date</span>
              <span className="text-sm sm:text-base">
                30 e 31 de Maio
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Um summit feito para calouros, estudantes e pessoas entrando na área. 
            Feito por pessoas que já estiveram no seu lugar!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
          >
            <div className="pt-8 flex justify-center">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("inscricao")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 h-auto group"
              >
                Quero dar meu primeiro passo
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={() =>
          document
            .getElementById("sobre")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors"
        aria-label="Scroll para próxima seção"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
