**Hiderview Inference.sh-Inspired PRD**

This PRD enhances the Hiderview frontend (DesierAI clone from file:1/file:3) with inference.sh's dynamic, production-agent theme from file:4 and image.jpg (file:2/file:5), keeping all original content/structure. It introduces hacky-sleek bento cards, precise font/color copies, lively animations, and uncompromising mobile-first design for fast, smooth mobile experiences. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)

## Theme Extraction
Pulled directly from inference.sh landing (file:4/image.jpg): Dark cosmic gradients, glowing edges, dev-tool vibes with agent runtime energy – no bland AI blues. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/97393381/0f5bc086-6619-48f5-96cd-9d5444b551ab/image.jpg)

- **Colors** (inferred from design/image):
  | Role | Primary | Secondary | Accent | Background | Text |
  |------|---------|-----------|--------|------------|------|
  | Values | #0F1419 (dark navy) | #1E3A8A (deep blue) | #3B82F6 (glow blue) | Gradient (#000000 to #0A0A0A) | #FFFFFF / #E5E7EB |

- **Typography** (exact copies):
  | Type | Family | Sizes (Mobile/Desktop) |
  |------|--------|------------------------|
  | Headings | Space Grotesk | H1: 2rem/4rem bold; H2: 1.5rem/2.5rem |
  | Body | DM Sans | 1rem / 1.125rem regular |
  | Code/Mono | DM Mono | 0.875rem medium (LeetCode snippets) |

- **Borders/Effects**: 8px radius, neon glow shadows (0 0 20px #3B82F6), glassmorphism (backdrop-blur). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)

## Mobile-First Principles
Design from 320px up: Fluid grids, thumb-zone CTAs (bottom-heavy), swipe interactions, <2s load (compress assets, code-split). Bento cards stack vertically on mobile, morph to asymmetric grids on desktop (e.g., 1-tall + 2-wide). Lighthouse mobile score: 100 perf/accessibility. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)

## Bento Card System
Core upgrade: All sections (features, pricing, testimonials) as inference.sh-style modular bento grids – uneven rectangles with inner glows, hover tilts. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)

- **Bento Specs**:
  - Sizes: Small (1x1), Medium (2x1), Large (1x2), Hero (full-span).
  - Animations: Staggered entrances (GSAP timeline), scale+rotate on hover.
  - Mobile: Single column swipeable (like inference.sh app grid). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)

| Section | Bento Layout (Desktop/Mobile) |
|---------|-------------------------------|
| Hero Features | 3x uneven (tall icon / wide desc / code) / Vertical stack |
| Why Choose | 2x3 grid (6 cards) / Swipe carousel |
| Pricing | Stacked towers (Pro tallest) / Tabs |
| Testimonials | Horizontal swipe row / Full-width carousel |
| How-To/FAQs | Zigzag timeline / Accordion bentos |

Video placeholder: Bento-wide <div> with play icon overlay. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/d62be5b7-bf81-42d7-b246-779c49ad06bc/screencapture-desier-in-2026-02-19-00_54_21.pdf)

## Section Enhancements
- **Navbar**: inference.sh topbar clone – logo left, links center (hamburger mobile), "Get Started" glow button. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)
- **Hero**: Dark gradient bg, pulsing "Trusted by 50k" badge, download buttons with neon borders. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)
- **Demo/Flow**: Agent-like graph viz (nodess for interviewer/candidate), Two Sum code in DM Mono bento. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/d62be5b7-bf81-42d7-b246-779c49ad06bc/screencapture-desier-in-2026-02-19-00_54_21.pdf)
- **Keyboard Shortcuts**: Terminal-style grid with keycaps. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)
- **Footer**: Dense links grid like inference.sh bottom nav. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)

## Interactivity & Liveliness
- **Hacky Touches**: Live code playground teaser in features, agent-trace lines connecting bentos, realtime pricing ticker (mock). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)
- **Animations**: Scroll-triggered reveals (every tool call glows like inference.sh traces), swipe-to-next on mobile testimonials. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)
- **Mobile Polish**: Haptic feedback on taps (if PWA), pull-to-refresh, offline manifest. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)

