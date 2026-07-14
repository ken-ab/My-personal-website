import type { CSSProperties } from "react";
import { SectionHero } from "../components/portfolio/SectionHero";
import { SystemProjectCard } from "../components/portfolio/SystemProjectCard";
import { developmentProjects } from "../data/portfolio";
import { sortTimelineEntries } from "../utils/timelineSort";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function DevelopmentProjects() {
  const { language } = useLanguage();
  const sortedProjects = sortTimelineEntries(developmentProjects);

  return (
    <main className="page-shell page-enter">
      <SectionHero
        description={bilingual(language, "Systems I built from idea, architecture and data flow to usable product interfaces.", "从想法、架构和数据流，到可实际使用的产品界面。")}
        eyebrow={bilingual(language, "Development Projects", "开发项目")}
        title={bilingual(language, "Development Projects", "开发项目")}
        tone="systems"
      />

      <ol className="project-timeline tone-systems">
        {sortedProjects.map((project, index) => (
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
