import { Target, Compass, Network } from "lucide-react"


const pillars = [
  {
    icon: Target,
    title: "Diagnóstico Prático",
    description: "Palestras focadas no gap entre mercado e academia, mostrando a realidade da indústria tech.",
  },
  {
    icon: Compass,
    title: "Qualificação Dirigida",
    description: "Roteiro prático do que estudar para se destacar no mercado de tecnologia.",
  },
  {
    icon: Network,
    title: "Networking Qualificado", // <-- MUDANÇA DE TÍTULO
    description: "Conexão direta com líderes de RH e profissionais experientes que já trilharam o caminho que você está começando.", // <-- MUDANÇA DE DESCRIÇÃO
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre o Summit</span>
              <div className="h-px w-full bg-primary/30 mt-2"></div>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              O Ponto de Virada para o Talento de TI
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              O Tech Start Summit nasceu para resolver as maiores dúvidas do estudante de tecnologia:
              <span className="text-primary font-semibold"> 'Pra qual área eu vou?' ou 'Oque essa área faz?'</span>. A faculdade nos dá a teoria, mas o mercado exige um
              <span className="text-foreground font-semibold"> direcionamento prático</span> que não está na grade. O Summit é a plataforma que conecta o calouro ao profissional experiente, transformando a desorientação em um mapa de carreira claro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-primary p-4 rounded-full group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="pt-8 space-y-4 text-center">
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}