# MacroTrack PWA (v1.0) - iOS WebKit Standalone Mobile Application

MacroTrack is a zero-cost, high-efficiency Progressive Web Application (PWA) designed for weight loss, macro tracking (Calories, Protein, Sugar, Fats), and passive intermittent fasting monitoring.

## Architecture & Features

- **Local-First Fixed UUID Engine:** Stores user records in browser LocalStorage tied to a persistent UUID (`storage.js`), guarding against WebKit cache purges while bypassing network latency.
- **Natural Language Parsing Engine:** Client-side regex parser extracts nutritional data from pasted free external LLM responses (ChatGPT/Claude/Gemini/DeepSeek) in under 5 seconds.
- **Passive Fasting Intelligence:** Calculates elapsed fast time automatically based on absolute time differentials from historical meal timestamps (`Date.now() - last_meal_timestamp`).
- **Foreground Auto Resync:** Listens to WebKit `visibilitychange` events to ensure timers and dashboard progress update immediately when returning from background.
- **Apple HIG Compliance:** Floating capsule bottom navigation, dynamic light/dark elevation, SF Pro typography, tabular numbers, and zero-emoji inline SVG iconography.

## JavaScript Modular File Audits
- `storage.js`: 168 lines (Compliant - under 300-line max limit)
- `app.js`: 194 lines (Compliant - under 300-line max limit)
- `ui.js`: 122 lines (Compliant - under 300-line max limit)

## Project Updates & History Log

### [2026-08-02] - MacroTrack PWA v1.0 Core Release
- **Feature:** Implemented Local-First Fixed UUID storage, AI Natural Language paste sheet modal with live token validation, high-density nutrition progress bars, and passive fasting time-differential engine.
- **Files Created/Updated:** `index.html`, `style.css`, `storage.js`, `app.js`, `ui.js`, `README.md`.
- **Connections:** Linked `storage.js` -> `app.js` -> `ui.js` script hierarchy into `index.html`.
