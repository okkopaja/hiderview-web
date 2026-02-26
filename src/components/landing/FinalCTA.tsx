"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { openBlankPopup } from "@/components/landing/BlankPopup";

export default function FinalCTA() {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="pt-32 pb-16 md:py-24 relative overflow-hidden bg-[#0A0A0A] text-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight">
                        Ready to <span className="text-primary underline decoration-primary/50 underline-offset-4 italic">dominate</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join over 50,000 engineers who have already secured their dream jobs with Hiderview.
                        Stop guessing. Start knowing.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/api/download" className="group px-8 py-4 bg-primary hover:bg-[#A33100] text-white font-bold rounded-md transition-all hover:-translate-y-[2px] shadow-sm flex items-center gap-2">
                            <span>Get Started Now</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            onClick={(e) => e.preventDefault()}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                                cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23C53B00' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='4.93' y1='4.93' x2='19.07' y2='19.07'%3E%3C/line%3E%3C/svg%3E") 12 12, not-allowed`,
                                backgroundColor: hovered ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.10)',
                                transition: 'background-color 0.3s ease',
                            }}
                            className="px-6 py-3 rounded-md flex flex-col items-center justify-center min-w-[260px]"
                        >
                            <span
                                style={{ color: hovered ? 'rgba(197, 59, 0, 0.5)' : '#FFFFFF', transition: 'color 0.3s ease' }}
                                className="text-2xl font-black uppercase tracking-widest leading-none"
                            >
                                Stay Slow
                            </span>
                            <span style={{ color: hovered ? 'rgba(197, 59, 0, 0.5)' : '#C53B00', transition: 'color 0.3s ease' }} className="font-mono text-xs mt-1">
                                // and Manual in the age of AI
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

