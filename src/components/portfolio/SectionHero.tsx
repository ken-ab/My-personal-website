import type { Tone } from "../../data/portfolio";

type SectionHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone: Tone;
};

export function SectionHero({ eyebrow, title, description, tone }: SectionHeroProps) {
  return (
    <section className={`section-hero tone-${tone}`} aria-labelledby={`${tone}-page-title`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <div className={description ? "section-hero-grid has-description" : "section-hero-grid"}>
        <h1 id={`${tone}-page-title`}>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </section>
  );
}
