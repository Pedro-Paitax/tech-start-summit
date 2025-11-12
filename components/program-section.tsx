"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from "lucide-react"

const day1Schedule = [
  {
    time: "09:00",
    sessions: [
      {
        title: "Abertura e Welcome Coffee",
        speaker: "Organização Tech Start Summit",
        location: "Auditório Principal",
        type: "Opening",
        color: "purple",
      },
    ],
  },
  {
    time: "09:30",
    sessions: [
      {
        title: "O Estado da Tecnologia no Brasil",
        speaker: "Maria Silva",
        location: "Auditório Principal",
        type: "Keynote",
        color: "purple",
      },
      {
        title: "Choque de Realidade: Big Data na Prática",
        speaker: "Cristiano Costa",
        location: "Sala Tech A",
        type: "Palestra",
        color: "blue",
      },
    ],
  },
  {
    time: "10:30",
    sessions: [
      {
        title: "Do Campus ao Cloud: Carreira em DevOps",
        speaker: "Ana Rodrigues",
        location: "Sala Tech A",
        type: "Palestra",
        color: "orange",
      },
      {
        title: "IA Generativa: Além do Hype",
        speaker: "Dr. Roberto Santos",
        location: "Auditório Principal",
        type: "Palestra",
        color: "green",
      },
    ],
  },
  {
    time: "11:30",
    sessions: [
      {
        title: "Coffee Break",
        speaker: "",
        location: "Área de Networking",
        type: "Break",
        color: "gray",
      },
    ],
  },
  {
    time: "12:00",
    sessions: [
      {
        title: "Almoço e Networking",
        speaker: "",
        location: "Área de Networking",
        type: "Break",
        color: "gray",
      },
    ],
  },
  {
    time: "13:30",
    sessions: [
      {
        title: "Segurança Cibernética: Protegendo o Futuro",
        speaker: "Paula Mendes",
        location: "Sala Tech B",
        type: "Palestra",
        color: "red",
      },
      {
        title: "Startups: Do Zero ao Unicórnio",
        speaker: "João Martins",
        location: "Auditório Principal",
        type: "Palestra",
        color: "purple",
      },
    ],
  },
  {
    time: "14:30",
    sessions: [
      {
        title: "Cloud Computing e Escalabilidade",
        speaker: "Fernanda Lima",
        location: "Sala Tech A",
        type: "Palestra",
        color: "blue",
      },
      {
        title: "Mobile First: Desenvolvimento para o Futuro",
        speaker: "Carlos Pereira",
        location: "Sala Tech B",
        type: "Workshop",
        color: "orange",
      },
    ],
  },
  {
    time: "15:30",
    sessions: [
      {
        title: "Coffee Break e Networking",
        speaker: "",
        location: "Área de Networking",
        type: "Break",
        color: "gray",
      },
    ],
  },
  {
    time: "16:00",
    sessions: [
      {
        title: "Painel: Líderes Tech do Paraná",
        speaker: "Painel com múltiplos convidados",
        location: "Auditório Principal",
        type: "Panel",
        color: "purple",
      },
    ],
  },
]

