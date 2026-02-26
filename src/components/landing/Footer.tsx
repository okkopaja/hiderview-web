"use client";

import { SiTelegram, SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { SOCIALS } from "@/config/socials";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-10 font-sans relative z-10 bg-[#f7f7f7] dark:bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div>
              <svg width="160" height="40" viewBox="0 0 204 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hiderview">
                {/* HIDER */}
                <path d="M9.41532 39V11H13.7353V23H25.4953V11H29.8153V39H25.4953V26.92H13.7353V39H9.41532ZM34.1853 39V19.28H38.3053V39H34.1853ZM36.2653 16.6C35.4653 16.6 34.7853 16.3467 34.2253 15.84C33.692 15.3067 33.4253 14.6267 33.4253 13.8C33.4253 12.9733 33.692 12.3067 34.2253 11.8C34.7853 11.2667 35.4653 11 36.2653 11C37.092 11 37.772 11.2667 38.3053 11.8C38.8386 12.3067 39.1053 12.9733 39.1053 13.8C39.1053 14.6267 38.8386 15.3067 38.3053 15.84C37.772 16.3467 37.092 16.6 36.2653 16.6ZM50.9797 39.56C49.353 39.56 47.8464 39.16 46.4597 38.36C45.073 37.56 43.953 36.4133 43.0997 34.92C42.273 33.4 41.8597 31.5733 41.8597 29.44V28.84C41.8597 26.7333 42.273 24.92 43.0997 23.4C43.9264 21.88 45.033 20.72 46.4197 19.92C47.8064 19.12 49.3264 18.72 50.9797 18.72C52.2597 18.72 53.3264 18.88 54.1797 19.2C55.0597 19.52 55.7797 19.9333 56.3397 20.44C56.8997 20.92 57.3264 21.4267 57.6197 21.96H58.2597V11H62.3797V39H58.3397V36.2H57.6997C57.193 37.0533 56.4197 37.8267 55.3797 38.52C54.3664 39.2133 52.8997 39.56 50.9797 39.56ZM52.1397 35.96C53.9264 35.96 55.393 35.3867 56.5397 34.24C57.713 33.0933 58.2997 31.4533 58.2997 29.32V28.96C58.2997 26.8533 57.7264 25.2267 56.5797 24.08C55.433 22.9333 53.953 22.36 52.1397 22.36C50.3797 22.36 48.913 22.9333 47.7397 24.08C46.593 25.2267 46.0197 26.8533 46.0197 28.96V29.32C46.0197 31.4533 46.593 33.0933 47.7397 34.24C48.913 35.3867 50.3797 35.96 52.1397 35.96ZM75.8847 39.56C73.8847 39.56 72.138 39.1467 70.6447 38.32C69.1514 37.4667 67.978 36.28 67.1247 34.76C66.298 33.2133 65.8847 31.4267 65.8847 29.4V28.92C65.8847 26.8667 66.298 25.08 67.1247 23.56C67.9514 22.0133 69.098 20.8267 70.5647 20C72.058 19.1467 73.778 18.72 75.7247 18.72C77.618 18.72 79.2714 19.1467 80.6847 20C82.1247 20.8267 83.2447 21.9867 84.0447 23.48C84.8447 24.9733 85.2447 26.72 85.2447 28.72V30.28H70.0847C70.138 32.0133 70.7114 33.4 71.8047 34.44C72.9247 35.4533 74.3114 35.96 75.9647 35.96C77.5114 35.96 78.6714 35.6133 79.4447 34.92C80.2447 34.2267 80.858 33.4267 81.2847 32.52L84.6847 34.28C84.3114 35.0267 83.7647 35.8133 83.0447 36.64C82.3514 37.4667 81.4314 38.16 80.2847 38.72C79.138 39.28 77.6714 39.56 75.8847 39.56ZM70.1247 27.12H81.0447C80.938 25.6267 80.4047 24.4667 79.4447 23.64C78.4847 22.7867 77.2314 22.36 75.6847 22.36C74.138 22.36 72.8714 22.7867 71.8847 23.64C70.9247 24.4667 70.338 25.6267 70.1247 27.12ZM88.6041 39V19.28H92.6441V21.6H93.2841C93.6041 20.7733 94.1107 20.1733 94.8041 19.8C95.5241 19.4 96.4041 19.2 97.4441 19.2H99.8041V22.92H97.2841C95.9507 22.92 94.8574 23.2933 94.0041 24.04C93.1507 24.76 92.7241 25.88 92.7241 27.4V39H88.6041Z" fill="currentColor" />
                {/* VIEW (50% opacity) */}
                <path d="M107.033 39L100.393 19.28H104.753L109.993 35.96H110.633L115.873 19.28H120.233L113.593 39H107.033ZM122.631 39V19.28H126.751V39H122.631ZM124.711 16.6C123.911 16.6 123.231 16.3467 122.671 15.84C122.137 15.3067 121.871 14.6267 121.871 13.8C121.871 12.9733 122.137 12.3067 122.671 11.8C123.231 11.2667 123.911 11 124.711 11C125.537 11 126.217 11.2667 126.751 11.8C127.284 12.3067 127.551 12.9733 127.551 13.8C127.551 14.6267 127.284 15.3067 126.751 15.84C126.217 16.3467 125.537 16.6 124.711 16.6ZM171.025 39L167.665 19.28H171.785L174.265 36.24H174.905L178.345 19.28H185.025L188.425 36.24H189.065L191.545 19.28H195.665L192.305 39H185.385L181.985 22.08H181.345L177.945 39H171.025Z" fill="currentColor" fillOpacity="0.5" />
                {/* Eye icon */}
                <path d="M167 27C167 27 159.875 14.625 148 14.625C136.125 14.625 129 27 129 27C129 27 136.125 39.375 148 39.375C159.875 39.375 167 27 167 27ZM131.786 27C132.934 25.3465 134.255 23.8065 135.728 22.4032C138.785 19.503 142.965 16.875 148 16.875C153.035 16.875 157.213 19.503 160.274 22.4032C161.747 23.8065 163.068 25.3465 164.217 27C164.079 27.1957 163.927 27.4118 163.753 27.648C162.958 28.728 161.782 30.168 160.274 31.5968C157.213 34.497 153.033 37.125 148 37.125C142.965 37.125 138.787 34.497 135.726 31.5968C134.253 30.1934 132.934 28.6535 131.786 27Z" fill="currentColor" />
                <path d="M148 21.375C146.425 21.375 144.915 21.9676 143.802 23.0225C142.688 24.0774 142.062 25.5082 142.062 27C142.062 28.4918 142.688 29.9226 143.802 30.9775C144.915 32.0324 146.425 32.625 148 32.625C149.575 32.625 151.085 32.0324 152.198 30.9775C153.312 29.9226 153.938 28.4918 153.938 27C153.938 25.5082 153.312 24.0774 152.198 23.0225C151.085 21.9676 149.575 21.375 148 21.375ZM139.688 27C139.688 24.9114 140.563 22.9084 142.122 21.4315C143.681 19.9547 145.795 19.125 148 19.125C150.205 19.125 152.319 19.9547 153.878 21.4315C155.437 22.9084 156.312 24.9114 156.312 27C156.312 29.0886 155.437 31.0916 153.878 32.5685C152.319 34.0453 150.205 34.875 148 34.875C145.795 34.875 143.681 34.0453 142.122 32.5685C140.563 31.0916 139.688 29.0886 139.688 27Z" fill="currentColor" />
                {/* Slash */}
                <line x1="2" y1="-2" x2="42.2721" y2="-2" transform="matrix(-0.791009 0.611805 -0.681283 -0.73202 164.02 13.0755)" stroke="#C53B00" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              The undetectable AI copilot for high-stakes technical interviews.
              <br />Engineered for speed, stealth, and accuracy.
            </p>
            <div className="flex gap-4">
              <Link href={SOCIALS.telegram.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary hover:bg-muted transition-colors" aria-label={SOCIALS.telegram.label}>
                <SiTelegram className="w-5 h-5" />
              </Link>
              <Link href={SOCIALS.instagram.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary hover:bg-muted transition-colors" aria-label={SOCIALS.instagram.label}>
                <SiInstagram className="w-5 h-5" />
              </Link>
              <Link href={SOCIALS.whatsapp.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary hover:bg-muted transition-colors" aria-label={SOCIALS.whatsapp.label}>
                <SiWhatsapp className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-6 font-heading text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Download for Windows</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-6 font-heading text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li className="pt-4 border-t border-border mt-4">
                <div className="text-xs text-muted-foreground mb-1">Contact Sales</div>
                <Link href={SOCIALS.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-foreground font-mono text-xs hover:text-primary transition-colors">{SOCIALS.whatsapp.display}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mega Typography Logo */}
        <div className="flex justify-center w-full py-12 md:py-24 overflow-hidden select-none pointer-events-none">
          <h1 className="text-[14vw] sm:text-[16vw] md:text-[15vw] leading-none font-black tracking-tighter text-foreground whitespace-nowrap uppercase flex items-center">
            HIDER
            <span className="opacity-50 flex items-center">
              VI
              <svg
                viewBox="0 0 92 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[0.8em] h-[0.8em] mx-[0.02em] -translate-y-[0.04em] shrink-0 block"
              >
                <path d="M92 45C92 45 74.75 14.0625 46 14.0625C17.25 14.0625 0 45 0 45C0 45 17.25 75.9375 46 75.9375C74.75 75.9375 92 45 92 45ZM6.74475 45C9.52496 40.8663 12.7227 37.0164 16.2897 33.5081C23.69 26.2575 33.81 19.6875 46 19.6875C58.19 19.6875 68.3043 26.2575 75.716 33.5081C79.2831 37.0164 82.4808 40.8663 85.261 45C84.9275 45.4894 84.5595 46.0294 84.1398 46.62C82.2135 49.32 79.3673 52.92 75.716 56.4919C68.3043 63.7425 58.1842 70.3125 46 70.3125C33.81 70.3125 23.6958 63.7425 16.284 56.4919C12.717 52.9836 9.52499 49.1337 6.74475 45Z" fill="currentColor" />
                <path d="M46 30.9375C42.1875 30.9375 38.5312 32.4191 35.8353 35.0563C33.1395 37.6935 31.625 41.2704 31.625 45C31.625 48.7296 33.1395 52.3065 35.8353 54.9437C38.5312 57.5809 42.1875 59.0625 46 59.0625C49.8125 59.0625 53.4688 57.5809 56.1647 54.9437C58.8605 52.3065 60.375 48.7296 60.375 45C60.375 41.2704 58.8605 37.6935 56.1647 35.0563C53.4688 32.4191 49.8125 30.9375 46 30.9375ZM25.875 45C25.875 39.7786 27.9953 34.771 31.7695 31.0788C35.5436 27.3867 40.6625 25.3125 46 25.3125C51.3375 25.3125 56.4564 27.3867 60.2305 31.0788C64.0047 34.771 66.125 39.7786 66.125 45C66.125 50.2214 64.0047 55.229 60.2305 58.9212C56.4564 62.6133 51.3375 64.6875 46 64.6875C40.6625 64.6875 35.5436 62.6133 31.7695 58.9212C27.9953 55.229 25.875 50.2214 25.875 45Z" fill="currentColor" />
                <line x1="3" y1="-3" x2="105.507" y2="-3" transform="matrix(-0.781375 0.624061 -0.669498 -0.742814 84.7843 10.1887)" stroke="#C53B00" strokeWidth="6" strokeLinecap="round" />
              </svg>
              W
            </span>
          </h1>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-mono">
          <p>&copy; 2026 Hiderview. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-600 dark:text-emerald-500">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
