import type { CSSProperties } from "react";
import { SectionHero } from "../components/portfolio/SectionHero";
import { SystemProjectCard } from "../components/portfolio/SystemProjectCard";
import { developmentProjects } from "../data/portfolio";

export function DevelopmentProjects() {
  return (
    <main className="page-shell page-enter">
      <SectionHero
        description="Systems I built from idea, architecture and data flow to usable product interfaces."
        eyebrow="Development Projects"
        title="Development Projects"
        tone="systems"
      />

      <ol className="project-timeline tone-systems">
        {developmentProjects.map((project, index) => (
          <li
            className={`project-timeline-item is-${project.emphasis ?? "medium"}`}
            key={project.id}
            style={{ "--item-delay": `${index * 80}ms` } as CSSProperties}
          >
            <div className="timeline-date">{project.period}</div>
            <SystemProjectCard project={project} />
          </li>
        ))}
      </ol>
    </main>
  );
}
