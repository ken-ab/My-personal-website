import { FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { SelectedResearchShowcase } from "../components/portfolio/SelectedResearchShowcase";
import { additionalPublications } from "../data/siteStructure";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Research() {
  const { language } = useLanguage();
  const localize = (text: { en: string; zh: string }) => bilingual(language, text.en, text.zh);

  return (
    <main className="page-shell research-page-v2 page-enter">
      <section className="secondary-page-title" aria-labelledby="research-title">
        <h1 id="research-title">{bilingual(language, "Research & Publications", "研究与论文")}</h1>
      </section>

      <section className="selected-publications-section" aria-labelledby="selected-publications-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow" id="selected-publications-title">{bilingual(language, "01 · Selected Research", "01 · 精选研究")}</p>
          </div>
        </header>
        <SelectedResearchShowcase showFinance={false} />
      </section>

      <section className="additional-publications-section" aria-labelledby="additional-publications-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow" id="additional-publications-title">{bilingual(language, "02 · Additional Publications", "02 · 其他论文")}</p>
          </div>
        </header>
        <div className="additional-publication-list">
          {additionalPublications.map((publication) => (
            <article key={publication.id}>
              {publication.homeVisual ? (
                <figure className="additional-visual">
                  <img
                    alt={localize(publication.homeVisual.alt)}
                    decoding="async"
                    height={publication.homeVisual.height}
                    loading="lazy"
                    src={publication.homeVisual.src}
                    width={publication.homeVisual.width}
                  />
                </figure>
              ) : null}
              <div className="additional-main">
                <p>{localize(publication.publicationType)} · {localize(publication.authorRole)}</p>
                <h3>{language === "zh" ? publication.titleZh : publication.canonicalTitle}</h3>
                <small>{publication.venue}</small>
              </div>
              <p className="additional-summary">{localize(publication.summary)}</p>
              <div className="additional-actions">
                <Link className="research-action-pill" to={`/brief/${publication.briefId}`} aria-label={`${publication.canonicalTitle} detail`}><Search aria-hidden="true" size={15} /> DETAIL</Link>
                {publication.paperUrl ? <a className="research-action-pill" href={publication.paperUrl} rel="noreferrer" target="_blank" aria-label={`${publication.canonicalTitle} paper`}><FileText aria-hidden="true" size={15} /> PAPER</a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
