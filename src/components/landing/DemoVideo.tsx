"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function DemoVideo() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 relative overflow-hidden" id="demo-video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight"
          >
            Watch Hiderview <span className="text-primary italic">in Action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            See how Hiderview analyzes constraints, runs complex algorithms, and generates optimized code in under 300ms—while remaining completely undetectable.
          </motion.p>
        </div>
        <div className="w-full h-auto lg:h-[600px] max-w-5xl mx-auto">
          {/* Main Video Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-full bento-card p-0 relative group overflow-hidden flex items-center justify-center bg-black/50 min-h-[300px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>

            {/* Fake Video UI */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all cursor-pointer">
                <Play className="w-8 h-8 text-white fill-current ml-1" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white font-heading mb-2">AI second brain for every assessment.</h3>
              <p className="text-gray-400 text-sm">Watch how Hiderview solves hard graph problems in realtime.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
