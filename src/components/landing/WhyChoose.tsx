"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Clock } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight">
            Thinking is the <span className="text-burnt-orange italic">slowest</span> thing you do.
          </h2>
          <p className="text-xl text-primary font-mono tracking-tight">
            // Let AI do it in milliseconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <div className="bg-card border border-border p-8 group hover:border-primary/50 transition-colors duration-300 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <Brain className="w-8 h-8 text-primary mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-foreground mb-3 font-heading tracking-tight relative z-10">Complex Reasoning</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">We handle layered logic and edge cases instantly, ensuring you never stall.</p>
          </div>
          <div className="bg-card border border-border p-8 group hover:border-primary/50 transition-colors duration-300 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <Zap className="w-8 h-8 text-primary mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-foreground mb-3 font-heading tracking-tight relative z-10">Optimized Output</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">Get the most optimal solution with step-by-step technical breakdown.</p>
          </div>
          <div className="bg-card border border-border p-8 group hover:border-primary/50 transition-colors duration-300 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <Clock className="w-8 h-8 text-primary mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-foreground mb-3 font-heading tracking-tight relative z-10">Zero Latency</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">Real-time answers compiled and presented before the interviewer finishes the question.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
