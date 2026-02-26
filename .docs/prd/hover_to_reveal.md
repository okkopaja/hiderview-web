# 🎯 FEATURE TO IMPLEMENT

## Cluely-Style “Hover to Reveal” Comparison Slider

(Undetectable Split Screen Reveal Effect)

---

# 🧠 CONTEXT FOR AI IDE

We are implementing a **before vs after comparison slider** identical to Cluely’s effect:

Left side: “Other AI Notetakers”
Right side: “Hiderview”

The right side is initially partially hidden with a vertical draggable divider.
On hover + drag, the divider moves horizontally revealing more of the right side.

This must feel:

* Premium
* Smooth
* Frictionless
* High performance
* 60fps animation
* Mobile compatible (drag, not hover)

Assets are already provided in the IDE chat.

---

# 🏗️ IMPLEMENTATION SPEC

## Tech Stack

* Next.js 14 (App Router)
* TypeScript
* TailwindCSS
* Framer Motion (for smooth interaction)
* No heavy GSAP
* Must be mobile-first

---

# 📦 COMPONENT NAME

```
ComparisonRevealSlider.tsx
```

---

# 📐 STRUCTURE

The component should render:

```
<section>
  <div class="container">
    <div class="comparison-wrapper">
      <div class="left-panel" />
      <div class="right-panel" />
      <div class="divider" />
    </div>
  </div>
</section>
```

---

# 🎨 VISUAL LAYOUT

## Desktop Layout

* Large rounded container (24px radius)
* Subtle shadow
* Overflow hidden
* Relative positioning

Width: 100%
Max-width: 1200px
Height: 500–600px

---

# 🧩 PANEL BEHAVIOR

### Left Panel

Static background
Image: Other AI tool UI
Fully visible

### Right Panel

Position: absolute
Top: 0
Right: 0
Height: 100%
Width: controlled dynamically

Initial width: 50%

It must clip using:

```
overflow: hidden
```

---

# 🪄 DIVIDER BEHAVIOR

A vertical draggable line:

* 2px wide
* White with glow
* Positioned at current reveal percentage
* Cursor: ew-resize
* Has circular draggable handle in middle

Handle style:

* 40px circle
* Glassmorphism
* Subtle shadow
* Chevron icon inside

---

# 🖱️ INTERACTION LOGIC

## Desktop

* On hover: reveal slightly (55%)
* On mouse move: track X position relative to container
* Update right panel width dynamically
* Clamp between 5% and 95%

## Mobile

* No hover
* Drag enabled
* Touch events supported
* Smooth inertia-free movement

---

# 🧮 STATE MANAGEMENT

Use:

```
const [position, setPosition] = useState(50)
```

On pointer move:

```
const rect = container.getBoundingClientRect()
const percentage = ((clientX - rect.left) / rect.width) * 100
setPosition(clamp(percentage, 5, 95))
```

---

# 🧑‍🎨 STYLING REQUIREMENTS

Background:

Left panel:
Light gray gradient

Right panel:
Dark gradient (brand color)

Add subtle diagonal overlay pattern on right panel like Cluely:

```
background-image: repeating-linear-gradient(
  45deg,
  rgba(255,255,255,0.05),
  rgba(255,255,255,0.05) 10px,
  transparent 10px,
  transparent 20px
);
```

---

# ✨ ANIMATION REQUIREMENTS

* Use Framer Motion
* Animate divider smoothly
* No layout shift
* No jank
* Should feel hardware accelerated

Use:

```
style={{ width: `${position}%` }}
```

Add:

```
will-change: width
```

---

# 🏷️ LABELS

Top Left:
"Other AI Notetakers"

Top Right:
"Hiderview"

Subtext under titles:
Left:
"Joins as an invasive participant"

Right:
"Undetectable to screen share, visible only to you"

Use subtle check / cross icons.

---

# 🧱 ACCESSIBILITY

* Keyboard arrow support (← → adjust 1%)
* ARIA label:
  "Comparison slider"
* Focusable divider handle

---

# 📱 MOBILE ADAPTATION

If screen width < 768px:

* Height: 350px
* Larger handle (48px)
* Sticky hint text:
  “Drag to reveal”

---

# ⚡ PERFORMANCE RULES

* No re-renders on every pixel move (use ref if necessary)
* Avoid expensive calculations
* No console logs
* Must stay 60fps

---

# 📂 FILE STRUCTURE

Create:

```
/components/ComparisonRevealSlider.tsx
```

Import into:

```
app/page.tsx
```

Place under:

“100% Undetectable” section

---

# 🎯 EXACT USER EXPERIENCE TARGET

The user should:

1. Hover over the card
2. See the divider glow
3. Drag horizontally
4. Reveal the right side gradually
5. Experience buttery smooth movement
6. Feel premium interaction

---

# 🧠 EXTRA POLISH

Add:

* Subtle parallax tilt on hover (desktop only)
* Divider glow increases while dragging
* Slight elastic ease when released

---

# 🧪 TEST REQUIREMENTS

Must test on:

* Mac trackpad
* Windows mouse
* iPhone Safari
* Android Chrome

No jitter
No lag
No layout jumps

---

# 📌 FINAL DELIVERY

Deliver:

* Fully functional component
* Clean TypeScript
* Tailwind styled
* Production ready
* No placeholder logic

Do NOT simplify the effect.

It must match Cluely’s interaction behavior exactly —
but styled for Hiderview’s darker dev-tool aesthetic.

---

If you want next, I can:

* Write the full exact component code
* Or design an upgraded “Hiderview” version that looks even more premium than Cluely’s

Tell me which direction you want.
