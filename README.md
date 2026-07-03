# COSMOQ - Automation and AI Agent Platform

A pixel-perfect, highly optimized clone of the **COSMOQ** landing page. Built as a modern, high-performance Next.js application leveraging React 19, Tailwind CSS v4, and Radix-based UI primitives.

## 🚀 Live Demo & Visuals

This project features a fully responsive, rich dark-themed design with smooth glassmorphism, ambient glow backdrops, and active micro-interactions.

- **Responsive Design**: Mobile-first fluid layout scaling from extra-small mobile viewports to ultra-wide displays.
- **Glassmorphic Panels**: Custom blur filters, border gradients, and subtle noise overlays for a premium aesthetic.
- **Micro-Animations**: Infinite scrolling marquee, interactive tabs, billing switcher toggle, and transition effects.

---

## ✨ Features Implemented

### 1. Navigation Header
* **Component**: `Navbar.tsx`
* **Details**: A sticky header with a backdrop filter (`backdrop-blur-md`) and responsive styling. Includes a mobile drawer menu toggle and animated hover states for all links.

### 2. Immersive Hero Section
* **Component**: `HeroSection.tsx`
* **Details**: 
  * Animated pulsing announcement badge ("Beta Version is launching...").
  * Main headline with modern OKLCH text gradients.
  * Embedded widescreen mockup video player featuring a noise grain/frost overlay.
  * Infinite scrolling marquee displaying partner/client logos with hover-to-pause behavior.

### 3. Exceptionalities Grid
* **Component**: `Exceptionalities.tsx`
* **Details**: A responsive card grid highlighting core values (*Speed, Deep Capabilities, Control, Flexibility*). Features dynamic column spanning (`col-span-3`/`col-span-6`) and scaling hover interactions.

### 4. Interactive Features Tab
* **Component**: `FeaturesSection.tsx`
* **Details**: Switchable tab system (*Usage, Technology, Data*). Selecting a tab smoothly updates the core copy, relevant labels/tags, and the showcased system mockup.

### 5. Product Verticals Showcase
* **Component**: `ProductsSection.tsx`
* **Details**: Vertical tab selector showcasing vertical use cases:
  * Process Automation
  * Healthcare
  * Marketing
  * Ecommerce
  * Development
  Each tab dynamically renders its core features, checklists, and high-fidelity mockups.

### 6. 3-Step Onboarding Workflow
* **Component**: `StepsSection.tsx`
* **Details**: A step-by-step walk-through grid. Large stylized index numbers are placed as ambient background elements behind each card, along with interactive checklist items.

### 7. Multi-Layer Security
* **Component**: `PrivacySection.tsx`
* **Details**: Detail-rich security section explaining data protection pillars. Features an mock dashboard screen and an animated compliance progress bar.

### 8. Integrations Grid
* **Component**: `IntegrationSection.tsx`
* **Details**: 
  * Grid of enterprise integrations (Slack, Salesforce, SAP, Confluence, Jira, Google Drive) with hover-responsive color recovery (grayscale transitions).
  * Main bottom Call-to-Action card with an overlay grid pattern and deep radial gradient glows.

### 9. Interactive Pricing Tier
* **Component**: `PricingSection.tsx`
* **Details**: 
  * Toggle switcher between **Monthly** and **Yearly** billing cycles (reflecting a 30% discount).
  * Interactive pricing cards (*Sonic, Supersonic, Hypersonic*) showcasing plans, checklist benefits, and primary/secondary button states.

---

## 🛠️ Tech Stack

* **Framework**: **Next.js 16** (App Router, React 19, TypeScript strict mode)
* **Styling**: **Tailwind CSS v4** + custom `@theme` utilities
* **Design Tokens**: Structured custom colors, dimensions, and gradients using OKLCH color spaces.
* **Component Primitives**: Radix-based shadcn/ui library
* **Animations**: `tw-animate-css` + native CSS `@keyframes` transitions

---

## 📂 Project Structure

```
src/
  app/              # Next.js App Router (Layouts, Global Styles, Main page)
    globals.css     # Global OKLCH variables, button components, and glassmorphism styles
    layout.tsx      # Main layout wrapper
    page.tsx        # Homepage importing and assembling all sections
  components/       # Modular page components
    ui/             # Reusable UI primitives (buttons, modals, etc.)
    Navbar.tsx      # Navigation component
    HeroSection.tsx # Hero & Partner Logo Marquee
    ...             # Other section components
    icons.tsx       # Custom SVG icon mappings
  lib/
    utils.ts        # Helper classnames consolidator (cn utility)
  types/            # TypeScript interfaces
  hooks/            # Reusable custom React hooks
public/
  images/           # Extracted media assets (PNGs, SVGs, MP4, WebPs)
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js installed on your system:
* **Node.js**: `v24` or higher is recommended

### Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

3. Run linting, type-checking, and build checks:
   ```bash
   npm run check
   ```

### Running with Docker

You can also run the application using Docker:

* **Development mode (on port 3001)**:
  ```bash
  docker compose up dev --build
  ```

* **Production mode**:
  ```bash
  docker compose up app --build
  ```

---

## 📜 License

This project is licensed under the MIT License.
