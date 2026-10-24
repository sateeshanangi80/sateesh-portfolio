# Sateesh Anangi — Portfolio

A responsive developer portfolio built with React, TypeScript and Vite.

## Positioning

This portfolio deliberately separates:

- **Production skills** — skills already used in professional work.
- **Hands-on skills** — technologies currently being used in the ResolveAI POC.
- **Building next** — AI/backend capabilities planned for ResolveAI, shown as a roadmap rather than claimed production expertise.

That makes the site easy to keep current as ResolveAI evolves.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository such as `sateesh-portfolio`.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Where to update content

Most content is centralized in:

```text
src/data.ts
```

Update that file when you:

- complete a ResolveAI milestone,
- add Python/FastAPI,
- implement RAG,
- contribute to open source,
- add another project,
- change your role or experience.

The main hero/contact content lives in:

```text
src/App.tsx
```

## Resume

The current resume is stored as:

```text
public/resume.pdf
```

Replace that file with a newer PDF later and the Resume buttons will automatically serve the new version.

## Suggested future updates

- Add the final ResolveAI production URL when the domain is finalized.
- Add one or two screenshots for ResolveAI and Aavtor AI.
- Add an Open Source section after your first meaningful contribution.
- Add GitHub activity only if it stays active and relevant.
- Add FastAPI/RAG/agent skills to `Hands-on` or `Production` only after you can explain and demonstrate them.
