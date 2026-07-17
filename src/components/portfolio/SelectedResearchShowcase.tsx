import { Code2, FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";
import routerBenchOverview from "../../assets/case-studies/routerbench-cost-aware-routing.png";
import { routerBenchMini, selectedPublications, type PublicationSummary } from "../../data/siteStructure";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ZoomableImage } from "../media/ZoomableImage";
import "./SelectedResearchShowcase.css";

export function SelectedResearchShowcase() {
  const { language } = useLanguage();
  const localize = (text: { en: string; zh: string }) => bilingual(language, text.en, text.zh);

  return (
    <div className="selected-research-showcase">
      <div className="home-publication-pair">
        {selectedPublications.map((publication) => (
          <article
            className={`home-publication-card is-${publication.id} is-${language}`}
            key={publication.id}
          >
            <div className="home-publication-meta">
              <span>{localize(publication.publicationType)}</span>
              {publication.homepageCitation ? <HomepageCitation citation={publication.homepageCitation} /> : null}
            </div>
            <h3>{language === "zh" ? publication.titleZh : publication.canonicalTitle}</h3>
            {publication.homeVisual ? (
              <div className="home-publication-visual-slot">
                <ZoomableImage
                  alt={localize(publication.homeVisual.alt)}
                  className="home-publication-visual"
                  decoding="async"
                  height={publication.homeVisual.height}
                  src={publication.homeVisual.src}
                  width={publication.homeVisual.width}
                />
              </div>
            ) : null}
            <p>{localize(publication.summary)}</p>
            <footer>
              <strong>{localize(publication.result)}</strong>
              <div className="home-publication-actions">
                <Link className="research-action-pill" to={`/brief/${publication.briefId}`}>
                  <Search aria-hidden="true" size={15} /> DETAIL
                </Link>
                {publication.paperUrl ? (
                  <a className="research-action-pill" href={publication.paperUrl} rel="noreferrer" target="_blank">
                    <FileText aria-hidden="true" size={15} /> PAPER
                  </a>
                ) : null}
              </div>
            </footer>
          </article>
        ))}
      </div>

      <article className="routerbench-home-card">
        <div className="routerbench-home-copy">
          <div className="status-pills">
            {routerBenchMini.status.map((status) => <span key={status.en}>{localize(status)}</span>)}
          </div>
          <h3>{bilingual(language, routerBenchMini.title.en, "面向多模态任务的成本感知模型路由研究")}</h3>
          <p>
            {bilingual(
              language,
              routerBenchMini.question.en,
              "在向 AI 提问时，能否根据问题难度动态选择不同能力和成本的模型，在尽量保持准确率的同时降低调用成本与响应延迟？",
            )}
          </p>
        </div>
        <div className="routerbench-home-result">
          <figure className="routerbench-home-visual">
            <ZoomableImage
              alt={bilingual(
                language,
                "Cost-aware model routing research for multimodal tasks.",
                "面向多模态任务的成本感知模型路由研究图。",
              )}
              decoding="async"
              loading="lazy"
              src={routerBenchOverview}
            />
          </figure>
          <div className="routerbench-home-actions">
            <Link className="research-action-pill" to="/brief/routerbench-mini">
              <Search aria-hidden="true" size={15} /> DETAIL
            </Link>
            <a className="research-action-pill" href="https://github.com/ken-ab/routerbench-mini" rel="noreferrer" target="_blank">
              <Code2 aria-hidden="true" size={15} /> GITHUB
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function HomepageCitation({ citation }: { citation: NonNullable<PublicationSummary["homepageCitation"]> }) {
  if (citation.kind === "conference") {
    return <cite className="home-publication-citation"><strong>{citation.name}</strong></cite>;
  }

  return (
    <cite className="home-publication-citation">
      <em>{citation.journal}</em>{" "}
      <strong>{citation.year}</strong>,{" "}
      <em>{citation.volume}</em>,{" "}
      {citation.article}
    </cite>
  );
}
