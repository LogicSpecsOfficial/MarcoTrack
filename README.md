# iOS PWA Standalone Mobile Web Application

High-performance, iOS Apple Human Interface Guidelines (HIG) compliant Progressive Web Application built with vanilla HTML5, CSS3, and JavaScript.

## Architecture Highlights
- **Safe Area Insets:** Full compliance with `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` for Dynamic Island and home bar clearance.
- **Floating Capsule Bar:** Backdrop blur floating bottom navigation bar with active scaling states.
- **Action Sheet Component:** Drag-and-swipe dismissible bottom sheet modal.
- **Modular JS:** Enforces a strict 300-line maximum per script file for maintainability.
- **SVG Iconography:** Vector SVG graphics used throughout (zero emojis).

## Project Updates & History Log

### [2026-08-02] - Baseline Architecture Initialization
- **Feature:** Established baseline iOS PWA WebKit structure.
- **Files Initialized:** `index.html`, `style.css`, `app.js`, `ui.js`, `README.md`.
- **Connections:** Linked `app.js` (Navigation and PWA Status) and `ui.js` (Swipe gesture interactions) into `index.html`.
