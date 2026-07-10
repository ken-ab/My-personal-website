import { Navigate, useParams } from "react-router-dom";
import { OlympicMethodRoute } from "../components/case-study/OlympicMethodRoute";
import { ActionButton } from "../components/portfolio/ActionButton";
import { getCaseStudy } from "../data/caseStudies";

export function CaseStudyPage() {
  const { id } = useParams();
  const study = getCaseStudy(id);

  if (!study) {
    return <Navigate replace to="/publications" />;
  }

  return (
    <main className={`page-shell case-study-page tone-${study.tone} page-enter`}>
      <section className="case-hero">
        <div>
          <p className="section-eyebrow">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="case-subtitle">{study.subtitle}</p>
        </div>
        <aside className="case-meta-card" aria-label="Case study metadata">
          <span>{study.period}</span>
          <strong>{study.role}</strong>
          <p>Project brief for fast RA screening and technical follow-up.</p>
        </aside>
      </section>

      <section className="case-summary-card">
        <span>One-line summary</span>
        <p>{study.oneLineSummary}</p>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <p className="section-eyebrow">Visual Abstract</p>
          <h2>See the work before reading the paper</h2>
        </div>

        {study.visual ? (
          <figure className="case-visual-card">
            <img alt={study.visual.alt} src={study.visual.src} />
            <figcaption>{study.visual.caption}</figcaption>
          </figure>
        ) : (
          <MethodDiagram compact steps={study.methodSteps} />
        )}
      </section>

      <section className="case-section case-method-section">
        <div className="case-section-heading">
          <p className="section-eyebrow">Method / System</p>
          <h2>{study.methodTitle}</h2>
          <p>{study.methodLead}</p>
        </div>
        {study.id === "olympic-prediction" ? (
          <OlympicMethodRoute />
        ) : (
          <MethodDiagram steps={study.methodSteps} />
        )}
      </section>

      <section className="case-evidence-grid">
        <EvidenceBlock items={study.contribution} title="My Contribution" />
        <EvidenceBlock items={study.takeaways} title="Key Takeaways" />
      </section>

      <section className="case-links-card">
        <div>
          <p className="section-eyebrow">Links</p>
          <h2>Continue from the brief</h2>
        </div>
        <div className="inline-actions">
          {study.links.map((link, index) => (
            <ActionButton external={link.external} href={link.href} key={link.label} variant={index === 0 ? "primary" : "secondary"}>
              {link.label}
            </ActionButton>
          ))}
        </div>
      </section>
    </main>
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
