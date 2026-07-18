import { Code2, FileText, GitFork, Search } from "lucide-react";
import { Link } from "react-router-dom";
import routerBenchOverview from "../../assets/case-studies/routerbench-cost-aware-routing.png";
import financeAgentArchitecture from "../../assets/project-details/finance-agent-system-architecture.png";
import { routerBenchMini, selectedPublications, type PublicationSummary } from "../../data/siteStructure";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ZoomableImage } from "../media/ZoomableImage";
import "./SelectedResearchShowcase.css";

const publicationOrder = ["moe", "olympic"];

export function SelectedResearchShowcase() {
  const { language } = useLanguage();
  const localize = (text: { en: string; zh: string }) => bilingual(language, text.en, text.zh);
  const orderedPublications = publicationOrder.flatMap((id) => {
    const publication = selectedPublications.find((item) => item.id === id);
    return publication ? [publication] : [];
  });

  return (
    <div className="selected-research-showcase">
      <div className="home-publication-pair selected-research-grid">
        <article className={`home-publication-card is-routerbench is-${language}`}>
          <div className="status-pills selected-research-status">
            {routerBenchMini.status.map((status) => <span key={status.en}>{localize(status)}</span>)}
          </div>
          <h3>{bilingual(language, routerBenchMini.title.en, "面向多模态任务的成本感知模型路由研究")}</h3>
          <div className="home-publication-visual-slot">
            <ZoomableImage
              alt={bilingual(language, "Cost-aware model routing research for multimodal tasks.", "面向多模态任务的成本感知模型路由研究图。")}
              className="home-publication-visual"
              decoding="async"
              loading="lazy"
              src={routerBenchOverview}
            />
          </div>
          <p>{localize(routerBenchMini.question)}</p>
          <footer>
            <div className="featured-research-proof">
              <strong>{bilingual(language, "3 task types · 5 routing strategies · 2 evaluation sets", "3 类任务 · 5 种路由策略 · 2 组评测数据")}</strong>
            </div>
            <div className="home-publication-actions">
              <Link className="research-action-pill" to="/brief/routerbench-mini">
                <Search aria-hidden="true" size={15} /> DETAIL
              </Link>
              <a className="research-action-pill" href="https://github.com/ken-ab/routerbench-mini" rel="noreferrer" target="_blank">
                <GitFork aria-hidden="true" size={15} /> GITHUB
              </a>
            </div>
          </footer>
        </article>

        {orderedPublications.map((publication) => (
          <article
            className={`home-publication-card is-${publication.id} is-${language}`}
            key={publication.id}
          >
            <div className="status-pills selected-research-status">
              <span>{localize(publication.publicationType)}</span>
            </div>
            <h3>{language === "zh" ? publication.titleZh : publication.canonicalTitle}</h3>
            {publication.homeVisual ? (
              <div className="home-publication-visual-slot">
                <ZoomableImage
                  alt={localize(publication.homeVisual.alt)}
                  className="home-publication-visual"
                  decoding="async"
                  height={publication.homeVisual.height}
                  loading="lazy"
                  src={publication.homeVisual.src}
                  width={publication.homeVisual.width}
                />
              </div>
            ) : null}
            <p>{localize(publication.summary)}</p>
            <footer>
              <div className="featured-research-proof">
                <strong>{localize(publication.result)}</strong>
                {publication.homepageCitation ? <HomepageCitation citation={publication.homepageCitation} /> : null}
              </div>
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

        <article className={`home-publication-card is-finance-agent is-${language}`}>
          <div className="status-pills selected-research-status">
            <span>{bilingual(language, "Agent System", "Agent 系统")}</span>
          </div>
          <h3>{bilingual(language, "MCP-Based A-share Intelligent Analysis System", "基于 MCP 协议的 A 股智能分析系统")}</h3>
          <div className="home-publication-visual-slot">
            <ZoomableImage
              alt={bilingual(
                language,
                "Financial research multi-agent system with MCP tools, four specialist agents, evaluation, and bounded reflection.",
                "包含 MCP 工具、四个专业 Agent、评估器与有界反思的金融研究多智能体系统。",
              )}
              className="home-publication-visual"
              decoding="async"
              height={1024}
              loading="lazy"
              src={financeAgentArchitecture}
              width={1535}
            />
          </div>
          <p>
            {bilingual(
              language,
              "An MCP-based A-share research system that coordinates specialist agents and produces structured reports through evaluation and bounded reflection.",
              "基于 MCP 工具层协调基本面、技术面、估值与新闻 Agent，并通过评估与有界反思生成结构化报告。",
            )}
          </p>
          <footer>
            <div className="featured-research-proof">
              <strong>{bilingual(language, "4 specialist agents · 8 MCP tool families · 1 bounded reflection round", "4 个专业 Agent · 8 类 MCP 工具 · 1 轮最大反思")}</strong>
            </div>
            <div className="home-publication-actions">
              <a className="research-action-pill" href="https://github.com/ken-ab/Finance-Agent" rel="noreferrer" target="_blank">
                <GitFork aria-hidden="true" size={15} /> GITHUB
              </a>
              <a className="research-action-pill" href="https://github.com/ken-ab/Finance-Agent/tree/main" rel="noreferrer" target="_blank">
                <Code2 aria-hidden="true" size={15} /> CODE
              </a>
            </div>
          </footer>
        </article>
      </div>
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
