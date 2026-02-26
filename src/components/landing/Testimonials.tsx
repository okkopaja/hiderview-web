"use client";

import { motion } from "framer-motion";
import { User, Award, Star } from "lucide-react";

import { StarRating } from "./StarRating";

const testimonials = [
  {
    name: "Amit",
    role: "ML Engineer",
    company: "Microsoft",
    quote: "Best part is the offline mode! My sensitive research stays private while still getting expert-level guidance on neural network architectures.",
    badge: "Researcher",
    rating: 4.5,
  },
  {
    name: "Arjun",
    role: "SDE 2",
    company: "Amazon",
    quote: "Cracked three FAANG interviews in a row. The real-time AI assistance made complex system design questions feel effortless. Game changer!",
    badge: "3 FAANG Offers",
    rating: 5.0,
  },
  {
    name: "Rahul",
    role: "Junior Developer",
    company: "Infosys",
    quote: "The tool was a lifesaver for my initial screening. It guided me through tricky technical MCQs and provided real-time hints during coding rounds without being obvious. Truly helpful for freshers.",
    badge: "Campus Placed",
    rating: 4.6,
  },
  {
    name: "Sneha",
    role: "Software Engineer Trainee",
    company: "Capgemini",
    quote: "I was super nervous about my first tech interview, but having it by my side made me feel supported. The way it helped structure my logic for the coding round was brilliant!",
    badge: "First Job",
    rating: 4.7,
  },
  {
    name: "Priya",
    role: "Associate Business Analyst",
    company: "Hashedin by Deloitte",
    quote: "Not just for developers! It really helped me navigate the situational questions in my interview. Now, I even use it to quietly draft clear updates during our daily standups.",
    badge: "Fast-track Promotion",
    rating: 4.8,
  },
  {
    name: "Rohit",
    role: "Backend Engineer",
    company: "Capgemini",
    quote: "The instant responses for DSA problems were spot-on. Helped me solve binary tree questions confidently in real-time during technical rounds.",
    badge: "Tech Lead Role",
    rating: 4.3,
  },
  {
    name: "Vikram",
    role: "PM Intern",
    company: "Microsoft",
    quote: "It gave me the perfect pointers for answering behavioral interviews effortlessly. I even keep it open during cross-functional meetings now to quickly summarize talking points.",
    badge: "Top Performer",
    rating: 4.5,
  },
  {
    name: "Kavita",
    role: "Frontend Architect",
    company: "EPAM",
    quote: "Screen-sharing during interviews was never a concern. The invisible overlay kept me confident throughout React architecture discussions.",
    badge: "Architect Position",
    rating: 4.7,
  },
  {
    name: "Divya",
    role: "Product Manager",
    company: "Infosys",
    quote: "The contextual prompts transformed my product strategy answers. Nailed all behavioral questions with structured, metrics-driven responses.",
    badge: "Senior PM",
    rating: 4.9,
  },
];

export default function Testimonials() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 relative overflow-hidden bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight"
          >
            Devs Hired At <span className="text-primary italic">Top Companies</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Gradient fades for sleekness */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Content */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] items-stretch">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[420px] flex-shrink-0 mx-4 bg-card bg-gradient-to-b from-white to-[#fafafa] dark:bg-none dark:bg-card p-6 md:p-8 flex flex-col justify-between rounded-xl border border-border shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-sm hover:border-primary/50 transition-all duration-300 relative overflow-hidden group/card"
            >
              {/* Top subtle highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg tracking-tight font-heading leading-none mb-1">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-mono leading-tight">{t.role}</div>
                  <div className="text-xs font-bold text-foreground mt-0.5">{t.company}</div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed italic relative pl-4 border-l-2 border-border mb-8 flex-1 group-hover/card:border-primary/50 transition-colors">
                "{t.quote}"
              </p>

              <div className="mt-auto flex justify-between items-center relative z-10 pt-4 border-t border-border/50">
                <div className="px-3 py-1.5 bg-secondary rounded-full text-xs font-bold text-foreground flex items-center gap-2 border border-border">
                  <Award className="w-3.5 h-3.5 text-primary" /> {t.badge}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-foreground font-mono">{t.rating.toFixed(1)}</span>
                  <div className="flex gap-0.5 group-hover/card:scale-105 transition-transform duration-300">
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
