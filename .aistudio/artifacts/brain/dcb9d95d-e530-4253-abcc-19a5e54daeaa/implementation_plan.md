# Interactive Collaborative-Builder Portfolio for Krishna Karki

A distinctive, high-performance portfolio website for **Krishna Karki** (AI Trainer & Digital Marketing Expert), inspired by the neo-brutalist scrapbook aesthetic of the reference design. As visitors load the page and scroll, animated collaborative cursors with developer tags dynamically build the website before their eyes—placing washi tape, snapping wireframes into components, typing titles, and stamping badges—with full bi-directional scroll synchronization, replay controls, and interactive showcase modals.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The architectural direction integrates your confirmed choices from Phase 1:
> - **Simulated Cursors**: Minimal colored arrow cursors with developer tags (e.g., `Krishna // Lead`, `Alex // Frontend`, `Maya // Motion`, `Nova // AI Automation`).
> - **Construction Controller**: Bi-directional scroll-driven animation paired with a persistent floating HUD (Play/Pause auto-builder, 0–100% construction scrubber, and 1-click Replay).
> - **Career Positioning**: Balanced hybrid spotlighting both AI training / workflow automation and data-driven digital marketing / technical web engineering.

- **Confirmed Decision 1**: Authentic scrapbook paper-craft design matching the reference image (graph paper grid background `#F7F6F2`, dark borders `#171717`, washi tape strips, polaroids with tilt, retro sticky notes, and tactile box shadows).
- **Confirmed Decision 2**: Bi-directional construction engine utilizing Framer Motion / Motion with scroll-linked progress and virtual cursor choreography, allowing reverse scrolling to peel back or deconstruct sections smoothly without layout shifting.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Krishna Karki's professional profile, experience, skills, certifications, and contact channels through an engaging visual metaphor: a digital studio canvas being assembled in real-time by collaborative builder cursors.
- **Target Audience**: Prospective employers, training institutes, business clients seeking AI workflow consulting or digital marketing campaigns, and students looking for AI training.
- **Key Value**: Demonstrates deep technical agility, creative presentation, and real-world results through an interactive experience that stands out from generic developer portfolios.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Landing & Cursor Genesis**: 
   - On initial page load, the canvas begins in a light drafting grid state.
   - 4 colored collaborative cursors spawn with fluid motion paths.
   - Cursors drag in the top navigation bar, tape down the hero tags, position the polaroid photo, and type out "KRISHNA KARKI".
2. **Scroll-Driven Construction**:
   - As the visitor scrolls down, cursors race ahead:
     - Cursors draw bounding boxes that pop into the **About Me Dossier** and sticky note pins.
     - Cursors snap project cards into place with sound-less visual stamps (`SAK Digital University`, `SAAS Technology Nepal`, `Origin Youths`, etc.).
     - Cursors assemble the **Skills & Certifications Bento Matrix** and **Interactive Playground**.
   - When the visitor scrolls upward, the animation reverses gracefully, maintaining complete spatial stability.
3. **Floating Construction Controller HUD**:
   - Fixed minimal pill dock at the bottom-right:
     - Play / Pause auto-construction sequence.
     - Progress scrubber (0% to 100%) showing live build stage.
     - Quick "Instant Build" toggle for visitors who want immediate static browsing.
     - Replay button with smooth reset.
4. **Interactive Exploration**:
   - **Work Experience & Project Modals**: Clickable case studies with metrics (+47% faster lead planning, -55% turnaround), technology tags, and key responsibilities.
   - **Interactive Playground / AI Prompt Stamping Tool**: A fun retro interactive widget where users can test prompt workflows and stamp custom feedback stickers on the canvas.
   - **Contact & CV Download**: Direct access to downloadable CV (`krishnakarki_cv__9060d75c.pdf`), email, WhatsApp/phone link, and interactive inquiry form.

### Visual Identity & Theme (Reference Inspired)
- **Palette**:
  - Canvas: Warm tactile paper cream (`#FAF9F5`) with subtle drafting grid (`#E5E3DC`).
  - Ink & Outlines: Crisp high-contrast graphite black (`#18181B`).
  - Scrapbook Accents: Canary yellow (`#FDE047`), Washed mint (`#A7F3D0`), Soft bubblegum pink (`#FBCFE8`), Electric cobalt (`#2563EB`), and Muted lavender (`#E9D5FF`).
  - Washi Tape & Stickers: Semi-transparent matte strips with angled tear edges and subtle dropshadows (`shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`).
