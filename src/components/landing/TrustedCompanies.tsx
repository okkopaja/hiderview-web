"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

/**
 * Logo visibility strategy:
 * - Logos render directly on the section background (no white backing cards).
 * - useTheme() gives us the REAL resolved theme ("dark" | "light") based on the
 *   next-themes class toggle — NOT the OS preference. This is what we use to
 *   decide which logo src to render.
 */
const companies = [
  {
    name: "Amazon",
    logo: "/logos/companies/amazon.svg",       // black text  + orange smile
    logoDark: "/logos/companies/amazon-dark.svg", // white text  + orange smile
    lightFilter: "",
    darkFilter: "",
  },
  {
    name: "Hashedin by Deloitte",
    logo: "/logos/companies/hashedin.svg",
    lightFilter: "",
    darkFilter: "brightness-[2]",
  },
  {
    name: "Infosys",
    logo: "/logos/companies/infosys.svg",
    // SVG has white fills → invert to dark in light mode; no change in dark mode
    lightFilter: "[filter:invert(1)_hue-rotate(180deg)]",
    darkFilter: "",
  },
  {
    name: "EPAM",
    logo: "/logos/companies/epam.svg",
    lightFilter: "",
    darkFilter: "brightness-[1.8]",
  },
  {
    name: "Capgemini",
    logo: "/logos/companies/capgemini.svg",
    lightFilter: "",
    darkFilter: "brightness-150",
  },
  {
    name: "Microsoft",
    logo: "/logos/companies/microsoft.svg",
    lightFilter: "",
    darkFilter: "brightness-150",
  },
];

const stats = [
  { label: "Average Latency", value: "< 300ms" },
  { label: "Interviews Aced", value: "50k+" },
  { label: "Success Rate", value: "99.9%" },
];

// Duplicated so the carousel loops seamlessly
const doubled = [...companies, ...companies];

export default function TrustedCompanies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;
    const speed = 0.3; // px per frame

    const step = () => {
      pos += speed;
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const pause = () => cancelAnimationFrame(raf);
    const resume = () => { raf = requestAnimationFrame(step); };
    track.parentElement?.addEventListener("mouseenter", pause);
    track.parentElement?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      track.parentElement?.removeEventListener("mouseenter", pause);
      track.parentElement?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="py-20 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-mono tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-blue-600 dark:text-blue-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 max-w-2xl mx-auto" />

        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10 font-mono">
          Users Placed At
        </p>
      </div>

      {/* ── Carousel ─────────────────────────────────────────────────── */}
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex items-center gap-16 md:gap-24 w-max px-8">
          {doubled.map((company, i) => {
            // Pick the correct src based on the REAL theme state
            const src =
              isDark && company.logoDark ? company.logoDark : company.logo;
            // Pick the correct filter class
            const filterClass = isDark ? company.darkFilter : company.lightFilter;

            return (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center group transition-transform duration-300 hover:scale-110"
                style={{ width: 160, height: 60 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={company.name}
                    fill
                    className={`object-contain transition-all duration-300 opacity-70 group-hover:opacity-100 ${filterClass}`}
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
