"use client";

import { motion } from "framer-motion";
import { Download, Gift, CreditCard, MessageCircle } from "lucide-react";
import { openBlankPopup } from "@/components/landing/BlankPopup";

const steps = [
    {
        number: "1",
        title: "Launch the App",
        description: "Download and click on the executable file to launch Hiderview instantly.",
        icon: Download
    },
    {
        number: "2",
        title: <><span className="text-primary">Free</span> Trial</>,
        description: <>You get <span className='text-primary'>10 free responses</span> to test all features and understand the app flow.</>,
        icon: Gift
    },
    {
        number: "3",
        title: "Subscription Required",
        description: "After using the 10 trial responses, subscribe for unlimited access.",
        icon: CreditCard
    }
];

export default function HowToUse() {
    return (
        <section id="how-it-works" className="pt-32 md:pt-12 pb-16 md:pb-24 relative bg-white dark:bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 flex flex-col items-center">


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading tracking-tight"
                    >
                        How to Use Hiderview
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-xl text-center"
                    >
                        Get started in minutes with our simple three-step process. No complex setup—just download and start acing interviews.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative">
                    {/* Subtle connecting line behind cards */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-border z-0" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * (idx + 1) }}
                            className="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center relative z-10 group transition-all duration-300 hover:border-primary/50 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-none hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-none hover:-translate-y-1"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center border border-border">
                                {step.number}
                            </div>

                            <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                                <step.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-foreground mb-3 font-heading">
                                {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Upgrade Banner CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-12 w-full px-4"
                >
                    <button
                        onClick={openBlankPopup}
                        className="relative group px-6 py-6 md:px-12 md:py-8 bg-card border-[3px] border-border shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-sm hover:border-primary/80 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-none hover:-translate-y-1 w-full max-w-2xl overflow-hidden cursor-pointer"
                        style={{ transform: "skewX(-8deg)", borderRadius: "8px" }}
                    >
                        {/* Hover mesh pattern background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Subtle glow underneath on hover */}
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex items-center justify-center" style={{ transform: "skewX(8deg)" }}>
                            <span className="text-2xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
                                Ready To <span className="text-primary">Upgrade?</span>
                            </span>
                        </div>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
