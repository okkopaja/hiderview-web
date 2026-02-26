"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, ShieldAlert, X, Check } from "lucide-react";
import Image from "next/image";

export default function Compatibility() {
  return (
    <section className="pt-32 md:pt-8 pb-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading"
          >
            100% Accurate, <span className="text-burnt-orange ">100% Invisible.</span>
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
