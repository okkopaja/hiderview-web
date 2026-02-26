"use client";

import { motion } from "framer-motion";
import { Video, Laptop2, PlaySquare, Users, Gift } from "lucide-react";
import { openBlankPopup } from "@/components/landing/BlankPopup";

const steps = [
    {
        number: "1",
        title: "Create a Meeting",
        description: "Set up a meeting link using Zoom, Google Meet, or Microsoft Teams.",
        icon: Video
    },
    {
        number: "2",
        title: "Use Two Devices",
        description: "One laptop for the interviewer, another for the candidate.",
        icon: Laptop2
    },
    {
        number: "3",
        title: "Run the App",
        description: "Open Hiderview on the candidate's laptop.",
        icon: PlaySquare
    },
    {
        number: "4",
        title: "Start Testing",
        description: "Ask questions from the interviewer's device and receive answers.",
        icon: Users
    }
];

export default function TestingGuide() {
    return (
        <section id="testing-guide" className="pt-32 md:pt-12 pb-16 md:pb-24 relative bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 flex flex-col items-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading tracking-tight"
                    >
                        How to Test the App
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-xl text-center"
                    >
                        Follow this simple testing process to see Hiderview in action.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 relative">
                    {/* Subtle connecting line behind cards */}
                    <div className="hidden md:block w-3/4 absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-[1px] bg-border z-0" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * (idx + 1) }}
                            className="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center relative z-10 group hover:border-primary/50 transition-colors"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center border border-border">
                                {step.number}
                            </div>

                            <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                                <step.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-foreground mb-3 font-heading">
                                {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Free Trial Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="w-full bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center group hover:border-primary/30 transition-colors"
                >
                    <div className="flex items-center gap-2 text-xl font-bold font-heading mb-3 justify-center w-full">
                        <Gift className="w-5 h-5 text-primary" />
                        Free Trial Included
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                        You have 10 trial responses under the free/basic plan to test all features.
                    </p>
                    <button
                        onClick={openBlankPopup}
                        className="relative group px-6 py-3 md:px-10 md:py-4 bg-card border-[2px] border-border shadow-sm hover:border-primary/80 transition-all duration-500 max-w-sm w-full overflow-hidden cursor-pointer"
                        style={{ transform: "skewX(-8deg)", borderRadius: "6px" }}
                    >
                        {/* Hover mesh pattern background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Subtle glow underneath on hover */}
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex items-center justify-center" style={{ transform: "skewX(8deg)" }}>
                            <span className="text-lg md:text-xl font-bold font-heading text-foreground tracking-tight">
                                Start Your <span className="text-primary">Free Trial</span>
                            </span>
                        </div>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
