"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { Check, X, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function ComparisonRevealSlider() {
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    // Use Framer Motion values instead of React state for performant 60fps tracking
    const position = useMotionValue(50);
    const rightPanelWidth = useTransform(position, (v) => `${100 - v}%`);
    const dividerLeft = useTransform(position, (v) => `${v}%`);

    // Handle drag logic
    const handleMove = useCallback(
        (clientX: number) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            const clamped = Math.min(Math.max(percentage, 5), 95);
            position.set(clamped);
        },
        [position]
    );

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                containerRef.current.style.setProperty(
                    "--container-width",
                    `${containerRef.current.offsetWidth}px`
                );
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleMouseEnter = () => {
        // PRD: "On hover: reveal slightly (55%)"
        if (position.get() === 50 && !isResizing) {
            position.set(55);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleMouseDown = () => setIsResizing(true);
    const handleTouchStart = () => setIsResizing(true);

    // Global mouse up to stop dragging
    useEffect(() => {
        const handleGlobalMouseUp = () => setIsResizing(false);
        window.addEventListener("mouseup", handleGlobalMouseUp);
        window.addEventListener("touchend", handleGlobalMouseUp);
        return () => {
            window.removeEventListener("mouseup", handleGlobalMouseUp);
            window.removeEventListener("touchend", handleGlobalMouseUp);
        };
    }, []);

    // Keyboard accessibility
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            position.set(Math.max(position.get() - 1, 5));
        } else if (e.key === "ArrowRight") {
            position.set(Math.min(position.get() + 1, 95));
        }
    };

    // Tilt Effect Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-300, 300], [5, -5]);
    const rotateY = useTransform(x, [-600, 600], [-5, 5]);

    const handleTilt = (e: React.MouseEvent) => {
        if (!isResizing && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            x.set(e.clientX - centerX);
            y.set(e.clientY - centerY);
        }
    };

    const resetTilt = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="pb-12 md:pb-24 pt-4 md:pt-8 bg-background flex justify-center px-4 perspective-1000">
            <div className="container max-w-[1000px] flex justify-center">
                {/* Container */}
                <motion.div
                    ref={containerRef}
                    className={`relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-border group transition-shadow duration-500`}
                    onMouseMove={(e) => {
                        handleMouseMove(e);
                        handleTilt(e);
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={resetTilt}
                    onTouchMove={handleTouchMove}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    role="slider"
                    aria-valuenow={50}
                    aria-valuemin={5}
                    aria-valuemax={95}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    aria-label="Comparison slider: Other AI vs Hiderview"
                >

                    {/* LEFT PANEL (Background / Other AI) */}
                    <div className="absolute inset-0 w-full h-full bg-secondary flex items-center justify-center overflow-hidden z-0">
                        <Image
                            src="/imgs/Interviewer.png"
                            alt="Other AI Notetaker View"
                            fill
                            className="object-cover object-left pointer-events-none select-none"
                            quality={100}
                        />
                        {/* Optional subtle vignette (only at edges, fully transparent center) so the image pops */}
                        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none" />

                        {/* Screen Label */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-12 z-20 pointer-events-none">
                            <div className="bg-background/90 backdrop-blur-sm border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)] px-3 py-1.5 rounded-full flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-xs md:text-sm font-medium text-foreground">Interviewer Screen</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL (Foreground / Hiderview) */}
                    <motion.div
                        className="absolute top-0 right-0 h-full bg-card overflow-hidden border-l border-primary/20 z-10"
                        style={{ width: rightPanelWidth, willChange: "width" }}
                    >
                        {/* Content - Undetectable */}
                        <div
                            className="absolute top-0 right-0 h-full overflow-hidden"
                            style={{ width: "var(--container-width, 100%)" }}
                        >
                            <Image
                                src="/imgs/Candidate.png"
                                alt="Hiderview Candidate View"
                                fill
                                className="object-cover object-left pointer-events-none select-none"
                                quality={100}
                            />

                            {/* Optional subtle vignette (only at edges, fully transparent center) so the image pops */}
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none" />

                            {/* Screen Label */}
                            <div className="absolute top-4 right-4 md:top-6 md:right-12 z-20 pointer-events-none">
                                <div className="bg-background/90 backdrop-blur-sm border border-primary/20 shadow-[0_0_15px_rgba(197,59,0,0.2)] px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs md:text-sm font-medium text-foreground">Candidate Screen</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* DIVIDER Line */}
                    <motion.div
                        className={`absolute top-0 bottom-0 w-0.5 bg-primary z-30 cursor-ew-resize touch-none`}
                        style={{ left: dividerLeft }}
                    >
                        {/* Handle */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background border border-primary/50 text-primary rounded flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 ${isResizing ? "scale-95 border-primary" : ""}`}>
                            <div className="flex gap-0.5">
                                <ChevronLeft className="w-4 h-4" />
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Instruction Hint (Mobile) */}
                    <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/80 text-foreground text-xs px-3 py-1 rounded border border-border pointer-events-none">
                        Hover or drag to reveal
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
