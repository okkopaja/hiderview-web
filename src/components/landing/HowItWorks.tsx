"use client";

import { motion } from "framer-motion";
import { Monitor, Play, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Start Hiderview",
    description: "Launch the desktop app. It runs quietly in the background, ready when you are.",
    icon: Play
  },
  {
    number: "2",
    title: "Open your assessment",
    description: "Navigate to your Hackerrank, codesignal, or interview platform. We detect it automatically.",
    icon: Monitor
  },
  {
    number: "3",
    title: "Get instant answers",
    description: "Receive structured, optimized code solutions and reasoning in <300ms overlay.",
    icon: CheckCircle
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight"
          >
            Solve in <span className="text-primary italic">3 steps</span>
          </motion.h2>
        </div>

        {/* Mobile: Horizontal Scroll Snap / Desktop: Grid */}
        <div className="relative">
          {/* Main Horizontal connecting line (Desktop Only) */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-border z-0" />

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="min-w-[85vw] md:min-w-0 snap-center relative"
              >
                <div className="h-full bg-card border border-border p-8 group hover:border-primary/50 transition-colors duration-300 relative flex flex-col items-center text-center">

                  {/* Step Number Background */}
                  <div className="absolute top-4 left-4 text-6xl font-black text-secondary group-hover:text-primary/5 transition-colors font-mono select-none pointer-events-none z-0">
                    0{step.number}
                  </div>

                  <div className="w-14 h-14 rounded bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:text-primary transition-colors relative z-10 shadow-sm">
                    <step.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 font-heading relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
