"use client";

import { motion } from "framer-motion";
import { EyeOff, ScanSearch, ArrowLeft, ArrowRight, Move, MessageSquare, Settings2, ArrowUpDown } from "lucide-react";

const controlsData = [
    {
        shortcut: "Ctrl + \\",
        description: "Hide the screen",
        icon: EyeOff
    },
    {
        shortcut: "Ctrl + Enter",
        description: "Screen Analyze",
        icon: ScanSearch
    },
    {
        shortcut: "Ctrl + [",
        description: "Previous response/page",
        icon: ArrowLeft
    },
    {
        shortcut: "Ctrl + ]",
        description: "Next response/page",
        icon: ArrowRight
    },
    {
        shortcut: "Ctrl + ↑ ↓ ← →",
        description: "Move the Hiderview window",
        icon: Move
    },
    {
        shortcut: "Ctrl + Shift + ↑ ↓",
        description: "Scroll Response Up/Down",
        icon: ArrowUpDown
    }
];

export default function Controls() {
    return (
        <section id="controls" className="pt-32 md:pt-12 pb-24 relative bg-background">
            <div className="max-w-4xl mx-auto relative px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 flex flex-col items-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading tracking-tight"
                    >
                        Master the <span className="text-primary italic">Controls</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-xl text-center"
                    >
                        Operate using keyboard shortcuts, to seamlessly avoid detection during an interview.
                    </motion.p>
                </div>

                {/* Controls Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
                    {controlsData.map((control, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * (idx + 1) }}
                            className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
                        >
                            <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-border flex items-center justify-center mb-4 shadow-sm">
                                <control.icon className="w-5 h-5 text-black" />
                            </div>

                            <div className="w-full flex flex-col items-center mt-auto">
                                <div className="w-full bg-background border border-border rounded py-1.5 px-3 mb-2 flex items-center justify-center font-mono text-[12px] tracking-wide group-hover:border-primary/30 transition-colors">
                                    {control.shortcut}
                                </div>
                                <p className="text-[13px] font-medium text-foreground">
                                    {control.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Techy Callout (Desktop only) */}
                <motion.div
                    initial={{ opacity: 0, x: -50, rotate: -4 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                    className="hidden xl:flex absolute top-[80%] -left-33 lg:-left-63 2xl:-left-90 w-[280px] bg-card/80 backdrop-blur border border-primary/50 shadow-[-6px_6px_0px_0px_rgba(234,88,12,0.2)] rounded-xl p-4 flex-col items-start gap-1.5 z-20 group hover:-rotate-2 hover:scale-105 transition-all duration-300 pointer-events-none"
                    style={{ transformOrigin: "bottom right" }}
                >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center shadow-sm">
                        <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest px-2 py-0.5 bg-primary/10 rounded-sm mb-1 self-start">
                        💡 Quick Tip
                    </div>
                    <h4 className="text-sm font-bold text-foreground font-heading mt-1 text-left w-full">
                        Manual Questions
                    </h4>
                    <div className="text-xs text-muted-foreground leading-relaxed text-left w-full ">
                        <p>Don't stress the shortcuts!</p>
                        <p>Keyboard shortcuts prevent mouse click detections.</p>
                        <p>You can still work with mouse clicks.</p>

                    </div>

                    {/* decorative funky elements */}
                    <div className="absolute top-3 right-3 flex gap-1 opacity-60">
                        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
                        <span className="w-2 h-2 rounded-full bg-primary/20"></span>
                        <span className="w-2 h-2 rounded-full bg-primary/20"></span>
                    </div>
                </motion.div>

                {/* Customizable Controls Callout (Desktop only) */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 4 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                    className="hidden xl:flex absolute top-[15%] -right-48 lg:-right-64 2xl:-right-96 w-[280px] bg-card/80 backdrop-blur border border-primary/50 shadow-[6px_6px_0px_0px_rgba(234,88,12,0.2)] rounded-xl p-4 flex-col items-start gap-1.5 z-20 group hover:rotate-2 hover:scale-105 transition-all duration-300 pointer-events-none"
                    style={{ transformOrigin: "bottom left" }}
                >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center shadow-sm">
                        <Settings2 className="w-5 h-5 text-primary animate-spin-slow" />
                    </div>
                    <div className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest px-2 py-0.5 bg-primary/10 rounded-sm mb-1 self-start">
                        ⚙️ Full Control
                    </div>
                    <h4 className="text-sm font-bold text-foreground font-heading mt-1 text-left w-full">
                        Fully Customizable
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed text-left w-full">
                        Make it yours! Every single shortcut can be re-mapped to fit your specific workflow perfectly.
                    </p>

                    {/* decorative funky elements */}
                    <div className="absolute top-3 right-3 flex gap-1 opacity-60">
                        <span className="w-2 h-2 rounded-full bg-primary/20"></span>
                        <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "200ms" }}></span>
                        <span className="w-2 h-2 rounded-full bg-primary/20"></span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
