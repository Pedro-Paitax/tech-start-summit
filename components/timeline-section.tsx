"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import day1 from "@/data/program/day1.json";
import day2 from "@/data/program/day2.json";

import { Calendar, Coffee, Mic, Users } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

import type { ProgramDay, ProgramTalk } from "@/types/program";

const iconMap: Record<string, any> = {
    opening: Calendar,
    keynote: Mic,
    panel: Users,
    workshop: Users,
    break: Coffee,
};

const days: ProgramDay[] = [day1, day2];

function timeToNumber(t: string) {
    return parseInt(t.replace(":", ""), 10);
}

export default function ProgramTimeline() {
    const [selected, setSelected] = useState<ProgramTalk | null>(null);

    return (
        <section id="programacao" className="py-24 px-4 md:px-8 bg-black text-white">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-10"
                >
                    Programação
                </motion.h2>

                {days.map((day, index) => (
                    <div key={index} className="mb-20">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-300">
                            Dia {index + 1}
                        </h3>

                        <div className="relative border-l border-white/20 ml-6">
                            {day.items
                                .sort((a, b) => timeToNumber(a.time) - timeToNumber(b.time))
                                .map((item, index) => {
                                    const Icon = iconMap[item.type] || Mic;

                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.08,
                                            }}
                                            viewport={{ once: true }}
                                            className="mb-12 ml-6 relative cursor-pointer"
                                            onClick={() => setSelected(item)}
                                        >
                                            <span className="absolute -left-[38px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400 backdrop-blur-sm">
                                                <Icon className="w-4 h-4 text-purple-300" />
                                            </span>

                                            <div className="p-5 bg-zinc-900/80 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:bg-zinc-800/80 transition">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-purple-400 font-semibold">
                                                        {item.time}
                                                    </span>

                                                    {item.track && (
                                                        <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/20">
                                                            {item.track}
                                                        </span>
                                                    )}
                                                </div>

                                                <h4 className="text-xl font-bold">{item.title}</h4>

                                                {item.speakers && (
                                                    <p className="text-sm text-white/60 mt-1">
                                                        {item.speakers.join(", ")}
                                                    </p>
                                                )}

                                                {item.description && (
                                                    <p className="text-white/70 mt-3 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selected && (
                    <Dialog open={true} onOpenChange={() => setSelected(null)}>
                        <DialogContent className="max-w-lg bg-[#1a1a1a] text-white border border-white/10">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">
                                    {selected.title}
                                </DialogTitle>

                                {selected.speakers && (
                                    <p className="text-sm mt-2 opacity-80">
                                        👤 {selected.speakers.join(", ")}
                                    </p>
                                )}

                                {selected.bigDescription && (
                                    <DialogDescription className="mt-4 text-white/90 whitespace-pre-line">
                                        {selected.bigDescription}
                                    </DialogDescription>
                                )}

                                {selected.description && !selected.bigDescription && (
                                    <DialogDescription className="mt-4 text-white/90">
                                        {selected.description}
                                    </DialogDescription>
                                )}

                                <p className="text-xs mt-4 opacity-70">🕒 {selected.time}</p>

                                {selected.track && (
                                    <p className="text-xs mt-1 opacity-70">
                                        🎯 Local: {selected.track}
                                    </p>
                                )}
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </section>
    );
}
