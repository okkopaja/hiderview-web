

You are a senior product designer + frontend engineer.

Refactor the existing landing page into an **agency-level, high-conversion marketing site**.

⚠️ IMPORTANT CONSTRAINTS:

* Do NOT change core copy significantly.
* Do NOT change functionality.
* Do NOT change pricing structure.
* This is strictly a UI/UX + visual identity + motion refactor.
* Preserve layout hierarchy and content structure.
* Improve clarity, polish, depth, and perceived sophistication.

---

# 1️⃣ Brand Direction

## ❌ REMOVE

* Blue/purple gradient backgrounds
* Generic “AI SaaS” glow effects
* Neon gradient buttons
* AI-slop tech aesthetic
* Glassmorphism blur overload

## ✅ NEW COLOR SYSTEM

Primary palette:

* White: `#FFFFFF`
* Deep Black: `#0A0A0A`
* Near Black: `#111111`
* Mid Gray: `#1C1C1C`
* Light Gray: `#F5F5F5`
* Accent Burnt Orange: `#C53B00`

Use HSL variations of black and white to create depth:

* Section background alternation (very subtle)
* Soft elevation shadows
* Layered panel contrast
* Hairline borders (1px rgba white 5–8%)

No gradients unless extremely subtle and neutral.

The accent color `#C53B00` should be used:

* Primary CTA buttons
* Hover states
* Micro accents
* Underlines
* Small visual separators
* Icons (sparingly)

This should feel like:

* High-end dev tooling
* YC-backed startup
* Notion × Linear × Stripe × inference.sh × cluely.com

---

# 2️⃣ Visual Philosophy

Tone:

* Confident
* Minimal
* Technical
* Controlled
* Premium
* Intentional whitespace
* Strong typography

Avoid:

* Over-decoration
* Visual noise
* Overly rounded blobs
* Playful SaaS illustration vibes

Think:

* Structured grid
* Precision spacing
* Sharp layout rhythm
* Typography-driven design

---

# 3️⃣ Typography System

Implement strong typographic hierarchy:

Headings:

* Tight letter-spacing
* Slightly condensed feel
* Large scale hero (clamp responsive)
* Bold weight (600–700)

Body:

* Clean sans-serif
* 16–18px base
* Strong contrast
* Increased line-height for breathing room

Use accent color only for:

* Important keywords (e.g., “Undetectable AI”, “100% Invisible”, “Engineering Superiority”)
* Underlines instead of color blocks where possible

Introduce subtle:

* Section dividers
* Numbered sections with thin lines
* Structured content alignment

---

# 4️⃣ Layout Refactor Instructions

## HERO SECTION

Replace gradient background with:

* Pure white OR deep black split layout
* Two-column layout
* Left: strong typographic block
* Right: interactive product demo container

Enhance demo container:

* Add subtle depth (soft shadow + border)
* Use faint grid texture background (low opacity)
* Add subtle animated cursor typing effect
* Add animated scan-line sweep (very subtle, 4% opacity)

CTA:

* Primary: Solid `#C53B00`
* Secondary: Ghost button with 1px black border

Add subtle hover:

* TranslateY(-2px)
* 150ms cubic-bezier ease

---

## METRICS SECTION (60,000+ / 99.9%)

Convert into:

* Horizontally spaced metric strip
* Strong typography
* Thin divider lines
* Subtle scroll-trigger fade-up animation

No cards. Just confident typography.

---

## FEATURES SECTION

Instead of floating gradient cards:

Create:

* Structured grid
* Clean bordered cards
* Sharp edges (8px max radius)
* Thin hairline border
* Slight hover elevation

On hover:

* Border color → #C53B00
* Slight lift
* Subtle icon animation

Icons:

* Monochrome
* Stroke-based
* Animate stroke-draw using Lottie

---

## "Solve in 3 Steps"

Make this feel procedural:

* Horizontal stepper layout
* Thin connecting line
* Step number in outlined circle
* On scroll:

  * Step fades in
  * Connecting line animates width

Accent color only for active step highlight.

---

## "No bots. 100% Invisible."

Turn into a high-contrast split comparison section:

Left:

* Soft gray background
* Red accent for negative traits (desaturated)

Right:

* White background
* Accent orange ticks
* Strong confident typography

Add:

* Subtle animated cross → tick morph Lottie animation

---

## ENGINEERING SUPERIORITY SECTION

Convert into:

* Clean feature grid
* Minimalist icon tiles
* Strong technical documentation vibe

Add hover:

* Underline slide animation
* Icon stroke animation
* Slight scale transform (1.02 max)

---

## PRICING SECTION

Refactor to:

* Clean white cards
* Strong black borders
* Subtle shadow
* Highlight Pro plan with:

  * Slightly thicker border
  * Top badge in #C53B00
  * No glow

Buttons:

* Solid accent color
* Sharp typography

No gradient pricing cards.

---

## TESTIMONIALS

Make:

* Minimal black cards on white
* Or white cards on light gray
* Strong name emphasis
* Company muted

Add subtle:

* Star rating fade-in
* Horizontal scroll snap on mobile

---

## FINAL CTA

Full-width black section:

* White text
* Accent underline animation
* CTA in #C53B00

Add subtle:

* Background animated grain (very subtle)
* 3% noise overlay

---

# 5️⃣ Motion & Lottie Requirements

Create and integrate Lottie animations for:

1. Subtle cursor typing animation in hero
2. Scan detection line sweep
3. Cross → check morph animation
4. Feature icon stroke draw animation
5. Subtle button micro-interaction pulse (not scale bounce)

All animations:

* Minimal
* Professional
* Fast (200–600ms)
* Non-distracting
* Trigger on scroll or hover

No cartoon motion.

Use:

* IntersectionObserver for reveal animations
* 60fps smooth transforms
* GPU-accelerated transitions

---

# 6️⃣ Micro-Interactions

Add:

* Button hover depth
* Section fade-in on scroll
* Subtle parallax (very minimal)
* Link underline slide animation
* Cursor tracking glow (extremely subtle, 2% opacity, accent color)

No dramatic effects.

---

# 7️⃣ Depth & Texture

Introduce subtle depth via:

* Hairline borders
* Soft drop shadows
* Very subtle background noise texture
* Section background alternation (#FFFFFF vs #F8F8F8)
* Grid overlays at 2% opacity

This must feel crafted, not template-based.

---

# 8️⃣ Responsive Behavior

Mobile:

* Strong typography scaling
* Proper spacing rhythm
* Stepper becomes vertical timeline
* Pricing stacks cleanly
* Remove unnecessary animation on low-power devices

---

# 9️⃣ Performance Rules

* No heavy gradients
* No giant blurred blobs
* Lottie optimized JSON only
* Avoid layout shifts
* Lighthouse 95+ target

---

# 🔟 Final Outcome Goal

The result should feel like:

* A funded YC startup
* A developer-first premium product
* Clean
* Controlled
* Technically sharp
* Confident
* Not trying too hard

It should not feel like:

* Generic AI SaaS template
* Webflow gradient startup
* Dribbble concept without structure

---

# Deliverables

1. Updated design system (colors, spacing, typography tokens)
2. Updated component system
3. Motion implementation
4. Lottie JSON integrations
5. Clean, maintainable layout structure
6. Dark/light mode consistency (optional but clean)

---

Transform this page from:
“Vibe-coded AI landing page”

Into:
“Precision-engineered product marketing system.”

Do not simplify. Elevate.
