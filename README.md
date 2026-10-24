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

The resume facts, experience, education, and contact details share:

```text
src/resume-data.json
```

The main hero/contact layout lives in:

```text
src/App.tsx
```

## Resume

The current resume is stored as:

```text
public/resume.pdf
```

The page preview and downloadable resume use the same JSON source. After editing `src/resume-data.json`, regenerate both the PDF and plain-text download:

```powershell
python -m pip install -r scripts/requirements-resume.txt
python scripts/generate-resume.py
```

This updates `public/resume.pdf`, `public/resume.txt`, and the final deliverable at `output/pdf/Sateesh-Anangi-Frontend-Engineer-Resume.pdf`. Keep these generated files synchronized with content changes.

The portfolio uses brief entrance animations and interactive project previews. The pause control persists locally and operating system reduced-motion preferences are respected. Project case studies use a native dialog for keyboard containment and Escape dismissal.

For application targeting and the research behind these changes, see [RECRUITER-STRATEGY.md](RECRUITER-STRATEGY.md).

## Sharing assets

`public/favicon.svg` and `public/social-preview.png` supply the monogram and sharing card. To regenerate the card, install Pillow (`python -m pip install Pillow`) and run `python scripts/generate-social-preview.py`.

After choosing the public domain, replace the relative social-image paths in `index.html` with absolute URLs and add the canonical URL. Verify the deployed sharing preview on the actual destination platform. No deployment is performed by the local build.

## Suggested future updates

- Add the final ResolveAI production URL when the domain is finalized.
- Add one or two screenshots for ResolveAI and Aavtor AI.
- Add an Open Source section after your first meaningful contribution.
- Add GitHub activity only if it stays active and relevant.
- Add FastAPI/RAG/agent skills to `Hands-on` or `Production` only after you can explain and demonstrate them.
