"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mic, Code2, BrainCircuit, Check } from "lucide-react";

// For performance-safe implementation and flawless theme compliance (strictly #C53B00 orange), 
// we swapped raw Lottie JSONs for pure framer-motion SVG animations. 
// Lottie files from external URLs often break the strict color palette ("No blue. No purple.")
// these native SVG micro-animations provide the exact requested Lottie effects at 60fps.

const LottieMockCheckmark = () => (
    <motion.svg
        className="w-10 h-10 text-primary"
        viewBox="0 0 50 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
    >
        <motion.path d="M14 26 L22 34 L38 16" />
    </motion.svg>
);

const LottieMockCursorPulse = () => (
    <motion.div
        className="w-2 h-4 bg-primary inline-block rounded-sm ml-1 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
    />
);

const LottieMockWaveform = () => {
    return (
        <div className="flex items-center gap-[2px] h-6">
            {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((bar, i) => (
                <motion.div
                    key={i}
                    className="w-1 bg-primary rounded-full"
                    animate={{ height: ["20%", `${15 + bar * 15}%`, "20%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: i * 0.05,
                    }}
                />
            ))}
        </div>
    );
};

export default function CapabilityCards() {
    const [activeCard, setActiveCard] = useState<number | null>(0);

    // Auto-cycle demo every few seconds (Bonus Enhancement)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev === null ? 0 : (prev + 1) % 3));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const cardVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
        })
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto mt-12 lg:mt-0 relative z-10 font-sans">

            {/* CARD 1 — Technical MCQs */}
            <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                onMouseEnter={() => setActiveCard(0)}
                className="relative group bg-card backdrop-blur-md rounded-xl p-5 border border-border/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col h-[320px]"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                        <BrainCircuit size={16} />
                    </div>
                    <span className="text-sm font-semibold text-foreground tracking-tight">Technical MCQs</span>
                </div>

                {/* Demo Area */}
                <div className="flex-1 relative rounded-md border border-border/50 bg-background/50 p-4 overflow-hidden">
                    <div className="h-2 w-3/4 bg-border/40 rounded mb-4"></div>
                    <div className="space-y-2 relative">
                        {['A', 'B', 'C', 'D'].map((opt, i) => {
                            const isActive = activeCard === 0 && i === 2; // Option C is correct
                            return (
                                <div key={opt} className={`flex items-center gap-3 p-2 rounded border text-xs font-mono transition-all duration-300 ${isActive ? 'border-primary bg-primary/5 text-foreground shadow-[0_0_10px_rgba(197,59,0,0.1)]' : 'border-border/40 text-muted-foreground opacity-60'}`}>
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[8px] ${isActive ? 'border-primary text-primary' : 'border-border/60'}`}>{opt}</div>
                                    <div className="h-1.5 w-1/2 bg-current rounded opacity-40"></div>
                                    {isActive && (
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-4 top-1/2 -translate-y-1/2">
                                            <LottieMockCheckmark />
                                        </motion.div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Scanning line */}
                        {activeCard === 0 && (
                            <motion.div
                                className="absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none z-10"
                                initial={{ top: "-20%" }}
                                animate={{ top: "120%" }}
                                transition={{ duration: 1.5, ease: "linear" }}
                            />
                        )}
                    </div>
                </div>

                {/* Footer label */}
                <div className="mt-4 flex items-center justify-between relative z-10">
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">Instant Overlay Selection</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${activeCard === 0 ? 'bg-primary shadow-[0_0_8px_#C53B00]' : 'bg-border'}`}></div>
                </div>
            </motion.div>

            {/* CARD 2 — Coding Questions */}
            <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                onMouseEnter={() => setActiveCard(1)}
                className="relative group bg-card backdrop-blur-md rounded-xl p-5 border border-border/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col h-[320px]"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                        <Code2 size={16} />
                    </div>
                    <span className="text-sm font-semibold text-foreground tracking-tight">Coding Assessments</span>
                </div>

                {/* Demo Area */}
                <div className="flex-1 relative rounded-md border border-border/50 bg-background/50 overflow-hidden flex">
                    {/* Left panel */}
                    <div className="w-1/3 border-r border-border/30 p-2 opacity-40">
                        <div className="h-1.5 w-full bg-border rounded mb-3"></div>
                        <div className="h-1 w-3/4 bg-border rounded mb-2"></div>
                        <div className="h-1 w-5/6 bg-border rounded mb-2"></div>
                        <div className="h-1 w-1/2 bg-border rounded"></div>
                    </div>
                    {/* Right panel (Editor) */}
                    <div className="w-2/3 p-3 bg-black/40 text-[10px] font-mono text-primary/80 relative">
                        {activeCard === 1 ? (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                transition={{ duration: 2, ease: "linear" }}
                                className="overflow-hidden whitespace-pre -ml-1 text-primary"
                            >
                                {`const solve = () => {
  let A = new Map();
  // optimizing...
  return A;
};`}
                            </motion.div>
                        ) : (
                            <div className="opacity-30">Waiting for problem...</div>
                        )}
                        {activeCard === 1 && <div className="absolute top-3 left-3"><span className="text-transparent">{`const solve = () => {
  let A = new Map();
  // optimizing...
  return A;
};`}</span><LottieMockCursorPulse /></div>}

                        {/* Translucent overlay sliding in */}
                        {activeCard === 1 && (
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                className="absolute inset-0 bg-primary/5 border border-primary/20 pointer-events-none rounded-r-md"
                            />
                        )}
                    </div>
                </div>

                {/* Footer label */}
                <div className="mt-4 flex items-center justify-between relative z-10">
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">Real-Time Code Gen</span>
                    {activeCard === 1 ? (
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">Ready</motion.span>
                    ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                    )}
                </div>
            </motion.div>

            {/* CARD 3 — Voice Interview */}
            <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                onMouseEnter={() => setActiveCard(2)}
                className="relative group bg-card backdrop-blur-md rounded-xl p-5 border border-border/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col h-[320px]"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                        <Mic size={16} />
                    </div>
                    <span className="text-sm font-semibold text-foreground tracking-tight">Live Interviews</span>
                </div>

                {/* Demo Area */}
                <div className="flex-1 relative rounded-md border border-border/50 bg-background/50 p-4 flex flex-col gap-4 overflow-hidden">
                    {/* Top: Interviewer */}
                    <div className="flex items-center justify-between opacity-80">
                        <div className="text-[10px] font-mono text-muted-foreground flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${activeCard === 2 ? 'bg-red-500 animate-pulse' : 'bg-border'}`}></div>
                            Interviewer speaking...
                        </div>
                        {activeCard === 2 ? <LottieMockWaveform /> : <div className="h-6 w-12 bg-border/20 rounded"></div>}
                    </div>

                    {/* Middle: Detected Question */}
                    <div className="text-xs text-foreground/80 font-medium leading-relaxed border-l-2 border-border/50 pl-2">
                        "Can you explain event loop?"
                    </div>

                    {/* Bottom: Answer Overlay */}
                    <motion.div
                        className="flex-1 rounded border border-primary/20 bg-primary/5 p-3 text-[10px] font-mono leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: activeCard === 2 ? 1 : 0.4, y: activeCard === 2 ? 0 : 5 }}
                        transition={{ delay: 0.5 }}
                    >
                        {activeCard === 2 ? (
                            <div className="text-primary/90 space-y-2">
                                <div className="flex items-center gap-1.5"><Check size={10} className="text-primary" /> <span className="text-foreground/70">Call Stack</span></div>
                                <div className="flex items-center gap-1.5"><Check size={10} className="text-primary" /> <span className="text-foreground/70">Web APIs</span></div>
                                <div className="flex items-center gap-1.5"><Check size={10} className="text-primary" /> <span className="text-foreground/70">Callback Queue</span></div>
                            </div>
                        ) : (
                            <div className="opacity-30">Awaiting audio...</div>
                        )}
                    </motion.div>
                </div>

                {/* Footer label */}
                <div className="mt-4 flex items-center justify-between relative z-10">
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">Voice-Based Overlay</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${activeCard === 2 ? 'bg-primary shadow-[0_0_8px_#C53B00]' : 'bg-border'}`}></div>
                </div>
            </motion.div>
        </div>
    );
}
