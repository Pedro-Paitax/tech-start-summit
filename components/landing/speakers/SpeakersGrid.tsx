"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
}

type Speaker = {
  nome: string;
  foto?: string;
  lkdn?: string;
  profissão: string;
  entidade: string;
  bio: string;
};

type SpeakersGridProps = {
  palestrantes: Speaker[];
};

export function SpeakersGrid({ palestrantes }: SpeakersGridProps) {
  return (
    <section id="palestrantes" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Palestrantes
            </span>
            <div className="h-px w-full bg-primary/30 mt-2"></div>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Os Líderes que Vão <span className="text-primary">Guiar</span> a Jornada
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {palestrantes.map((p, i) => (
            <motion.div
              key={p.nome}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-lg overflow-hidden
                          hover:border-primary/50 transition-all duration-300"
            >
              
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={p.foto || "/placeholder.svg"}
                  alt={p.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                {p.lkdn && (
                  <a
                    href={p.lkdn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100
                             transition-opacity duration-300 flex items-center justify-center
                             pointer-events-none group-hover:pointer-events-auto"
                  >
                    <span className="flex items-center gap-2 text-primary-foreground font-semibold">
                      <Linkedin size={24} />
                      Ver Perfil
                    </span>
                  </a>
                )}
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {p.nome}
                </h3>
                <p className="text-sm font-semibold text-primary">{p.profissão}</p>
                <p className="text-sm text-muted-foreground">{p.entidade}</p>
                <p className="text-sm text-muted-foreground pt-2 leading-relaxed">{p.bio}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
