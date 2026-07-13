# Publication Cards and Brief Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace publication-card prose with the six supplied research visuals and restructure each publication brief so a reviewer sees the paper metadata, visual route, summary, and abstract before the existing Method / System section.

**Architecture:** Keep the existing React, TypeScript, HashRouter, and editorial paper theme. Add card-visual metadata to publication entries, render it only on the Publications timeline, and extend publication case-study data with keywords, authors, abstract copy, paper URLs, and one or more header visuals. Project briefs continue to use the existing layout.

**Tech Stack:** React 19, TypeScript, React Router, Vite, CSS.

---

### Task 1: Add supplied publication visuals

**Files:**
- Create: `src/assets/case-studies/olympic-model-framework.png`
- Create: `src/assets/case-studies/olympic-host-effect.png`
- Create: `src/assets/case-studies/bamboo-connections-framework.png`
- Create: `src/assets/case-studies/robot-vision-detection.png`
- Create: `src/assets/case-studies/moe-timeline.png`
- Create: `src/assets/case-studies/bri-digital-economy.png`

**Steps:**

1. Copy the six user-supplied images into the case-study asset directory with semantic names.
2. Verify every file opens and record its pixel dimensions.
3. Map both Olympic images to the Olympic publication and one image to each remaining publication.

### Task 2: Simplify publication cards

**Files:**
- Modify: `src/data/portfolio.ts`
- Modify: `src/components/portfolio/Timeline.tsx`
- Modify: `src/pages/Applications.tsx`
- Modify: `src/styles.css`

**Steps:**

1. Add optional visual metadata to publication timeline entries.
2. Add a publication presentation mode to the shared timeline.
3. Remove description and highlight prose only in publication mode.
4. Render the supplied images between the title and keyword chips.
5. Keep journal/conference, title, author role, keywords, and View Brief.
6. Give every card image the same CSS height while retaining its natural width.
7. Remove the Publications hero description sentence.

### Task 3: Recompose publication brief headers

**Files:**
- Modify: `src/data/caseStudies.ts`
- Modify: `src/pages/CaseStudyPage.tsx`
- Modify: `src/styles.css`

**Steps:**

1. Add keywords, authors, abstract text, and a Paper URL to each publication case study.
2. Preserve the existing project-brief layout for Finance-Agent.
3. For publication briefs, render keywords, full paper title, authors, and a Paper button first.
4. Render the assigned research visual or visual gallery next.
5. Put the one-sentence summary directly under the visual.
6. Render Abstract after the summary.
7. Leave Method / System and every section below it unchanged.

### Task 4: Verify and publish

**Files:**
- Verify: `src/data/portfolio.ts`
- Verify: `src/data/caseStudies.ts`
- Verify: `src/pages/Applications.tsx`
- Verify: `src/pages/CaseStudyPage.tsx`
- Verify: `src/styles.css`

**Steps:**

1. Run `npm run lint` and expect zero TypeScript errors.
2. Run `npm run build` and expect a successful Vite production build.
3. Inspect Publications and all five paper briefs at desktop and mobile widths.
4. Confirm the six images have equal displayed heights and retain full content.
5. Confirm every View Brief route opens and every available Paper button targets the paper source.
6. Commit only the website files for this change and push `main` so GitHub Pages redeploys.
