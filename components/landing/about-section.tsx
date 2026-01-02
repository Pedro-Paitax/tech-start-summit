"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Users, Rocket, Brain, Lightbulb, TrendingUp } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 0.8, 0.12, 1] },
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export function AboutSection() {
  const pilares = [
    {
      icon: Rocket,
      title: "Áreas da Tecnologia",
      description:
        "Entenda quais áreas existem (dev, dados, produto, IA e mais) e o que cada profissional faz no dia a dia.",
    },
    {
      icon: Briefcase,
      title: "Primeiros Passos na Carreira",
      description:
        "Como entrar no mercado de tecnologia, o que estudar primeiro e como se posicionar mesmo sendo iniciante.",
    },
    {
      icon: TrendingUp,
      title: "Oportunidades Reais",
      description:
        "Onde estão as oportunidades para quem está começando e quais caminhos fazem mais sentido hoje.",
    },
    {
      icon: Users,
      title: "Networking Sem Vergonha",
      description:
        "Aprenda a conversar com profissionais e empresas mesmo sem experiência — de forma guiada.",
    },
    {
      icon: Brain,
      title: "Mentalidade de Crescimento",
      description:
        "Soft skills, comunicação e como acelerar seu aprendizado desde o início da carreira.",
    },
    {
      icon: Lightbulb,
      title: "Aprender na Prática",
      description:
        "Atividades, desafios e experiências pensadas para transformar teoria em ação.",
    },
  ]

  return (
    <section id="sobre" className="py-24 px-6 container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl font-extrabold">
          Esse summit é para quem está começando
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Nada de palestras inalcançáveis. Aqui você aprende, entende e sai com direção.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {pilares.map((pilar, idx) => {
          const Icon = pilar.icon

          return (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="group bg-card border border-border rounded-xl p-8 shadow-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={28} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center mb-3">
                {pilar.title}
              </h3>

              <p className="text-muted-foreground text-center leading-relaxed">
                {pilar.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
