import type { DevelopmentProject } from "../../data/portfolio";
import { ActionButton } from "./ActionButton";
import { FinanceAgentProjectShowcase } from "./FinanceAgentProjectShowcase";
import { MiniProgramProjectShowcase } from "./MiniProgramProjectShowcase";
import { TagList } from "./TagList";
import { developmentZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

type SystemProjectCardProps = {
  project: DevelopmentProject;
};

const sectionLabels = [
  ["Problem", "problem"],
  ["Architecture", "architecture"],
  ["My Work", "work"],
  ["Outcome", "outcome"],
] as const;

export function SystemProjectCard({ project }: SystemProjectCardProps) {
  const { language } = useLanguage();
  const localized = developmentZh[project.id];
  const featured = project.emphasis === "featured";

  return (
    <article className={featured ? "system-card is-featured" : "system-card"}>
      <div className="system-card-header">
        <div>
          <span className="system-period">{project.period}</span>
          <h2>{project.title}</h2>
          {language === "zh" && project.chineseTitle ? <p className="timeline-chinese-title">{project.chineseTitle}</p> : null}
        </div>
        <p>{language === "zh" && localized?.type ? localized.type : project.type}</p>
      </div>

      <p className="system-description">{language === "zh" && localized?.description ? localized.description : project.description}</p>

      {project.showcase?.kind === "mini-program" ? (
        <MiniProgramProjectShowcase projectId={project.id} showcase={project.showcase} title={project.title} />
      ) : project.showcase?.kind === "agent-system" ? (
        <FinanceAgentProjectShowcase projectId={project.id} showcase={project.showcase} title={project.title} />
      ) : null}

      {!project.showcase && project.sections ? (
        <div className="system-modules">
          {sectionLabels.map(([label, key]) => (
            <section className="system-module" key={key}>
              <h3>{bilingual(language, label, label === "Problem" ? "问题" : label === "Architecture" ? "架构" : label === "My Work" ? "负责内容" : "结果")}</h3>
              <p>{project.sections![key]}</p>
            </section>
          ))}
        </div>
      ) : null}

      {!project.showcase ? (
        <>
          <ul className="highlight-list system-highlights">
            {project.highlights?.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <TagList tags={project.tags} />
        </>
      ) : null}

      {project.actions?.length ? (
        <div className="inline-actions">
          {project.actions.map((action) => (
            <ActionButton external={action.external} href={action.href} key={action.label} variant="quiet">
              {action.label === "View Detail" || action.label === "Demo"
                ? bilingual(language, action.label, "查看详情")
                : action.label}
            </ActionButton>
          ))}
        </div>
      ) : null}
    </article>
  );
}
