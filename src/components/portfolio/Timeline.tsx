import type { CSSProperties } from "react";
import type { TimelineEntry, Tone } from "../../data/portfolio";
import { sortTimelineEntries } from "../../utils/timelineSort";
import { timelineZh } from "../../i18n/content";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ActionButton } from "./ActionButton";
import { TagList } from "./TagList";

type TimelineProps = {
  items: TimelineEntry[];
  presentation?: "default" | "publications" | "projects";
  tone: Tone;
};

export function Timeline({ items, presentation = "default", tone }: TimelineProps) {
  const { language } = useLanguage();
  const sortedItems = sortTimelineEntries(items);
  const isPublications = presentation === "publications";
  const isProjects = presentation === "projects";

  return (
    <ol className={`timeline-list tone-${tone}${isPublications ? " is-publications" : ""}${isProjects ? " is-projects" : ""}`}>
      {sortedItems.map((item, index) => {
        const localized = timelineZh[item.id];
        const translatedFacts = localized?.factLabels;
        return (
        <li
          className={`timeline-item is-${item.emphasis ?? "medium"}`}
          key={item.id}
          style={{ "--item-delay": `${index * 70}ms` } as CSSProperties}
        >
          <div className="timeline-date">{item.period}</div>
          <article className="timeline-card">
            <div className="timeline-card-top">
              <span>{language === "zh" && localized?.type ? localized.type : item.type}</span>
              {item.role ? <strong>{language === "zh" && localized?.role ? localized.role : item.role}</strong> : null}
            </div>
            <h2>{item.title}</h2>
            {language === "zh" && item.chineseTitle ? <p className="timeline-chinese-title">{item.chineseTitle}</p> : null}
            {isPublications && item.cardVisuals?.length ? (
              <div
                className={`publication-visual-strip${item.cardVisuals.length > 1 ? " has-multiple" : ""}`}
                aria-label={`${item.title} research visuals`}
              >
                {item.cardVisuals.map((visual) => (
                  <figure className="publication-card-visual" key={visual.src}>
                    <img
                      alt={visual.alt}
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "auto"}
                      height={visual.height}
                      loading="eager"
                      src={visual.src}
                      width={visual.width}
                    />
                  </figure>
                ))}
              </div>
            ) : null}

            {isProjects && item.timelineShowcase ? (
              <section className="timeline-project-showcase" aria-label={`${item.title} project evidence`}>
                <figure>
                  <img
                    alt={item.timelineShowcase.visual.alt}
                    decoding="async"
                    height={item.timelineShowcase.visual.height}
                    loading="eager"
                    src={item.timelineShowcase.visual.src}
                    width={item.timelineShowcase.visual.width}
                  />
                </figure>
                <div className="timeline-project-facts">
                  {item.timelineShowcase.facts.map((fact, factIndex) => (
                    <div key={fact.label}>
                      <strong>{fact.value}</strong>
                      <span>{language === "zh" && translatedFacts?.[factIndex] ? translatedFacts[factIndex] : fact.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {isPublications ? null : <p className="timeline-description">{language === "zh" && localized?.description ? localized.description : item.description}</p>}

            {!isPublications && item.highlights?.length ? (
              <ul className="highlight-list">
                {(language === "zh" && localized?.highlights ? localized.highlights : item.highlights).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}

            <TagList tags={item.tags} />

            {item.actions?.length ? (
              <div className="inline-actions">
                {item.actions.filter((action) => !isPublications || action.label === "View Brief").map((action) => (
                  <ActionButton external={action.external} href={action.href} key={action.label} variant="quiet">
                    {action.label === "View Brief" || action.label === "View Detail"
                      ? bilingual(language, action.label, "查看详情")
                      : bilingual(language, action.label, action.label === "Paper" ? "论文" : action.label)}
                  </ActionButton>
                ))}
              </div>
            ) : null}
          </article>
        </li>
        );
      })}
    </ol>
  );
}
