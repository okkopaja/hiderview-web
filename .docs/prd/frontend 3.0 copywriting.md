
# HIDERVIEW 3.0

### Inference-Grade Bento Landing Page PRD

*(Cluely clarity × Inference.sh dev aesthetic × Mobile-first performance)*

---

# 1. PRODUCT POSITIONING

## Core Positioning

Hiderview is:

> The fastest, most intelligent, fully customizable, undetectable AI copilot for online assessments and technical interviews.

Unlike Cluely (meeting notes focus), Hiderview is:

* Built for **high-stakes problem solving**
* Optimized for **reasoning-heavy OAs**
* Engineered for **speed + invisibility**
* Tuned for **coding + logical depth**

---

# 2. BRAND DIRECTION

## Tone

Confident. Surgical. No fluff.

Avoid:

* “Revolutionary AI”
* “Next-gen”
* Generic AI blue vibes

Use:

* Direct claims
* Performance numbers
* Technical authority
* Dev energy

---

# 3. VISUAL SYSTEM

## Color System (Inference-inspired, not copy-paste)

Background:

```
Radial + linear layered gradient
#05060F → #0F172A → #111827
```

Primary Glow:

```
#3B82F6 (electric blue)
```

Accent:

```
#22D3EE (cyan)
```

Warning / Highlight:

```
#F59E0B
```

Success:

```
#10B981
```

Cards:

```
rgba(255,255,255,0.04)
backdrop-blur-lg
border: rgba(255,255,255,0.08)
```

---

## Typography

Headings: **Space Grotesk**
Body: **DM Sans**
Mono: **DM Mono**

Mobile H1: 2rem
Desktop H1: 4rem

All headings tight tracking (-0.02em)

---

# 4. LAYOUT PHILOSOPHY

## TRUE BENTO SYSTEM

Every section must be:

* Modular
* Asymmetrical
* Mixed height cards
* Hover-reactive
* Glowing edges
* Subtle tilt on hover (desktop only)

Mobile:

* Single column stack
* Swipe-enabled sections
* Bottom-heavy CTAs (thumb-friendly)

---

# 5. LANDING PAGE STRUCTURE

---

# SECTION 1 — HERO

### Layout (Bento-Structured)

Desktop:

```
[ Large Left Hero Text (2x2) ]   [ Product UI Mock (2x2) ]
[ Trust Badge (1x1) ]            [ Stats Card (1x1) ]
```

Mobile:

Vertical stack:
Headline
Subheadline
CTA
UI
Stats

---

## Hero Copy (Cluely simplicity, stronger punch)

Headline:

# The #1 Undetectable AI for Online Assessments

Subheadline:

Solve reasoning-heavy questions in real-time.
Invisible. Instant. Accurate.

Trust Badge:

Trusted by 50,000+ candidates

Primary CTA:

[ Download for Windows ]

Secondary:

Mac – Coming Soon

Micro proof strip (below CTA):

⚡ 280ms average response
🧠 Advanced reasoning engine
🔒 Screen-share safe

---

# SECTION 2 — PROBLEM STATEMENT (BENTO GRID)

Title:

Thinking is the slowest thing you do.

Sub:

Let AI do it in milliseconds.

---

Bento Cards (3 uneven cards)

1. Tall Card
   Title: Complex reasoning?
   Text: We handle layered logic, edge cases, and trick OAs.

2. Wide Card (with Mono Snippet)

```
Input:
Graph problem with constraints…

Output:
Optimized O(n log n) solution with explanation.
```

3. Square Card

Title: Interview pressure?
Text: Get calm, structured answers instantly.

---

# SECTION 3 — HOW IT WORKS (CLUELEY-STYLE SIMPLICITY)

Title:

Solve in 3 steps

Layout:

3 horizontal cards (desktop)
Swipe carousel (mobile)

Step 1:
Start Hiderview

Step 2:
Open your assessment

Step 3:
Get structured, optimized answers instantly

Each card:
Icon + short description
No long paragraphs

---

# SECTION 4 — UNDETECTABILITY (CLUELEY INSPIRED BLOCK)

Title:

No bots.
100% Invisible.

Split comparison Bento:

