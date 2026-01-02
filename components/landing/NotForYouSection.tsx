"use client"

import React from "react"
import { motion, cubicBezier } from "framer-motion"
import { XCircle, CheckCircle } from "lucide-react"

const easing = cubicBezier(0.22, 0.8, 0.12, 1)

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const cardRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
}


export function NotForYouSection() {
  return (
    <section className="py-24 px-6 container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold">
          Esse evento é para você?
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          A gente prefere ser claro desde o começo.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div
          variants={cardLeft}
          whileHover={{ y: -6 }}
          className="bg-card border border-border rounded-xl p-8 transition-shadow hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <XCircle className="text-destructive" />
            </motion.span>
            Talvez não seja pra você se…
          </h3>

          <motion.ul
            variants={containerVariants}
            className="space-y-4 text-muted-foreground"
          >
            {[
              "Você já é sênior e busca conteúdo técnico avançado",
              "Você espera palestras profundas com código complexo",
              "Você já tem anos de mercado e networking consolidado",
            ].map((item, idx) => (
              <motion.li key={idx} variants={listItem}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={cardRight}
          whileHover={{ y: -6 }}
          className="bg-primary/5 border border-primary/30 rounded-xl p-8 transition-shadow hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-primary">
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <CheckCircle />
            </motion.span>
            Esse evento é pra você se…
          </h3>

          <motion.ul
            variants={containerVariants}
            className="space-y-4"
          >
            {[
              "Você está começando na área de tecnologia",
              "Quer entender as áreas antes de escolher um caminho",
              "Quer aprender a fazer networking sem medo",
              "Quer sair do evento com direção e próximos passos",
            ].map((item, idx) => (
              <motion.li key={idx} variants={listItem}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
