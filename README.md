# Kris Sipri — Software Engineer & Systems Architect Portfolio
### Engineered & Made with ❤️ by [QuolyTech](https://quolytech.com)

A high-performance, ultra-smooth portfolio website built with **React 19**, **Vite**, and **Lenis** smooth momentum scrolling.

---

## 📌 Project Overview & Origins

This project was built on **October 3, 2026**.

- **Design Inspiration & Source**: The visual layout, micro-interactions, and aesthetics were originally adapted from Perry Wang's award-winning 2023 portfolio ([`https://perryw-2023.webflow.io/`](https://perryw-2023.webflow.io/)).
- **Re-engineering & Transformation**: 
  - Originally built on Webflow, the entire site was re-engineered from the ground up as a modern, decoupled **React 19** single-page application (SPA).
  - Tailored specifically for **Kris Sipri**, a passionate **Software Engineer & Systems Architect**, with branding and craft by **QuolyTech**.
  - All original 600+ assets (retina images, SVGs, noise textures, and custom **PP Neue Montreal** fonts) were localized into `/public` for 100% self-contained, lightning-fast rendering.

---

## ✨ Features & Interactive Details

1. **Interactive 3D macOS Hero Window**:
   - Responds dynamically to mouse coordinates with real-time `rotateX`, `rotateY`, and `perspective(1000px)` 3D tilt.
   - Interactive glare sheen reflection (`.shine-small` & `.shine-big`) that moves across the glass surface.
   - Mac-style traffic light window controls (`red`, `yellow`, `green`).
   - Editorial serif accent typography (`Gloock`) paired with modern sans-serif (`Neue Montreal`).

2. **Unified Navigation & Back Button (`Navbar.jsx`)**:
   - **Main & Info Pages**: Displays the logo `Kris Sipri / Software Engineer` in crisp `#ffffff` Neue Montreal typography (fixed against browser visited-link discoloration) and a sliding pill indicator between "Work" and "Info".
   - **Case Study Pages**: Seamlessly transforms the left logo area into a dedicated **`← Back`** button with zero visual overlap or collision.
   - **Direct CV Download**: Includes a prominent glassmorphic **"Download CV"** button that downloads `Kris_Sipri_CV.pdf`.

3. **Smooth Momentum Scrolling (`SmoothScroll.jsx`)**:
   - Powered by **Lenis** for 60fps buttery-smooth momentum scrolling across all pages.
   - Browser default scrollbars are hidden while preserving full keyboard, mouse, and trackpad navigation.

4. **Software Engineering Case Studies**:
   - **Stadia Bluetooth & IoT Gateway**: Reverse-engineering WebBluetooth & WebUSB APIs, custom client-side firmware flashing, and hardware packet decoding.
   - **Test Hub Next — Cloud QA Runner**: Distributed test execution orchestrator with real-time WebSockets and streaming state replication.
   - **Spotlight — WebRTC Streaming Protocol**: Real-time peer-to-peer video synchronization engine with Redis Pub/Sub backbones.
   - **Corporate Cards Financial Portal**: High-throughput transaction ledger interfaces and micro-frontend banking infrastructure.

5. **Info & Experience Hub (`Info.jsx`)**:
   - Editorial studio portrait of Kris Sipri at an engineering workstation.
   - Deep dive into software engineering philosophy, system architecture, and QuolyTech leadership.
   - Complete technical stack breakdown (TypeScript, Python, Go, Rust, React, Node.js, Docker, Kubernetes, AWS).
   - Dedicated "Download Full CV (PDF)" action chip.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM v7
- **Bundler & Dev Server**: Vite 8
- **Smooth Scroll**: Lenis
- **Styling**: Vanilla CSS with curated Design Tokens (PP Neue Montreal, Gloock, Albert Sans, JetBrains Mono)
- **Deployment Ready**: Optimized for Vercel, Netlify, or GitHub Pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/orivojka-eng/kris-sipri-portfolio.git
cd kris-sipri-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open `http://localhost:5174/` in your browser.

### 4. Build for production
```bash
npm run build
```
The production bundle will be generated in `/dist`.

### 5. Preview production build
```bash
npm run preview
```

---

## 📂 Project Structure

```
portfolio-e-krisit/
├── public/
│   ├── Kris_Sipri_CV.pdf          # Downloadable CV file
│   ├── fonts/                     # PP Neue Montreal (all weights)
│   └── images/                    # Localized retina assets, icons, textures
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Top pill nav, dynamic back button, CV download
│   │   ├── HeroWindow.jsx         # 3D interactive tilt macOS window
│   │   ├── ProjectCard.jsx        # Project card with glare and hover animation
│   │   ├── LoadingOverlay.jsx     # Initial preloader overlay
│   │   ├── SmoothScroll.jsx       # Lenis momentum smooth scrolling provider
│   │   └── Footer.jsx             # QuolyTech footer and social links
│   ├── pages/
│   │   ├── Home.jsx               # Work page with hero and 4 project cards
│   │   ├── Info.jsx               # About / Bio / Tech stack / Experience
│   │   ├── StadiaBluetooth.jsx    # WebBluetooth & Firmware case study
│   │   ├── TestHubNext.jsx        # Cloud QA runner case study
│   │   ├── Spotlight.jsx          # WebRTC watch party case study
│   │   ├── CorporateCardsPortal.jsx # FinTech banking portal case study
│   │   └── NotFound.jsx           # 404 page
│   ├── styles/
│   │   ├── portfolio.css          # Design system & core layout
│   │   ├── locomotive.css         # Locomotive / Lenis scroll container styles
│   │   └── custom.css             # Micro-animations, typography, and fixes
│   ├── App.jsx                    # Route definitions and layout wrapper
│   └── main.jsx                   # React 19 root mounting
├── index.html                     # HTML5 entry with meta tags and Google fonts
├── vite.config.js                 # Vite configuration
└── package.json                   # Project metadata and dependencies
```

---

## 📄 License & Credits

- **Engineer**: Kris Sipri
- **Crafted By**: [QuolyTech](https://quolytech.com)
- **Original Design Inspiration**: [Perry Wang](https://perryw-2023.webflow.io/)
