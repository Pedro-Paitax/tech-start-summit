"use client"

import { useMemo, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { MapPin } from "lucide-react"
import palestras from "@/data/palestras.json"

const colorClasses = {
  purple: "bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-300 hover:to-purple-400",
  blue: "bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400",
  green: "bg-gradient-to-br from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400",
  orange: "bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-300 hover:to-orange-400",
  red: "bg-gradient-to-br from-red-400 to-red-500 hover:from-red-300 hover:to-red-400",
  gray: "bg-gradient-to-br from-gray-500 to-gray-600 hover:from-gray-400 hover:to-gray-500",
}

function SessionCard({ session, onSelect }) {
  return (
    <div
      onClick={() => onSelect(session)}
      className={`${colorClasses[session.color]} rounded-xl p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02] text-white group relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 space-y-2">

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
            {session.type}
          </span>
          <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">Clique</span>
        </div>

        <h3 className="font-bold text-base leading-tight line-clamp-2 group-hover:line-clamp-none transition-all">
          {session.title}
        </h3>

        {session.speaker && (
          <p className="text-sm font-medium flex items-center gap-1 opacity-90">
            <span className="text-xs">👤</span>
            {session.speaker}
          </p>
        )}

        <div className="flex items-center gap-1.5 text-xs opacity-80 group-hover:opacity-100 transition-opacity">
          <MapPin className="w-3 h-3" />
          <span>{session.location}</span>
        </div>
      </div>
    </div>
  )
}

function TimeSlot({ slot, onSelect }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-4 sm:gap-6">
      <div className="flex flex-col items-end pt-4">
        <div className="sticky top-24">
          <span className="text-2xl font-bold text-foreground font-mono">{slot.time}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-8 border-b border-border/30 last:border-b-0">
        {slot.sessions.map((session, idx) => (
          <SessionCard key={idx} session={session} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

function groupByTime(data) {
  const map = {}
  data.forEach((item) => {
    if (!map[item.time]) map[item.time] = []
    map[item.time].push(item)
  })

  return Object.entries(map).map(([time, sessions]) => ({ time, sessions }))
}

export function ProgramSection() {
  const [selected, setSelected] = useState(null)

  const { day1, day2 } = useMemo(() => {
    const day1 = palestras.filter((p) => p.day === 1)
    const day2 = palestras.filter((p) => p.day === 2)

    return {
      day1: groupByTime(day1),
      day2: groupByTime(day2),
    }
  }, [])

  return (
    <section id="programacao" className="py-24 sm:py-32 bg-[#2D2D2D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-[#B24068] uppercase tracking-wider">Programação</span>
              <div className="h-px w-full bg-[#B24068]/30 mt-2"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}>
              Uma Agenda Focada em <span className="text-[#B24068]">Ação</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Dois dias intensivos com palestras, workshops e networking para impulsionar sua carreira tech
            </p>
          </div>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-black/30 p-1.5 h-auto">
              <TabsTrigger value="day1" className="text-base font-bold py-3 data-[state=active]:bg-[#B24068] data-[state=active]:text-white">
                30 de Maio
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-base font-bold py-3 data-[state=active]:bg-[#B24068] data-[state=active]:text-white">
                31 de Maio
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-8">
              {day1.map((slot, index) => (
                <TimeSlot key={index} slot={slot} onSelect={setSelected} />
              ))}
            </TabsContent>

            <TabsContent value="day2" className="mt-8">
              {day2.map((slot, index) => (
                <TimeSlot key={index} slot={slot} onSelect={setSelected} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* MODAL */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg bg-[#2d2d2d] text-white">
          <DialogHeader>
            <DialogTitle>{selected?.title}</DialogTitle>

            {selected?.speaker && (
              <p className="text-sm mt-1 opacity-80">👤 {selected.speaker}</p>
            )}

            <DialogDescription className="mt-4">
              {selected?.bio}
            </DialogDescription>

            <p className="text-xs mt-4 flex items-center gap-1 opacity-70">
              <MapPin className="w-3 h-3" /> {selected?.location}
            </p>

            <p className="text-xs mt-1 opacity-70">
              Horário: {selected?.time}
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}