const day2Schedule = [
  {
    time: "09:00",
    sessions: [
      {
        title: "Recepção e Coffee",
        speaker: "",
        location: "Área de Networking",
        type: "Opening",
        color: "gray",
      },
    ],
  },
  {
    time: "09:30",
    sessions: [
      {
        title: "Blockchain: Revolução Além das Criptomoedas",
        speaker: "Dra. Beatriz Souza",
        location: "Auditório Principal",
        type: "Keynote",
        color: "purple",
      },
      {
        title: "UX/UI: Design que Converte",
        speaker: "Marina Alves",
        location: "Sala Tech A",
        type: "Palestra",
        color: "green",
      },
    ],
  },
  {
    time: "10:30",
    sessions: [
      {
        title: "Workshop: APIs RESTful com Node.js",
        speaker: "Pedro Oliveira",
        location: "Sala Workshop",
        type: "Workshop",
        color: "orange",
      },
      {
        title: "Machine Learning na Prática",
        speaker: "Juliana Ferreira",
        location: "Sala Tech B",
        type: "Palestra",
        color: "blue",
      },
    ],
  },
  {
    time: "11:30",
    sessions: [
      {
        title: "Coffee Break",
        speaker: "",
        location: "Área de Networking",
        type: "Break",
        color: "gray",
      },
    ],
  },
  {
    time: "12:00",
    sessions: [
      {
        title: "Almoço e Networking",
        speaker: "",
        location: "Área de Networking",
        type: "Break",
        color: "gray",
      },
    ],
  },
  {
    time: "13:30",
    sessions: [
      {
        title: "Kubernetes e Microserviços",
        speaker: "Rafael Santos",
        location: "Auditório Principal",
        type: "Palestra",
        color: "purple",
      },
      {
        title: "Product Management para Devs",
        speaker: "Camila Torres",
        location: "Sala Tech A",
        type: "Palestra",
        color: "green",
      },
    ],
  },
  {
    time: "14:30",
    sessions: [
      {
        title: "GraphQL: O Futuro das APIs",
        speaker: "Lucas Mendes",
        location: "Sala Tech B",
        type: "Palestra",
        color: "blue",
      },
      {
        title: "Teste Automatizado: Qualidade em Escala",
        speaker: "Mariana Costa",
        location: "Sala Workshop",
        type: "Workshop",
        color: "orange",
      },
    ],
  },
  {
    time: "15:30",
    sessions: [
      {
        title: "Coffee Break e Networking",
        speaker: "",
        location: "Área de Networking",
        type: "Break",
        color: "gray",
      },
    ],
  },
  {
    time: "16:00",
    sessions: [
      {
        title: "Workshop: Preparação para Entrevistas Tech",
        speaker: "Time de Recrutadores",
        location: "Sala Workshop",
        type: "Workshop",
        color: "orange",
      },
    ],
  },
  {
    time: "17:00",
    sessions: [
      {
        title: "Encerramento e Sorteios",
        speaker: "Organização Tech Start Summit",
        location: "Auditório Principal",
        type: "Closing",
        color: "purple",
      },
    ],
  },
]

const colorClasses = {
  purple: "bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600",
  blue: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
  green: "bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600",
  orange: "bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600",
  red: "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
  gray: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700",
}

function SessionCard({
  session,
}: {
  session: {
    title: string
    speaker: string
    location: string
    type: string
    color: keyof typeof colorClasses
  }
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      onClick={() => session.speaker && setIsExpanded(!isExpanded)}
      className={`${colorClasses[session.color]} rounded-xl p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02] text-white group relative overflow-hidden`}
    >
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 space-y-2">
        {/* Session type badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{session.type}</span>
          {session.speaker && (
            <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
              {isExpanded ? "▼" : "▶"}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base leading-tight line-clamp-2 group-hover:line-clamp-none transition-all">
          {session.title}
        </h3>

        {/* Speaker info */}
        {session.speaker && (
          <div
            className={`space-y-1 transition-all duration-300 ${isExpanded ? "opacity-100 max-h-40" : "opacity-70 max-h-20"}`}
          >
            <p className="text-sm font-medium flex items-center gap-1">
              <span className="text-xs">👤</span>
              {session.speaker}
            </p>
          </div>
        )}

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs opacity-80 group-hover:opacity-100 transition-opacity">
          <MapPin className="w-3 h-3" />
          <span>{session.location}</span>
        </div>
      </div>
    </div>
  )
}

function TimeSlot({ slot }: { slot: { time: string; sessions: any[] } }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-4 sm:gap-6">
      {/* Time column */}
      <div className="flex flex-col items-end pt-4">
        <div className="sticky top-24">
          <span className="text-2xl font-bold text-foreground font-mono">{slot.time}</span>
        </div>
      </div>

      {/* Sessions grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-8 border-b border-border/30 last:border-b-0">
        {slot.sessions.map((session, idx) => (
          <SessionCard key={idx} session={session} />
        ))}
      </div>
    </div>
  )
}

export function ProgramSection() {
  return (
    <section id="programacao" className="py-24 sm:py-32 bg-[#2D2D2D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-[#B24068] uppercase tracking-wider">Programação</span>
              <div className="h-px w-full bg-[#B24068]/30 mt-2"></div>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Uma Agenda Focada em <span className="text-[#B24068]">Ação</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Dois dias intensivos com palestras, workshops e networking para impulsionar sua carreira tech
            </p>
          </div>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-black/30 p-1.5 h-auto">
              <TabsTrigger
                value="day1"
                className="text-base font-bold py-3 data-[state=active]:bg-[#B24068] data-[state=active]:text-white"
              >
                15 de Maio
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                className="text-base font-bold py-3 data-[state=active]:bg-[#B24068] data-[state=active]:text-white"
              >
                16 de Maio
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-8">
              <div className="space-y-0">
                {day1Schedule.map((slot, index) => (
                  <TimeSlot key={index} slot={slot} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-8">
              <div className="space-y-0">
                {day2Schedule.map((slot, index) => (
                  <TimeSlot key={index} slot={slot} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
