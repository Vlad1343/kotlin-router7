# Kotlin Homepage Migration (React Router 7 + SSR)

Migration of the legacy Kotlin homepage to **React Router 7 Framework Mode** with **server-side rendering**.

## Prerequisites

- Node.js 20+
- npm 10+

## Run Locally (Development)

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build and Run (Production SSR)

```bash
npm run build
npm run start
```

Open `http://localhost:3000`.

## Quick Verification

1. Run type checks:
```bash
npm run typecheck
```
2. Confirm SSR output exists: `build/server/index.js`.
3. Open the homepage and verify hydration/interactivity:
- "Why Kotlin" tabs switch correctly.
- "Kotlin Usage Highlights" sort toggles (Default / A-Z).
- Page stays interactive after first render.
