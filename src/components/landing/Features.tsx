"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Terminal, Code, Cpu, EyeOff } from "lucide-react";

const features = [
  {
    title: "Lightning Fast Engine",
    description: "Streaming answers token-by-token. No waiting for full generation.",
    icon: Zap,
    colSpan: "md:col-span-8",
  },
  {
    title: "Deep Reasoning",
    description: "Chain-of-thought processing for complex system design limits.",
    icon: Brain,
    colSpan: "md:col-span-4",
  },
  {
    title: "Fully Customizable",
    description: "Fine-tune the prompt core to match your interview style and seniority level.",
    icon: Terminal,
    colSpan: "md:col-span-4",
  },
  {
    title: "Code Optimizer",
    description: "Automatically refactors O(n²) solutions to O(n) or O(log n) with explanations.",
    icon: Code,
    colSpan: "md:col-span-8",
  },
  {
    title: "Context Memory",
    description: "Remembers previous questions and constraints throughout the session.",
    icon: Cpu,
    colSpan: "md:col-span-6",
  },
  {
    title: "Undetectable Runtime",
    description: "Zero DOM injection. Operates entirely outside the browser sandbox.",
    icon: EyeOff,
    colSpan: "md:col-span-6",
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#fafafa] dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading"
          >
            Engineering <span className="text-primary tracking-tight">Superiority</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${feature.colSpan} bg-card border border-border p-8 group relative overflow-hidden min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:border-primary/50 bg-gradient-to-br from-white to-[#f7f7f7] dark:bg-none dark:bg-card shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-none hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-auto">
                  <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-mono font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mt-6">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Tech Elements */}
              <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <feature.icon className="w-24 h-24 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