- **Typography**:
  - Brand & Hero Display: Heavy architectural grotesque (`Bricolage Grotesque` / `Plus Jakarta Sans` 800 weight, uppercase with tight letter spacing).
  - Editorial & Accent Notes: Expressive monospace/hand-feel font for sticky notes ("what's up", "SWEAT THE DETAILS", "LET'S TALK").
  - Body Text: High-legibility modern sans (`Plus Jakarta Sans` 400/500, 15px, 1.6 line height).
  - Metadata & Telemetry: Monospace tabular numerals (`font-mono tabular-nums`).

---

## 3. Technical Architecture & Data Strategy

### System Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App.tsx (Root Layout)                           │
│  - Drafting Grid Background & Global Theme State                       │
│  - Scroll Position & Construction Stage Coordinator (useScroll)        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┴───────────────────────────┐
       ▼                                                        ▼
┌───────────────────────────────┐        ┌───────────────────────────────┐
│ CollaborativeCursorOverlay    │        │ ConstructionControllerHUD     │
│ - 4 Virtual Cursors (SVG)     │        │ - Play / Pause / Replay       │
│ - Name Tags & Tool Indicators │        │ - Build Stage Scrubber (0-100)│
│ - Spline / Spring Trajectories│        │ - "Instant Complete" Toggle   │
└───────────────────────────────┘        └───────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         Portfolio Sections                             │
│                                                                        │
│ 1. BrowserTopBar (Retro tabs: Home, About, Work, Skills, Contact)      │
│ 2. HeroSection (Taped badges, title reveal, polaroid photo, quick CTA) │
│ 3. AboutDossier (Sticky notes, career summary, bio, stats)             │
│ 4. ExperienceWorks (SAK Digital, Easy Way, SAAS Tech, NISMA, Origin)  │
│ 5. SkillsMatrix (AI marketing, automation, backend Node.js, SEO)       │
│ 6. CertificationsGrid (HP Life, AMD AI Academy, Claude 101, SAKDU)    │
│ 7. InteractivePlayground ("Just For Fun" prompt stamps & sticky wall)  │
│ 8. ContactSection ("Let's Talk" card, smiley stamp, interactive form)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ ProjectDetailModal & CV Drawer (High-density case study views)         │
└────────────────────────────────────────────────────────────────────────┘
```

### Key Technical Implementation Details
1. **Multi-Cursor Motion Engine**:
   - Custom choreography hook `useCursorChoreography` computes target positions $(x, y)$ for 4 distinct cursors (`Alex`, `Maya`, `Nova`, `Krishna`) tied directly to normalized scroll progress `scrollYProgress` $[0, 1]$ or auto-play timer ticks.
   - Cursors use hardware-accelerated CSS `transform: translate3d(x, y, 0)` with spring damping to avoid lag and ensure 60fps performance on mobile and desktop.
2. **Bi-directional Scroll Triggers**:
   - Each section wrapper listens to scroll thresholds; as cursors "arrive", child elements transition from blueprint outlines (`border-dashed opacity-40`) to colored, textured, taped components.
   - Reversing scroll reverts elements naturally without DOM mutations or jumpy layout recalculations.
3. **Asset Handling**:
   - Direct integration of local user CV attachment at `/public/assets/aistudio/krishnakarki_cv__9060d75c.pdf` for view and download.
   - Design reference inspiration faithfully reflected from `/public/assets/aistudio/image_f01cd636.png`.

---

## 4. Planned Execution Steps

1. **Setup & Styling Tokens**:
   - Update `metadata.json` and `index.html` with title "Krishna Karki — AI Trainer & Digital Marketing Portfolio".
   - Configure custom font imports (`Bricolage Grotesque`, `Plus Jakarta Sans`, `JetBrains Mono`) and retro scrapbook styling in `src/index.css`.
2. **Construction & Cursor Engine**:
   - Build `CollaborativeCursorOverlay` and `ConstructionControllerHUD` with smooth coordinate calculation and responsive bounds.
3. **Core Sections Development**:
   - Implement `BrowserTopBar`, `HeroSection`, `AboutDossier`, `ExperienceWorks`, `SkillsMatrix`, `CertificationsGrid`, `InteractivePlayground`, and `ContactSection`.
4. **Modal & Interactive Polish**:
   - Add detailed case study inspection modal, interactive prompt stamping widget, and functional contact form with copy utilities.
5. **Compilation & Testing**:
   - Verify build with `compile_applet` and perform cross-viewport accessibility and performance checks.
