# Publication layout correction

## Goal

Make publication cards and paper briefs read as one continuous editorial page instead of placing research figures inside separate white, scrollable containers.

## Layout decisions

- A single publication figure is left-aligned with the surrounding text.
- Two Olympic figures share the available content width in a fixed two-column layout; neither card nor detail page uses horizontal scrolling.
- Figure wrappers remain transparent and borderless so the existing paper background stays visible.
- Paper-brief typography is reduced, with the title, authors, abstract, and section spacing kept subordinate to the research figure.
- The method header displays only `Method / System`; the per-paper descriptive subtitle is removed.
- The bottom `Links / Continue from the brief` block is removed from every brief.

## Content decisions

- Abstracts are copied verbatim from the five locally supplied papers.
- Corresponding authors receive a superscript asterisk according to the user-provided author list.
- The Olympic route uses α1–α4 consistently, places the supplied model-comparison radar chart in the space between MPXG and FMPM, and ends both finding routes with concise quantitative conclusions.

## Verification

- Run lint and production build.
- Inspect the publications page, an Olympic brief, and a single-image brief at desktop and mobile widths.
- Push the verified main branch so GitHub Pages can publish the updated site.

## Follow-up: Olympic brief refinement

- Remove the model-comparison caption so the radar figure carries the evidence directly.
- Scale the radar figure to its natural aspect ratio and make the callout border match the image bounds exactly.
- Preserve the published abstract verbatim while breaking it into five paragraphs after the four user-marked sentences.
- Reduce the shared publication-detail title size so long titles settle into roughly two to three desktop lines.
