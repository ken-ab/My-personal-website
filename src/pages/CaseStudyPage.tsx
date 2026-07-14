import { Navigate, useParams } from "react-router-dom";
import { FinanceAgentDetail } from "../components/case-study/FinanceAgentDetail";
import { OlympicMethodRoute } from "../components/case-study/OlympicMethodRoute";
import { MiniProgramDetail } from "../components/case-study/MiniProgramDetail";
import { McmProjectDetail } from "../components/case-study/McmProjectDetail";
import { ResearchMethodMap } from "../components/case-study/ResearchMethodMaps";
import { ActionButton } from "../components/portfolio/ActionButton";
import { getCaseStudy } from "../data/caseStudies";
import type { AgentProjectCaseStudy, PublicationCaseStudy } from "../data/caseStudies";
import { publicationZh } from "../i18n/content";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function CaseStudyPage() {
  const { id } = useParams();
  const study = getCaseStudy(id);
  const { language } = useLanguage();

  if (!study) {
    return <Navigate replace to="/publications" />;
  }

  if (study.kind === "mini-program") {
    return (
      <main className={`page-shell case-study-page mini-program-page tone-${study.tone} page-enter`}>
        <MiniProgramDetail study={study} />
      </main>
    );
  }

  if (study.kind === "competition-project") {
    return (
      <main className={`page-shell case-study-page mcm-project-page tone-${study.tone} page-enter`}>
        <McmProjectDetail study={study} />
      </main>
    );
  }

  if (study.kind === "agent-project" && study.visualization === "finance-agent") {
    return (
      <main className={`page-shell case-study-page finance-agent-page tone-${study.tone} page-enter`}>
        <FinanceAgentDetail study={study} />
      </main>
    );
  }

  const methodVisualization = study.kind === "publication" ? study.methodVisualization : undefined;
  const localizedPublication = study.kind === "publication" && language === "zh" ? publicationZh[study.id] : undefined;

  return (
    <main className={`page-shell case-study-page tone-${study.tone} page-enter`}>
      {study.kind === "publication" ? <PublicationIntro study={study} /> : <ProjectIntro study={study} />}

      <section className="case-section case-method-section">
        <div className="case-section-heading is-method-only">
          <p className="section-eyebrow">{bilingual(language, "Method / System", "方法 / 系统")}</p>
        </div>
        {methodVisualization === "olympic" ? (
          <OlympicMethodRoute />
        ) : methodVisualization ? (
          <ResearchMethodMap kind={methodVisualization} />
        ) : (
          <MethodDiagram steps={study.methodSteps} />
        )}
      </section>

      <section className="case-evidence-grid">
        <EvidenceBlock items={localizedPublication?.problem ?? study.problemAddressed} title={bilingual(language, "Problem Addressed", "解决的问题")} />
        <EvidenceBlock items={localizedPublication?.innovations ?? study.innovations} title={bilingual(language, "Innovation", "创新点")} />
      </section>

    </main>
  );
}

function splitAbstractIntoParagraphs(text: string, breakAfter: string[] = []) {
  if (breakAfter.length === 0) return [text];

  const paragraphs: string[] = [];
  let remaining = text;

  breakAfter.forEach((marker) => {
    const markerIndex = remaining.indexOf(marker);
    if (markerIndex === -1) return;

    const paragraphEnd = markerIndex + marker.length;
    paragraphs.push(remaining.slice(0, paragraphEnd).trim());
    remaining = remaining.slice(paragraphEnd).trim();
  });

  if (remaining) paragraphs.push(remaining);
  return paragraphs;
}

function PublicationIntro({ study }: { study: PublicationCaseStudy }) {
  const { language } = useLanguage();
  const localized = language === "zh" ? publicationZh[study.id] : undefined;
  const abstractParagraphs = splitAbstractIntoParagraphs(
    study.abstract ?? "",
    study.abstractParagraphBreaks,
  );

  return (
    <>
      <section className="paper-brief-hero" aria-labelledby="paper-brief-title">
        <p className="paper-keywords">{study.keywords?.join(" · ")}</p>
        <h1 id="paper-brief-title">{study.title}</h1>
        <p className="paper-authors" aria-label="Paper authors">
          {study.authors?.map((author, index) => (
            <span className={author === "Zhenkai Zhang" ? "is-owner" : ""} key={author}>
              {index ? <span aria-hidden="true">, </span> : null}
              {author}
              {study.correspondingAuthors?.includes(author) ? (
                <sup className="corresponding-author-mark" aria-label="corresponding author">*</sup>
              ) : null}
            </span>
          ))}
        </p>
        {study.paperUrl ? (
          <div className="paper-primary-action">
            <ActionButton external href={study.paperUrl} variant="primary">
              {bilingual(language, "Paper", "论文")}
            </ActionButton>
          </div>
        ) : null}
      </section>

      <section className="paper-visual-section" aria-label="Paper research overview">
        <div className={`paper-visual-gallery${study.visuals && study.visuals.length > 1 ? " has-multiple" : ""}`}>
          {study.visuals?.map((visual) => (
            <figure className="paper-visual-frame" key={visual.src}>
              <img alt={visual.alt} decoding="async" loading="eager" src={visual.src} />
            </figure>
          ))}
        </div>
        <p className="paper-visual-summary">{localized?.summary ?? study.oneLineSummary}</p>
      </section>

      <section className="paper-abstract-section" aria-labelledby="paper-abstract-title">
        <h2 id="paper-abstract-title">{bilingual(language, "Abstract", "摘要")}</h2>
        {abstractParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </>
  );
}

function ProjectIntro({ study }: { study: AgentProjectCaseStudy }) {
  const { language } = useLanguage();
  return (
    <>
      <section className="case-hero">
        <div>
          <p className="section-eyebrow">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="case-subtitle">{study.subtitle}</p>
        </div>
        <aside className="case-meta-card" aria-label="Case study metadata">
          <span>{study.period}</span>
          <strong>{study.role}</strong>
          <p>{bilingual(language, "Project brief for fast RA screening and technical follow-up.", "用于快速了解技术能力与研究匹配度的项目简报。")}</p>
        </aside>
      </section>

      <section className="case-summary-card">
        <span>{bilingual(language, "One-line summary", "一句话概述")}</span>
        <p>{study.oneLineSummary}</p>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <p className="section-eyebrow">{bilingual(language, "Visual Abstract", "可视化概览")}</p>
          <h2>{bilingual(language, "See the work before reading the project details", "先看懂项目，再进入技术细节")}</h2>
        </div>

        <MethodDiagram compact steps={study.methodSteps} />
      </section>
    </>
  );
}

type MethodDiagramProps = {
  compact?: boolean;
  steps: Array<{
    label: string;
    title: string;
    body: string;
  }>;
};

function MethodDiagram({ compact = false, steps }: MethodDiagramProps) {
  return (
    <div className={compact ? "method-diagram is-compact" : "method-diagram"} aria-label="Method flow diagram">
      {steps.map((step, index) => (
        <article className="method-node" key={step.label}>
          <span className="method-index">{step.label}</span>
          <h3>{step.title}</h3>
          {compact ? null : <p>{step.body}</p>}
          {index < steps.length - 1 ? <span className="method-arrow" aria-hidden="true" /> : null}
        </article>
      ))}
    </div>
  );
}

type EvidenceBlockProps = {
  title: string;
  items: string[];
};

function EvidenceBlock({ title, items }: EvidenceBlockProps) {
  return (
    <section className="case-evidence-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
