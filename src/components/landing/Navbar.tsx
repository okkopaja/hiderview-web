"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { openBlankPopup } from "@/components/landing/BlankPopup";
import { SiTelegram, SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { SOCIALS } from "@/config/socials";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-border transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* ── Logo ───────────────────────────────────────────── */}
                    <Link href="/" className="flex-shrink-0 flex items-center group relative z-50">

                        {/* ── Desktop wordmark: light mode (shown at md+, hidden in dark) */}
                        <div className="relative w-40 h-9 hidden md:block dark:hidden">
                            <img src="/logos/hiderview-eye-light.svg" alt="Hiderview" className="w-full h-full object-contain object-left" />
                        </div>
                        {/* ── Desktop wordmark: dark mode (shown at md+, hidden in light) */}
                        <div className="relative w-40 h-9 hidden md:dark:block">
                            <img src="/logos/hiderview-eye-dark.svg" alt="Hiderview" className="w-full h-full object-contain object-left" />
                        </div>

                    </Link>

                    {/* ── Desktop Menu ───────────────────────────────────── */}
                    <div className="hidden md:flex items-center space-x-1">
                        {["Features", "How It Works", "Pricing"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-secondary dark:hover:bg-secondary rounded-md transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* ── CTA Buttons ────────────────────────────────────── */}
                    <div className="flex items-center space-x-3">
                        <ModeToggle />
                        {/* Social Icons */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href={SOCIALS.telegram.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-secondary dark:hover:bg-secondary transition-colors" aria-label={SOCIALS.telegram.label}>
                                <SiTelegram className="w-4 h-4" />
                            </Link>
                            <Link href={SOCIALS.instagram.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-secondary dark:hover:bg-secondary transition-colors" aria-label={SOCIALS.instagram.label}>
                                <SiInstagram className="w-4 h-4" />
                            </Link>
                            <Link href={SOCIALS.whatsapp.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-secondary dark:hover:bg-secondary transition-colors" aria-label={SOCIALS.whatsapp.label}>
                                <SiWhatsapp className="w-4 h-4" />
                            </Link>
                        </div>
                        <button onClick={openBlankPopup} className="hidden md:block text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors px-4 py-2 cursor-pointer">
                            Sign in
                        </button>
                        <a href="/api/download" className="cursor-pointer flex items-center gap-2 bg-primary hover:bg-[#A33100] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-300 hover:-translate-y-[2px] shadow-[0_12px_40px_rgba(255,100,30,0.25)] dark:shadow-sm">
                            <span>Get Started</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
