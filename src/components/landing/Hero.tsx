"use client";

import { motion } from "framer-motion";
import { Download, Zap, Shield, Laptop, Terminal } from "lucide-react";
import { openBlankPopup } from "@/components/landing/BlankPopup";
import CapabilityCards from "@/components/landing/CapabilityCards";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>

      {/* Ambient Gradient in Light Mode */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_10%,rgba(255,120,40,0.06),transparent_40%)] dark:bg-none -z-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full lg:items-center"
      >
        {/* Main Hero Card (Text Left side) */}
        <motion.div
          variants={item}
          className="lg:col-span-4 xl:col-span-5 flex flex-col justify-center relative z-10"
        >
          <div className="relative z-10">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6 font-heading leading-tight">
              The <span className="text-primary underline decoration-primary/30 underline-offset-4"> #1 Undetectable AI</span><br />
              for Online Assessments
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Solve reasoning-heavy questions in real-time. Invisible. Instant. Accurate.
              Engineered for high-stakes technical interviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="/api/download" className="flex items-center justify-center gap-2 bg-primary hover:bg-[#A33100] text-white font-semibold px-8 py-4 rounded-md shadow-[0_12px_40px_rgba(255,100,30,0.25)] dark:shadow-sm transition-all duration-300 hover:-translate-y-[2px]">
                <Download className="w-5 h-5" />
                <span>Download for Windows</span>
              </a>
              <button onClick={openBlankPopup} className="flex items-center justify-center gap-2 bg-transparent hover:bg-secondary text-foreground font-medium px-8 py-4 rounded-md border border-border transition-all duration-300 hover:-translate-y-[2px]">
                <Laptop className="w-5 h-5" />
                <span>Mac – Coming Soon</span>
              </button>
            </div>

            {/* Micro Proof Strip */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-mono text-muted-foreground border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>280ms latency</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span>Advanced Reasoning</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Screen-share Safe</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Capabilities (3 Cards Right side) */}
        <motion.div
          variants={item}
          className="lg:col-span-8 xl:col-span-7 flex relative w-full pt-8 lg:pt-0"
        >
          <CapabilityCards />
        </motion.div>

      </motion.div>
    </section>
  );
}