## Tech Implementation
- **Core**: Next.js 14+, Tailwind (inference.sh config: dark mode default), shadcn/ui bentos. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)
- **Fonts**: @import Space Grotesk, DM Sans/Mono (preload). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/97393381/0f5bc086-6619-48f5-96cd-9d5444b551ab/image.jpg)
- **Motion**: Framer Motion (gestures), Lenis smooth-scroll. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)
- **Mobile**: Tailwind sm/md/lg breakpoints, Capacitor PWA shell.
- **Perf**: Image optimization (AVIF), dynamic imports for heavy sections.
- **IDE Ready**: Full repo scaffold; reference files:1/3 (layout),4 (theme),2/5 (colors). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/97393381/71c4a43a-2a28-4a99-a925-5162340e2618/image.jpg?AWSAccessKeyId=ASIA2F3EMEYETWXSO4PM&Signature=zWnM30DVERoK5xPq1hohczngyqU%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCIEnHk16yo0lfbRnAW0D09bB08ooa7XwPvotsmCFELnAIgCKWT5fflPsaVcPxvHeaplp%2BF7IpuL5oBC6ip5eLT2mMq8wQIbxABGgw2OTk3NTMzMDk3MDUiDCIRablB9qHEnxRRDyrQBI1MUq4hr1zzlwF%2FrmLCaFhTh5aCe2ig1CSt7Zt1yrI%2FL3v0LNxXC8McR2YESsjBnVorgz63tNYLasZGnOjB1CAIEjHKVXyb4NkYbZ4yxwZikJQf89TtrZb1lDsTSHKWcny%2Fn%2BWa4biZbTs1zCeA9bUSi6zmk74g9SfqgefBob8ADo5CUSuuqaHdrJxzRdlNrSL594YKmnRgp9h2G0KTlphvzpngNKJoDA7R1dThtEAAFkGgWPKnDlhBN4dOR9SX20K0yImfgsHPKYtTDiDb9WjplRh7J5TDyKKxdYlmRSjVCkglFwPoK1s%2BN0YcHNtm89ePoh55ZGEHYw5ce%2BFU5QoKw0zXUsg95XdypPyeXb%2B3LX3phaDrVuoLqhSbv%2FSKpb%2BoMufzH7am9hB23egqHzVevhkL0bShmuOHiLz7IAEuY8mncAndJO25v8LFgveNDfAvQQaOQUsBMsLEgGkc3%2FA%2Fc1DQPHDHUjEI4vyW%2B3hnlrvvjEnblXSO%2F%2Fw0B9HY57ENaZzHwiiN95oAPEG3KSc5yJ5gSjpPHXmJb7fiyXgB7SdQtwjwr50133fzWCp6V5tSsHgM3L50s44uSYylg8XSyjQ9mVWUDQeGX%2F52cbkiydYeZJyC1q9PwXt0yLni3jJdYBjD6wUoNadAqBmx3tQn%2B37x0IBkY%2FkW7leXnqpP5hm9Jj6MuDFu15n5F6igvvJTX1SY9vUwWeesU%2BHBDHoeadGMqyVaFvDCIITTyeUiw7%2FkqzBbs9NjtTjzt%2B5hLhcvrIPTKJbZLvMFEsY6zXIwsObYzAY6mAHB%2Bp9SHn0CMdGULVF6YHhzSS30sO3iNAqljPGVRBlzBFIzAeewX%2FlWrrwHQlaYzIGYlznRTUFtljkhDKJiU6lDKN0%2Fg2TgbKA0tifxDMHTeopLfchIv7EKr%2Bq9uNTGwTf6ucrY0WKVjvu%2Fygo3e1V8SqsVeV2TnsrQ3iitsQ0ug9nuuM86Kh0XMUcogEkpMp%2FSqFVU5QgHzw%3D%3D&Expires=1771453638)

Generate pixel-perfect Hiderview with this inference.sh fusion – lively dev-tool aesthetic meets interview AI. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/97393381/c40c6b67-692c-48c7-a257-db87372589c9/inference.sh-landing-page.pdf)