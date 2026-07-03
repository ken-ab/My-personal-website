import type { CSSProperties } from "react";
import type { TimelineEntry, Tone } from "../../data/portfolio";
import { ActionButton } from "./ActionButton";
import { TagList } from "./TagList";

type TimelineProps = {
  items: TimelineEntry[];
  tone: Tone;
};

export function Timeline({ items, tone }: TimelineProps) {
  return (
    <ol className={`timeline-list tone-${tone}`}>
      {items.map((item, index) => (
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
            <p className="timeline-description">{item.description}</p>

            {item.highlights?.length ? (
              <ul className="highlight-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}

            <TagList tags={item.tags} />

            {item.actions?.length ? (
              <div className="inline-actions">
                {item.actions.map((action) => (
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
