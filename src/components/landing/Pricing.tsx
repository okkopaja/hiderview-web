"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { openBlankPopup } from "@/components/landing/BlankPopup";
import { useEffect, useState } from "react";
import { SOCIALS } from "@/config/socials";

type PriceConfig = {
  free: string;
  pro: string;
  proSuffix: string;
  lifetime: string;
  lifetimeSuffix: string;
};

const USD_PRICES: PriceConfig = {
  free: "$0",
  pro: "$19",
  proSuffix: "/mo",
  lifetime: "$69",
  lifetimeSuffix: "/once",
};

const INR_PRICES: PriceConfig = {
  free: "₹0",
  pro: "₹399",
  proSuffix: "/mo",
  lifetime: "₹1,299",
  lifetimeSuffix: "/once",
};

function usePricing(): PriceConfig {
  const [prices, setPrices] = useState<PriceConfig>(USD_PRICES);

  useEffect(() => {
    // In dev, forward any ?mock= param from the page URL to the geo API
    const geoUrl =
      process.env.NODE_ENV === "development"
        ? `/api/geo${window.location.search.includes("mock=") ? `?mock=${new URLSearchParams(window.location.search).get("mock")}` : ""}`
        : "/api/geo";

    fetch(geoUrl)
      .then((r) => r.json())
      .then((data: { country: string | null }) => {
        if (data.country === "IN") {
          setPrices(INR_PRICES);
        }
      })
      .catch(() => {
        // default to USD on any error
      });
  }, []);

  return prices;
}

export default function Pricing() {
  const prices = usePricing();

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#fafafa] dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Invest in your career. Free / Pro / Lifetime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {/* Free Plan - Short */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card p-8 flex flex-col h-[380px] border border-border rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-sm opacity-90 transition-all duration-300 hover:opacity-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:hover:shadow-none hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 font-heading tracking-tight">Free</h3>
            <div className="text-4xl font-bold text-foreground mb-6 font-mono">
              {prices.free}<span className="text-base font-normal text-muted-foreground ml-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> 10 responses</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Basic reasoning</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Community support</li>
            </ul>
            <a href="/api/download" className="flex items-center justify-center w-full py-3 px-4 bg-transparent hover:bg-secondary text-foreground font-medium rounded border border-border transition-colors">
              Start your free trial
            </a>
          </motion.div>

          {/* Pro Monthly Plan - Tallest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 border-2 border-primary flex flex-col h-[500px] relative overflow-hidden group rounded-md z-10 scale-100 md:scale-105 shadow-[0_30px_60px_rgba(255,100,30,0.08)] dark:shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(255,100,30,0.12)] dark:hover:shadow-lg"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-primary" />

            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-foreground font-heading tracking-tight">Pro</h3>
              <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-primary text-xs font-bold font-mono flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> POPULAR
              </div>
            </div>

            <div className="text-5xl font-bold text-foreground mb-8 font-mono">
              {prices.pro}<span className="text-base font-normal text-muted-foreground ml-1">{prices.proSuffix}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1 text-sm text-foreground">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> <span className="font-semibold">130</span> responses</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Advanced reasoning engine</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Priority updates</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Priority support</li>
            </ul>
            <button onClick={openBlankPopup} className="w-full py-4 px-4 bg-primary hover:bg-[#A33100] text-white font-bold rounded shadow-sm transition-all hover:-translate-y-[2px]">
              Upgrade to Pro
            </button>
          </motion.div>

          {/* Lifetime Plan - Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card p-8 flex flex-col h-[420px] border border-border rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-sm opacity-90 transition-all duration-300 hover:opacity-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:hover:shadow-none hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 font-heading tracking-tight">Lifetime</h3>
            <div className="text-4xl font-bold text-foreground mb-6 font-mono">
              {prices.lifetime}<span className="text-base font-normal text-muted-foreground ml-1">{prices.lifetimeSuffix}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Bring your own API keys (BYOK)</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Own the platform forever</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Zero recurring subscription fees</li>
            </ul>
            <button onClick={openBlankPopup} className="w-full py-3 px-4 bg-transparent hover:bg-secondary text-foreground font-medium rounded border border-border transition-colors">
              Buy Platform
            </button>
          </motion.div>
        </div>

        <div className="mt-16 text-center border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground text-sm">
            <p>Secure payments via UPI, Crypto, Stripe.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
