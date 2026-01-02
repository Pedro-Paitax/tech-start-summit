"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, Target, FileDown, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AppExperienceSection() {
  return (
    <section className="py-24 px-6 container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* TEXTO */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Toda a experiência do evento vive no app
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            A programação, as palestras e as atividades não ficam soltas.
            Tudo acontece dentro do app do Tech Start Summit — simples, organizado
            e feito para quem está começando.
          </p>

          <ul className="space-y-5 mb-10">
            <li className="flex items-start gap-4">
              <Calendar className="text-primary mt-1" />
              <span>
                <strong>Agenda completa do evento</strong>, sempre atualizada
              </span>
            </li>

            <li className="flex items-start gap-4">
              <Target className="text-primary mt-1" />
              <span>
                <strong>Bingo de missões</strong> para aprender networking na prática
              </span>
            </li>

            <li className="flex items-start gap-4">
              <FileDown className="text-primary mt-1" />
              <span>
                Exporte sua agenda em <strong>PDF</strong> para acompanhar no dia
              </span>
            </li>

            <li className="flex items-start gap-4">
              <Smartphone className="text-primary mt-1" />
              <span>
                Tudo pensado para <strong>não deixar você perdido</strong>
              </span>
            </li>
          </ul>

          <Button
            size="lg"
            onClick={() => window.open("https://app.techstartsummit.com.br", "_blank")}
            className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 h-auto"
          >
            Acessar o app do evento →
          </Button>
        </div>

        {/* VISUAL */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
            <p className="text-sm uppercase text-primary font-semibold mb-2">
              Importante
            </p>
            <p className="text-lg font-medium">
              Para ver a programação completa, marcar palestras e participar das
              atividades, o acesso é feito pelo app.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
