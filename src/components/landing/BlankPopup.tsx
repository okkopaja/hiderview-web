"use client";

import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";
import { SiTelegram, SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { SOCIALS } from "@/config/socials";

export function openBlankPopup() {
    window.dispatchEvent(new Event('open-blank-popup'));
}

export default function BlankPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-blank-popup', handleOpen);
        return () => window.removeEventListener('open-blank-popup', handleOpen);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-background border border-border rounded-2xl shadow-2xl w-full max-w-lg relative flex flex-col p-8 gap-6">

                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 z-50 p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center relative z-10 mt-2">
                    <h2 className="text-3xl font-bold font-heading text-foreground mb-3">
                        Support & Upgrades
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                        For support or payment, please contact us via the following channels. Our team will get back to you shortly.
                    </p>
                </div>

                {/* Social links */}
                <div className="flex flex-col gap-3 w-full">
                    <a href={SOCIALS.whatsapp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary transition-all hover:-translate-y-1 bg-card shadow-sm group">
                        <div className="bg-[#25D366]/10 p-2 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
                            <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-foreground text-left text-sm">WhatsApp</span>
                            <span className="text-xs text-muted-foreground">{SOCIALS.whatsapp.display}</span>
                        </div>
                    </a>

                    <a href={SOCIALS.telegram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary transition-all hover:-translate-y-1 bg-card shadow-sm group">
                        <div className="bg-[#229ED9]/10 p-2 rounded-lg group-hover:bg-[#229ED9]/20 transition-colors">
                            <SiTelegram className="w-5 h-5 text-[#229ED9]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-foreground text-left text-sm">Telegram</span>
                            <span className="text-xs text-muted-foreground">@{SOCIALS.telegram.username}</span>
                        </div>
                    </a>

                    <a href={SOCIALS.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary transition-all hover:-translate-y-1 bg-card shadow-sm group">
                        <div className="bg-[#E1306C]/10 p-2 rounded-lg group-hover:bg-[#E1306C]/20 transition-colors">
                            <SiInstagram className="w-5 h-5 text-[#E1306C]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-foreground text-left text-sm">Instagram</span>
                            <span className="text-xs text-muted-foreground">@hiderview</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