Left: Other AI tools

* Visible overlays
* Join as participant
* Trackable signatures

Right: Hiderview

* Runs locally
* Screen-share invisible
* Zero injected DOM
* No meeting bot presence

Add glowing divider line between them.

---

# SECTION 5 — PERFORMANCE STATS (BENTO METRICS)

Cluely-style stats block but darker + dev

Grid:

[ 300ms ] Response Time
[ 97% ] Accuracy on reasoning tests
[ 12+ ] Platforms supported
[ Real-time ] Adaptive context memory

Numbers animate upward on scroll.

---

# SECTION 6 — FEATURES (LARGE BENTO MATRIX)

6-card asymmetric grid

1. Lightning Fast Engine
2. Deep Reasoning Model
3. Fully Customizable Prompt Core
4. Code Optimizer
5. Context Memory Layer
6. Undetectable Runtime Architecture

Each card:

* Icon top left
* Heading
* 2-line description
* Glow on hover
* Subtle tilt (desktop)

---

# SECTION 7 — LIVE DEMO BENTO

Wide video placeholder card (16:9)

Text:

AI second brain for every assessment.

Keep space empty (as requested in filecite turn0file0).

Right side narrow mono card:

```
Q: Given a weighted graph…

A: Here's the optimal solution with explanation.
```

---

# SECTION 8 — PRICING (BENTO STACKED)

Layout:

Desktop:
Free (short)
Pro (tall)
Lifetime (medium)

Mobile:
Swipeable deck

---

Pricing Copy Upgrade

Free – $0
10 responses
Basic reasoning

Pro – $20/mo
Unlimited responses
Advanced reasoning engine
Priority updates

Lifetime – $100
All Pro features
Lifetime access
Dedicated support

Add:

Contact: +91 9007404054

Pro card glows.

---

# SECTION 9 — TESTIMONIALS (GLASS BENTO CAROUSEL)

Glassmorphism cards
Swipe-enabled mobile

Each card:
Name
Role
Quote

Small particle burst on slide change.

---

# SECTION 10 — FAQ (EXPANDABLE BENTO)

Accordion style
Smooth height animation

Questions:

Is Hiderview detectable?
Is it safe for OAs?
How fast is the response engine?
Does it support coding questions?

Placeholder answers allowed.

---

# SECTION 11 — FINAL CTA

Dark gradient background
Centered copy

Headline:

Ready to stop thinking manually?

CTA:

Start Free

Secondary:

Download for Windows

---

# SECTION 12 — FOOTER

Dense dev-style footer
Columns:

Product
Pricing
Support
Legal

Small glow icons

Copyright:
2026 Hiderview

---

# 6. ANIMATIONS

Use Framer Motion:

* Stagger children (0.15s)
* Fade + upward motion
* Glow intensifies on hover
* Subtle rotate 1.5deg

No heavy GSAP.

Mobile must stay 60fps.

---

# 7. MOBILE-FIRST REQUIREMENTS

Design from 320px up.

Rules:

* No hover-only interactions
* All CTAs minimum 48px height
* Bottom padding safe for thumb zone
* Swipeable testimonial + pricing
* Lazy load video
* <100kb JS initial bundle

---

# 8. PERFORMANCE TARGETS

Lighthouse Mobile:

Performance: 95+
Accessibility: 100
Best Practices: 100
SEO: 100

Image format: AVIF
Fonts preloaded
Dynamic imports for heavy sections

---

# 9. DIFFERENTIATION FROM CLUELY

Cluely:
Clean, soft, meeting-notes focused.

Hiderview:
Dark, powerful, dev-tool aesthetic.
More intense.
More technical.
More high-performance.

---

# 10. FINAL DELIVERABLE TO AI IDE

Generate:

Next.js 14 App Router project
TypeScript
Tailwind with custom theme
shadcn/ui base
Framer Motion animations
Mobile-first
Bento grid components reusable

Reference:

* DesierAI layout 
* Cluely visual structure 
* inference.sh styling assets

---

If you want next, I can:

* Write the **actual homepage copy in final polished format**
* Generate the **Tailwind config theme**
* Or produce a **component-level technical PRD for your dev team**

Your move.
