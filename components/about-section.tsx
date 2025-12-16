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
      title: "Inovação Tecnológica",
      description:
        "Discussões sobre IA, automação, computação em nuvem e as habilidades mais importantes para o profissional do futuro.",
    },
    {
      icon: Briefcase,
      title: "Mercado de Trabalho",
      description:
        "Como entrar, crescer e se destacar em tecnologia mesmo começando do zero ou migrando de outra área.",
    },
    {
      icon: TrendingUp,
      title: "Tendências e Oportunidades",
      description:
        "Análises reais sobre as áreas que mais crescem e onde estão as melhores oportunidades para 2026 e além.",
    },
    {
      icon: Users,
      title: "Networking Estratégico",
      description:
        "Ambiente para fazer conexões reais com recrutadores, líderes de tecnologia, profissionais e outras pessoas da área.",
    },
    {
      icon: Brain,
      title: "Desenvolvimento Profissional",
      description:
        "Talks e insights sobre soft skills, mentalidade de carreira e como acelerar seu crescimento profissional.",
    },
    {
      icon: Lightbulb,
      title: "Criatividade e Soluções",
      description:
        "Atividades para estimular a criação de ideias, projetos e soluções dentro do ambiente tecnológico.",
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
        <h2 className="text-4xl font-extrabold">O que você vai encontrar</h2>
        <p className="text-muted-foreground mt-4 text-lg">
          O Tech Start Summit foi projetado para acelerar sua visão sobre o mercado de tecnologia e impulsionar sua carreira.
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
