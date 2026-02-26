

You are a senior product designer and frontend engineer.

Your task is to **refine and elevate the existing LIGHT MODE UI** of this landing page so that it matches the premium, engineered feel of the DARK MODE — without changing layout structure, spacing system, or content hierarchy.

The dark mode already feels elite, high-tech, and intentional.
The light mode currently feels flat, bland, and template-like.

Do NOT redesign sections.
Do NOT change layout grid.
Do NOT change copy.
Only improve visual depth, layering, contrast, and polish.

---

# 🎯 OBJECTIVE

Make light mode feel:

• Premium
• Engineered
• Confident
• Layered
• Visually dynamic
• Not generic SaaS

It should feel like a deliberate design — not a color inversion of dark mode.

---

# 1️⃣ Background System Upgrade (Critical)

Right now everything sits on nearly identical whites.

Introduce a layered background system:

Use tonal whites:

* Primary background: `#ffffff`
* Alternate section background: `#fafafa`
* Soft neutral layer: `#f6f6f6`
* Subtle contrast layer: `#f2f2f2`

Alternate major sections slightly to create separation.

DO NOT make contrast obvious. It must be subtle and premium.

---

## Add Ambient Gradient (Very Subtle)

Add a faint radial ambient glow behind the hero:

Example:

```css
background: radial-gradient(
  circle at 15% 10%,
  rgba(255, 120, 40, 0.06),
  transparent 40%
);
```

This must be barely visible.
It should create atmosphere, not distraction.

---

# 2️⃣ Card Elevation & Depth

Current issue: Cards look flat and border-only.

Replace small shadows with large, soft shadows:

Instead of:

```
shadow-sm
```

Use something like:

```
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
```

For hover:

```
transform: translateY(-4px);
box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
```

Cards should feel like floating panels, not outlined rectangles.

Remove overly visible borders where shadow provides separation.

---

# 3️⃣ Typography Contrast Fix

Increase contrast hierarchy.

Headings:

* Use near-black: `#0f0f0f`
* Increase weight slightly if needed

Body text:

* Use `#444` or `#333`
* Avoid overly light greys

Muted text:

* `#666` max — not lighter

Ensure strong separation between:

* H1
* H2
* Body
* Metadata

Light mode must feel confident — not washed out.

---

# 4️⃣ Accent Color Calibration

The orange works well in dark mode but feels generic in light.

For light mode:

* Slightly deepen the orange tone
* Or reduce brightness by 5–8%

Make CTA buttons feel bold and intentional.

Primary CTA:

* Strong orange background
* Large soft shadow glow:

  ```
  box-shadow: 0 12px 40px rgba(255, 100, 30, 0.25);
  ```

Hover:

* Slight brightness increase
* Subtle lift

Buttons must feel premium and clickable.

---

# 5️⃣ Section Separation Improvement

Currently sections blend together.

Implement one of these systems:

Option A (Preferred):
Alternate backgrounds subtly every 1–2 sections.

Option B:
Add subtle top/bottom dividers:

```
border-top: 1px solid rgba(0,0,0,0.04);
```

Spacing rhythm must feel intentional.

---

# 6️⃣ Feature Cards (Engineering Superiority Section)

Make these feel more dimensional:

* Add soft inner highlight gradient
* Slight background tint (`#ffffff` on `#fafafa`)
* Increase icon prominence slightly
* Add subtle hover interaction

Icons should not look faint — increase contrast slightly.

---

# 7️⃣ Pricing Section Enhancement

This is a key conversion area.

For the highlighted plan:

* Stronger elevation
* Slight scale (1.02)
* Soft orange glow border
* More dramatic shadow

Make it clearly dominant but tasteful.

Free and Lifetime:

* Slightly reduced opacity contrast
* Softer shadows

Hierarchy must be obvious instantly.

---

# 8️⃣ Testimonials Section

Improve visual hierarchy:

* Increase card depth
* Add very subtle gradient overlay
* Improve rating star contrast
* Add stronger separation between testimonial cards

Avoid flat grid look.

---

# 9️⃣ Footer Improvement

Current issue: Feels empty and flat in light mode.

Improve by:

* Slight tinted background (#f7f7f7)
* Slight top divider
* Increase contrast in headings
* Keep body text muted but readable

The footer should feel like a deliberate ending — not a fade out.

---

# 🔟 Micro-Interactions

Add subtle motion:

Cards:

```
transition: all 0.25s ease;
```

Buttons:

* Slight lift
* Slight shadow increase

Nothing aggressive.
Everything must feel engineered and controlled.

---

# 🚫 DO NOT

* Do NOT increase clutter
* Do NOT add heavy gradients
* Do NOT change layout
* Do NOT add glassmorphism
* Do NOT overuse borders
* Do NOT increase orange usage everywhere

This must feel refined and restrained.

---

# 🧠 DESIGN PRINCIPLE TO FOLLOW

Dark mode works because of contrast and depth.

Light mode must work because of:

* Layering
* Elevation
* Section rhythm
* Strong typography hierarchy
* Subtle atmosphere

Think: Linear / Stripe / Vercel-level refinement.

---

# 🎯 END RESULT

After implementing:

The light mode should feel:

* As intentional as dark mode
* As premium as dark mode
* Less flat
* More dimensional
* More memorable
* More engineered

It should no longer feel like “dark mode inverted”.

---

Now analyze the current light mode implementation and apply these refinements consistently across all sections.
