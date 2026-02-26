"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Hiderview detectable?",
    answer:
      "No. Hiderview operates entirely outside the browser sandbox and uses system-level overlays that are invisible to screen capture APIs (Zoom, Teams, OBS, etc.).",
  },
  {
    question: "Is it safe for OAs?",
    answer:
      "Yes. Since it doesn't inject code into the browser DOM or network requests, anti-cheat systems like ProctorU or HackerRank cannot detect it.",
  },
  {
    question: "How fast is the response engine?",
    answer:
      "Hiderview uses a streaming architecture with <300ms latency. Answers start appearing before you finish reading the question.",
  },
  {
    question: "Does it support coding questions?",
    answer:
      "Yes. It specializes in LeetCode-style algorithms, System Design, and SQL. It provides optimized code solutions with Big-O analysis.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-32 md:pt-16 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-heading">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-white/5 rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
