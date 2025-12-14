"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Calendar, Coffee, Mic, Users, Flag, Pause } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const iconMap: Record<string, any> = {
    opening: Calendar,              
    "Abertura": Flag,               
    "Palestra Principal": Mic,      
    panel: Users,
    "Painel de Discussão": Users,
    "Workshop Prático": Users,
    break: Coffee,
    "Pausa": Pause,
};

const typeColors: Record<string, string> = {
    "Abertura": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Palestra Principal": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "Painel de Discussão": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Workshop Prático": "bg-green-500/20 text-green-300 border-green-500/30",
    "Pausa": "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

async function fetchProgramacao() {
    const res = await fetch("/api/programacao");
    return await res.json();
}

export default function ProgramTimeline() {
    const [items, setItems] = useState<any[]>([]);
    const [selected, setSelected] = useState<any | null>(null);

    useEffect(() => {
        fetchProgramacao().then(setItems);
    }, []);

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

                <div className="relative border-l border-white/20 ml-6">
                    {items.map((item, index) => {
                        const Icon = iconMap[item.tipoConteudo] || Mic;

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
                                            {new Date(item.date).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>

                                        {item.track && (
                                            <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/20">
                                                {item.track}
                                            </span>
                                        )}
                                    </div>

                                    <span
                                        className={`text-xs px-2 py-1 rounded-full border ${typeColors[item.tipoConteudo]}`}
                                    >
                                        {item.tipoConteudo}
                                    </span>
                                    <h4 className="text-xl font-bold mt-2">{item.nome}</h4>

                                    {item.speakers?.length > 0 && (
                                        <p className="text-sm text-white/60 mt-1">
                                            {item.speakers.join(", ")}
                                        </p>
                                    )}

                                    {item.description && (
                                        <p className="text-white/70 mt-3 leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}

                                    {/* TAGS + PÚBLICO + ÁREA */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.tags?.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                                            >
                                                #{tag}
                                            </span>
                                        ))}

                                        {(Array.isArray(item.publico) ? item.publico : item.publico ? [item.publico] : []).map(
                                            (p: string) => (
                                                <span
                                                    key={p}
                                                    className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30"
                                                >
                                                    👥 {p}
                                                </span>
                                            )
                                        )}

                                        {item.area?.map((a: string) => (
                                            <span
                                                key={a}
                                                className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30"
                                            >
                                                🎯 {a}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {selected && (
                    <Dialog open={true} onOpenChange={() => setSelected(null)}>
                        <DialogContent className="max-w-lg bg-[#1a1a1a] text-white border border-white/10">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">
                                    {selected.nome}
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

                                {/* TAGS + PÚBLICO + ÁREA + TIPO */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {selected.tags?.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                                        >
                                            #{tag}
                                        </span>
                                    ))}

                                    {(Array.isArray(selected.publico) ? selected.publico : selected.publico ? [selected.publico] : []).map(
                                        (p: string) => (
                                            <span
                                                key={p}
                                                className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30"
                                            >
                                                👥 {p}
                                            </span>
                                        )
                                    )}

                                    {selected.area?.map((a: string) => (
                                        <span
                                            key={a}
                                            className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30"
                                        >
                                            🎯 {a}
                                        </span>
                                    ))}

                                    <span
                                        className={`text-xs px-2 py-1 rounded-full border ${typeColors[selected.tipoConteudo]}`}
                                    >
                                        {selected.tipoConteudo}
                                    </span>
                                </div>

                                <p className="text-xs mt-4 opacity-70">
                                    🕒{" "}
                                    {new Date(selected.date).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>

                                {selected.track && (
                                    <p className="text-xs mt-1 opacity-70">
                                        📍 Local: {selected.track}
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
