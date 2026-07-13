import type { CSSProperties } from "react";
import type { TimelineEntry, Tone } from "../../data/portfolio";
import { sortTimelineEntries } from "../../utils/timelineSort";
import { ActionButton } from "./ActionButton";
import { TagList } from "./TagList";

type TimelineProps = {
  items: TimelineEntry[];
  presentation?: "default" | "publications";
  tone: Tone;
};

export function Timeline({ items, presentation = "default", tone }: TimelineProps) {
  const sortedItems = sortTimelineEntries(items);
  const isPublications = presentation === "publications";

  return (
    <ol className={`timeline-list tone-${tone}${isPublications ? " is-publications" : ""}`}>
      {sortedItems.map((item, index) => (
        <li
          className={`timeline-item is-${item.emphasis ?? "medium"}`}
          key={item.id}
          style={{ "--item-delay": `${index * 70}ms` } as CSSProperties}
        >
          <div className="timeline-date">{item.period}</div>
          <article className="timeline-card">
            <div className="timeline-card-top">
              <span>{item.type}</span>
              {item.role ? <strong>{item.role}</strong> : null}
            </div>
            <h2>{item.title}</h2>
            {item.chineseTitle ? <p className="timeline-chinese-title">{item.chineseTitle}</p> : null}
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

            {isPublications ? null : <p className="timeline-description">{item.description}</p>}

            {!isPublications && item.highlights?.length ? (
              <ul className="highlight-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}

            <TagList tags={item.tags} />

            {item.actions?.length ? (
              <div className="inline-actions">
                {item.actions.filter((action) => !isPublications || action.label === "View Brief").map((action) => (
                  <ActionButton external={action.external} href={action.href} key={action.label} variant="quiet">
                    {action.label}
                  </ActionButton>
                ))}
              </div>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
