"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, User, Clock, X } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

/* ---------------- CONFIG ---------------- */

const typeColors: Record<string, string> = {
    Abertura: "border-blue-500 text-blue-500",
    "Palestra Principal": "border-purple-500 text-purple-500",
    "Painel de Discussão": "border-pink-500 text-pink-500",
    "Workshop Prático": "border-green-500 text-green-500",
    Pausa: "border-gray-500 text-gray-500",
};

/* ---------------- DATA ---------------- */

async function fetchProgramacao() {
    const res = await fetch("/api/programacao");
    return await res.json();
}

/* ---------------- COMPONENT ---------------- */

export default function ProgramTimeline() {
    const [items, setItems] = useState<any[]>([]);
    const [selected, setSelected] = useState<any | null>(null);

    useEffect(() => {
        fetchProgramacao().then(setItems);
    }, []);

    const grouped = items.reduce((acc, item) => {
        if (!item.dayKey || !item.time) return acc;

        if (!acc[item.dayKey]) acc[item.dayKey] = { slots: {} };
        if (!acc[item.dayKey].slots[item.time])
            acc[item.dayKey].slots[item.time] = [];

        acc[item.dayKey].slots[item.time].push(item);
        return acc;
    }, {} as Record<string, any>);

    const orderedDays = Object.keys(grouped).sort();

    return (
        <section className="py-24 px-4 md:px-8 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16">
                    Programação
                </h2>

                {orderedDays.map((dayKey, dayIndex) => (
                    <div key={dayKey} className="mb-24">
                        <h3 className="text-xl md:text-2xl font-semibold mb-10 text-purple-300">
                            {dayIndex === 0 ? "Primeiro dia" : "Segundo dia"}
                        </h3>

                        {Object.entries(grouped[dayKey].slots).map(
                            ([time, events]: any) => (
                                <div key={time} className="mb-16">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-lg font-bold">{time}</span>
                                        <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full border border-pink-500/30">
                                            {events.length} simultâneas
                                        </span>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        {events.map((item: any) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-80px" }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                whileHover={{ scale: 1.02 }}
                                                onClick={() => setSelected(item)}
                                                className="p-5 bg-zinc-900/80 rounded-2xl border border-white/10 cursor-pointer hover:bg-zinc-800/80 transition"
                                            >
                                                {/* TÍTULO */}
                                                <h4 className="text-lg font-semibold text-white leading-snug">
                                                    {item.nome}
                                                </h4>

                                                {/* DESCRIÇÃO */}
                                                {item.description && (
                                                    <p className="text-sm text-white/60 line-clamp-3">
                                                        {item.description}
                                                    </p>
                                                )}

                                                {/* DIVIDER */}
                                                <div className="h-px bg-white/5 my-1" />

                                                {/* META */}
                                                <div className="flex flex-col gap-2 text-xs text-white/60">

                                                    {/* SPEAKERS + TIPO */}
                                                    {(item.speakerNames?.length > 0 || item.tipoConteudo) && (
                                                        <div className="flex justify-between items-center gap-4">
                                                            <div className="flex items-center gap-1 truncate">
                                                                {item.speakerNames?.length > 0 && (
                                                                    <>
                                                                        <User className="w-3.5 h-3.5 opacity-70" />
                                                                        <span className="truncate">
                                                                            {item.speakerNames.join(", ")}
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </div>

                                                            {item.tipoConteudo && (
                                                                <span className="px-2 py-0.5 rounded-full border border-white/20 text-[10px] uppercase tracking-wide text-white/70">
                                                                    {item.tipoConteudo}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* ÁREA + PÚBLICO */}
                                                    {(item.area?.length > 0 || item.publico) && (
                                                        <div className="flex justify-between items-center gap-4">
                                                            {item.area?.length > 0 && (
                                                                <span className="truncate">
                                                                    {item.area.join(" · ")}
                                                                </span>
                                                            )}

                                                            {item.publico && (
                                                                <span className="text-white/50">
                                                                    {item.publico}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* TAGS + TRACK */}
                                                    {(item.tags?.length > 0 || item.track) && (
                                                        <div className="flex justify-between items-center gap-4">
                                                            {item.tags?.length > 0 && (
                                                                <span className="truncate text-white/40">
                                                                    {item.tags.map(tag => `#${tag}`).join(" ")}
                                                                </span>
                                                            )}

                                                            {item.track && (
                                                                <span className="text-white/50">
                                                                    📍 {item.track}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                            </motion.div>
                                        ))}


                                    </div>
                                </div>
                            )
                        )}
                    </div>
                ))}
            </div>

            {/* ================= MODAL ================= */}
            <AnimatePresence>
                {selected && (
                    <Dialog open onOpenChange={() => setSelected(null)}>
                        <DialogContent
                            className="
                max-w-xl
                h-[90vh]
                p-0
                bg-white
                text-black
                flex
                flex-col
                overflow-hidden
              "
                        >
                            {/* HEADER */}
                            <div className="p-6 border-b relative flex-shrink-0">
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-4 right-4 opacity-60 hover:opacity-100"
                                >
                                </button>

                                <h3 className="text-xl font-bold mb-2">
                                    {selected.nome}
                                </h3>

                                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                    {selected.speakerNames?.length > 0 && (
                                        <span className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {selected.speakerNames.join(", ")}
                                        </span>
                                    )}

                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {selected.time}
                                    </span>

                                    {selected.track && (
                                        <span className="px-2 py-0.5 rounded-full border text-xs">
                                            {selected.track}
                                        </span>
                                    )}

                                    <span
                                        className={`px-2 py-0.5 rounded-full border text-xs ${typeColors[selected.tipoConteudo]}`}
                                    >
                                        {selected.tipoConteudo}
                                    </span>
                                </div>
                            </div>

                            {/* BODY (SCROLL) */}
                            <div className="p-6 space-y-6 overflow-y-auto flex-1">
                                {selected.description && (
                                    <section>
                                        <h4 className="font-semibold mb-1">Descrição</h4>
                                        <p className="text-sm text-gray-700">
                                            {selected.description}
                                        </p>
                                    </section>
                                )}

                                {selected.bigDescription && (
                                    <section>
                                        <h4 className="font-semibold mb-1">
                                            Descrição Completa
                                        </h4>
                                        <p className="text-sm text-gray-700 whitespace-pre-line">
                                            {selected.bigDescription}
                                        </p>
                                    </section>
                                )}

                                {selected.topics && (
                                    <section>
                                        <h4 className="font-semibold mb-2">
                                            Tópicos Chave
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selected.topics
                                                .split(";")
                                                .map((t: string) => (
                                                    <span
                                                        key={t}
                                                        className="text-xs px-2 py-1 rounded-full border bg-gray-100"
                                                    >
                                                        {t.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    </section>
                                )}
                            </div>

                            {/* FOOTER */}
                            <div className="p-6 border-t flex-shrink-0">
                                <button
                                    className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold"
                                >
                                    Vou participar
                                </button>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </section>
    );
}
